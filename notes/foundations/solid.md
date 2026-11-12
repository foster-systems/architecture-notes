---
title: SOLID principles
description: "Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change."
why: "In a growing codebase most changes touch code that other code depends on. These principles say how to split responsibilities and which way dependencies should point, so a change in one place does not force changes everywhere."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [design-principles, object-oriented-design, dependencies, modularity, maintainability]
related: [foundations/complexity, foundations/ddd, foundations/tdd, architecture/styles]
sources:
  - title: Design Principles and Design Patterns
    author: Robert C. Martin
    url: "https://staff.cs.utu.fi/~jounsmed/doos_06/material/DesignPrinciplesAndPatterns.pdf"
    type: paper
    year: 2000
    note: "The paper where Martin set out most of the principles together. It names four symptoms of rotting design (rigidity, fragility, immobility and viscosity), blames bad dependency management, and covers OCP, LSP, DIP and ISP with principles for packages; SRP came later."
  - title: A Behavioral Notion of Subtyping
    author: "Barbara Liskov, Jeannette M. Wing"
    url: "https://www.cs.cmu.edu/~wing/publications/LiskovWing94.pdf"
    type: paper
    year: 1994
    note: "The formal source behind the L, published in ACM TOPLAS. It defines a subtype by behaviour: any property provable about objects of the supertype must hold for objects of the subtype. The PDF is a scan with a text layer."
  - title: The Single Responsibility Principle
    author: Robert C. Martin
    url: "https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html"
    type: article
    year: 2014
    note: "Martin's own restatement of the principle. It defines a responsibility by the people who ask for changes: gather together what changes for the same reasons, separate what changes for different reasons."
  - title: The Clean Architecture
    author: Robert C. Martin
    url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
    type: article
    year: 2012
    note: "The dependency rule applied to a whole application: source code dependencies point inward, toward the business rules, across every boundary. It merges hexagonal, onion and similar architectures into one picture."
  - title: Inversion of Control Containers and the Dependency Injection pattern
    author: Martin Fowler
    url: "https://martinfowler.com/articles/injection.html"
    type: article
    year: 2004
    note: "The article that named dependency injection, the form of inversion of control in which an assembler supplies a class's dependencies from outside. It compares constructor, setter and interface injection with a service locator, and argues that separating configuration from use matters more than the choice between them."
  - title: "CUPID: for joyful coding"
    author: Dan North
    url: "https://dannorth.net/blog/cupid-for-joyful-coding/"
    type: article
    year: 2022
    note: "A critique of SOLID by the originator of behaviour-driven development. It proposes five properties to aim for instead of rules to obey: composable, Unix philosophy, predictable, idiomatic and domain-based."
---
