import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware(({ locals }) => {
	const route = locals.starlightRoute;
	if (!route.toc) return;
	if (route.entry.data.sources?.length) route.toc.items.splice(1, 0, { depth: 2, slug: 'sources', text: 'Sources', children: [] });
	if (route.toc.items.length < 2) route.toc = undefined;
});
