---
title: Domain-driven design
description: "Building software around a shared model of the business domain, split into bounded contexts with explicit relationships."
why: "As a product grows, one model of the business stops fitting every part of it, and code, teams and services start to mix meanings. Bounded contexts and a shared language help decide where to split code and teams and how the parts talk to each other."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [domain-modelling, bounded-context, ubiquitous-language, strategic-design, aggregates, eventstorming]
related: [foundations/complexity, foundations/solid, architecture/styles, team/team-design]
sources:
  - title: DDD Reference
    author: Eric Evans
    url: "https://www.domainlanguage.com/ddd/reference/"
    type: guide
    year: 2015
    note: "Evans's summary of every definition and pattern in his 2004 book Domain-Driven Design, plus three patterns added later. It is a reference for readers who know the ideas, free as a PDF under Creative Commons."
  - title: Bounded Context
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/BoundedContext.html"
    type: article
    year: 2014
    note: "A short explanation of the central pattern of strategic design: why one model stops fitting a large domain, and how separate bounded contexts with explicit relationships deal with it."
  - title: "Implementing Domain-Driven Design: Aggregates"
    author: Vaughn Vernon
    url: "https://www.informit.com/articles/article.aspx?p=2020371"
    type: article
    year: 2013
    note: "The aggregates chapter of Vernon's book, free on the publisher's site across nine pages. It gives four rules: model true invariants in consistency boundaries, design small aggregates, reference other aggregates by identity, and use eventual consistency outside the boundary. It also says when to break them."
  - title: Context Mapping
    author: DDD Crew
    url: "https://github.com/ddd-crew/context-mapping"
    type: repo
    year: 2020
    note: "A cheat sheet from the DDD Crew community on context maps: nine patterns for how bounded contexts relate, and three kinds of relationship between the teams that own them."
  - title: DDD Starter Modelling Process
    author: DDD Crew
    url: "https://github.com/ddd-crew/ddd-starter-modelling-process"
    type: repo
    year: 2020
    note: "An open, step-by-step path from a company's business model to a coded domain model, with a workshop technique for each step. It is written for beginners and says when to use it: a new product, a migration or a team reorganisation."
  - title: "Event Storming: 50,000 Orange Stickies Later"
    author: Alberto Brandolini
    url: "https://www.youtube.com/watch?v=NGXl1D-KwRI"
    type: talk
    year: 2018
    note: "A GOTO Amsterdam talk by the creator of EventStorming, a workshop where developers and domain experts map a business as a timeline of domain events on sticky notes. It covers the formats for different goals, from exploring a whole business to designing software."
  - title: Context Mapping with an AI-based Component
    author: Eric Evans
    url: "https://www.domainlanguage.com/articles/context-mapping-an-ai-based-component/"
    type: article
    year: 2026
    note: "Evans draws and refines a context map for an application that uses an LLM to classify code. The LLM gets its own bounded context behind an anticorruption layer, and a public taxonomy, NAICS, serves as a published language."
---
