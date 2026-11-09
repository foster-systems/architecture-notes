---
title: Governing agents
description: "Keeping AI agents and agent fleets safe, checked and accountable: permissions, sandboxes, harnesses, approval gates and security controls."
why: "Agents act with real credentials on real systems, and prompt injection is still unsolved. An architect has to design where autonomy stops and how output gets verified."
horizon: current
reviewed: 2026-11-09
tags: [governance, security, prompt-injection, sandboxing, harness-engineering, guardrails, supply-chain]
related: [foundations/tdd, ai-engineering/basics, agentic-engineering/tools, agentic-engineering/supervising-agents, law-and-compliance/ai-act]
sources:
  - title: Harness engineering for coding agent users
    author: Birgitta Böckeler
    url: "https://martinfowler.com/articles/harness-engineering.html"
    type: article
    year: 2026
    note: "A model for controlling coding agents: guides before the agent acts, sensors after. Helps decide which checks are deterministic and which need judgement."
  - title: "The lethal trifecta for AI agents: private data, untrusted content, and external communication"
    author: Simon Willison
    url: "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
    type: article
    year: 2025
    note: "A simple test for prompt-injection risk: an agent that has all three can leak data."
  - title: Design Patterns for Securing LLM Agents against Prompt Injections
    author: Luca Beurer-Kellner et al.
    url: "https://arxiv.org/abs/2506.08837"
    type: paper
    year: 2025
    note: "Turns prompt-injection defence into concrete architecture patterns with clear trade-offs."
  - title: OWASP Top 10 for Agentic Applications for 2026
    author: OWASP GenAI Security Project
    url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
    type: guide
    year: 2025
    note: A peer-reviewed list of agent-specific risks that security teams already know, usable as a design-review checklist.
  - title: "Beyond the model: backdoors in AI agent harnesses"
    author: "CERT-EU"
    url: "https://cert.europa.eu/blog/beyond-the-model-backdoors-in-ai-agent-harnesses"
    type: article
    year: 2026
    note: "In a lab, CERT-EU put a credential stealer into local copies of two plugins, on Claude Code and Pi. It ran from hooks, and tool permissions and approval prompts missed it because they cover only the model's tool calls. Ends with controls for the whole agent environment: isolation, short-lived credentials, network allow-lists, pinned plugins."
  - title: Technology Radar Vol. 35
    author: Thoughtworks
    url: "https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2026/11/tr_technology_radar_vol_35_en.pdf"
    agents: "https://www.thoughtworks.com/radar"
    type: guide
    year: 2026
    note: "Puts agent sandboxing in Adopt and risk-tiered human oversight in Trial, and warns against human-in-the-loop theater: approving what you cannot judge. Shows what teams in the field try."
  - title: "How we contain Claude across products"
    author: "Anthropic"
    url: "https://www.anthropic.com/research/how-we-contain-claude"
    type: article
    year: 2026
    note: "Threat model, design trade-offs and security failures across claude.ai, Claude Code and Cowork, reported by the vendor. Claude Code users approved about 93% of permission prompts, and a sandbox cut prompts by 84%. Its cases show why egress and filesystem limits matter, and how an allowed domain can still leak data."
---
