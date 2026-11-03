---
title: Governing agents
description: "Keeping AI agents and agent fleets safe, checked and accountable: permissions, sandboxes, harnesses, approval gates and security controls."
why: "Agents act with real credentials on real systems, and prompt injection is still unsolved. An architect has to design where autonomy stops and how output gets verified."
tags: [governance, security, prompt-injection, sandboxing, harness-engineering, guardrails]
related: [foundations/tdd, ai-engineering/basics, agentic-engineering/tools]
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
  - title: Technology Radar Vol. 34
    author: Thoughtworks
    url: "https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2026/04/tr_technology_radar_vol_34_en.pdf"
    type: guide
    year: 2026
    note: Its themes on permission-hungry agents and keeping coding agents on a leash show what teams in the field try. I check my practices against it.
---

## How I apply it

In my wingman agent fleet, agents work in their own threads and push their own changes. The files that hold their rules and loop scripts are guarded by an owner-only GitHub ruleset, so no agent can loosen its own limits, and only my approval makes anything live. These notes run the same way: an agent researches daily and proposes, and nothing is published without my OK.
