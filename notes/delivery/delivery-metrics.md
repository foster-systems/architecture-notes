---
title: Delivery metrics
description: "How to measure software delivery and developer productivity: DORA metrics, the SPACE and developer experience frameworks, and the limits of measurement."
why: "Founders and boards ask whether engineering is getting faster, and the wrong metric does damage once it becomes a target. Research links a few delivery measures to better results, and counts of output such as lines of code mislead."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [dora, space, developer-experience, productivity, metrics]
related: [delivery/ci-cd, delivery/code-review, agentic-engineering/adoption, team/engineering-strategy, team/technical-leadership]
sources:
  - title: "DORA's software delivery performance metrics"
    author: Nathen Harvey (DORA)
    url: "https://dora.dev/guides/dora-metrics/"
    type: guide
    year: 2026
    note: "DORA's definition of its five delivery metrics, from a research program run at Google. Change lead time, deployment frequency and failed deployment recovery time measure throughput; change fail rate and deployment rework rate measure instability. It lists common pitfalls, such as setting the metrics as goals or comparing unlike teams."
  - title: "The SPACE of Developer Productivity: There's more to it than you think"
    author: "Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, Jenna Butler"
    url: "https://queue.acm.org/detail.cfm?id=3454124"
    agents: "https://web.archive.org/web/20251231074500/https://queue.acm.org/detail.cfm?id=3454124"
    type: paper
    year: 2021
    note: "The ACM Queue paper that introduced the SPACE framework: satisfaction, performance, activity, communication and efficiency. It holds that no single metric or dimension captures developer productivity, and gives example metrics per dimension at individual, team and system level."
  - title: "DevEx: What Actually Drives Productivity"
    author: "Abi Noda, Margaret-Anne Storey, Nicole Forsgren, Michaela Greiler"
    url: "https://queue.acm.org/detail.cfm?id=3595878"
    agents: "https://web.archive.org/web/20251231133725/https://queue.acm.org/detail.cfm?id=3595878"
    type: paper
    year: 2023
    note: "The ACM Queue paper that frames developer experience through three dimensions: feedback loops, cognitive load and flow state. It gives a way to measure them from developer surveys combined with data from engineering systems. Its lead author, Abi Noda, co-founded DX, which sells a developer experience platform."
  - title: Measuring Engineering Productivity
    author: Ciera Jaspan
    url: "https://abseil.io/resources/swe-book/html/ch07.html"
    type: guide
    year: 2020
    note: "A chapter of Software Engineering at Google on how Google studies its engineers' productivity. It covers when a measurement is worth making, the Goals/Signals/Metrics framework that ties each metric to a goal, and checking metrics against qualitative data."
  - title: "What Improves Developer Productivity at Google? Code Quality"
    author: "Lan Cheng, Emerson Murphy-Hill, Mark Canning, Ciera Jaspan, Collin Green, Andrea Knight Dolan, Nan Zhang, Elizabeth Kammer"
    url: "https://research.google/pubs/what-improves-developer-productivity-at-google-code-quality/"
    type: paper
    year: 2022
    note: "A peer-reviewed study of which of 39 factors affect how productive Google's developers feel, using panel data over time. Code quality, technical debt, tools, team communication, goals and organizational change were linked to productivity. Rises in perceived code quality tended to be followed by rises in productivity, and not the reverse."
  - title: "Measuring developer productivity? A response to McKinsey"
    author: "Kent Beck, Gergely Orosz"
    url: "https://tidyfirst.substack.com/p/measuring-developer-productivity"
    type: article
    year: 2023
    note: "Kent Beck's version of the first part of an essay written with Gergely Orosz. It models engineering work as effort, output, outcome and impact, and asks who wants productivity measured and why. It shows how measuring effort and output distorts behaviour, with an example from survey scores at Facebook."
  - title: Cannot Measure Productivity
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/CannotMeasureProductivity.html"
    type: article
    year: 2003
    note: "A short argument that software productivity cannot be measured because output cannot. It shows why lines of code and function points fail as measures of output."
---
