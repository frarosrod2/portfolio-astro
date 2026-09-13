import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL("sitemap-index.xml", site);
	const robots = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;
	return new Response(robots, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
};