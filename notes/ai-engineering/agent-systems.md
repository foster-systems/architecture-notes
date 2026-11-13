---
title: Agent system design
description: "Designing software in which language model agents choose their own steps at runtime: how many agents, what they share and remember, and which tools they get."
why: "Each added agent, step or tool raises cost and adds ways to fail, and the failures often look like normal output. These choices decide whether an agent feature holds up in production."
review: 7
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [agents, multi-agent, tools, memory, reliability]
related: [ai-engineering/basics, ai-engineering/evals, security/ai-features, agentic-engineering/governance, architecture/styles]
sources:
  - title: Measuring Agents in Production
    author: "Melissa Z. Pan et al. (UC Berkeley and others)"
    url: "https://proceedings.mlr.press/v306/pan26a.html"
    type: paper
    year: 2026
    note: "An ICML 2026 study of agents in production, from 20 interview case studies and a survey of practitioners behind 86 deployed systems in 26 domains. Most deployed agents are simple: 68% run at most 10 steps before a person steps in, 70% prompt off-the-shelf models, and 74% rely mainly on human evaluation. Reliability is the top challenge, and teams address it through system design."
  - title: "Multi-Agents: What's Actually Working"
    author: Walden Yan (Cognition)
    url: "https://cognition.com/blog/multi-agents-working"
    type: article
    year: 2026
    note: "A follow-up to the same author's 2025 case against multi-agent systems: parallel agents that write make conflicting implicit decisions. It reports the patterns that do work in Cognition's products, where extra agents review, advise or search while writes stay with one agent. Cognition sells the Devin coding agent."
  - title: How we built our multi-agent research system
    author: "Anthropic (Jeremy Hadfield, Barry Zhang, Kenneth Lien, Florian Scholz, Jeremy Fox, Daniel Ford)"
    url: "https://www.anthropic.com/engineering/multi-agent-research-system"
    type: article
    year: 2025
    note: "A case where several agents pay off: a lead agent runs parallel subagents on broad research. It covers prompting the lead agent, resuming after errors and tracing decisions. Multi-agent runs used about 15 times the tokens of a chat; Anthropic sells the models and the Research feature it describes."
  - title: Towards a Science of Scaling Agent Systems
    author: "Yubin Kim et al. (Google Research, Google DeepMind, MIT)"
    url: "https://arxiv.org/abs/2512.08296"
    type: paper
    year: 2026
    note: "A controlled test of one agent against four multi-agent designs over 260 configurations and six benchmarks. Several agents scored up to 81% better on financial reasoning that splits into parallel parts and up to 70% worse on step-by-step planning. Gains shrink once a single agent is already strong."
  - title: Why Do Multi-Agent LLM Systems Fail?
    author: "Mert Cemri et al. (UC Berkeley, Intesa Sanpaolo)"
    url: "https://arxiv.org/abs/2503.13657"
    type: paper
    year: 2025
    note: "A taxonomy of 14 failure modes, developed on 150 traces and then applied to a dataset of over 1,600 annotated traces from seven multi-agent frameworks. It groups them into system design, misalignment between agents and task verification, and gives a shared vocabulary for reading traces."
  - title: "Writing effective tools for agents — with agents"
    author: "Anthropic (Ken Aizawa)"
    url: "https://www.anthropic.com/engineering/writing-tools-for-agents"
    type: article
    year: 2025
    note: "A method for designing the tools an agent calls: prototype, build an evaluation of realistic multi-step tasks, then improve the tools against it. Its principles cover which tools to build, namespacing, returning meaningful context, token-efficient responses and tool descriptions. Anthropic sells the models it tested."
  - title: "The components of agent memory"
    author: "Anthropic (Lance Martin)"
    url: "https://www.anthropic.com/research/components-of-agent-memory"
    type: article
    year: 2026
    note: "Describes agent memory as notes and wikis built from session transcripts, with an offline pass that reviews logs to correct and reorganise them. In Anthropic's tests of its own models, adding a wiki to a search tool raised the score on 25 questions from 53% to 61%, and in one task the wiki grew larger than its sources."
---
