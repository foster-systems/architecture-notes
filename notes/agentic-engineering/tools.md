---
title: Agentic tools
description: The main coding agents and open conventions used for agentic software delivery in late 2026.
why: "Fleets mix tools. An architect needs to know where each agent runs, how it gets context and tools, and which conventions carry across all of them."
tags: [coding-agents, mcp, agents-md, claude-code, codex, copilot]
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
---

## My take

Tools change monthly; the conventions underneath last longer. I judge a tool by three questions: where the agent runs (my machine, a VM, the vendor's cloud), how it gets context (instruction files, skills, MCP), and what stops it (permissions, sandbox, review).

Invest in the portable layer: AGENTS.md, plain-Markdown docs with progressive disclosure, MCP servers and tests. Then switching or mixing agents is cheap, and you are not locked to one vendor.

## How I apply it

I run Claude Code agents in T3 Code, on my Mac and on a VM, with scheduled loops on systemd timers. These notes ship an AGENTS.md and an llms.txt, so any agent can read them without scraping.
