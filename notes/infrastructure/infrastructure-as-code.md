---
title: Infrastructure as code
description: "Defining servers, networks and cloud services in versioned code that a tool applies, instead of setting them up by hand."
why: "A setup built by hand cannot be rebuilt, reviewed or copied to a new environment, and it drifts. Code keeps a small team's infrastructure repeatable and gives coding agents a reviewable way to change it."
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [infrastructure-as-code, terraform, opentofu, pulumi, environments]
related: [infrastructure/cloud-foundations, infrastructure/hosting, infrastructure/platform-engineering, delivery/ci-cd, security/supply-chain]
sources:
  - title: Infrastructure As Code
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/InfrastructureAsCode.html"
    type: article
    year: 2016
    note: "A short definition of infrastructure as code and its practices: definition files, versioning everything, continuous testing, small changes and keeping services available during changes. It points to Kief Morris's book as the main text on the subject."
  - title: The Snowflakes as Code antipattern
    author: Kief Morris
    url: "https://infrastructure-as-code.com/posts/snowflakes-as-code.html"
    type: article
    year: 2025
    note: "A short post by the author of the book Infrastructure as Code on keeping a separate copy of infrastructure code per environment. The copies drift apart the way hand-built servers did. He recommends one reusable codebase with parameters per environment, promoted unchanged along the path to production."
  - title: Why I have my agents write infrastructure code
    author: Kief Morris
    url: "https://infrastructure-as-code.com/posts/why-i-use-infra-code-with-agents.html"
    type: article
    year: 2026
    note: "An account of building AWS infrastructure with a coding agent. Run directly against the cloud, the agent worked by trial and error and destroyed data. Having it write infrastructure code instead gave consistency, a way to check and test changes, and components the agent can adapt and reuse."
  - title: OpenTofu
    author: OpenTofu, Linux Foundation
    url: "https://opentofu.org/docs/intro/"
    type: tool
    year: 2026
    note: "An open-source infrastructure as code tool: resources are declared in configuration files, a plan shows the changes, and apply makes them. It keeps a state file as its record of what exists. It is a community fork of Terraform, created in 2023 after HashiCorp moved Terraform to the Business Source License."
  - title: Pulumi Concepts and Architecture
    author: Pulumi
    url: "https://www.pulumi.com/docs/iac/concepts/"
    type: docs
    year: 2026
    note: "An infrastructure as code tool whose programs are written in general-purpose languages such as TypeScript, Python and Go; it also accepts YAML and HCL. A deployment engine compares the program with the current state and makes the changes. The tool is open source; the vendor sells Pulumi Cloud, a hosted backend for state, secrets and policies."
  - title: A Comprehensive Guide to Terraform
    author: Yevgeniy Brikman
    url: "https://gruntwork.io/blog/a-comprehensive-guide-to-terraform"
    type: guide
    year: 2022
    note: "A six-part series on why to use infrastructure as code, how Terraform compares with other tools, managing state, reusable modules, pitfalls and using Terraform as a team. It was first written in 2016 and updated for Terraform 1.2 in 2022. The author co-founded Gruntwork, which sells Terraform modules and tooling."
---
