// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { tree } from './src/lib/tree.mjs';
import { repo, site, base } from './site.config.mjs';

// Starlight's autogenerate expects src/content/docs, so the sidebar is built from the notes/ tree.
const link = (n) => ({ label: n.title, link: `/${n.id}/` });
const items = (node) => [
	...(node.hasIndex ? [{ label: 'Overview', link: `/${node.id}/` }] : []),
	...node.pages.map(link),
	...node.sections.map((s) => ({ label: s.title, collapsed: true, items: items(s) })),
];
const notes = tree();

export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
			title: 'Architecture notes',
			description:
				'Solution architecture with AI agents: curated sources, each with a note. By Przemek Łuniewski.',
			social: [{ icon: 'github', label: 'GitHub', href: `https://github.com/${repo}` }],
			editLink: { baseUrl: `https://github.com/${repo}/edit/main/` },
			pagination: false,
			favicon: '/favicon.svg',
			logo: { src: './src/assets/mark.svg' },
			customCss: ['@fontsource-variable/inter', '@fontsource-variable/jetbrains-mono', './src/styles.css'],
			tableOfContents: false,
			components: {
				MarkdownContent: './src/components/MarkdownContent.astro',
				PageTitle: './src/components/PageTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{ label: 'Start here', items: [{ label: 'Home', link: '/' }, ...notes.pages.map(link)] },
				...notes.sections.map((s) => ({ label: s.title, items: items(s) })),
			],
		}),
	],
});
