---
title: Coding agents
description: "The main coding agents and the open formats they share for repository instructions, tools and skills."
why: "The agent a team picks decides where its code runs, what it can reach and how it is configured. Open formats for instructions, tools and skills let a team switch or mix agents without rebuilding that setup."
review: 7
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [coding-agents, mcp, agents-md, agent-skills, claude-code, codex, copilot, benchmarks]
related: [agentic-engineering/adoption, agentic-engineering/steering, agentic-engineering/governance, ai-engineering/model-choice]
sources:
  - title: Claude Code overview
    author: Anthropic
    url: "https://code.claude.com/docs/en/overview"
    type: docs
    year: 2026
    note: "Anthropic's documentation for Claude Code, its coding agent for the terminal, IDEs, desktop, web and CI. Covers project instructions in CLAUDE.md, skills, hooks and subagents."
  - title: ChatGPT + Codex user docs
    author: OpenAI
    url: "https://learn.chatgpt.com/docs"
    type: docs
    year: 2026
    note: "OpenAI's documentation for Codex, its coding agent, published together with the ChatGPT docs. Covers the CLI, IDE extension and cloud, with approvals, sandboxing and AGENTS.md."
  - title: GitHub Copilot on GitHub.com and GitHub Mobile
    author: GitHub
    url: "https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github"
    type: docs
    year: 2026
    note: "GitHub's documentation for Copilot on the web and mobile: repository chat, agent tasks that open pull requests, code review and automations. Explains where an agent session runs: a cloud sandbox, a GitHub Actions runner or a custom environment."
  - title: Model Context Protocol specification
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://modelcontextprotocol.io/specification/latest"
    type: spec
    year: 2026
    note: "The open protocol through which agents reach tools and data, supported by the agents above. Includes security and trust principles for hosts and servers."
  - title: AGENTS.md
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://agents.md/"
    type: spec
    year: 2025
    note: "A plain Markdown file of repository instructions that most coding agents read. The site lists the agents that support it."
  - title: Agent Skills specification
    author: Agentic AI Foundation (Linux Foundation)
    url: "https://agentskills.io/specification"
    type: spec
    year: 2025
    note: "An open format for folders of instructions, scripts and resources that an agent loads only when a task needs them. Developed at Anthropic and adopted by many other agents."
  - title: "Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces"
    author: "Mike A. Merrill et al."
    url: "https://arxiv.org/abs/2601.11868"
    type: paper
    year: 2026
    note: "The paper behind Terminal-Bench 2.0: 89 hard terminal tasks, each with its own environment and tests, run on many pairs of agent and model, including Claude Code and Codex CLI. In its results the model usually matters more than the agent. It publishes the harness so a team can rerun the tasks. tbench.ai now ranks agents on later task sets, version 4.1 in November 2026."
---
