---
title: Test-driven development
description: "A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time."
why: "Tests written with the code give a fast, repeatable check that a change works and broke nothing else. That keeps code safe to change as the product and team grow, whether a person or an agent wrote it."
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [testing, tdd, feedback-loop, verification, refactoring]
related: [foundations/refactoring, delivery/testing-strategy, agentic-engineering/steering, agentic-engineering/supervising-agents]
sources:
  - title: Canon TDD
    author: Kent Beck
    url: "https://newsletter.kentbeck.com/p/canon-tdd"
    type: article
    year: 2023
    note: "Beck's short, exact statement of the workflow: list the test scenarios, turn one into a failing test, make it pass, optionally refactor, repeat. Each step names the common mistakes, such as deleting assertions to make a test pass."
  - title: Test Desiderata
    author: Kent Beck
    url: "https://testdesiderata.com/"
    type: guide
    year: 2019
    note: "Twelve properties that make tests valuable, such as isolated, deterministic, behavioural and structure-insensitive. It notes which properties support each other and which trade off, and links a short video on each."
  - title: "TDD, Where Did It All Go Wrong"
    author: Ian Cooper
    url: "https://www.youtube.com/watch?v=EZ05e7EMOLM"
    type: talk
    year: 2017
    note: "A DevTernity talk on why many TDD test suites become brittle and costly: they test implementation details instead of behaviour. It goes back to Beck's original book for how TDD was meant to work."
  - title: "Realizing quality improvement through test driven development: results and experiences of four industrial teams"
    author: "Nachiappan Nagappan, E. Michael Maximilien, Thirumalesh Bhat, Laurie Williams"
    url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2009/10/Realizing-Quality-Improvement-Through-Test-Driven-Development-Results-and-Experiences-of-Four-Industrial-Teams-nagappan_tdd.pdf"
    type: paper
    year: 2008
    note: "Case studies of three Microsoft teams and one IBM team, published in Empirical Software Engineering. Pre-release defect density fell by 40% to 90% against similar projects without TDD, and the teams estimated that initial development took 15% to 35% longer."
  - title: "A Dissection of the Test-Driven Development Process: Does It Really Matter to Test-First or to Test-Last?"
    author: "Davide Fucci, Hakan Erdogmus, Burak Turhan, Markku Oivo, Natalia Juristo"
    url: "https://arxiv.org/abs/1611.05994"
    type: paper
    year: 2016
    note: "A study of 39 professionals, later published in IEEE Transactions on Software Engineering. Quality and productivity went with small, steady steps; whether the test came before or after the code made no important difference."
  - title: "Augmented Coding: Beyond the Vibes"
    author: Kent Beck
    url: "https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes"
    type: article
    year: 2025
    note: "Beck's account of building a B+ tree library in Rust and Python with a coding agent, steered by TDD. He names the signs that the agent is going off track: loops, features not asked for, and cheating such as disabling or deleting tests."
---
