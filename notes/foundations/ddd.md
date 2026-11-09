---
title: Domain-driven design
description: "Building software around a shared model of the business domain, split into bounded contexts with explicit relationships."
why: "Bounded contexts and one shared language give agents precise names and clear scope, so they invent less and stop mixing concepts."
horizon: foundation
reviewed: 2026-11-03
sidebar:
  order: 1
tags: [domain-modelling, bounded-context, ubiquitous-language, strategic-design, aggregates]
related: [foundations/solid, foundations/tdd, agentic-engineering/governance]
sources:
  - title: DDD Reference
    author: Eric Evans
    url: "https://www.domainlanguage.com/ddd/reference/"
    type: guide
    year: 2015
    note: A free summary of every pattern from Evans himself.
  - title: Bounded Context
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/BoundedContext.html"
    type: article
    year: 2014
    note: A short explanation of bounded contexts, a central pattern in DDD.
  - title: Effective Aggregate Design
    author: Vaughn Vernon
    url: "https://www.dddcommunity.org/library/vernon_2011/"
    type: article
    year: 2011
    note: "Practical rules for sizing aggregates and setting consistency boundaries, the tactical part teams most often get wrong."
  - title: Context Mapping
    author: DDD Crew
    url: "https://github.com/ddd-crew/context-mapping"
    type: repo
    year: 2020
    note: "A reference card for context maps: each relationship pattern between bounded contexts, with the team dynamics behind it. The strategic part of DDD."
  - title: Context Mapping with an AI-based Component
    author: Eric Evans
    url: "https://www.domainlanguage.com/articles/context-mapping-an-ai-based-component/"
    type: article
    year: 2026
    note: "Evans maps an LLM component as its own bounded context, behind an anticorruption layer. A short worked example of strategic design with a probabilistic part."
  - title: DDD Starter Modelling Process
    author: DDD Crew
    url: "https://github.com/ddd-crew/ddd-starter-modelling-process"
    type: repo
    year: 2020
    note: "An open, step-by-step path from understanding the business to code, with a workshop tool for each step."
  - title: Domain-Driven Design matters more when AI writes your code
    author: Miłosz Smółka
    url: "https://threedots.tech/post/ddd-and-ai-coding/"
    type: article
    year: 2026
    note: "A practitioner's case that domain understanding and consistent naming matter more once agents write the code, because agents copy whatever names they find."
---
