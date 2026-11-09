---
title: Platform engineering
description: "Internal platforms that give product teams self-service infrastructure, and the choice of what runs containers."
why: "A small team has to run every layer it adopts. These sources help decide how much platform to build and whether Kubernetes is worth its cost."
horizon: current
reviewed: 2026-11-09
tags: [platform-engineering, internal-platforms, containers, kubernetes, deployment]
related: [infrastructure/cloud-foundations, infrastructure/finops, delivery/ci-cd, team/team-design, architecture/build-or-buy]
sources:
  - title: What I Talk About When I Talk About Platforms
    author: Evan Bottcher
    url: "https://martinfowler.com/articles/talk-about-platforms.html"
    type: article
    year: 2018
    note: "A short definition of a digital platform: self-service APIs, tools, services, knowledge and support, run as an internal product for delivery teams."
  - title: CNCF Platforms White Paper
    author: CNCF Platforms Working Group
    url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/"
    type: paper
    year: 2023
    note: "The Cloud Native Computing Foundation's description of internal platforms: their attributes, how to measure them and the capabilities they can offer. It says platforms should stay as thin as practical. It is written for enterprise leaders and platform team leads."
  - title: Platform engineering
    author: DORA
    url: "https://dora.dev/capabilities/platform-engineering/"
    type: guide
    year: 2026
    note: "DORA's page on internal developer platforms, with advice to start from a minimum viable platform around the most common workflow. It lists common pitfalls and ways to measure results. It also reports DORA's 2025 finding that platform quality shapes whether AI adoption helps performance."
  - title: Overview
    author: Kubernetes project
    url: "https://kubernetes.io/docs/concepts/overview/"
    type: docs
    year: 2026
    note: "The project's own description of what Kubernetes provides and what it leaves out. It does not build application code, provide databases or middleware, or dictate logging and monitoring."
  - title: "\"Let's use Kubernetes!\" Now you have 8 problems"
    author: Itamar Turner-Trauring
    url: "https://pythonspeed.com/articles/dont-need-kubernetes"
    type: article
    year: 2021
    note: "An argument that Kubernetes is a poor fit for small teams because of its moving parts and its effect on development and debugging. It lists simpler options, including a single large VM, Heroku-style platforms, Docker Compose and Nomad."
  - title: Choosing an AWS container service
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/decision-guides/latest/containers-on-aws-how-to-choose/choosing-aws-container-service.html"
    type: guide
    year: 2025
    note: "AWS's decision guide across three layers: compute capacity, orchestration and higher-level services such as App Runner and Lightsail. It names organization size and skills as a main factor and notes the upgrade work Kubernetes needs. It is the vendor's account, limited to its own services."
  - title: Kamal
    author: 37signals
    url: "https://kamal-deploy.org/"
    type: tool
    year: 2026
    note: "A deployment tool that runs containers on servers listed by IP address, over SSH, with zero-downtime deploys. It calls basic Docker commands, so each step is visible. It comes from the company behind Basecamp and HEY and works with any web app packaged as a container."
---
