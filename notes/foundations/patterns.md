---
title: Architecture patterns
description: Catalogues of named, reusable solutions for structuring applications and distributed systems.
why: "Pattern names are a shared language for people and agents: 'add a circuit breaker' says more than a page of prompt. A good catalogue lets both look up the problem, the solution and the trade-offs."
tags: [patterns, distributed-systems, integration, microservices, reference]
related: [foundations/ddd, foundations/solid]
sources:
  - title: Architectural Patterns
    author: Patrick van Bergen
    url: "https://architectural-patterns.net/"
    agents: "https://github.com/garfix/architectural-patterns"
    type: guide
    year: 2026
    note: "A wide index of patterns that shape a whole application, from data and control flow to access control and deployment. Each has a short definition and links to go deeper. Good as a checklist at the start of a project."
  - title: Cloud Design Patterns
    author: Microsoft
    url: "https://learn.microsoft.com/azure/architecture/patterns/"
    agents: "https://github.com/MicrosoftDocs/architecture-center/tree/main/docs/patterns"
    type: docs
    year: 2026
    note: "About 45 technology-neutral patterns for distributed systems, each with the problem, the trade-offs and when not to use it. Kept current, with open Markdown source."
  - title: Microservice Architecture patterns
    author: Chris Richardson
    url: "https://microservices.io/patterns/"
    type: guide
    year: 2026
    note: "The pattern language for microservices: service boundaries, data, sagas, messaging, testing, deployment and observability. Shows how the patterns depend on each other."
  - title: Enterprise Integration Patterns
    author: "Gregor Hohpe, Bobby Woolf"
    url: "https://www.enterpriseintegrationpatterns.com/"
    type: book
    year: 2003
    note: "65 messaging patterns that still name most of what queues, event buses and agent-to-agent messaging do. The pattern summaries on the site are free to read."
  - title: Catalog of Patterns of Distributed Systems
    author: Unmesh Joshi
    url: "https://martinfowler.com/articles/patterns-of-distributed-systems/"
    type: article
    year: 2023
    note: "30 patterns found inside databases, brokers and coordination services: replication, leader election, clocks, partitioning. Explains what managed services do for you."
  - title: The System Design Primer
    author: Donne Martin
    url: "https://github.com/donnemartin/system-design-primer"
    type: repo
    year: 2017
    note: "One large Markdown guide to systems at scale: caching, databases, load balancing, consistency. Written for interviews, but a solid overview an agent can read in one go."
---

## My take

I don't need to say much here: the value is in the links. These are large, well-kept catalogues that people and agents can both read. Where a site blocks bots, the "for agents" link points to its source.

## When it fits

- Naming a design choice in a spec, a review or a prompt.
- Checking an option's trade-offs before committing to it.

## When it doesn't

- Picking a pattern because it is in the catalogue. Start from the problem.
