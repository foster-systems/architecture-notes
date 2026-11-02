// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { repo, site, base } from './site.config.mjs';

// Starlight's autogenerate expects src/content/docs, so the sidebar is built from notes/ here.
const title = (file) => readFileSync(file, 'utf8').match(/^title:\s*"?(.*?)"?$/m)?.[1] ?? file;
const sections = readdirSync('notes', { withFileTypes: true })
	.filter((d) => d.isDirectory() && existsSync(`notes/${d.name}/index.md`))
	.map((d) => {
		const dir = `notes/${d.name}`;
		const order = Number(readFileSync(`${dir}/index.md`, 'utf8').match(/^\s+order:\s*(\d+)/m)?.[1] ?? 99);
		const topics = readdirSync(dir)
			.filter((f) => f.endsWith('.md') && f !== 'index.md')
			.map((f) => ({ label: title(`${dir}/${f}`), link: `/${d.name}/${f.slice(0, -3)}/` }))
			.sort((a, b) => a.label.localeCompare(b.label));
		return { order, label: title(`${dir}/index.md`), items: [{ label: 'Overview', link: `/${d.name}/` }, ...topics] };
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
			pagination: false,
			head: [
				{ tag: 'link', attrs: { rel: 'alternate', type: 'application/rss+xml', title: 'Posts', href: `${base.replace(/\/$/, "")}/posts/rss.xml` } },
			],
			customCss: ['@fontsource-variable/inter', '@fontsource-variable/jetbrains-mono', './src/styles.css'],
			routeMiddleware: './src/routeData.ts',
			components: {
				MarkdownContent: './src/components/MarkdownContent.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{ label: 'Start here', items: [{ label: 'Home', link: '/' }, { label: 'About', slug: 'about' }, { label: 'Posts', link: '/posts/' }] },
				...sections,
			],
		}),
	],
});
