import type { APIContext } from 'astro';
import { github, notes, url } from '../lib/repo';

type Node = (typeof notes)['sections'][number];

export function GET(context: APIContext) {
	const abs = (path: string) => new URL(url(path), context.site).href;
	const lines = [
		'# Shelf',
		'',
		'> A curated reading list for building and running a software company, from the first prototype to scale-up: technology, product, law and team. By Przemek Łuniewski. Each topic links 5 to 7 sources, each with a short note on what it is. Scope and selection criteria: ' + abs('about.md') + '.',
		'',
		`Every link below returns Markdown. Source repo: ${github}.`,
		'A source with an `agents` URL has an agent-readable copy (repo or Markdown) of its site.',
		'',
		...notes.pages.map((p) => `- [${p.title}](${abs(`${p.id}.md`)}): ${p.description ?? ''}`),
	];
	const walk = (node: Node, depth: number) => {
		lines.push('', `${'#'.repeat(depth)} ${node.title}`, '');
		if (node.description) lines.push(node.description, '');
		for (const p of node.pages) lines.push(`- [${p.title}](${abs(`${p.id}.md`)}): ${p.description ?? ''}`);
		for (const s of node.sections) walk(s, Math.min(depth + 1, 6));
	};
	for (const s of notes.sections) walk(s, 2);
	return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
