---
title: Delivering agent-written code
description: "Keeping code review, CI and merging ahead of the rate at which agents produce changes."
why: "Agents raise the number and size of changes faster than reviewers and CI can absorb them. When review and checks fall behind, main goes red or unreviewed code reaches production."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 6
tags: [ci, continuous-integration, code-review, merge-queue]
related: [delivery/code-review, delivery/ci-cd, delivery/testing-strategy, agentic-engineering/adoption, agentic-engineering/supervising-agents]
sources:
  - title: Your job is to deliver code you have proven to work
    author: Simon Willison
    url: "https://simonwillison.net/2025/Dec/18/code-proven-to-work/"
    type: article
    year: 2025
    note: "Says the author of a change, not the reviewer, must show it works: a manual test with its output in the pull request, and an automated test that fails if the change is reverted. Coding agents should be set up to do both before they hand over a change."
  - title: "Automating Low-Risk Code Review at Meta: RADAR, Risk Calibration, and Review Efficiency"
    author: "Chris Adams et al. (Meta)"
    url: "https://arxiv.org/abs/2605.30208"
    type: paper
    year: 2026
    note: "At Meta, agentic AI drove most of a 51% rise in diffs per developer while timely review declined. Meta now lands eligible low-risk diffs through gates, a risk score, LLM review and deterministic checks. Their revert rate is a third of other diffs, but they were chosen as low risk, so the authors say the comparison is not causal."
  - title: Managing a merge queue
    author: GitHub
    url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue"
    type: docs
    year: 2026
    note: "GitHub's merge queue tests each pull request against main plus the pull requests ahead of it before merging. Build concurrency and merge limits set how many changes it can take."
  - title: Keeping master green at scale
    author: Adrian Colyer
    url: "https://blog.acolyer.org/2019/04/18/keeping-master-green-at-scale/"
    type: article
    year: 2019
    note: "Summary of Uber's SubmitQueue paper. It predicts which pending changes will pass and builds likely combinations in parallel, keeping the mainline green at thousands of changes a day."
  - title: Why are good developers so wary of agentic development?
    author: Rachel Laycock
    url: "https://martinfowler.com/rachels-ramblings/good-devs-wary.html"
    type: article
    year: 2026
    note: "Thoughtworks' CTO on a week-long build in which agents wrote all the code and the build was often red. The team spent most of its time on domain design and on tests, contracts and pipeline checks. Possible causes it names: parallel agents in conflict, too little modularity, and changes arriving faster than checks could finish."
---
