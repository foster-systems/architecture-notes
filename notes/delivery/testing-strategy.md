---
title: Testing strategy
description: "What to test at which level: the test pyramid and its alternatives, contract tests and code coverage."
why: "A test suite runs on every change and costs time on each one. What each level of test buys decides whether a small team gets fast, trusted feedback or a slow, flaky build that people learn to ignore."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [testing, test-pyramid, integration-tests, contract-tests, code-coverage]
related: [foundations/tdd, delivery/ci-cd, delivery/code-review, architecture/api-design]
sources:
  - title: The Practical Test Pyramid
    author: Ham Vocke
    url: "https://martinfowler.com/articles/practical-test-pyramid.html"
    type: article
    year: 2018
    note: "A walk through each layer of Mike Cohn's test pyramid on a sample Spring Boot service, from unit tests to end-to-end tests. It includes consumer-driven contract tests with Pact and shows where each kind of test runs in a deployment pipeline."
  - title: On the Diverse And Fantastical Shapes of Testing
    author: Martin Fowler
    url: "https://martinfowler.com/articles/2021-test-shapes.html"
    type: article
    year: 2021
    note: "Martin Fowler's response to the debate over test pyramids, honeycombs and trophies. It shows that people mean different things by unit test and integration test, such as sociable and solitary unit tests. It closes with a quote calling the argument over proportions a distraction from writing fast, reliable, expressive tests."
  - title: Testing Overview
    author: Adam Bender
    url: "https://abseil.io/resources/swe-book/html/ch11.html"
    type: guide
    year: 2020
    note: "A chapter of Software Engineering at Google. It classifies tests by size and by scope, and aims for roughly 80% unit, 15% integration and 5% end-to-end tests by count. It explains why flaky tests destroy trust in a suite, with Google's own flake rate."
  - title: The Testing Trophy and Testing Classifications
    author: Kent C. Dodds
    url: "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
    type: article
    year: 2021
    note: "The author's explanation of the Testing Trophy, a model of return on investment across static analysis, unit, integration and end-to-end tests. It grew from his advice to write mostly integration tests, and was made for code in one JavaScript codebase. Dodds created Testing Library and sells testing courses."
  - title: Testing of Microservices
    author: "André Schaffer, Rickard Dybeck"
    url: "https://engineering.atspotify.com/2018/01/testing-of-microservices"
    type: article
    year: 2018
    note: "Spotify's case for a Testing Honeycomb in place of the pyramid for microservices. It favours integration tests through a service's interaction points, with examples for a SQL-backed REST service and an event consumer."
  - title: "Consumer-Driven Contracts: A Service Evolution Pattern"
    author: Ian Robinson
    url: "https://martinfowler.com/articles/consumerDrivenContracts.html"
    type: article
    year: 2006
    note: "The article that introduced deriving a provider's contract from what its consumers expect of it. It defines provider, consumer and consumer-driven contracts, and discusses implementation, benefits and liabilities."
  - title: Code Coverage Best Practices
    author: "Carlos Arguelles, Marko Ivanković, Adam Bender"
    url: "https://testing.googleblog.com/2020/08/code-coverage-best-practices.html"
    agents: "https://testing.googleblog.com/feeds/posts/default/8115141727768781054"
    type: article
    year: 2020
    note: "Google's guidance on using code coverage to find untested risk without turning it into a target. It gives Google's rough thresholds of 60% acceptable, 75% commendable and 90% exemplary, and suggests per-commit coverage goals. It points to mutation testing as a better check of test quality."
---
