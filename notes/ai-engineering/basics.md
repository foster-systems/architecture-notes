---
title: AI engineering basics
description: "How applications and agents built on language models work: prompts, context, tools, retrieval and evals."
why: "You cannot design, review or govern agent-based systems without knowing how the model loop, context and evals really behave."
tags: [llm-apps, agents, context-engineering, evals, rag, tool-use]
related: [agentic-engineering/governance, agentic-engineering/tools]
sources:
  - title: Building effective agents
    author: "Anthropic (Erik Schluntz, Barry Zhang)"
    url: "https://www.anthropic.com/engineering/building-effective-agents"
    type: article
    year: 2024
    note: "My default starting point on agent design: start with simple workflows and add autonomy only when it pays off."
  - title: Effective context engineering for AI agents
    author: Anthropic
    url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
    type: article
    year: 2025
    note: "Why what the model sees at each step matters more than clever prompts, with tactics for long-running agents: compaction, notes and subagents."
  - title: AI Engineering
    author: Chip Huyen
    url: "https://github.com/chiphuyen/aie-book"
    type: book
    year: 2025
    note: "The most complete single book on building with foundation models: evals, RAG, agents, fine-tuning and serving. The repo links to the O'Reilly edition."
  - title: "What We've Learned From A Year of Building with LLMs"
    author: "Eugene Yan, Bryan Bischof, Charles Frye, Hamel Husain, Jason Liu, Shreya Shankar"
    url: "https://applied-llms.org/"
    type: guide
    year: 2024
    note: "Practitioner lessons on tactics, operations and strategy that hold up. It treats the system around the model as the real product."
  - title: "AI Evals: Everything You Need to Know"
    author: "Hamel Husain, Shreya Shankar"
    url: "https://hamel.dev/blog/posts/evals-faq/"
    type: guide
    year: 2026
    note: "The most practical evals reference I know. It starts from error analysis on real traces, not dashboards and generic metrics."
  - title: Agentic Engineering Patterns
    author: Simon Willison
    url: "https://simonwillison.net/guides/agentic-engineering-patterns/"
    type: guide
    year: 2026
    note: "A growing set of patterns for getting good code out of coding agents, grounded in daily use and backed by real prompts."
---

## My take

An application on a language model is a loop: context in, tokens out, tools called, results back into context. Most of the engineering is in that loop, not in the model.

Start with the simplest thing that works: one call, then a fixed workflow. Add autonomy only when it pays. Context is the scarce resource: what the model sees at each step decides the result more than clever wording. And without evals there is no engineering. Look at real traces and real errors before building dashboards.

## Where teams go wrong

- An agent where a fixed workflow would do.
- Retrieval as the default answer to every knowledge problem.
- Generic scores instead of reading what actually failed.
