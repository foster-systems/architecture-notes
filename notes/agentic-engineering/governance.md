---
title: Securing agents
description: "Limiting what coding agents can reach and do: permissions, sandboxes, network limits, third-party plugins and prompt injection."
why: "Agents run with real credentials, read untrusted content and load third-party plugins, and prompt injection has no complete fix. Hard limits on what an agent can reach still hold when approval prompts and model safeguards miss."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [security, prompt-injection, sandboxing, permissions, supply-chain, plugins]
related: [agentic-engineering/tools, agentic-engineering/supervising-agents, security/identity-and-access, security/supply-chain, law-and-compliance/ai-act]
sources:
  - title: "The lethal trifecta for AI agents: private data, untrusted content, and external communication"
    author: Simon Willison
    url: "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
    type: article
    year: 2025
    note: "A test for prompt-injection risk: an agent with access to private data, exposure to untrusted content and a way to send data out can be tricked into leaking that data. The safe design avoids giving one agent all three."
  - title: Design Patterns for Securing LLM Agents against Prompt Injections
    author: "Luca Beurer-Kellner et al."
    url: "https://arxiv.org/abs/2506.08837"
    type: paper
    year: 2025
    note: "Six design patterns that keep untrusted input from steering an agent's actions, such as action-selector, plan-then-execute and map-reduce. States what each one costs in usefulness and applies them to ten case studies."
  - title: OWASP Top 10 for Agentic Applications for 2026
    author: OWASP GenAI Security Project
    url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
    agents: "https://web.archive.org/web/20251222094028/https://genai.owasp.org/download/52117/"
    type: guide
    year: 2025
    note: "A peer-reviewed list of the main security risks of agentic applications, such as goal hijack, tool misuse, identity and privilege abuse and agentic supply chain flaws, with mitigations. Usable as a design-review checklist."
  - title: Careful adoption of agentic AI services
    author: "ASD's ACSC, CISA, NSA, Canadian Centre for Cyber Security, NCSC-NZ, NCSC-UK"
    url: "https://www.ncsc.govt.nz/protect-your-organisation/careful-adoption-of-agentic-ai-services/"
    type: guide
    year: 2026
    note: "Joint guidance from six national cyber security agencies on adopting agentic AI. Groups the risks into privilege, design and configuration, behaviour, structural and accountability risks, and lists practices for building and operating agents. Ends with security prerequisites to meet before deployment."
  - title: "Beyond the model: backdoors in AI agent harnesses"
    author: CERT-EU
    url: "https://cert.europa.eu/blog/beyond-the-model-backdoors-in-ai-agent-harnesses"
    type: article
    year: 2026
    note: "In a lab, CERT-EU hid a credential stealer in local copies of two plugins for Claude Code and Pi. It ran from event hooks, so tool permissions and controls on the model's tool calls missed it. Recommends limits on the whole agent environment: isolation, short-lived credentials, network allow-lists and pinned plugins."
  - title: How we contain Claude across products
    author: Anthropic
    url: "https://www.anthropic.com/research/how-we-contain-claude"
    type: article
    year: 2026
    note: "Anthropic's threat model, design choices and security failures across claude.ai, Claude Code and Cowork. Claude Code users approved about 93% of permission prompts, and an OS sandbox cut prompts by 84%. Its cases show why egress and filesystem limits matter, and how an allowed domain can still leak data."
---
