import { readFileSync } from 'node:fs';
import { getCollection } from 'astro:content';
import { slug, type Topic } from '../lib/repo';

export async function getStaticPaths() {
	return (await getCollection('docs')).filter((e) => e.id !== 'index').map((entry) => ({ params: { slug: slug(entry) }, props: { entry } }));
}

export function GET({ props }: { props: { entry: Topic } }) {
	return new Response(readFileSync(props.entry.filePath!, 'utf8'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
