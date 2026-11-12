---
title: AI engineering basics
description: "How applications and agents built on language models work: the model, its context, tools and the system around them."
why: "A team cannot design, review or debug an AI feature without knowing how the model loop and its context behave. Most quality, cost and failure in these products comes from the system around the model."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [llm-apps, agents, context-engineering, tool-use]
related: [ai-engineering/retrieval, ai-engineering/evals, ai-engineering/agent-systems, agentic-engineering/governance]
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
    note: "Names the common workflow patterns, such as prompt chaining, routing and orchestrator-workers, and separates them from agents that direct their own steps. Its advice is to start with the simplest design and add autonomy only when it pays off. The page now notes that its tooling advice is out of date; Anthropic sells the models it uses."
  - title: Effective context engineering for AI agents
    author: "Anthropic (Prithvi Rajasekaran, Ethan Dixon, Carly Ryan, Jeremy Hadfield)"
    url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
    type: article
    year: 2025
    note: "Treats the tokens a model sees at each step as a scarce resource to curate. It covers system prompts, tools, examples and retrieval at the moment of need, and three tactics for long tasks: compaction, structured notes and subagents. Anthropic sells the models and platform features it describes."
  - title: Building A Generative AI Platform
    author: Chip Huyen
    url: "https://huyenchip.com/2024/07/25/genai-platform.html"
    type: article
    year: 2024
    note: "Builds a production LLM application one part at a time: added context, guardrails, a model router and gateway, caches, write actions and observability. Drawn from how companies deploy such applications; evaluation and prompting are left to her book AI Engineering."
  - title: "What We've Learned From A Year of Building with LLMs"
    author: "Eugene Yan, Bryan Bischof, Charles Frye, Hamel Husain, Jason Liu, Shreya Shankar"
    url: "https://applied-llms.org/"
    type: guide
    year: 2024
    note: "Lessons from six practitioners in three parts: tactics such as prompting, retrieval and evals; operations and team; and strategy for founders, such as no GPUs before product-market fit. The site promotes two of the authors' paid evals course."
---
