---
title: CI/CD
description: "How code gets from commit to production: continuous delivery, deployment practice and feature flags."
why: "A small team ships often only if each release is cheap and safe to undo. Separating deploy from release lets work reach production before users see it."
horizon: foundation
reviewed: 2026-11-09
tags: [continuous-delivery, deployment, feature-flags, trunk-based-development, canary]
related: [agentic-engineering/delivery, delivery/testing-strategy, delivery/delivery-metrics, reliability/slos]
sources:
  - title: What is Continuous Delivery?
    author: Jez Humble
    url: "https://continuousdelivery.com/"
    type: guide
    year: 2026
    note: "Jez Humble's reference site on continuous delivery. It defines the practice as getting changes into production safely, quickly and sustainably. It sets out principles, foundations and implementation patterns."
  - title: Automating safe, hands-off deployments
    author: Clare Liguori
    url: "https://builder.aws.com/content/3ErTKQOTKc5NIw031UePBPxTQ6I/automating-safe-hands-off-deployments"
    type: article
    year: 2020
    note: "Amazon's account of its continuous deployment pipelines. It covers staged pre-production testing, rollouts in waves across Regions and Availability Zones, automatic rollback on alarms, and pipelines as code."
  - title: Feature Toggles (aka Feature Flags)
    author: Pete Hodgson
    url: "https://martinfowler.com/articles/feature-toggles.html"
    type: article
    year: 2017
    note: "A long guide to switching code paths at runtime. It sorts toggles into release, experiment, ops and permissioning types by how long they live and how dynamic they are. It also covers implementation and configuration."
  - title: OpenFeature Specification
    author: OpenFeature
    url: "https://openfeature.dev/specification/"
    type: spec
    year: 2026
    note: "The specification of OpenFeature, a Cloud Native Computing Foundation incubating project. It defines a flag evaluation API with providers, evaluation context, hooks and events, and a remote evaluation protocol."
  - title: "Trunk Based Development: Introduction"
    author: Paul Hammant
    url: "https://trunkbaseddevelopment.com/"
    type: guide
    year: 2020
    note: "A reference site on the branching model where developers collaborate in one trunk and avoid long-lived branches. It covers the rationale, techniques and trade-offs, with diagrams, and compares the model with GitFlow."
  - title: Canarying Releases
    author: "Alec Warner, Štěpán Davidovič"
    url: "https://sre.google/workbook/canarying-releases/"
    type: guide
    year: 2018
    note: "A chapter from Google's SRE Workbook on partial, time-limited deployments and how to evaluate them. It covers choosing the canary population, duration and metrics, limiting risk to the error budget, and related techniques such as blue/green deployment."
  - title: Parallel Change
    author: Danilo Sato
    url: "https://martinfowler.com/bliki/ParallelChange.html"
    type: article
    year: 2014
    note: "A short description of the expand and contract pattern for backward-incompatible changes. The new version is added next to the old, clients migrate, and the old version is removed. It also applies to database refactoring and remote APIs."
---
