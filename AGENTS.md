# Architecture notes: guide for agents

Przemek Łuniewski's curated notes on solution architecture in the era of AI agents. Public repo: everything here is published under his name.

## Reading

- Index: `README.md` (topics with one-line summaries) or `/llms.txt` on the site.
- Topic: `notes/<section>/<slug>.md`. Section: `notes/<section>/index.md`. Post: `posts/YYYY-MM-DD-<slug>.md`.
- When Przemek refers to a topic ("DDD as in my notes"), the topic file is the definition he means.

## Format

Topic front matter (validated by `src/content.config.ts`; the build fails on errors):

- `title`, `description`: one plain line, what it is.
- `why`: one or two lines, why an architect working with agents should know it.
- `sources`: at most 7, each `title`, `author`, `url`, `type` (book, article, paper, talk, docs, repo, guide, spec), `year`, `note`.
- `related`: topic ids like `foundations/ddd`. `tags`: free.

Body: `## My take`, then `## When it fits` / `## When it doesn't` (or `## Where teams go wrong`), then `## How I apply it` only where Przemek has real use.

Post front matter: `title`, `description`, `topics` (ids touched). Body: a few short paragraphs on what changed and why. The site links each post to the commit that added it, so a post and its change go in one commit.

A section is a folder with an `index.md` (`title`, `description`, `sidebar.order`). Slugs never change once published.

## Rules

- Publish only after Przemek's explicit OK on the final text. Drafts never go to this repo: not in commits, branches or pull requests.
- Link, don't copy: no copied passages, diagrams or images. Notes are in Przemek's words, one or two sentences on why the source is worth reading. Quotes are rare, under 15 words, attributed.
- Open every URL before adding it. 5–7 sources per topic; curated, not exhaustive.
- Takes and notes are Przemek's opinions. Draft from what he said; never invent experience he has not described.
- Style: plain, simple words, short, current state only.

## Publishing

Use the `publish` skill (`.claude/skills/publish/SKILL.md`). In short: edit topics, add one post, `npm run readme`, `npm run check`, one commit, push to `main`. The push rebuilds the site.
