---
title: AI engineering basics
description: "How applications and agents built on language models work: prompts, context, tools, retrieval and evals."
why: "You cannot design, review or govern agent-based systems without knowing how the model loop, context and evals really behave."
horizon: foundation
reviewed: 2026-11-03
sidebar:
  order: 1
tags: [llm-apps, agents, context-engineering, evals, rag, tool-use]
related: [agentic-engineering/governance, agentic-engineering/tools]
sources:
  - title: Building effective agents
    author: "Anthropic (Erik Schluntz, Barry Zhang)"
    url: "https://www.anthropic.com/engineering/building-effective-agents"
    type: article
    year: 2024
    note: "A guide to agent design: start with simple workflows and add autonomy only when it pays off."
  - title: Effective context engineering for AI agents
    author: Anthropic
    url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
    type: article
    year: 2025
    note: "Why what the model sees at each step matters more than clever prompts, with tactics for long-running agents: compaction, notes and subagents."
  - title: Building A Generative AI Platform
    author: Chip Huyen
    url: "https://huyenchip.com/2024/07/25/genai-platform.html"
    type: article
    year: 2024
    note: "Builds a production LLM application one part at a time: retrieval, guardrails, model routing, caching, write actions and observability. The system view of her book AI Engineering."
  - title: "What We've Learned From A Year of Building with LLMs"
    author: "Eugene Yan, Bryan Bischof, Charles Frye, Hamel Husain, Jason Liu, Shreya Shankar"
    url: "https://applied-llms.org/"
    type: guide
    year: 2024
    note: "Practitioner lessons on tactics, operations and strategy that hold up. It focuses on the system around the model."
  - title: "AI Evals: Everything You Need to Know"
    author: "Hamel Husain, Shreya Shankar"
    url: "https://hamel.dev/blog/posts/evals-faq/"
    type: guide
    year: 2026
    note: "A practical evals reference. It starts from error analysis on real traces, not dashboards and generic metrics."
  - title: Agentic Engineering Patterns
    author: Simon Willison
    url: "https://simonwillison.net/guides/agentic-engineering-patterns/"
    type: guide
    year: 2026
    note: "A growing set of patterns for getting good code out of coding agents, from daily use, with the prompts."
---
