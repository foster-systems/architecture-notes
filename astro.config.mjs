// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site, base } from './site.config.mjs';

export default defineConfig({
	site,
	base,
	redirects: JSON.parse(readFileSync('redirects.json', 'utf8')),
	integrations: [sitemap()],
});
