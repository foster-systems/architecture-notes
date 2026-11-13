---
title: Asynchronous work and messaging
description: "Moving work out of the request with background jobs, queues and events, and keeping data correct when a message is late, lost or delivered twice."
why: "Most SaaS products send email, call third-party APIs and update other systems in the background. A job queued outside the database transaction, or a consumer that cannot handle a duplicate, loses work or charges a customer twice. A queue backlog can turn a short outage into a long one."
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [messaging, queues, background-jobs, events, outbox, idempotency, at-least-once]
related: [architecture/system-design, architecture/api-design, architecture/multi-tenancy, data/databases, data/data-pipelines, infrastructure/email]
sources:
  - title: "Enterprise Integration Patterns: Messaging Patterns"
    author: Gregor Hohpe and Bobby Woolf
    url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/"
    type: guide
    year: 2023
    note: "The online catalogue of the 65 messaging patterns from the authors' 2003 book, kept by Gregor Hohpe. Patterns are grouped into channels, message construction, routing, transformation, endpoints and system management, and include competing consumers, dead letter channels and idempotent receivers."
  - title: "What do you mean by \"Event-Driven\"?"
    author: Martin Fowler
    url: "https://martinfowler.com/articles/201701-event-driven.html"
    type: article
    year: 2017
    note: "An article that separates four patterns often all called event-driven: event notification, event-carried state transfer, event sourcing and CQRS. It describes the benefits of each and the problems each can cause."
  - title: "Life beyond Distributed Transactions: an Apostate's Opinion"
    author: Pat Helland
    url: "https://www.cidrdb.org/cidr2007/papers/cidr07p15.pdf"
    type: paper
    year: 2007
    note: "A CIDR 2007 position paper, written at Amazon, on building applications that scale without transactions across machines. Data is split into entities that each live on one machine and talk through messages, which arrive at least once, so every receiver must be idempotent."
  - title: "Transactionally Staged Job Drains in Postgres"
    author: Brandur Leach
    url: "https://brandur.org/job-drain"
    type: article
    year: 2017
    note: "A post on why a background job queued inside or after a database transaction can run too early or be lost. Its fix writes jobs to a staging table in the same transaction and has a separate process move them to the queue, a form of the transactional outbox pattern. The author worked on Heroku's and Stripe's APIs."
  - title: "Idempotent Consumer pattern"
    author: Microsoft
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer"
    type: docs
    year: 2026
    note: "A pattern page from Microsoft's cloud design catalogue on making message handlers safe to run more than once. It explains why at-least-once brokers deliver duplicates and how to record a stable deduplication key in the same atomic step as the work. The examples use Azure services, and the pattern is general."
  - title: "Avoiding insurmountable queue backlogs"
    author: David Yanacek
    url: "https://builder.aws.com/content/3EuRcgkTP1MI0c7zM8W6HL3WIqA/avoiding-insurmountable-queue-backlogs"
    type: article
    year: 2019
    note: "An Amazon Builders' Library article on why queue-based systems recover slowly after an outage and how Amazon keeps backlogs from growing past recovery. It covers measuring message age, dead-letter queues, spillover queues, per-customer fairness and backpressure."
---
