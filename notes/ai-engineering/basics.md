---
title: AI engineering basics
description: "How applications and agents built on language models work: prompts, context, tools, retrieval and evals."
why: "You cannot design, review or govern agent-based systems without knowing how the model loop, context and evals really behave."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 1
tags: [llm-apps, agents, context-engineering, evals, rag, tool-use]
related: [agentic-engineering/governance, agentic-engineering/tools]
sources:
  - title: Deep Dive into LLMs like ChatGPT
    author: Andrej Karpathy
    url: "https://www.youtube.com/watch?v=7xTGNNLPyMI"
    type: video
    year: 2025
    note: "A lecture of about three and a half hours on how language models are trained and run. Chapters cover tokenization, inference as sampling one token at a time, hallucinations, tool use, working memory and reinforcement learning."
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
    note: "Practitioner lessons on tactics, operations and strategy. It focuses on the system around the model."
  - title: Introducing Contextual Retrieval
    author: "Anthropic (Daniel Ford)"
    url: "https://www.anthropic.com/engineering/contextual-retrieval"
    type: article
    year: 2024
    note: "Anthropic's account of its retrieval method, which adds a generated line of context to each chunk before indexing. It explains chunking, embeddings, BM25 lexical search merged with embeddings through rank fusion, and reranking. Across four kinds of documents, the share of relevant documents missed in the top 20 chunks falls from 5.7% to 1.9% with all steps combined. The vendor ran the test and used its own model to write the context lines."
---
