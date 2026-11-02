import { execFileSync } from 'node:child_process';
import { getCollection, type CollectionEntry } from 'astro:content';
import { repo } from '../../site.config.mjs';

export const github = `https://github.com/${repo}`;
export const raw = `https://raw.githubusercontent.com/${repo}/main`;
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

const git = (...args: string[]) => {
	try {
		return execFileSync('git', args, { encoding: 'utf8' }).trim();
	} catch {
		return '';
	}
};

export const lastChanged = (file: string) => {
	const t = git('log', '-1', '--format=%cs', '--', file);
	return t || undefined;
};

export const addedIn = (file: string) => git('log', '--diff-filter=A', '--format=%H', '-1', '--', file) || undefined;

export type Topic = CollectionEntry<'docs'>;
export type Post = CollectionEntry<'posts'>;

const parts = (e: Topic) => (e.filePath ?? '').split('/');
export const sectionOf = (e: Topic) => parts(e)[1];
export const isSection = (e: Topic) => parts(e).length === 3 && parts(e)[2] === 'index.md';
export const isTopic = (e: Topic) => parts(e).length === 3 && parts(e)[2] !== 'index.md';
export const slug = (e: Topic) => e.id.replace(/\/index$/, '');

export async function sections() {
	return (await getCollection('docs', isSection)).sort((a, b) => (a.data.sidebar.order ?? 99) - (b.data.sidebar.order ?? 99));
}

export async function topicsIn(section: string) {
	return (await getCollection('docs', (e) => isTopic(e) && sectionOf(e) === section)).sort((a, b) =>
		a.data.title.localeCompare(b.data.title),
	);
}

export const postDate = (p: Post) => p.id.slice(0, 10);

export async function posts() {
	return (await getCollection('posts')).sort((a, b) => b.id.localeCompare(a.id));
}
