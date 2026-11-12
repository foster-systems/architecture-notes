---
title: Supervising agents
description: "The engineer's job when agents write the code: directing them, judging their output, stepping in, and keeping the skill to do it."
why: "Engineers answer for code they did not write and may not have read. A team has to decide what each person checks and owns, and how they keep the skill to take over when an agent fails."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [supervisory-control, human-factors, accountability, cognitive-debt, skills]
related: [agentic-engineering/steering, agentic-engineering/delivery, agentic-engineering/governance, foundations/technical-debt]
sources:
  - title: Supervisory Engineering Work
    author: Annie Vella
    url: "https://annievella.com/posts/supervisory-engineering-work/"
    type: article
    year: 2026
    note: "Describes the engineer's new job as directing agents, evaluating and correcting their output, and calibrating trust in them. Maps it to decades of research on supervisory control and automation. Ends with four recommendations for redesigning the job and the system around it."
  - title: Ironies of Automation
    author: Lisanne Bainbridge
    url: "https://www.complexcognition.co.uk/2021/06/ironies-of-automation.html"
    type: paper
    year: 1983
    note: "The classic paper on why automation makes the human operator's job harder. Monitoring is dull but critical, manual skills fade without practice, and the most successful automated systems need the most operator training."
  - title: How AI Impacts Skill Formation
    author: "Judy Hanwen Shen, Alex Tamkin (Anthropic)"
    url: "https://arxiv.org/abs/2601.20245"
    type: paper
    year: 2026
    note: "A randomised experiment with 52 developers learning a new Python library. Those with an AI assistant scored lower on understanding, code reading and debugging, without a significant speed gain on average. Developers who used the assistant to ask questions kept more than those who delegated the code."
  - title: How Generative and Agentic AI Shift Concern from Technical Debt to Cognitive Debt
    author: Margaret-Anne Storey
    url: "https://margaretstorey.com/blog/2026/02/09/cognitive-debt/"
    type: article
    year: 2026
    note: "Defines cognitive debt: a team's loss of shared understanding of what its system does and why. Lists warning signs and practices that rebuild that understanding."
  - title: How to effectively debug when you no longer understand the code
    author: Cindy Sridharan
    url: "https://copyconstruct.medium.com/how-to-effectively-debug-when-you-no-longer-understand-the-code-bd3dcb2c5f7b"
    agents: "https://web.archive.org/web/20261017150838/https://copyconstruct.medium.com/how-to-effectively-debug-when-you-no-longer-understand-the-code-bd3dcb2c5f7b"
    type: article
    year: 2026
    note: "Three production bugs fixed with agents in unfamiliar code. Shows a method for keeping an agent's conclusions honest: start from signals, compare against a control case, and keep only hypotheses that fit every fact."
  - title: ParticleDB 1.1.4
    author: Kyle Kingsbury (Jepsen)
    url: "https://jepsen.io/analyses/particledb-1.1.4#llm-tradeoffs"
    type: article
    year: 2026
    note: "Jepsen's test of a database a small team built with LLMs, commissioned by its maker. It found 96 issues, including lost writes, and documentation that described things that did not exist. The LLM tools claimed fixes they had not made, and the team could not explain the causes of most bugs."
---
