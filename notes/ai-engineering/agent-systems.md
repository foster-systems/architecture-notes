---
title: Agent system design
description: "Designing systems where agents choose the path at runtime: one agent or several, shared state, tools, tracing and failure."
why: "Agent systems are distributed systems that fail quietly: quality drops while latency and error rates look normal. The design has to make that visible and keep autonomy bounded."
tags: [agents, multi-agent, distributed-systems, mcp, observability, reliability]
related: [ai-engineering/basics, agentic-engineering/governance, foundations/patterns]
sources:
  - title: "From Microservices to Agents: the Next Evolution of Distributed Systems"
    author: Mallika Rao
    url: "https://www.infoq.com/articles/distributed-systems-microservices-agentic-ai"
    type: article
    year: 2026
    note: "Compares agent systems with microservices and lists how they fail: bad early decisions that compound, unbounded retries, silent quality drops, drifting state. A good review checklist, light on evidence."
  - title: "Don't Build Multi-Agents"
    author: Walden Yan (Cognition)
    url: "https://cognition.com/blog/dont-build-multi-agents"
    type: article
    year: 2025
    note: "The case for one agent with full shared context as the default. Subagents that see only part of the context make decisions that conflict."
  - title: How we built our multi-agent research system
    author: "Anthropic (Jeremy Hadfield et al.)"
    url: "https://www.anthropic.com/engineering/multi-agent-research-system"
    type: article
    year: 2025
    note: "Where several agents pay off: a lead agent runs parallel subagents on broad research. Covers resuming after failures, tracing decisions, and the cost of about 15 times the tokens of a chat."
  - title: Towards a Science of Scaling Agent Systems
    author: Yubin Kim et al.
    url: "https://arxiv.org/abs/2512.08296"
    type: paper
    year: 2025
    note: "Measures when several agents help: up to 81% better on tasks that split into parallel parts, up to 70% worse on step-by-step planning. Evidence for choosing per task."
  - title: Why Do Multi-Agent LLM Systems Fail?
    author: Mert Cemri et al.
    url: "https://arxiv.org/abs/2503.13657"
    type: paper
    year: 2025
    note: "14 failure modes from over 1,600 annotated traces, grouped into system design, inter-agent misalignment and task verification. A shared vocabulary for reading traces."
  - title: "Designing MCP Gateway: Uber's MCP Management Platform"
    author: "Uber Engineering (Alok Srivastava, Deepanshu Mehndiratta, Gaurav Gill)"
    url: "https://www.uber.com/blog/designing-mcp-gateway/"
    agents: "https://web.archive.org/web/20261002144036/https://www.uber.com/fi/en/blog/designing-mcp-gateway/"
    type: article
    year: 2026
    note: "A production tool platform for agents over 800+ servers: separate control and data planes, tools generated from existing APIs and disabled until their owners approve them, policies per caller and PII redaction."
---
