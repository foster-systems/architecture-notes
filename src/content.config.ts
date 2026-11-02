import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsSchema } from '@astrojs/starlight/schema';

const source = z.object({
	title: z.string(),
	author: z.string(),
	url: z.url(),
	type: z.enum(['book', 'article', 'paper', 'talk', 'docs', 'repo', 'guide', 'spec']),
	year: z.number().int(),
	note: z.string(),
});

const topic = z.object({
	why: z.string().optional(),
	sources: z.array(source).max(7).optional(),
	related: z.array(z.string()).optional(),
	tags: z.array(z.string()).optional(),
});

export const collections = {
	docs: defineCollection({
		loader: glob({ base: './notes', pattern: '**/[^_]*.md' }),
		schema: docsSchema({ extend: topic }),
	}),
	posts: defineCollection({
		loader: glob({ base: './posts', pattern: '*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			topics: z.array(z.string()).default([]),
		}),
	}),
};
