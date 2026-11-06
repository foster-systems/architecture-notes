---
title: Governing agents
description: "Keeping AI agents and agent fleets safe, checked and accountable: permissions, sandboxes, harnesses, approval gates and security controls."
why: "Agents act with real credentials on real systems, and prompt injection is still unsolved. An architect has to design where autonomy stops and how output gets verified."
tags: [governance, security, prompt-injection, sandboxing, harness-engineering, guardrails]
related: [foundations/tdd, ai-engineering/basics, agentic-engineering/tools, agentic-engineering/supervising-agents]
sources:
  - title: Harness engineering for coding agent users
    author: Birgitta Böckeler
    url: "https://martinfowler.com/articles/harness-engineering.html"
    type: article
    year: 2026
    note: "A clear model for controlling coding agents: guides before the agent acts, sensors after. I use it to decide which checks are deterministic and which need judgement."
  - title: "The lethal trifecta for AI agents: private data, untrusted content, and external communication"
    author: Simon Willison
    url: "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
    type: article
    year: 2025
    note: "The simplest test I know for prompt-injection risk. If an agent has all three, it can leak data, so I redesign it."
  - title: Design Patterns for Securing LLM Agents against Prompt Injections
    author: Luca Beurer-Kellner et al.
    url: "https://arxiv.org/abs/2506.08837"
    type: paper
    year: 2025
    note: "Turns prompt-injection defence into concrete architecture patterns with clear trade-offs. I use it to pick a design."
  - title: OWASP Top 10 for Agentic Applications for 2026
    author: OWASP GenAI Security Project
    url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
    type: guide
    year: 2025
    note: A peer-reviewed list of agent-specific risks that security teams already know. My checklist in design reviews and client talks.
  - title: Claude Code security
    author: Anthropic
    url: "https://code.claude.com/docs/en/security"
    type: docs
    year: 2026
    note: "How one major coding agent handles permission modes, sandboxing, managed settings and audit. A useful baseline when setting up any agent tool."
  - title: Technology Radar Vol. 35
    author: Thoughtworks
    url: "https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2026/11/tr_technology_radar_vol_35_en.pdf"
    agents: "https://www.thoughtworks.com/radar"
    type: guide
    year: 2026
    note: "Puts agent sandboxing in Adopt and risk-tiered human oversight in Trial, and warns against human-in-the-loop theater: approving what you cannot judge. Shows what teams in the field try. I check my practices against it."
  - title: "What Will Remain Human in Software Architecture? A Focus Group Report"
    author: Uwe van Heesch, Olaf Zimmermann, Christian Kohls
    url: "https://arxiv.org/abs/2609.30334"
    type: paper
    year: 2026
    note: "A focus group of 22 practitioners on what stays human: decisions, accountability and guardrails. Defines harness engineering as the system that governs how agents build software, and uses criticality, uncertainty times cost of change, to decide how much human oversight a change needs."
---
