// The folder tree under notes/ is the site structure. Used by the pages, llms.txt and README.
// A folder is a section; its optional index.md gives title, description and order. Every other .md file is a page.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { slug as githubSlug } from 'github-slugger';
import { parse } from 'yaml';

const root = 'notes';

const frontMatter = (file) => parse(readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') ?? {};
const humanize = (name) => name.replace(/[-_]+/g, ' ').replace(/^./, (c) => c.toUpperCase());
// Same id Astro's glob loader gives the entry, so links match routes.
const idOf = (path, data) => data.slug ?? path.split('/').map(githubSlug).join('/').replace(/(^|\/)index$/, '');
const byOrder = (a, b) => a.order - b.order || a.title.localeCompare(b.title);

function page(path, file) {
	const data = frontMatter(file);
	return {
		id: idOf(path, data),
		file,
		title: data.title ?? humanize(path.split('/').pop()),
		description: data.description,
		order: data.sidebar?.order ?? Infinity,
		sources: data.sources?.length ?? 0,
		reviewed: data.reviewed && new Date(data.reviewed).toISOString().slice(0, 10),
	};
}

function section(dir) {
	const path = dir.slice(root.length + 1);
	const index = `${dir}/index.md`;
	const hasIndex = path !== '' && existsSync(index);
	const head = hasIndex ? page(`${path}/index`, index) : { id: path.split('/').map(githubSlug).join('/'), title: humanize(path.split('/').pop() ?? ''), order: Infinity };
	const entries = readdirSync(dir, { withFileTypes: true }).filter((e) => !/^[._]/.test(e.name));
	const pages = entries
		.filter((e) => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
		.map((e) => page(`${path ? path + '/' : ''}${e.name.slice(0, -3)}`, `${dir}/${e.name}`))
		.sort(byOrder);
	const sections = entries
		.filter((e) => e.isDirectory())
		.map((e) => section(`${dir}/${e.name}`))
		.filter((s) => s.hasIndex || s.pages.length || s.sections.length)
		.sort(byOrder);
	return { ...head, file: hasIndex ? index : undefined, hasIndex, pages, sections };
}

export const tree = () => section(root);

export function findSection(node, id) {
	if (node.id === id) return node;
	for (const s of node.sections) {
		const found = findSection(s, id);
		if (found) return found;
	}
}
