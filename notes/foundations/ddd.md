---
title: Domain-driven design
description: "Building software around a shared model of the business domain, split into bounded contexts with explicit relationships."
why: "Bounded contexts and one shared language give agents precise names and clear scope, so they invent less and stop mixing concepts. When code is cheap to produce, the model behind it is what matters."
tags: [domain-modelling, bounded-context, ubiquitous-language, strategic-design, aggregates]
related: [foundations/solid, foundations/tdd, agentic-engineering/governance]
sources:
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: Eric Evans
    url: "https://www.informit.com/store/domain-driven-design-tackling-complexity-in-the-heart-9780321125217"
    type: book
    year: 2003
    note: The original. The strategic design chapters on bounded contexts and context maps matter most to me and age better than the tactical patterns.
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

## My take

These are the very basics: always good and always true. Agents understand each other when a solution follows a few specific, well-known patterns, instead of going YOLO and doing whatever each one sees fit.

DDD makes a solution easy to validate. It makes it easy to find the code behind a business function, and to see what really needs to change.

The strategic part matters most to me: bounded contexts and one language per context. Those names end up in code, in prompts and in agent instructions, so they must be precise.

## When it fits

- Business software with real domain complexity.
- Many teams, or many agents, working on one system.

## When it doesn't

- CRUD with little logic, and technical plumbing.
- Tactical patterns everywhere. Aggregates and repositories where a table and a form would do add cost, not clarity.

## How I apply it

In a low-code transaction workflow engine, one generic Resource aggregate carries every transaction. Document types are versioned schemas plus workflow configuration, not new code. External systems sit behind adapters, so the domain does not leak into integrations.
