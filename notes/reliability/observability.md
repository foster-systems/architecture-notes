---
title: Observability
description: "Understanding what running systems do through logs, metrics and traces."
why: "A small team debugs production with the telemetry it already has, and that telemetry is often one of its largest tool bills. Instrumenting with OpenTelemetry keeps the choice of backend open."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [observability, logs, metrics, traces, opentelemetry, wide-events]
related: [reliability/slos, reliability/incidents, reliability/on-call, infrastructure/finops]
sources:
  - title: What is OpenTelemetry?
    author: OpenTelemetry project
    url: "https://opentelemetry.io/docs/what-is-opentelemetry/"
    type: docs
    year: 2026
    note: "The project's introduction to its vendor-neutral framework for generating, exporting and collecting traces, metrics and logs. It is not a backend: storage and display are left to other tools. It is a Cloud Native Computing Foundation project, formed by merging OpenTracing and OpenCensus."
  - title: Monitoring Distributed Systems
    author: Rob Ewaschuk
    url: "https://sre.google/sre-book/monitoring-distributed-systems/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book that defines the four golden signals: latency, traffic, errors and saturation. It separates symptoms from causes and sets tests for whether an alert should page someone."
  - title: Dapper, a Large-Scale Distributed Systems Tracing Infrastructure
    author: Benjamin H. Sigelman et al.
    url: "https://research.google/pubs/dapper-a-large-scale-distributed-systems-tracing-infrastructure/"
    type: paper
    year: 2010
    note: "Google's paper on its production tracing system, built on sampling and on instrumenting a few common libraries. It reports on more than two years of building and using the system."
  - title: Fast and flexible observability with canonical log lines
    author: Brandur Leach
    url: "https://stripe.com/blog/canonical-log-lines"
    type: article
    year: 2019
    note: "Stripe's account of emitting one dense, structured log line for each request or unit of work. It covers the middleware that writes the line, the warehouse that archives it and its use during incidents."
  - title: The Cost Crisis in Observability Tooling
    author: Charity Majors
    url: "https://www.honeycomb.io/blog/cost-crisis-observability-tooling"
    type: article
    year: 2024
    note: "An essay on why observability bills grow faster than their value: separate tools store the same request again as metrics, logs, traces and sessions. It compares the cost drivers of metrics, unstructured logs and wide structured events. The author co-founded Honeycomb, which publishes the essay and sells a tool built on wide events."
  - title: The USE Method
    author: Brendan Gregg
    url: "https://www.brendangregg.com/usemethod.html"
    type: article
    year: 2012
    note: "A method for finding performance bottlenecks: for every resource, check its utilization, saturation and errors. It turns the method into checklists, with ready-made ones for Linux and other systems."
---
