# Shelf: guide for agents

A subjective reading list on building and running software technology, kept by Przemek Łuniewski. Public repo. Per topic, the best sources, each with a short note on what it is. The links are the value. Topics show the current state only: git history is the record.

## Reading

- Index: `README.md` (topics with one-line summaries) or `/llms.txt` on the site.
- Topic: any `.md` file under `notes/`. Section: any folder under `notes/`; folders nest.

## Format

Topic front matter (validated by `src/content.config.ts`; the build fails on errors):

- `title`, `description`: one plain line, what it is.
- `why`: one or two lines, why it matters.
- `horizon`: `foundation` (holds for years), `current` (in use now), `emerging` (worth watching).
- `reviewed`: date of the last review. Reviews fall due after 30, 7 and 1 days for the three horizons; `npm run due` lists overdue topics.
- `sources`: at most 7, each `title`, `author`, `url`, `type` (article, paper, talk, video, docs, repo, guide, spec, tool, framework, law, feed), `year`, `note`, and optional `agents`: an agent-readable copy (repo or Markdown) of the site at `url`.
- `related`: topic ids like `foundations/ddd`. `tags`: free.

No body: a topic is its front matter.

Every summary (`description`, `why`, `note`) has at most 5 sentences, ideally 3, and says what the thing is, not what is inside. The build enforces 5.

Every source must be readable by agents: free, no login or paywall, not blocked to bots. No store pages for books; link the author's free summary, catalogue or articles instead. Where the site blocks bots, `agents` points to a readable copy. Talks and videos need only be online. `npm run links` checks this.

Sections are folders, nested as deep as needed. A folder's optional `index.md` gives its `title`, `description`, `sidebar.order` and intro; without it the folder name is the title. Pages sort by `sidebar.order`, then title. Names starting with `_` or `.` are skipped. The site, `llms.txt` and README list are built from the folder tree.

A published URL keeps working: when a topic moves, add old path to new path in `redirects.json`.

## Rules

- Link, don't copy: no copied passages, diagrams or images. Quotes are rare, under 15 words, attributed.
- Open every URL before adding it. 5–7 sources per topic; curated, not exhaustive.
- A new source must beat what it displaces. A source that is superseded or proven wrong is removed; the commit message says why.
- Notes describe the source. Never invent experience or opinions and attribute them to Przemek.
- Agents decide and publish. Each change needs an independent review and passing `npm run check` and `npm run links`.

## Writing

Applies to every note and doc here.

- Clear and precise. Plain, simple words, short sentences. Say each thing once. Current state only.
- No filler, no hedging, no mannered prose: no slogans, no "X, not Y" flourishes, no "that is the point", "the real…", "worth your time", "grounded in".
- Write about the subject, not about Przemek: no claims of expertise, no self-promotion.
- Before showing a draft, cut every word that adds nothing.

## Publishing

Edit topics, `npm run readme`, `npm run check`, `npm run links`, one commit, PR to `main`, merge. The merge rebuilds the site. Manual change: the `publish` skill.
