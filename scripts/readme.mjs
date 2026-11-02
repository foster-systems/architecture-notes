// Rewrites the topic list in README.md from the front matter in notes/. With --check, fails if README.md is stale.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';

const field = (text, key) => text.match(new RegExp(`^${key}:\\s*"?(.*?)"?$`, 'm'))?.[1] ?? '';
const order = (dir) => Number(readFileSync(`notes/${dir}/index.md`, 'utf8').match(/^\s+order:\s*(\d+)/m)?.[1] ?? 99);

const sections = readdirSync('notes', { withFileTypes: true })
	.filter((d) => d.isDirectory() && existsSync(`notes/${d.name}/index.md`))
	.map((d) => d.name)
	.sort((a, b) => order(a) - order(b));

const lines = [];
for (const dir of sections) {
	const index = readFileSync(`notes/${dir}/index.md`, 'utf8');
	lines.push(`### [${field(index, 'title')}](notes/${dir}/)`, '', field(index, 'description'), '');
	for (const file of readdirSync(`notes/${dir}`).filter((f) => f.endsWith('.md') && f !== 'index.md').sort()) {
		const text = readFileSync(`notes/${dir}/${file}`, 'utf8');
		lines.push(`- [${field(text, 'title')}](notes/${dir}/${file}): ${field(text, 'description')}`);
	}
	lines.push('');
}

const readme = readFileSync('README.md', 'utf8');
const next = readme.replace(/(<!-- topics -->\n)[\s\S]*?(<!-- \/topics -->)/, `$1\n${lines.join('\n')}$2`);
if (process.argv.includes('--check')) {
	if (next !== readme) {
		console.error('README.md topic list is stale: run npm run readme');
		process.exit(1);
	}
} else writeFileSync('README.md', next);
