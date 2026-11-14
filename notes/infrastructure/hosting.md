---
title: Hosting and compute
description: "Choosing what runs the application: a platform as a service, serverless functions, containers on an orchestrator such as Kubernetes, or plain servers."
why: "A small team has to operate every layer it adopts, and the choice of runtime sets much of its operations work and hosting bill. Moving off a runtime later means rewriting deployment, configuration and often the application."
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [hosting, paas, serverless, containers, kubernetes, deployment]
related: [infrastructure/cloud-foundations, infrastructure/email, infrastructure/infrastructure-as-code, infrastructure/platform-engineering, infrastructure/finops, architecture/styles, architecture/build-or-buy, delivery/ci-cd]
sources:
  - title: The Twelve-Factor App
    author: Adam Wiggins
    url: "https://12factor.net/"
    type: guide
    year: 2011
    note: "Twelve rules for building web applications that any platform can run: config in the environment, stateless processes, backing services as attached resources, logs as event streams and others. Its authors drew on running hundreds of thousands of apps on Heroku, which Wiggins co-founded. An open project is now revising it for current runtimes."
  - title: "Cloud Programming Simplified: A Berkeley View on Serverless Computing"
    author: "Eric Jonas, Johann Schleier-Smith and others (UC Berkeley)"
    url: "https://arxiv.org/abs/1902.03383"
    type: paper
    year: 2019
    note: "A paper that explains serverless computing and reviews five demanding applications built on it. It finds four limits in the platforms of 2019: storage for fine-grained state, coordination between tasks, slow communication patterns and unpredictable startup latency. It predicts that serverless will come to dominate cloud computing."
  - title: Overview
    author: Kubernetes project
    url: "https://kubernetes.io/docs/concepts/overview/"
    type: docs
    year: 2026
    note: "The project's own description of what Kubernetes provides and what it leaves out. It is not a full platform as a service: it does not build application code, provide databases or middleware, or dictate logging and monitoring."
  - title: "\"Let's use Kubernetes!\" Now you have 8 problems"
    author: Itamar Turner-Trauring
    url: "https://pythonspeed.com/articles/dont-need-kubernetes"
    type: article
    year: 2021
    note: "An argument that Kubernetes is a poor fit for small teams because of its moving parts and its cost to development and debugging. It cites a 2019 security review of the Kubernetes code. It lists simpler options: one large VM, Heroku-style platforms, Docker Compose and Nomad."
  - title: Choosing an AWS container service
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/decision-guides/latest/containers-on-aws-how-to-choose/choosing-aws-container-service.html"
    type: guide
    year: 2026
    note: "AWS's decision guide across three layers: orchestration, compute capacity and higher-level services that hide the orchestrator. It names the organization's size and skills as a main factor and notes that running Kubernetes well takes a strong operations team. It is the vendor's account, limited to its own services."
  - title: Kamal
    author: 37signals
    url: "https://kamal-deploy.org/"
    type: tool
    year: 2026
    note: "An open-source tool that deploys containers over SSH to servers listed by IP address, with zero-downtime deploys. It calls plain Docker commands, so each step is visible, and runs the same on any cloud or own hardware. 37signals built it to move its apps, such as HEY, off the cloud."
---
