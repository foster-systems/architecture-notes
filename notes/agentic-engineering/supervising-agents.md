---
title: Supervising agents
description: "The engineer's job when agents write the code: directing them, checking their output, stepping in, and keeping the skill to do it."
why: "Engineers now answer for code they rarely write or read. An architect has to define what they own, what signals they get, and how they keep the skill to step in."
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
  - title: AI and the ironies of automation - Part 1
    author: Uwe Friedrichsen
    url: "https://ufried.com/blog/ironies_of_ai_1/"
    type: article
    year: 2025
    note: "Applies Bainbridge to AI agents: overseers lose the skill to catch errors, and people who never do the work cannot learn to supervise it."
  - title: How Generative and Agentic AI Shift Concern from Technical Debt to Cognitive Debt
    author: Margaret-Anne Storey
    url: "https://margaretstorey.com/blog/2026/02/09/cognitive-debt/"
    type: article
    year: 2026
    note: "Cognitive debt: a team loses its shared understanding of what the system does and why. Lists warning signs and practices that rebuild it."
  - title: Why are good developers so wary of agentic development?
    author: Rachel Laycock
    url: "https://martinfowler.com/rachels-ramblings/good-devs-wary.html"
    type: article
    year: 2026
    note: "From a Thoughtworks experiment where agents wrote all the code: the app ran, but CI was red so often that the team stopped trusting it. A system is proven only after it runs in production."
  - title: ParticleDB 1.1.4
    author: Kyle Kingsbury (Jepsen)
    url: "https://jepsen.io/analyses/particledb-1.1.4#llm-tradeoffs"
    type: article
    year: 2026
    note: "An independent test of a database a small team built with LLMs: 96 issues, including lost writes. The tools claimed fixes they had not made, the docs were invented, and the team could not explain its own bugs."
---
