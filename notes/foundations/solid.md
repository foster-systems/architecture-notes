---
title: SOLID principles
description: "Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change."
why: "Agents work better in code with clear responsibilities and dependency direction: they read less, guess less and break less. SOLID gives the words and rules to set that structure and check it."
horizon: foundation
reviewed: 2026-11-03
sidebar:
  order: 4
tags: [design-principles, object-oriented-design, dependencies, modularity, maintainability]
related: [foundations/complexity, foundations/ddd, foundations/tdd]
sources:
  - title: Design Principles and Design Patterns
    author: Robert C. Martin
    url: "https://staff.cs.utu.fi/~jounsmed/doos_06/material/DesignPrinciplesAndPatterns.pdf"
    type: paper
    year: 2000
    note: "The original paper that ties design rot to bad dependency management. It covers OCP, LSP, DIP and ISP; SRP came later."
  - title: A Behavioral Notion of Subtyping
    author: "Barbara Liskov, Jeannette M. Wing"
    url: "https://www.cs.cmu.edu/~wing/publications/LiskovWing94.pdf"
    type: paper
    year: 1994
    note: "The formal source behind the L. It defines substitutability by behaviour and contracts."
  - title: The Single Responsibility Principle
    author: Robert C. Martin
    url: "https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html"
    type: article
    year: 2014
    note: "A short post on the single responsibility principle. It defines a responsibility by who asks for changes."
  - title: The Clean Architecture
    author: Robert C. Martin
    url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
    type: article
    year: 2012
    note: "The dependency rule in one short post: source code dependencies point inward, toward the business rules, across every boundary. The principles at system scale."
  - title: "CUPID: for joyful coding"
    author: Dan North
    url: "https://dannorth.net/blog/cupid-for-joyful-coding/"
    type: article
    year: 2022
    note: A critique that offers properties to aim for instead of rules to obey.
  - title: Maintainability sensors for coding agents
    author: Birgitta Böckeler
    url: "https://martinfowler.com/articles/sensors-for-coding-agents.html"
    type: article
    year: 2026
    note: "A hands-on report on enforcing dependency rules and checking modularity while an agent writes the code: where tools catch design drift and where people still must."
---
