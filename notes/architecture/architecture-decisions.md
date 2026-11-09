---
title: Architecture decisions
description: "Making architecture decisions and recording them so the reasoning survives: ADRs, RFCs, design docs and C4 diagrams."
why: "Decisions outlast the people who made them. Short written records show a new engineer or an agent why the system is the way it is before they change it."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 5
tags: [adr, rfc, design-docs, c4, decision-making]
related: [architecture/build-or-buy, foundations/ddd, team/technical-leadership, team/engineering-strategy, agentic-engineering/governance]
sources:
  - title: "Documenting Architecture Decisions"
    author: Michael Nygard
    url: "https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions"
    type: article
    year: 2011
    note: "The post that proposes keeping short, version-controlled records of architecturally significant decisions. It also reports early feedback from projects that adopted them."
  - title: "About MADR"
    author: ADR GitHub organization
    url: "https://adr.github.io/madr/"
    type: tool
    year: 2024
    note: "A lean Markdown template for architectural decision records. The site shows an example and covers setup, creating and linting records, and organizing them in large projects."
  - title: "Design Docs at Google"
    author: Malte Ubl
    url: "https://www.industrialempathy.com/posts/design-docs-at-google/"
    type: article
    year: 2020
    note: "How Google engineers use informal documents, written before coding, to set out a system's implementation strategy and the trade-offs behind key decisions. It covers typical structure, when a doc is worth the overhead, and how docs are reviewed and maintained."
  - title: "RFD 1 Requests for Discussion"
    author: Jessie Frazelle
    url: "https://oxide.computer/blog/rfd-1-requests-for-discussion"
    type: article
    year: 2020
    note: "Oxide Computer Company's published description of its Request for Discussion process, modeled on the IETF's RFCs. It covers when to write an RFD, the six states a document moves through and the supporting tools. A note at the top says the process has changed since 2020."
  - title: "Scaling the Practice of Architecture, Conversationally"
    author: Andrew Harmel-Law
    url: "https://martinfowler.com/articles/scaling-architecture-conversationally.html"
    type: article
    year: 2021
    note: "Describes a decentralized way to practice architecture, with the Advice Process as the core decision method. Architecture Decision Records, an advisory forum, team-sourced principles and a technology radar support it."
  - title: "C4 model"
    author: Simon Brown
    url: "https://c4model.com/"
    type: framework
    year: 2026
    note: "The official site of an approach to diagramming software architecture in a hierarchy of abstractions: software system, container, component and code. It defines the diagrams for each level and the notation."
  - title: "2016 Letter to Shareholders"
    author: Jeff Bezos
    url: "https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders"
    type: article
    year: 2016
    note: "A letter with a section on decision speed. It says reversible two-way-door decisions can use a light-weight process and most decisions should be made with about 70% of the information one wishes to have. It also covers disagree and commit and escalating misalignment."
---
