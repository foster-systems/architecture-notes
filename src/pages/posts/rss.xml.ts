import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { posts, postDate, url } from '../../lib/repo';

export async function GET(context: APIContext) {
	return rss({
		title: 'Architecture notes: posts',
		description: 'What changed in the notes, and why.',
		site: context.site!,
		items: (await posts()).map((p) => ({
			title: p.data.title,
			description: p.data.description,
			pubDate: new Date(postDate(p)),
			link: url(`posts/${p.id}/`),
		})),
	});
}
