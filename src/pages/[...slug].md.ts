import { readFileSync } from 'node:fs';
import { getCollection } from 'astro:content';
import type { Entry } from '../lib/repo';

export async function getStaticPaths() {
	return (await getCollection('notes')).map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

export function GET({ props }: { props: { entry: Entry } }) {
	return new Response(readFileSync(props.entry.filePath!, 'utf8'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
