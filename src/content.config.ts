import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sentences = (text: string) => (text.match(/[.!?]+["')]*(\s+(?=[A-Z"'(])|$)/g) ?? []).length;
const summary = z.string().refine((text) => sentences(text) <= 5, 'at most 5 sentences');

const source = z.object({
	title: z.string(),
	author: z.string(),
	url: z.url(),
	agents: z.url().optional(),
	type: z.enum(['article', 'paper', 'talk', 'video', 'docs', 'repo', 'guide', 'spec', 'tool', 'framework', 'law', 'feed']),
	year: z.number().int(),
	note: summary,
});

const topic = z
	.object({
		title: z.string(),
		description: summary.optional(),
		why: summary.optional(),
		horizon: z.enum(['foundation', 'current', 'emerging']).optional(),
		reviewed: z.coerce.date().optional(),
		sources: z.array(source).max(7).optional(),
		related: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		sidebar: z.object({ order: z.number() }).optional(),
	})
	.refine((d) => !d.sources || (d.horizon && d.reviewed), 'a topic with sources needs horizon and reviewed');

export const collections = {
	notes: defineCollection({
		loader: glob({ base: './notes', pattern: '**/[^_]*.md' }),
		schema: topic,
	}),
};
