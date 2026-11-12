---
title: Code review
description: "How a team reviews changes to its code: what reviewers look for, how fast reviews should be, and whether to review before or after merging."
why: "Where changes wait for review, review speed sets much of a team's lead time. Review is also how a small team spreads knowledge of the codebase and how it meets the separation of duties that compliance audits ask for."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [code-review, pull-requests, pair-programming, change-approval]
related: [delivery/ci-cd, delivery/testing-strategy, delivery/delivery-metrics, agentic-engineering/delivery, agentic-engineering/supervising-agents, law-and-compliance/soc2-and-iso27001]
sources:
  - title: "Google's Code Review Guidelines"
    author: Google
    url: "https://google.github.io/eng-practices/review/"
    type: guide
    year: 2019
    note: "Google's published guide to its code review process, in two parts: one for reviewers and one for authors of changes. Its main rule is to approve a change once it clearly improves the health of the code, even if it is not perfect. It also covers what to look for, small changes and answering a review request within one business day."
  - title: "Modern Code Review: A Case Study at Google"
    author: "Caitlin Sadowski, Emma Söderberg, Luke Church, Michal Sipko, Alberto Bacchelli"
    url: "https://research.google/pubs/modern-code-review-a-case-study-at-google/"
    type: paper
    year: 2018
    note: "A study of why and how Google reviews code, from 12 interviews, a survey and logs of 9 million reviewed changes. It finds small changes, with a median of 24 lines, and a median review time under four hours. Developers saw review as a way to teach each other the codebase, keep it sound and set shared norms."
  - title: "Expectations, Outcomes, and Challenges of Modern Code Review"
    author: "Alberto Bacchelli, Christian Bird"
    url: "https://www.microsoft.com/en-us/research/publication/expectations-outcomes-and-challenges-of-modern-code-review/"
    type: paper
    year: 2013
    note: "A study at Microsoft that observed, interviewed and surveyed developers and classified hundreds of review comments. Finding defects was the main motive for review, but reviews turned out to be less about defects than expected and to bring knowledge transfer, team awareness and alternative solutions. Understanding the change was the reviewers' main need."
  - title: Streamlining change approval
    author: DORA
    url: "https://dora.dev/capabilities/streamlining-change-approval/"
    type: guide
    year: 2025
    note: "A research summary on change approval from DORA, a research program run by Google Cloud. Approval by change boards or managers outside the team slowed delivery, and no evidence linked it to fewer failed changes. It recommends peer review recorded in the development platform, backed by automated tests, as the way to meet separation of duties."
  - title: "Ship / Show / Ask"
    author: Rouan Wilsenach
    url: "https://martinfowler.com/articles/ship-show-ask.html"
    type: article
    year: 2021
    note: "A branching strategy that sorts each change into one of three kinds. Ship merges into the mainline without review, Show merges at once and opens a pull request for review afterwards, and Ask waits for review before merging. It explains when a team should lean towards each."
  - title: From Async Code Reviews to Co-Creation Patterns
    author: Dragan Stepanović
    url: "https://www.infoq.com/articles/co-creation-patterns-software-development/"
    type: article
    year: 2022
    note: "An analysis of over 40,000 pull requests from more than 40 active repositories of product teams. Big pull requests drew fewer comments per changed line, and with small ones the wait between reviewer and author dominated lead time. It argues for pair and mob programming as continuous review."
---
