---
title: System design
description: "How distributed systems behave: consistency, replication, partitioning, failure and overload."
why: "A SaaS product is a distributed system as soon as it has a database, a queue and a third-party API. Early choices on consistency and failure handling are expensive to change and surface as data bugs and outages."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [distributed-systems, consistency, replication, partitioning, failure, overload]
related: [architecture/messaging, architecture/multi-tenancy, architecture/styles, data/databases, reliability/slos, architecture/caching]
sources:
  - title: "Distributed Systems"
    author: Martin Kleppmann
    url: "https://www.cl.cam.ac.uk/teaching/2627/ConcDisSys/dist-sys-notes.pdf"
    type: guide
    year: 2026
    note: "Lecture notes from a University of Cambridge undergraduate course, 2026/27 edition, with exercises. They cover system models, clocks, broadcast, replication, quorums, consensus with Raft, and eventual consistency with CRDTs. The author also co-wrote Designing Data-Intensive Applications."
  - title: "Consistency"
    author: Jepsen
    url: "https://jepsen.io/consistency"
    type: guide
    year: 2026
    note: "A reference to consistency models, written for practitioners, academics and enthusiasts. For each model it gives the definition and the phenomena it allows or prohibits, with links to the literature."
  - title: "Please stop calling databases CP or AP"
    author: Martin Kleppmann
    url: "https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html"
    type: article
    year: 2015
    note: "A post on why the narrow definitions in the CAP theorem make CP and AP poor labels for databases. It uses ZooKeeper and Dynamo-style stores as examples and points to more precise terms."
  - title: "Dynamo: Amazon's Highly Available Key-Value Store"
    author: Giuseppe DeCandia et al.
    url: "https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html"
    type: paper
    year: 2007
    note: "The SOSP 2007 paper on Amazon's internal key-value store, built for high availability with tunable trade-offs among cost, consistency, durability and performance. The full text is on Werner Vogels's blog. It covers design, implementation and operating experience."
  - title: "Notes on Distributed Systems for Young Bloods"
    author: Jeff Hodges
    url: "https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/"
    type: article
    year: 2013
    note: "Lessons from a distributed systems engineer, written for newcomers. Topics include partial failure, coordination cost, backpressure, metrics, capacity estimation and feature flags."
  - title: "Timeouts, retries, and backoff with jitter"
    author: Marc Brooker
    url: "https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter"
    type: article
    year: 2019
    note: "An Amazon Builders' Library article on how Amazon's services handle transient errors with timeouts, retries and randomized backoff. It sets timeouts from a downstream latency percentile and limits retries with a token bucket so they do not overload a struggling service."
  - title: "Queues Don't Fix Overload"
    author: Fred Hebert
    url: "https://ferd.ca/queues-don-t-fix-overload.html"
    type: article
    year: 2014
    note: "An essay on how adding a queue hides overload until failures grow larger and harder to recover from. It recommends finding the bottleneck and setting limits with back-pressure or load-shedding."
---
