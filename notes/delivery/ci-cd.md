---
title: CI/CD
description: "How code gets from commit to production: continuous integration and delivery, branching, deployment safety and feature flags."
why: "A small team ships often only when each release is cheap and easy to undo. How changes are integrated, deployed and switched on decides how fast a company learns from users and how much a bad deploy costs."
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [continuous-integration, continuous-delivery, deployment, feature-flags, trunk-based-development, canary]
related: [delivery/testing-strategy, delivery/code-review, delivery/delivery-metrics, agentic-engineering/delivery, data/databases, reliability/slos]
sources:
  - title: What is Continuous Delivery?
    author: Jez Humble
    url: "https://continuousdelivery.com/"
    type: guide
    year: 2026
    note: "Jez Humble's reference site on continuous delivery: getting any change into production safely, quickly and sustainably. It sets out principles, foundations, implementation patterns and the research evidence behind the practice. Humble co-wrote the book Continuous Delivery, and the site also sells his books and training."
  - title: Continuous Integration
    author: Martin Fowler
    url: "https://martinfowler.com/articles/continuousIntegration.html"
    type: article
    year: 2024
    note: "Martin Fowler's description of continuous integration, first published in 2000; the current version is a rewrite published in January 2024. Everyone merges into the mainline at least daily, and an automated, self-testing build checks every merge. It lists the practices and answers common questions on feature branches, pull requests and continuous delivery."
  - title: "Trunk Based Development: Introduction"
    author: Paul Hammant
    url: "https://trunkbaseddevelopment.com/"
    type: guide
    year: 2020
    note: "A reference site on the branching model where developers merge small changes into one trunk and avoid long-lived branches. It covers the techniques that make this work, such as short-lived feature branches, feature flags and branch by abstraction, and compares the model with GitFlow."
  - title: Feature Toggles (aka Feature Flags)
    author: Pete Hodgson
    url: "https://martinfowler.com/articles/feature-toggles.html"
    type: article
    year: 2017
    note: "A long guide to switching code paths at runtime, which separates deploying code from releasing it to users. It sorts toggles into release, experiment, ops and permissioning types by how long they live and how dynamic they are. It covers implementation and how to keep the number of toggles down."
  - title: Automating safe, hands-off deployments
    author: Clare Liguori
    url: "https://builder.aws.com/content/3ErTKQOTKc5NIw031UePBPxTQ6I/automating-safe-hands-off-deployments"
    type: article
    year: 2020
    note: "An Amazon Builders' Library article on how Amazon's pipelines deploy to production with no one watching. It covers pre-production testing, rollouts in waves, bake times, automatic rollback on alarms, deployment time windows and pipelines as code."
  - title: Canarying Releases
    author: "Alec Warner, Štěpán Davidovič"
    url: "https://sre.google/workbook/canarying-releases/"
    type: guide
    year: 2018
    note: "A chapter of Google's SRE Workbook on canarying: deploying a change to part of a service for a limited time and evaluating it before the full rollout. It covers choosing the canary's size, duration and metrics, and limiting its risk with error budgets. It also compares canarying with blue/green deployment."
  - title: Parallel Change
    author: Danilo Sato
    url: "https://martinfowler.com/bliki/ParallelChange.html"
    type: article
    year: 2014
    note: "A short description of parallel change, also called expand and contract, for making a backward-incompatible change in three phases. The new version is added next to the old, users migrate, and the old version is removed. It applies to code interfaces, database schemas, deployments and remote APIs."
---
