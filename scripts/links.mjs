// Checks every link in notes/. A source's readable URL (`agents`, else `url`) must serve real text to a bot;
// every other link must not be dead. Prints a Markdown report; exits 1 on any failure.
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';

const UA = 'architecture-notes-links/1.0 (+https://github.com/foster-systems/architecture-notes)';
const CHALLENGE = /<title>\s*(just a moment|attention required|access denied)|cf-chl-|challenge-platform/i;
const MIN_TEXT = 500;

const files = readdirSync('notes', { recursive: true }).filter((f) => f.endsWith('.md')).map((f) => `notes/${f}`);
const checks = new Map();
const add = (url, file, readable) => {
	const c = checks.get(url) ?? { url, files: new Set(), readable: false };
	c.files.add(file);
	c.readable ||= readable;
	checks.set(url, c);
};
for (const file of files) {
	const text = readFileSync(file, 'utf8');
	const fm = parse(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') ?? {};
	for (const s of fm.sources ?? []) {
		add(s.agents ?? s.url, file, true);
		if (s.agents) add(s.url, file, false);
	}
	for (const [, url] of text.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) add(url, file, false);
}

const textOf = (body, type) =>
	type.includes('html')
		? body.replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
		: body;

async function check({ url, readable }) {
	let last;
	for (let attempt = 0; attempt < 3; attempt++) {
		if (attempt) await new Promise((r) => setTimeout(r, 3000 * attempt));
		try {
			const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
			const type = res.headers.get('content-type') ?? '';
			if (res.status >= 500 || res.status === 429) {
				last = `HTTP ${res.status}`;
				continue;
			}
			if (!readable) return res.status < 400 || res.status === 403 ? null : `HTTP ${res.status}`;
			if (res.status !== 200) return `HTTP ${res.status}: agents cannot read it`;
			if (type.includes('pdf')) return null;
			const body = await res.text();
			if (CHALLENGE.test(body.slice(0, 20000))) return 'bot challenge page';
			if (textOf(body, type).length < MIN_TEXT) return `too little text for an agent (${type || 'no content type'})`;
			return null;
		} catch (e) {
			last = e.cause?.code ?? e.name ?? String(e);
		}
	}
	return last;
}

const all = [...checks.values()];
const failed = [];
for (let i = 0; i < all.length; i += 8) {
	const batch = all.slice(i, i + 8);
	const results = await Promise.all(batch.map(check));
	batch.forEach((c, j) => results[j] && failed.push({ ...c, error: results[j] }));
}

console.log(`Checked ${all.length} links, ${failed.length} failed.`);
for (const f of failed) console.log(`\n- ${f.url}\n  ${f.error}${f.readable ? ' (source agents read)' : ''}\n  in ${[...f.files].join(', ')}`);
process.exit(failed.length ? 1 : 0);
