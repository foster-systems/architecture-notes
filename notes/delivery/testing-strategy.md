---
title: Testing strategy
description: "What to test at what level: the test pyramid, its alternatives and contract tests."
why: "A test suite costs time on every change. What each level of test buys decides whether a small team gets fast, trusted feedback or a slow, flaky build."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 2
tags: [testing, test-pyramid, integration-tests, contract-tests]
related: [foundations/tdd, delivery/ci-cd, architecture/api-design]
sources:
  - title: The Practical Test Pyramid
    author: Ham Vocke
    url: "https://martinfowler.com/articles/practical-test-pyramid.html"
    type: article
    year: 2018
    note: "A walk through each layer of Mike Cohn's test pyramid on a sample Spring Boot service, from unit tests to end-to-end. It includes contract tests and where each kind of test sits in a deployment pipeline."
  - title: On the Diverse And Fantastical Shapes of Testing
    author: Martin Fowler
    url: "https://martinfowler.com/articles/2021-test-shapes.html"
    type: article
    year: 2021
    note: "Martin Fowler's response to the debate over pyramids, honeycombs and trophies. It traces the history of the terms unit test and integration test, and calls the debate over proportions a distraction."
  - title: The Testing Trophy and Testing Classifications
    author: Kent C. Dodds
    url: "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
    type: article
    year: 2021
    note: "The author's explanation of the Testing Trophy, a model of return on investment across static, unit, integration and end-to-end tests. It was made for JavaScript applications and applies within one codebase."
  - title: Testing of Microservices
    author: "André Schaffer, Rickard Dybeck"
    url: "https://engineering.atspotify.com/2018/01/testing-of-microservices"
    type: article
    year: 2018
    note: "Spotify's case for a Testing Honeycomb in place of the pyramid for microservices. It favours integration tests through a service's interaction points, with examples for a SQL-backed REST service and an event consumer."
  - title: Testing Overview
    author: Adam Bender
    url: "https://abseil.io/resources/swe-book/html/ch11.html"
    type: guide
    year: 2020
    note: "A chapter of Software Engineering at Google. It classifies tests by size and by scope, and recommends about 80% unit, 15% integration and 5% end-to-end tests by test case count."
  - title: "Introduction | Pact Docs"
    author: Pact
    url: "https://docs.pact.io/"
    type: docs
    year: 2026
    note: "Documentation for Pact, a consumer-driven contract testing tool for HTTP and message-based integrations. Contracts are generated from consumer tests and cover only what consumers use."
  - title: "Consumer-Driven Contracts: A Service Evolution Pattern"
    author: Ian Robinson
    url: "https://martinfowler.com/articles/consumerDrivenContracts.html"
    type: article
    year: 2006
    note: "The article that introduced the pattern of deriving a provider's contract from its consumers' expectations. It defines provider, consumer and consumer-driven contracts, and discusses implementation options, benefits and liabilities."
---
