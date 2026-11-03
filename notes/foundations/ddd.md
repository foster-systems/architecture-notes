---
title: Domain-driven design
description: "Building software around a shared model of the business domain, split into bounded contexts with explicit relationships."
why: "Bounded contexts and one shared language give agents precise names and clear scope, so they invent less and stop mixing concepts. When code is cheap to produce, the model behind it is what matters."
tags: [domain-modelling, bounded-context, ubiquitous-language, strategic-design, aggregates]
related: [foundations/solid, foundations/tdd, agentic-engineering/governance]
sources:
  - title: DDD Reference
    author: Eric Evans
    url: "https://www.domainlanguage.com/ddd/reference/"
    type: guide
    year: 2015
    note: A free summary of every pattern from Evans himself. I use it to check a definition without reopening the book.
  - title: Bounded Context
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/BoundedContext.html"
    type: article
    year: 2014
    note: The clearest short explanation of the most important idea in DDD. I send it to a team before any discussion about boundaries.
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
    note: "A reference card for context maps: each relationship pattern between bounded contexts, with the team dynamics behind it. The strategic part of DDD, which matters most to me."
  - title: DDD Starter Modelling Process
    author: DDD Crew
    url: "https://github.com/ddd-crew/ddd-starter-modelling-process"
    type: repo
    year: 2020
    note: "An open, step-by-step path from understanding the business to code, with a workshop tool for each step. Good for starting a team without debating theory."
  - title: Domain-Driven Design matters more when AI writes your code
    author: Miłosz Smółka
    url: "https://threedots.tech/post/ddd-and-ai-coding/"
    type: article
    year: 2026
    note: "A practitioner's case that domain understanding and consistent naming matter more once agents write the code, because agents copy whatever names they find."
---

## How I apply it

In a low-code transaction workflow engine, one generic Resource aggregate carries every transaction. Document types are versioned schemas plus workflow configuration, not new code. External systems sit behind adapters, so the domain does not leak into integrations.
