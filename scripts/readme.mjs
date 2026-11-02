// Rewrites the topic list in README.md from the notes/ tree. With --check, fails if README.md is stale.
import { readFileSync, writeFileSync } from 'node:fs';
import { tree } from '../src/lib/tree.mjs';

const lines = [];
const walk = (node, depth) => {
	const dir = node.file?.replace(/index\.md$/, '');
	lines.push(`${'#'.repeat(depth)} ${dir ? `[${node.title}](${dir})` : node.title}`, '');
	if (node.description) lines.push(node.description, '');
	for (const p of node.pages) lines.push(`- [${p.title}](${p.file})${p.description ? `: ${p.description}` : ''}`);
	if (node.pages.length) lines.push('');
	for (const s of node.sections) walk(s, Math.min(depth + 1, 6));
};
for (const s of tree().sections) walk(s, 3);

const readme = readFileSync('README.md', 'utf8');
const next = readme.replace(/(<!-- topics -->\n)[\s\S]*?(<!-- \/topics -->)/, `$1\n${lines.join('\n')}$2`);
if (process.argv.includes('--check')) {
	if (next !== readme) {
		console.error('README.md topic list is stale: run npm run readme');
		process.exit(1);
	}
} else writeFileSync('README.md', next);
