---
title: Agentic tools
description: The main coding agents and open conventions used for agentic software delivery in late 2026.
why: "Fleets mix tools. An architect needs to know where each agent runs, how it gets context and tools, and which conventions carry across all of them."
tags: [coding-agents, mcp, agents-md, agent-skills, claude-code, codex, copilot]
related: [agentic-engineering/governance, ai-engineering/basics]
sources:
  - title: Claude Code overview
    author: Anthropic
    url: "https://code.claude.com/docs/en/overview"
    type: docs
    year: 2026
    note: "Entry point to a mature agent harness for the terminal, IDE, desktop, web and CI. Worth reading for its model of instructions, skills, hooks and subagents."
  - title: Codex documentation
    author: OpenAI
    url: "https://learn.chatgpt.com/docs"
    type: docs
    year: 2026
    note: "Current docs for the Codex CLI, IDE extension and cloud. I use them to compare approvals, sandboxing and AGENTS.md handling with other agents."
  - title: GitHub Copilot on GitHub.com and GitHub Mobile
    author: GitHub
    url: "https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github"
    type: docs
    year: 2026
    note: "Copilot in the cloud runs agent work inside the repo, pull request and branch-protection rules teams already use."
  - title: Cursor Cloud Agents
    author: Cursor
    url: "https://cursor.com/docs/cloud-agent"
    type: docs
    year: 2026
    note: "How a popular IDE agent moved to parallel agents in isolated cloud machines. Useful for comparing environment setup, secrets and network controls."
  - title: Model Context Protocol specification
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://modelcontextprotocol.io/specification/latest"
    type: spec
    year: 2026
    note: "The standard way agents reach tools and data, supported by all the tools above. I read its security principles before connecting any server."
  - title: AGENTS.md
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://agents.md/"
    type: spec
    year: 2025
    note: A plain-Markdown convention for repo instructions that most coding agents read. The cheapest way to make one repo work well with many agents.
  - title: Agent Skills specification
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://agentskills.io/specification"
    type: spec
    year: 2025
    note: "An open format for instructions and scripts that agents load only when a task needs them. One skill folder works in most coding agents."
---
