---
title: Test-driven development
description: "A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time."
why: "Tests give an agent a pass or fail check, so it can fix its own mistakes before anyone reviews the work. Writing the test first also checks that it built what was asked, not just something that runs."
tags: [testing, tdd, feedback-loop, verification, refactoring]
related: [foundations/solid, agentic-engineering/governance]
sources:
  - title: "Test Driven Development: By Example"
    author: Kent Beck
    url: "https://www.informit.com/store/test-driven-development-by-example-9780321146533"
    type: book
    year: 2002
    note: "The original book, with worked examples at the pace TDD is meant to run."
  - title: Canon TDD
    author: Kent Beck
    url: "https://newsletter.kentbeck.com/p/canon-tdd"
    type: article
    year: 2023
    note: "Beck's short, exact statement of the workflow and the common ways people get it wrong. My reference when someone argues about what TDD is."
  - title: "Growing Object-Oriented Software, Guided by Tests"
    author: "Steve Freeman, Nat Pryce"
    url: "https://growing-object-oriented-software.com/"
    type: book
    year: 2009
    note: "TDD at system scale: start from end-to-end tests and let tests shape the design. It connects TDD and architecture."
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
---

## My take

Tests are how an agent knows it is done. Without a failing test first, an agent reports success because the code runs, not because it does what I asked. A test written first turns my intent into a check the agent can run by itself, as often as it needs, before I spend time reviewing.

Test behaviour, not implementation. Tests tied to internals break on every refactor, and agents then "fix" them by weakening them. Watch for agents that skip or delete tests to get green.

## When it fits

- Logic with clear inputs and outputs.
- Bug fixes: reproduce the bug in a failing test first.
- Any task handed to an agent.

## When it doesn't

- Spikes and exploration, where the shape is not known yet. Write the tests once it is.
- Visual look and feel, which needs other checks.
