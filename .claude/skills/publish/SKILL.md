---
name: publish
description: Use when Przemek asks to publish a change to the catalog by hand (a new topic, source, removal or rewrite).
---

# Publish a change

1. Open every new or changed source URL and confirm it is what the note says.
2. Edit or add the topic files in `notes/` as `AGENTS.md` describes, and set `reviewed` to today.
3. Run `npm run readme`, `npm run check` and `npm run links`. Fix every failure.
4. Commit everything in one commit with a short message naming the change, open a PR to `main`, and merge it.
5. Reply with the URL of each changed topic: `https://shelf.foster.systems/<path>/`, the file path under `notes/` without `.md`. The site updates within about two minutes.
