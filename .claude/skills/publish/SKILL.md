---
name: publish
description: Use when Przemek has approved a change to the architecture notes (a new topic, source, removal or rewrite) and wants it published under his name.
---

# Publish a change

1. Confirm you have Przemek's explicit OK on the final wording of every changed note and text. If not, show him the text and stop.
2. Open every new or changed source URL and confirm it is what the note says. Run `npm run links` and fix every failure.
3. Edit or add the topic files in `notes/` as `AGENTS.md` describes.
4. Run `npm run readme`, then `npm run check`. Fix any error.
5. Commit everything in one commit with a short message naming the change, and `git push origin main`.
6. Reply with the URL of each changed topic: `https://notes.foster.systems/<path>/`, the file path under `notes/` without `.md`. The site updates within about two minutes.
