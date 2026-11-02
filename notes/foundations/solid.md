---
title: SOLID principles
description: "Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change."
why: "Agents work better in code with clear responsibilities and dependency direction: they read less, guess less and break less. SOLID gives the words and rules to set that structure and check it."
tags: [design-principles, object-oriented-design, dependencies, modularity, maintainability]
related: [foundations/ddd, foundations/tdd]
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
    note: "The formal source behind the L. Substitutability is about behaviour and contracts, not type signatures."
  - title: The Single Responsibility Principle
    author: Robert C. Martin
    url: "https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html"
    type: article
    year: 2014
    note: "SRP is the most misread of the five, and this short post fixes it: a responsibility is defined by who asks for changes, not by how small a class is."
  - title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design"
    author: Robert C. Martin
    url: "https://www.informit.com/store/clean-architecture-a-craftsmans-guide-to-software-structure-9780134494166"
    type: book
    year: 2017
    note: "The most complete current version of the principles, then scaled up to components and system boundaries, which is where I use them as an architect."
  - title: "CUPID: for joyful coding"
    author: Dan North
    url: "https://dannorth.net/blog/cupid-for-joyful-coding/"
    type: article
    year: 2022
    note: A well-argued critique that offers properties to aim for instead of rules to obey. It keeps me from applying SOLID as dogma.
  - title: Maintainability sensors for coding agents
    author: Birgitta Böckeler
    url: "https://martinfowler.com/articles/sensors-for-coding-agents.html"
    type: article
    year: 2026
    note: "A hands-on report on enforcing dependency rules and checking modularity while an agent writes the code: where tools catch design drift and where people still must."
---

## My take

SOLID is five rules with one goal: code that stays easy to change. I care about two outcomes more than the letters. Each module has one reason to change. Dependencies point toward the stable core, not toward details.

Agents make this more important. An agent changing a module with one clear job reads less and breaks less. And once dependency direction is a rule, a tool can check it on every change instead of a person arguing about it in review.

## When it fits

- Code that lives for years and is changed by many people or agents.
- Boundaries between modules and services: the same ideas scale up.

## When it doesn't

- Scripts, spikes and throwaway code.
- Interfaces with one implementation, added only to follow the open-closed principle.
