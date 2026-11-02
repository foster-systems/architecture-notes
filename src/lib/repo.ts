import { execFileSync } from 'node:child_process';
import type { CollectionEntry } from 'astro:content';
import { repo } from '../../site.config.mjs';
import { findSection, tree } from './tree.mjs';

export const github = `https://github.com/${repo}`;
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export type Entry = CollectionEntry<'docs'>;

export const lastChanged = (file: string) => {
	try {
		return execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim() || undefined;
	} catch {
		return undefined;
	}
};

export const notes = tree();
export const section = (id: string) => findSection(notes, id);
/** Sections above an entry, outermost first. */
export const ancestors = (id: string) =>
	id
		.split('/')
		.slice(0, -1)
		.map((_, i, parts) => section(parts.slice(0, i + 1).join('/')))
		.filter((s) => s !== undefined);
