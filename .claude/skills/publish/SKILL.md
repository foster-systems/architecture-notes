---
name: publish
description: Use when Przemek has approved a change to the architecture notes (a new topic, source, removal or rewrite) and wants it published under his name.
---

# Publish a change

1. Confirm you have Przemek's explicit OK on the final wording of every changed note, take and post. If not, show him the text and stop.
2. Open every new or changed source URL and confirm it is what the note says.
3. Edit or add the topic files in `notes/` as `AGENTS.md` describes.
4. Add one post `posts/<today>-<slug>.md`: what changed and why, in his voice, `topics` listing the ids touched.
5. Run `npm run readme`, then `npm run check`. Fix any error.
6. Commit everything in one commit, message `<post title>`, and `git push origin main`.
7. Reply with the post URL: `https://notes.foster.systems/posts/<post file name without .md>/`. The site updates within about two minutes.
