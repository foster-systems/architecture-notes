---
title: Supervising agents
description: "The engineer's job when agents write the code: directing them, checking their output, stepping in, and keeping the skill to do it."
why: "Engineers now answer for code they rarely write or read. A team has to define what they own, what signals they get, and how they keep the skill to step in."
horizon: current
reviewed: 2026-11-09
sidebar:
  order: 3
tags: [supervisory-control, human-factors, accountability, cognitive-debt, verification]
related: [agentic-engineering/governance, agentic-engineering/delivery, foundations/tdd]
sources:
  - title: Supervisory Engineering Work
    author: Annie Vella
    url: "https://annievella.com/posts/supervisory-engineering-work/"
    type: article
    year: 2026
    note: "Names the engineer's new job: direct agents, evaluate their output, correct them and calibrate trust. Maps it to decades of supervisory-control research and ends with four design recommendations."
  - title: Ironies of Automation
    author: Lisanne Bainbridge
    url: "https://web.archive.org/web/20200717054958if_/https://www.ise.ncsu.edu/wp-content/uploads/2017/02/Bainbridge_1983_Automatica.pdf"
    type: paper
    year: 1983
    note: "The classic on why automation makes the human's job harder: monitoring is dull but critical, and skills fade without practice. Five pages, and it applies directly to agents."
  - title: "How to effectively debug when you no longer understand the code"
    author: "Cindy Sridharan"
    url: "https://copyconstruct.medium.com/how-to-effectively-debug-when-you-no-longer-understand-the-code-bd3dcb2c5f7b"
    agents: "https://r.jina.ai/https://copyconstruct.medium.com/how-to-effectively-debug-when-you-no-longer-understand-the-code-bd3dcb2c5f7b"
    type: article
    year: 2026
    note: "Three production bugs fixed with agents in unfamiliar code. Collect facts first, compare with a control case, keep only hypotheses that fit every fact. The engineer chose the controls and rejected unchecked claims."
  - title: How Generative and Agentic AI Shift Concern from Technical Debt to Cognitive Debt
    author: Margaret-Anne Storey
    url: "https://margaretstorey.com/blog/2026/02/09/cognitive-debt/"
    type: article
    year: 2026
    note: "Cognitive debt: a team loses its shared understanding of what the system does and why. Lists warning signs and practices that rebuild it."
  - title: "Multi-step SWE: Can Coding Agents Keep Building on Their Own Code Over Long Horizons?"
    author: "Xiangkai Zeng, Zheng Liu, Zihao Lin (Klavis AI)"
    url: "https://arxiv.org/abs/2611.07166"
    type: paper
    year: 2026
    note: "Chains of 5 to 15 dependent steps on the agent's own code, graded by mostly hidden tests: the best of nine models passes 57% of steps but completes 18.5% of attempts. In 52% of failed steps the agent reported success and named no gap. Built by a vendor of evaluation environments, with no single-step baseline to separate carried-over errors from hard steps."
  - title: ParticleDB 1.1.4
    author: Kyle Kingsbury (Jepsen)
    url: "https://jepsen.io/analyses/particledb-1.1.4#llm-tradeoffs"
    type: article
    year: 2026
    note: "An independent test of a database a small team built with LLMs: 96 issues, including lost writes. The tools claimed fixes they had not made, the docs were invented, and the team could not explain its own bugs."
  - title: "Automating Low-Risk Code Review at Meta: RADAR, Risk Calibration, and Review Efficiency"
    author: Chris Adams et al.
    url: "https://arxiv.org/abs/2605.30208"
    type: paper
    year: 2026
    note: "How Meta automates review and landing of low-risk code changes, AI-written ones included: gates, a risk score, LLM review, deterministic checks. Reverts are a third and incidents a fiftieth of other changes, but these changes were picked as low risk, so the authors call this not causal."
---
