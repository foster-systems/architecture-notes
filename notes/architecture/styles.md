---
title: Architecture styles and patterns
description: "The first structural decision of a software company (monolith, modular monolith or services) and the named patterns for building distributed systems."
why: "The choice sets how a small team builds, deploys and changes its product, and a wrong split is costly to undo. Pattern names are a shared language for people and agents to discuss the trade-offs."
review: 30
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [monolith, modular-monolith, microservices, patterns, distributed-systems, reference]
related: [architecture/system-design, foundations/ddd, foundations/solid]
sources:
  - title: "Monolith First"
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/MonolithFirst.html"
    type: article
    year: 2015
    note: "A short article arguing that a new application should usually start as a monolith, even when services are expected later. It covers the overhead of microservices and the difficulty of drawing stable boundaries early. The author calls the evidence limited and the advice tentative."
  - title: "Don't start with a monolith"
    author: Stefan Tilkov
    url: "https://martinfowler.com/articles/dont-start-monolith.html"
    type: article
    year: 2015
    note: "A reply to Monolith First by a consultant at innoQ. It argues that a new system is the time to split it into separately deployed parts, because a monolith's parts become tightly coupled and hard to cut apart later. It limits this to teams that know the domain well and notes that service boundaries are then hard to change."
  - title: "Microservice Prerequisites"
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/MicroservicePrerequisites.html"
    type: article
    year: 2014
    note: "A short article naming what a team needs before it runs microservices: rapid provisioning, basic monitoring and rapid application deployment. It also lists further needs as the number of services grows."
  - title: "Deconstructing the Monolith: Designing Software that Maximizes Developer Productivity"
    author: Kirsten Westeinde
    url: "https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity"
    type: article
    year: 2019
    note: "Shopify's account of turning a tightly coupled Ruby on Rails codebase, worked on by over a thousand developers, into a modular monolith. It explains why the company did not move to microservices. It also describes Wedge, an in-house tool that measures violations of domain boundaries."
  - title: "Goodbye Microservices: From 100s of problem children to 1 superstar"
    author: Alexandra Noonan
    url: "https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices"
    type: article
    year: 2018
    note: "Segment's account of replacing more than 140 microservices with a single service. It covers why the services were created, what made them hard to maintain and how the team moved back. It also lists the trade-offs the team accepted."
  - title: "Cloud Design Patterns"
    author: Microsoft
    url: "https://learn.microsoft.com/azure/architecture/patterns/"
    agents: "https://github.com/MicrosoftDocs/architecture-center/tree/main/docs/patterns"
    type: docs
    year: 2026
    note: "Microsoft's catalogue of 44 technology-agnostic patterns for distributed systems. Each entry gives the problem, considerations for applying the pattern and an example on Azure. The Markdown source is open."
  - title: "A pattern language for microservices"
    author: Chris Richardson
    url: "https://microservices.io/patterns/"
    type: guide
    year: 2026
    note: "A catalogue of microservice patterns by the author of Microservices Patterns, grouped by the design problem each one addresses: architectural style, service boundaries, refactoring to services, service collaboration, transactional messaging, testing and deployment. The author sells consulting and training on the style."
---
