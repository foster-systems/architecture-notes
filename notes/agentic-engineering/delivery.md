---
title: Delivery at agent scale
description: "Source control, CI and merge queues when many agents change one codebase at once."
why: "Agents produce changes faster than tools built for people can check and merge them. Without a pipeline built for that rate, main goes red and nobody trusts the checks."
tags: [ci, continuous-integration, source-control, merge-queue, monorepo]
related: [agentic-engineering/governance, agentic-engineering/tools, foundations/tdd]
sources:
  - title: Redesigning source control at Anthropic
    author: Nick G. and the Anthropic source control team
    url: "https://www.anthropic.com/research/redesigning-source-control"
    type: article
    year: 2026
    note: "What changes at 30,000 merges a day: history and merges move to the server, jobs fetch only the files they read, and a global merge queue gives way to post-merge and pre-deploy testing."
  - title: Why are good developers so wary of agentic development?
    author: Rachel Laycock
    url: "https://martinfowler.com/rachels-ramblings/good-devs-wary.html"
    type: article
    year: 2026
    note: "A week-long build where agents wrote all the code and the build was often red. Likely causes: parallel agents in conflict, too little modularity, changes arriving faster than checks."
  - title: Continuous Integration
    author: Martin Fowler
    url: "https://martinfowler.com/articles/continuousIntegration.html"
    type: article
    year: 2024
    note: "The baseline: small, frequent integrations, a build under ten minutes, a red mainline fixed first. Agents make each of these harder to keep."
  - title: Keeping master green at scale
    author: Adrian Colyer
    url: "https://blog.acolyer.org/2019/04/18/keeping-master-green-at-scale/"
    type: article
    year: 2019
    note: "Summary of Uber's SubmitQueue paper: it predicts which pending changes will pass and builds them in parallel, keeping main green under thousands of commits a day."
  - title: Managing a merge queue
    author: GitHub
    url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue"
    type: docs
    year: 2026
    note: "The merge queue most teams already have: each change is tested against main plus the changes ahead of it. Build concurrency and merge limits are the settings to tune for agent load."
---
