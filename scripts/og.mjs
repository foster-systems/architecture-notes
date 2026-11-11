// Link previews: a screenshot of the top of each built page, saved where its og:image points.
// Runs after the build: node scripts/og.mjs
import { createReadStream, existsSync, mkdirSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { chromium } from 'playwright';
import { site } from '../site.config.mjs';

const dist = 'dist';
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json' };

const pages = (dir) =>
	readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const path = join(dir, e.name);
		return e.isDirectory() ? pages(path) : e.name.endsWith('.html') ? [path] : [];
	});

// Each page that names a preview image, with where that image goes in dist/.
const shots = pages(dist).flatMap((file) => {
	const image = readFileSync(file, 'utf8').match(/<meta property="og:image" content="([^"]+)"/)?.[1];
	if (!image?.startsWith(site)) return [];
	const path = '/' + file.slice(dist.length + 1).replace(/index\.html$/, '').replace(/\.html$/, '');
	return [{ path, out: join(dist, new URL(image).pathname) }];
});

const root = resolve(dist);
const server = createServer((req, res) => {
	let file;
	try {
		file = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://x').pathname));
	} catch {
		return res.writeHead(400).end();
	}
	if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
	if (!file.startsWith(root + sep) || !existsSync(file) || !statSync(file).isFile()) return res.writeHead(404).end();
	res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
	createReadStream(file).pipe(res);
}).listen(0, '127.0.0.1');
await new Promise((ok) => server.once('listening', ok));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 756 }, deviceScaleFactor: 1200 / 1440, reducedMotion: 'reduce' });
const queue = [...shots];
await Promise.all(
	Array.from({ length: 4 }, async () => {
		const page = await context.newPage();
		for (let shot; (shot = queue.shift()); ) {
			await page.goto(origin + shot.path, { waitUntil: 'networkidle' });
			await page.evaluate(() => document.fonts.ready);
			mkdirSync(dirname(shot.out), { recursive: true });
			await page.screenshot({ path: shot.out });
		}
	}),
);
await browser.close();
server.close();
console.log(`og: ${shots.length} previews`);
