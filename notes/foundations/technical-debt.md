---
title: Technical debt
description: "What technical debt is and how to manage it."
why: "Every small company takes on debt to ship. Knowing which debt slows the team, and which can wait, decides where cleanup time goes."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 5
tags: [technical-debt, code-quality, migrations, maintenance]
related: [foundations/complexity, delivery/delivery-metrics, architecture/architecture-decisions, team/engineering-strategy]
sources:
  - title: The WyCash Portfolio Management System
    author: Ward Cunningham
    url: "https://c2.com/doc/oopsla92.html"
    type: paper
    year: 1992
    note: "Ward Cunningham's OOPSLA '92 experience report, which compares shipping first-time code to going into debt. It is short, and the comparison comes in its section on failing to consolidate code."
  - title: Technical Debt
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/TechnicalDebt.html"
    type: article
    year: 2019
    note: "A short explanation of the metaphor: cruft makes changes slower, and that extra effort is the interest. It covers when cleanup pays off and why cruft in code that changes often comes first."
  - title: Technical Debt Quadrant
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"
    type: article
    year: 2009
    note: "A classification of debt along two axes: prudent or reckless, and deliberate or inadvertent."
  - title: Towards an understanding of technical debt
    author: Kellan Elliott-McCrea
    url: "https://kellanem.com/notes/towards-an-understanding-of-technical-debt"
    type: article
    year: 2016
    note: "An essay that separates five things people call technical debt, including maintenance work, code that resists change and dependencies that resist upgrading. It recommends identifying the specific problem and improving it by measured iteration."
  - title: "Migrations: the sole scalable fix to tech debt."
    author: Will Larson
    url: "https://lethain.com/migrations/"
    type: article
    year: 2018
    note: "A three-phase playbook for running migrations across a growing company: derisk, enable, finish. It draws on the author's experience at Uber."
  - title: Defining, Measuring, and Managing Technical Debt
    author: "Ciera Jaspan, Collin Green"
    url: "https://research.google/pubs/defining-measuring-and-managing-technical-debt/"
    type: paper
    year: 2023
    note: "Google Research's page for an IEEE Software column on understanding, measuring and managing technical debt at Google. It treats debt as an entangled human and technical problem. The page has the abstract and a link to IEEE Xplore."
  - title: "Code Red: The Business Impact of Code Quality -- A Quantitative Study of 39 Proprietary Production Codebases"
    author: "Adam Tornhill, Markus Borg"
    url: "https://arxiv.org/abs/2203.04374"
    type: paper
    year: 2022
    note: "A study of 30,737 files in 39 proprietary codebases that links code quality to defects and development time. Its analysis uses CodeScene, and Adam Tornhill founded CodeScene."
---
