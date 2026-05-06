import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	return new Response(
		JSON.stringify({
			ok: true,
			renderedAt: new Date().toISOString(),
			node: process.version,
		}),
		{ headers: { 'content-type': 'application/json' } }
	);
};
