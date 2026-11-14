---
title: Platform engineering
description: "Internal platforms that give product teams self-service infrastructure, tools and supported default paths, run as a product for developers."
why: "As a company grows past a few teams, each team building its own delivery and infrastructure slows everyone and fragments the stack. A platform built too early or without users' input becomes one more system to run that nobody wants."
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [platform-engineering, internal-platforms, golden-paths, developer-experience, developer-portal]
related: [infrastructure/hosting, infrastructure/infrastructure-as-code, infrastructure/cloud-foundations, delivery/ci-cd, delivery/delivery-metrics, team/team-design, architecture/build-or-buy]
sources:
  - title: What I Talk About When I Talk About Platforms
    author: Evan Bottcher
    url: "https://martinfowler.com/articles/talk-about-platforms.html"
    type: article
    year: 2018
    note: "A definition of a digital platform: self-service APIs, tools, services, knowledge and support, run as an internal product for delivery teams. It describes how platforms fail when shared services keep teams waiting on another team's backlog, and where to start."
  - title: How We Use Golden Paths to Solve Fragmentation in Our Software Ecosystem
    author: Gary Niemen (Spotify)
    url: "https://engineering.atspotify.com/2020/8/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem"
    type: article
    year: 2020
    note: "Spotify's account of its golden paths, a term now common in platform engineering. A golden path is an opinionated, supported way to build a common kind of software, such as a backend service, written as a step-by-step tutorial. Spotify introduced them when autonomous teams had fragmented its tools; teams can leave the path but then get less support."
  - title: Mind the platform execution gap
    author: Cristóbal García García and Chris Ford
    url: "https://martinfowler.com/articles/platform-prerequisites.html"
    type: article
    year: 2021
    note: "The capabilities an organization needs before a platform strategy can work: a clear business case, product thinking, reliable operations, software engineering practice and healthy teams. The authors are Thoughtworks consultants writing from client work."
  - title: CNCF Platforms White Paper
    author: CNCF Platforms Working Group
    url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/"
    type: paper
    year: 2023
    note: "The Cloud Native Computing Foundation's description of internal platforms: why to build them, their attributes, the capabilities they can offer and how to measure them. It advises building the thinnest viable platform over managed services. It is written for enterprise leaders and platform team leads."
  - title: Platform engineering
    author: DORA, Google Cloud
    url: "https://dora.dev/capabilities/platform-engineering/"
    type: guide
    year: 2026
    note: "Guidance on internal developer platforms from DORA, a research programme run by Google Cloud, based on its yearly surveys. It advises starting with a minimum viable platform for the most common workflow and lists common traps. It reports that platforms can lower throughput and stability if badly run, and that platform quality decides whether AI adoption improves performance."
  - title: What is Backstage?
    author: Backstage project
    url: "https://backstage.io/docs/overview/what-is-backstage"
    type: tool
    year: 2026
    note: "An open-source framework for developer portals, with a software catalogue, project templates and documentation kept as code. Spotify built it and gave it to the CNCF, where it is an incubating project. Spotify sells plugins and a hosted portal for it."
---
