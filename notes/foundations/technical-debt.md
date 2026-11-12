---
title: Technical debt
description: "Shortcuts and aging choices in code and design that make later changes slower, and how to decide which to pay back."
why: "Every young company takes on debt to ship. Knowing which debt slows the team and which can wait decides where cleanup time goes, and how to explain that time to the rest of the business."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [technical-debt, code-quality, migrations, maintenance]
related: [foundations/complexity, foundations/refactoring, delivery/delivery-metrics, architecture/architecture-decisions, team/engineering-strategy]
sources:
  - title: The WyCash Portfolio Management System
    author: Ward Cunningham
    url: "https://c2.com/doc/oopsla92.html"
    type: paper
    year: 1992
    note: "Cunningham's OOPSLA '92 experience report, which first compared shipping first-time code to going into debt. The comparison comes in its short passage on failing to consolidate code: a little debt speeds development if it is repaid promptly."
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
    note: "An essay by a former CTO of Etsy that separates five things people call technical debt, including maintenance work, code that resists change and dependencies that resist upgrading. It recommends naming the specific problem and improving it by measured iteration."
  - title: "Measure It? Manage It? Ignore It? Software Practitioners and Technical Debt"
    author: "Neil A. Ernst, Stephany Bellomo, Ipek Ozkaya, Robert L. Nord, Ian Gorton"
    url: "https://www.sei.cmu.edu/library/measure-it-manage-it-ignore-it-software-practitioners-and-technical-debt/"
    type: paper
    year: 2015
    note: "An ESEC/FSE paper from the Software Engineering Institute, based on a survey of 1,831 engineers and architects and seven interviews. Architectural decisions were the most important source of technical debt, and existing tools did little to manage it. The page links the full PDF."
  - title: "Code Red: The Business Impact of Code Quality -- A Quantitative Study of 39 Proprietary Production Codebases"
    author: "Adam Tornhill, Markus Borg"
    url: "https://arxiv.org/abs/2203.04374"
    type: paper
    year: 2022
    note: "A study of 30,737 files in 39 proprietary codebases: low-quality code had 15 times more defects, and its issues took on average 124% longer to resolve. The analysis uses CodeScene, a product of the company Adam Tornhill founded."
  - title: "Migrations: the sole scalable fix to tech debt."
    author: Will Larson
    url: "https://lethain.com/migrations/"
    type: article
    year: 2018
    note: "A three-phase playbook for running migrations across a growing company: derisk, enable, finish. It draws on the author's experience at Uber."
---
