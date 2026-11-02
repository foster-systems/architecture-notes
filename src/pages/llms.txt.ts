import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { github, sections, slug, topicsIn, url } from '../lib/repo';

export async function GET(context: APIContext) {
	const abs = (path: string) => new URL(url(path), context.site).href;
	const about = (await getCollection('docs', (e) => e.id === 'about'))[0];
	const lines = [
		'# Architecture notes',
		'',
		'> Solution architecture with AI agents, by Przemek Łuniewski. Each topic links 5–7 sources, each with his note, plus his take.',
		'',
		`Every link below returns Markdown. Source repo: ${github}. About: ${about ? abs('about.md') : ''}`,
		'A source with an `agents` URL has an agent-readable copy (repo or Markdown) of its site.',
	];
	for (const s of await sections()) {
		lines.push('', `## ${s.data.title}`, '', s.data.description ?? '', '');
		for (const t of await topicsIn(slug(s))) lines.push(`- [${t.data.title}](${abs(`${slug(t)}.md`)}): ${t.data.description}`);
	}
	return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
