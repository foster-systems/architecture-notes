---
title: Refactoring and rewrites
description: "Improving the structure of working code without changing what it does, and choosing between rewriting a system and replacing it piece by piece."
why: "Every product outgrows its first code. Small, steady refactoring keeps it easy to change, while a rewrite from scratch can stop a product from shipping for years."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 6
tags: [refactoring, rewrites, legacy-modernization, evolutionary-design]
related: [foundations/technical-debt, foundations/tdd, foundations/complexity, architecture/styles]
sources:
  - title: Refactoring
    author: Martin Fowler
    url: "https://refactoring.com/"
    type: guide
    year: 2018
    note: "Fowler's site for his book Refactoring, built around the second edition. It defines refactoring as a series of small behaviour-preserving transformations that keep the system working after each step, places it in day-to-day programming, and links the online catalogue of refactorings."
  - title: Opportunistic Refactoring
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/OpportunisticRefactoring.html"
    type: article
    year: 2011
    note: "A short article by the author of Refactoring on where refactoring fits in daily work. It argues for cleaning code whenever and wherever someone sees the need, including preparatory refactoring before a feature, over separate refactoring phases."
  - title: A Field Study of Refactoring Challenges and Benefits
    author: "Miryung Kim, Thomas Zimmermann, Nachiappan Nagappan"
    url: "https://www.microsoft.com/en-us/research/publication/a-field-study-of-refactoring-challenges-and-benefits/"
    type: paper
    year: 2012
    note: "An FSE paper on refactoring at Microsoft, combining a survey, interviews and Windows 7 version history. Developers saw refactoring as costly and risky, and modules refactored by a dedicated team ended up with fewer inter-module dependencies and post-release defects. The page links the full PDF."
  - title: "Things You Should Never Do, Part I"
    author: Joel Spolsky
    url: "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/"
    type: article
    year: 2000
    note: "The classic case against rewriting a product from scratch, by the co-founder of Fog Creek Software and Stack Overflow. It uses Netscape's rewrite as the example and argues that old code holds years of bug fixes and knowledge that a rewrite throws away."
  - title: Strangler Fig
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/StranglerFigApplication.html"
    type: article
    year: 2024
    note: "Fowler's 2024 version of the article that coined the strangler fig metaphor for replacing a system gradually. New code grows beside the old system and takes over its behaviour part by part, in place of one big replacement."
  - title: Patterns of Legacy Displacement
    author: "Ian Cartwright, Rob Horn, James Lewis"
    url: "https://martinfowler.com/articles/patterns-legacy-displacement/"
    type: guide
    year: 2024
    note: "A catalogue of patterns for replacing a system in parts: set the outcomes, find seams to split the work, deliver each part, and change the organisation so the cycle continues. It includes a worked example. The authors are technical directors at Thoughtworks, which sells modernisation consulting."
---
