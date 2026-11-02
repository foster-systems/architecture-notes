// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { repo, site, base } from './site.config.mjs';

const sections = readdirSync('notes', { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => {
		const index = `notes/${d.name}/index.md`;
		const text = existsSync(index) ? readFileSync(index, 'utf8') : '';
		const order = Number(text.match(/^\s+order:\s*(\d+)/m)?.[1] ?? 99);
		const label = text.match(/^title:\s*(.+)$/m)?.[1] ?? d.name;
		return { order, label, items: [{ autogenerate: { directory: d.name } }] };
	})
	.sort((a, b) => a.order - b.order)
	.map(({ order, ...group }) => group);

export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
			title: 'Architecture notes',
			description:
				'Solution architecture with AI agents: curated sources, each with a note, and a take on each topic. By Przemek Łuniewski.',
			social: [{ icon: 'github', label: 'GitHub', href: `https://github.com/${repo}` }],
			editLink: { baseUrl: `https://github.com/${repo}/edit/main/` },
			head: [
				{ tag: 'link', attrs: { rel: 'alternate', type: 'application/rss+xml', title: 'Posts', href: `${base.replace(/\/$/, "")}/posts/rss.xml` } },
			],
			customCss: ['./src/styles.css'],
			components: { MarkdownContent: './src/components/MarkdownContent.astro' },
			sidebar: [
				{ label: 'Start here', items: [{ label: 'Home', link: '/' }, { label: 'About', slug: 'about' }, { label: 'Posts', link: '/posts/' }] },
				...sections,
			],
		}),
	],
});
