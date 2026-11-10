---
title: Agentic tools
description: The main coding agents and open conventions used for agentic software delivery in late 2026.
why: "Fleets mix tools. A team needs to know where each agent runs, how it gets context and tools, and which conventions carry across all of them."
horizon: emerging
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [coding-agents, mcp, agents-md, agent-skills, agent-plugins, claude-code, codex, copilot]
related: [agentic-engineering/governance, ai-engineering/basics]
sources:
  - title: Claude Code overview
    author: Anthropic
    url: "https://code.claude.com/docs/en/overview"
    type: docs
    year: 2026
    note: "Entry point to an agent harness for the terminal, IDE, desktop, web and CI, and its model of instructions, skills, hooks and subagents."
  - title: Codex documentation
    author: OpenAI
    url: "https://learn.chatgpt.com/docs"
    type: docs
    year: 2026
    note: "Current docs for the Codex CLI, IDE extension and cloud. Covers approvals, sandboxing and AGENTS.md handling."
  - title: GitHub Copilot on GitHub.com and GitHub Mobile
    author: GitHub
    url: "https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github"
    type: docs
    year: 2026
    note: "GitHub's documentation of Copilot on the web and mobile. It covers repository chat, agent work that can open a pull request, code review, automations, session history and customization. It also compares cloud sandbox sessions with GitHub Actions sessions and lists their limits."
  - title: Model Context Protocol specification
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://modelcontextprotocol.io/specification/latest"
    type: spec
    year: 2026
    note: "The standard way agents reach tools and data, supported by all the tools above. Includes security principles for connecting a server."
  - title: AGENTS.md
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://agents.md/"
    type: spec
    year: 2025
    note: A plain-Markdown convention for repo instructions that most coding agents read.
  - title: Agent Skills specification
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://agentskills.io/specification"
    type: spec
    year: 2025
    note: "An open format for instructions and scripts that agents load only when a task needs them. One skill folder works in most coding agents."
  - title: Agent Plugins specification
    author: Agent Plugins Technical Steering Committee
    url: "https://agent-plugins.org/specification"
    type: spec
    year: 2026
    note: "One folder format that packages Agent Skills and MCP servers. Clients that read it include Codex, Copilot, Cursor, Kiro, OpenHands and VS Code; Claude Code keeps its own plugin format. The spec does not require clients to sandbox plugin processes and leaves authorization and credentials to each client."
---
