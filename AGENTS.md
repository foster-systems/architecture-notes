# Architecture notes: guide for agents

Przemek Łuniewski's curated notes on solution architecture with AI agents. Public repo: everything here is published under his name.

Purpose: one curated, canonical list of what matters in solution architecture with AI agents, used as a reference by Przemek and his agents. Per topic, the best sources, each with his note, and his short take. The links are the value; his text stays short. Topics show the current state only: no posts, changelogs or comments on changes; git history is the record.

## Reading

- Index: `README.md` (topics with one-line summaries) or `/llms.txt` on the site.
- Topic: any `.md` file under `notes/`. Section: any folder under `notes/`; folders nest.
- When Przemek refers to a topic ("DDD as in my notes"), the topic file is the definition he means.

## Format

Topic front matter (validated by `src/content.config.ts`; the build fails on errors):

- `title`, `description`: one plain line, what it is.
- `why`: one or two lines, why an architect working with agents should know it.
- `sources`: at most 7, each `title`, `author`, `url`, `type` (book, article, paper, talk, docs, repo, guide, spec), `year`, `note`, and optional `agents`: an agent-readable copy (repo or Markdown) of the site at `url`.
- `related`: topic ids like `foundations/ddd`. `tags`: free.

Body: `## My take`, then `## When it fits` / `## When it doesn't` (or `## Where teams go wrong`), then `## How I apply it` only where Przemek has real use.

Sections are folders, nested as deep as needed. A folder's optional `index.md` gives its `title`, `description`, `sidebar.order` and intro; without it the folder name is the title. Pages sort by `sidebar.order`, then title. Names starting with `_` or `.` are skipped. The site, sidebar, `llms.txt` and README list are built from the folder tree, so adding, nesting or moving files needs no code change. Slugs never change once published.

## Rules

- Publish only after Przemek's explicit OK on the final text. Drafts never go to this repo: not in commits, branches or pull requests.
- Link, don't copy: no copied passages, diagrams or images. Notes are in Przemek's words, one or two sentences on why the source is worth reading. Quotes are rare, under 15 words, attributed.
- Open every URL before adding it. 5–7 sources per topic; curated, not exhaustive.
- Takes and notes are Przemek's opinions. Draft from what he said; never invent experience he has not described.

## Writing

Applies to every note, take and doc here.

- Clear and precise. Plain, simple words, short sentences. Say each thing once. Current state only.
- No filler, no hedging, no mannered prose: no slogans, no "X, not Y" flourishes, no "that is the point", "the real…", "worth your time", "grounded in".
- Write about the subject, not about Przemek: no claims of expertise, no self-promotion.
- Before showing a draft, cut every word that adds nothing.

## Publishing

Use the `publish` skill (`.claude/skills/publish/SKILL.md`). In short: edit topics, `npm run readme`, `npm run check`, one commit, push to `main`. The push rebuilds the site.
