// Lists topics overdue for review, most overdue first: days overdue, review interval, reviewed date, file.
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';

const DAY = 86400000;

const due = readdirSync('notes', { recursive: true })
	.filter((f) => f.endsWith('.md'))
	.map((f) => ({ file: `notes/${f}`, ...(parse(readFileSync(`notes/${f}`, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') ?? {}) }))
	.filter((t) => t.review)
	.map((t) => ({ ...t, over: Math.floor((Date.now() - new Date(t.reviewed)) / DAY) - t.review }))
	.filter((t) => t.over >= 0)
	.sort((a, b) => b.over - a.over);

for (const t of due) console.log(`${t.over}\t${t.review}\t${t.reviewed}\t${t.file}`);
