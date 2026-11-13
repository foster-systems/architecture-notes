import { execFileSync } from 'node:child_process';
import type { CollectionEntry } from 'astro:content';
import { repo } from '../../site.config.mjs';
import { findSection, tree } from './tree.mjs';

export const github = `https://github.com/${repo}`;
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export type Entry = CollectionEntry<'notes'>;

export const lastChanged = (file: string) => {
	try {
		return execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim() || undefined;
	} catch {
		return undefined;
	}
};

export const notes = tree();
export type Section = (typeof notes)['sections'][number];
export type Topic = Section['pages'][number];
export const section = (id: string): Section | undefined => findSection(notes, id);
/** Sections above an entry, outermost first. */
export const ancestors = (id: string) =>
	id
		.split('/')
		.slice(0, -1)
		.map((_, i, parts) => section(parts.slice(0, i + 1).join('/')))
		.filter((s) => s !== undefined);

export const two = (n: number) => String(n).padStart(2, '0');
/** A section's topics, nested sections included. */
export const topicsOf = (s: Section): Topic[] => [...s.pages, ...s.sections.flatMap(topicsOf)];
/** A section without an index page is reached at its place on the home page. */
export const sectionUrl = (s: Section) => url(s.hasIndex ? `${s.id}/` : `#${s.id}`);
const within = (s: Section): { id: string }[] => [s, ...s.pages, ...s.sections.flatMap(within)];
// A section's hue is its place on the shelf, turned by the golden angle from the accent's hue: neighbours differ, and a section added last leaves the others as they are.
const hues = new Map(notes.sections.flatMap((s, i) => within(s).map((n) => [n.id, Math.round(275 + i * 137.508) % 360] as const)));
export const hueOf = (id: string) => hues.get(id);
/** The inline style that gives an element its section's colour. */
export const tone = (id: string) => (hues.has(id) ? `--hue: ${hueOf(id)}` : undefined);
const topics = notes.sections.flatMap(topicsOf);
export const stats = {
	sections: notes.sections.length,
	topics: topics.length,
	sources: topics.reduce((n, t) => n + t.sources, 0),
};

const entities: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const escape = (text: string) => text.replace(/[&<>"]/g, (c) => entities[c]);
/** Straight quotes and apostrophes set as typographic ones. */
export const typeset = (text: string) =>
	text
		.replace(/"([^"]*)"/g, '“$1”')
		.replace(/(^|[\s(“])'([^']*)'(?=$|[\s).,;:!?”])/g, '$1‘$2’')
		.replace(/'/g, '’');
/** A summary as HTML: escaped and typeset, with backtick spans as inline code. */
export const inline = (text: string) =>
	text
		.split(/(`[^`]+`)/)
		.map((part) => (part.startsWith('`') ? `<code>${escape(part.slice(1, -1))}</code>` : escape(typeset(part))))
		.join('');
