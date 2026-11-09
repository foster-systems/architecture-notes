---
title: Observability
description: "Understanding what running systems do through logs, metrics and traces."
why: "A small team debugs production with the telemetry it already has. OpenTelemetry keeps that instrumentation independent of the vendor that stores it."
horizon: current
reviewed: 2026-11-09
sidebar:
  order: 1
tags: [observability, logs, metrics, traces, opentelemetry, alerting]
related: [reliability/slos, reliability/incidents, infrastructure/finops]
sources:
  - title: What is OpenTelemetry?
    author: OpenTelemetry project
    url: "https://opentelemetry.io/docs/what-is-opentelemetry/"
    type: docs
    year: 2026
    note: "The project's introduction to its framework and toolkit for generating, exporting and collecting traces, metrics and logs. It works with many backends and is not a backend itself. It is a Cloud Native Computing Foundation project, formed by merging OpenTracing and OpenCensus."
  - title: Monitoring Distributed Systems
    author: Rob Ewaschuk
    url: "https://sre.google/sre-book/monitoring-distributed-systems/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book that defines the four golden signals: latency, traffic, errors and saturation. It separates symptoms from causes and sets tests for whether an alert should page someone."
  - title: Trace Context
    author: W3C
    url: "https://www.w3.org/TR/trace-context/"
    type: spec
    year: 2021
    note: "The W3C Recommendation for the HTTP headers that carry a trace across services. It defines `traceparent` and `tracestate` and the rules tools follow when changing them."
  - title: Dapper, a Large-Scale Distributed Systems Tracing Infrastructure
    author: Benjamin H. Sigelman et al.
    url: "https://research.google/pubs/dapper-a-large-scale-distributed-systems-tracing-infrastructure/"
    type: paper
    year: 2010
    note: "Google's paper on its production tracing system, built on sampling and on instrumenting a few common libraries. It reports on about two years of building and using the system."
  - title: Fast and flexible observability with canonical log lines
    author: Brandur Leach
    url: "https://stripe.com/blog/canonical-log-lines"
    type: article
    year: 2019
    note: "Stripe's account of emitting one dense, structured log line for each unit of work. It covers the middleware that writes the line, the warehouse that archives it and its use during incidents."
  - title: Logs vs Structured Events
    author: Charity Majors
    url: "https://charity.wtf/2019/02/05/logs-vs-structured-events/"
    type: article
    year: 2019
    note: "An argument for replacing log lines and levels with wide structured events, one per request per service."
  - title: Alerting
    author: Prometheus project
    url: "https://prometheus.io/docs/practices/alerting/"
    type: docs
    year: 2026
    note: "The Prometheus project's short guide to alerting on symptoms of user pain and keeping alerts few. It gives rules per system type, such as online serving, batch jobs and capacity."
---
