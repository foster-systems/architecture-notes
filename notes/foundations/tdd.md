---
title: Test-driven development
description: "A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time."
why: "Tests give an agent a pass or fail check, so it can fix its own mistakes before anyone reviews the work. Writing the test first also checks that it built what was asked."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 2
tags: [testing, tdd, feedback-loop, verification, refactoring]
related: [foundations/solid, agentic-engineering/governance]
sources:
  - title: Canon TDD
    author: Kent Beck
    url: "https://newsletter.kentbeck.com/p/canon-tdd"
    type: article
    year: 2023
    note: "Beck's short, exact statement of the workflow and the common ways people get it wrong."
  - title: Test Desiderata
    author: Kent Beck
    url: "https://testdesiderata.com/"
    type: guide
    year: 2019
    note: "Twelve properties that make tests valuable, such as behavioural, structure-insensitive and deterministic, and how they trade off. A short checklist for judging tests an agent writes."
  - title: "TDD, Where Did It All Go Wrong"
    author: Ian Cooper
    url: "https://www.youtube.com/watch?v=EZ05e7EMOLM"
    type: talk
    year: 2017
    note: "Why test suites become brittle: they test implementation details instead of behaviour. Agents make the same mistake."
  - title: "Augmented Coding: Beyond the Vibes"
    author: Kent Beck
    url: "https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes"
    type: article
    year: 2025
    note: "The creator of TDD uses it to steer a coding agent on a real project, and names the habits to watch, like disabling tests to get them green."
  - title: Red/green TDD
    author: Simon Willison
    url: "https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/"
    type: guide
    year: 2026
    note: A short chapter on why test-first fits coding agents and why seeing the test fail first matters. Easy to turn into a standing instruction.
  - title: "Are \"Solved Issues\" in SWE-bench Really Solved Correctly? An Empirical Study"
    author: "You Wang, Michael Pradel, Zhongxin Liu"
    url: "https://arxiv.org/abs/2503.15223"
    type: paper
    year: 2025
    note: "A peer-reviewed study of agent patches that pass SWE-bench's tests: almost a third behave differently from the human fix, and many are wrong."
---
