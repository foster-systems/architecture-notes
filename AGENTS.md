# Shelf: guide for agents

A curated reading list for building and running a software company, from the first prototype to scale-up, kept by Przemek Łuniewski. Public repo. Per topic, the best sources, each with a short note on what it is. The links are the value. Topics show the current state only: git history is the record.

## Standard

`notes/about.md` is the standard every change applies: the scope (a software company's first four stages, up to a few hundred people), the checks for adding a source (adapted from Garousi et al.'s grey-literature criteria: producer, evidence or method, still holds, origin or best current explanation, adds something unique, vendor interest named) and the reasons for removing one (adapted from CREW: misleading, superseded, trivial, out of scope, covered better elsewhere, unreadable). Trace each claim in a note to the original (SIFT).

## Reading

- Index: `README.md` (topics with one-line summaries) or `/llms.txt` on the site.
- Topic: any `.md` file under `notes/`. Section: any folder under `notes/`; folders nest.

## Format

Topic front matter (validated by `src/content.config.ts`; the build fails on errors):

- `title`, `description`: one plain line, what it is.
- `why`: one or two lines, why it matters.
- `reviewed`: date of the last review. A topic is reviewed when its subject area changes: a new release, law, ruling or study, a source that breaks, moves or is superseded, or a reader's issue.
- `sources`: 5 to 7, each `title`, `author`, `url`, `type` (article, paper, talk, video, docs, repo, guide, spec, tool, framework, law, feed), `year`, `note`, and optional `agents`: an agent-readable copy (repo or Markdown) of the site at `url`.
- `related`: topic ids like `foundations/ddd`. `tags`: free.

No body: a topic is its front matter.

Every summary (`description`, `why`, `note`) has at most 5 sentences, ideally 3, and says what the thing is, not what is inside. The build enforces 5.

Every source must be readable by agents: free, no login or paywall, not blocked to bots. No store pages for books; link the author's free summary, catalogue or articles instead. Where the site blocks bots, `agents` points to a readable copy. Talks and videos need only be online. `npm run links` checks this.

Sections are folders, nested as deep as needed. A folder's optional `index.md` gives its `title`, `description`, `sidebar.order` and intro; without it the folder name is the title. Pages sort by `sidebar.order`, then title. Names starting with `_` or `.` are skipped. The site, `llms.txt` and README list are built from the folder tree.

Each top-level section has its own hue, set by its place in the order (`tone` in `src/lib/repo.ts`); nothing to configure. Neighbours on the shelf always differ; sections far apart can look alike. A section added last leaves the other colours as they are; one added in between shifts the colours after it.

`checked.txt` holds the date the catalog was last checked against the standard; the editor loop writes it after each round. The home page shows the later of it and the last change in `notes/`.

A published URL keeps working: when a topic moves, add old path to new path in `redirects.json`.

## Rules

- Link, don't copy: no copied passages, diagrams or images. Quotes are rare, under 15 words, attributed.
- Open every URL before adding it.
- A new source must pass every check in the standard and beat what it displaces. A removal's commit message names its reason from the standard, e.g. "Superseded by …".
- A topic outside the scope is removed or merged; a moved one gets a redirect.
- Notes describe the source. Never invent experience or opinions and attribute them to Przemek.
- Agents decide and publish. Each change needs an independent review, by an agent on a different model, and passing `npm run check` and `npm run links`.

## Writing

Applies to every note and doc here.

- Clear and precise. Plain, simple words, short sentences. Say each thing once. Current state only.
- No filler, no hedging, no mannered prose: no slogans, no "X, not Y" flourishes, no "that is the point", "the real…", "worth your time", "grounded in".
- Write about the subject, not about Przemek: no claims of expertise, no self-promotion.
- Before showing a draft, cut every word that adds nothing.

## Publishing

Edit topics, `npm run readme`, `npm run check`, `npm run links`, one commit, PR to `main`, merge. The merge rebuilds the site. Manual change: the `publish` skill.
