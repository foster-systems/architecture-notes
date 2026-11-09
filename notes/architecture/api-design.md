---
title: API design
description: "Designing web and service APIs that stay usable as they change: REST, gRPC, OpenAPI, versioning and compatibility."
why: "A published API is a contract others build on, so mistakes are expensive to undo. Choices on versioning, retries and schemas decide what can change later without breaking customers."
horizon: foundation
reviewed: 2026-11-09
tags: [api, rest, grpc, openapi, versioning, compatibility, idempotency]
related: [architecture/system-design, foundations/ddd, security/application-security]
sources:
  - title: "Chapter 5: Representational State Transfer (REST)"
    author: Roy Thomas Fielding
    url: "https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm"
    type: paper
    year: 2000
    note: "The chapter of Fielding's dissertation that defines REST. It derives the style by adding constraints one at a time and describes its data elements, connectors, components and views."
  - title: "API Improvement Proposals"
    author: Google
    url: "https://google.aip.dev/"
    type: guide
    year: 2026
    note: "Design documents that record Google's API design choices, with a framework other organisations can use to define their own conventions. The process is public and takes contributions through GitHub."
  - title: "APIs as infrastructure: future-proofing Stripe with versioning"
    author: Brandur Leach
    url: "https://stripe.com/blog/api-versioning"
    type: article
    year: 2017
    note: "Stripe's account of how it keeps its API stable for the businesses that depend on it. Accounts are pinned to a date-based version, and breaking changes sit in modules that transform responses for older versions."
  - title: "Designing robust and predictable APIs with idempotency"
    author: Brandur Leach
    url: "https://stripe.com/blog/idempotency"
    type: article
    year: 2017
    note: "Stripe's account of why network failures leave clients unsure whether an operation succeeded, and how idempotency keys make retries safe. It also covers exponential backoff and random jitter."
  - title: "Hyrum's Law"
    author: Hyrum Wright
    url: "https://www.hyrumslaw.com/"
    type: article
    year: 2017
    note: "A short essay on an observation: with enough users, every observable behavior of a system ends up depended on by someone. It explains how implicit interfaces form and how they limit later changes."
  - title: "OpenAPI Specification"
    author: OpenAPI Initiative
    url: "https://spec.openapis.org/oas/latest.html"
    type: spec
    year: 2026
    note: "The specification of a format for describing HTTP APIs so that people and software can understand a service without its source code. It is the normative reference for objects, fields, reference resolution and serialization."
  - title: "Proto Best Practices"
    author: Google
    url: "https://protobuf.dev/best-practices/dos-donts/"
    type: docs
    year: 2026
    note: "Guidance for writing schemas in Protocol Buffers, the default format for gRPC. It covers compatibility between mismatched client and server versions, including never reusing tag numbers and reserving those of deleted fields."
---
