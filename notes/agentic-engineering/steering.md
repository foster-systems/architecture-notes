---
title: Steering coding agents
description: "Setting up a codebase so agents do good work: instructions, specs, tests and automated checks."
why: "An agent repeats the same mistakes until the team changes what it reads and what checks its work. That setup decides how much agent output a team can merge without rework."
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [harness-engineering, context-engineering, agents-md, spec-driven-development, testing]
related: [agentic-engineering/tools, agentic-engineering/supervising-agents, delivery/testing-strategy, foundations/tdd]
sources:
  - title: "Harness engineering: leveraging Codex in an agent-first world"
    author: Ryan Lopopolo (OpenAI)
    url: "https://openai.com/index/harness-engineering/"
    agents: "https://web.archive.org/web/20261028141658/https://openai.com/index/harness-engineering/"
    type: article
    year: 2026
    note: "Report from an OpenAI team that grew from three to seven engineers and built a product of about a million lines in five months with no hand-written code. Their work became building the environment: a short AGENTS.md as a map into versioned docs, linters and CI that enforce the architecture, and logs and UI the agent can inspect. OpenAI sells Codex, the agent they used."
  - title: Harness engineering for coding agent users
    author: Birgitta Böckeler
    url: "https://martinfowler.com/articles/harness-engineering.html"
    type: article
    year: 2026
    note: "A model for controlling coding agents: guides that steer the agent before it acts, and sensors that check its work after. Splits controls into deterministic ones, such as tests and linters, and model-based ones, such as AI review, and places them along the path to production."
  - title: "Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?"
    author: "Thibaud Gloaguen, Niels Mündler-Sasahara, Mark Niklas Müller, Veselin Raychev, Martin Vechev"
    url: "https://arxiv.org/abs/2602.11988"
    type: paper
    year: 2026
    note: "Measures whether context files such as AGENTS.md help agents resolve real issues. On average they did not raise success rates and raised cost by over 20%; agents followed the instructions, but repository overviews did not help. The authors advise using such files for non-standard practices and testing any change to them."
  - title: "Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl"
    author: Birgitta Böckeler
    url: "https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html"
    type: article
    year: 2025
    note: "Tries three spec-driven development tools and separates three levels: a spec written before a task, a spec kept and updated after it, and a spec that replaces code as the source. Compares the last with earlier model-driven development."
  - title: Agentic Engineering Patterns
    author: Simon Willison
    url: "https://simonwillison.net/guides/agentic-engineering-patterns/"
    type: guide
    year: 2026
    note: "A guide of patterns for coding agents such as Claude Code and Codex, with annotated prompts. Covers red/green TDD with agents, manual testing by the agent, Git, subagents, and walkthroughs for understanding agent-written code."
  - title: Best practices for Claude Code
    author: Anthropic
    url: "https://code.claude.com/docs/en/best-practices"
    type: docs
    year: 2026
    note: "Anthropic's guide to working with its coding agent: give it a check to run, write specific prompts, put team procedures in skills and enforce steps with hooks. Separates instructions the agent may skip from checks that always run."
---
