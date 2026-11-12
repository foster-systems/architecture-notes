---
title: Choosing models per workload
description: "Deciding which model runs which work and where it is hosted, and checking the choice on the team's own tasks."
why: "Model and host set the cost, quality and data exposure of every AI feature, and prices and rankings change every few months. A team needs a repeatable way to choose and to check the choice."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [models, open-weight, routing, inference, cost, benchmarks]
related: [ai-engineering/basics, ai-engineering/evals, ai-engineering/agent-systems, infrastructure/finops, law-and-compliance/ai-act]
sources:
  - title: "Practices for Automated Benchmark Evaluations of Language Models (NIST AI 800-2)"
    author: NIST Center for AI Standards and Innovation
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-2.ipd.pdf"
    type: guide
    year: 2026
    note: "Voluntary practices from a US government standards body for benchmarking language models and agents, including to compare systems for deployment. It covers choosing benchmarks, keeping conditions close to real use, recording exact model versions and reporting uncertainty. NIST lists it as an initial public draft."
  - title: "FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance"
    author: "Lingjiao Chen, Matei Zaharia, James Zou (Stanford, UC Berkeley)"
    url: "https://lchen001.github.io/papers/2024_FrugalGPT_TMLR.pdf"
    type: paper
    year: 2024
    note: "The paper behind model cascades, published in TMLR: send a query to a cheap model first, score its answer, and call a stronger model only when the score is below a threshold. It finds API prices differing by two orders of magnitude and, on classification, reading and science question tasks, matches the best single model at up to 98% lower cost. The models it tested are from 2024."
  - title: "Launching the Endpoint Accuracy Index: Same Model, Different Accuracy"
    author: Artificial Analysis
    url: "https://artificialanalysis.ai/articles/endpoint-accuracy-index"
    type: article
    year: 2026
    note: "Measures the same open weights served by different hosts against a reference deployment. Output limits, reasoning settings and tool-call handling change results: on a tool-calling test of gpt-oss-120b, some endpoints score 22% against 37% for the reference."
  - title: Announcing Artificial Analysis Intelligence Index v5
    author: Artificial Analysis
    url: "https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5"
    type: article
    year: 2026
    note: "A dated snapshot of the publisher's model index from 27 October 2026. Among the ten top-scoring models, cost per task differs by more than 13 times, and effort settings move one model from 35 to 58 at ten times the cost. The best open-weights model, its weights not yet released at the time, scores 12 points below the leader, against 3 in the previous version."
  - title: "Open source vs. frontier AI models: Which are best for coding?"
    author: Ron Meldiner (Faros)
    url: "https://www.faros.ai/blog/open-models-vs-frontier-models"
    type: article
    year: 2026
    note: "Runs 211 real tasks from the company's own repositories through seven pairs of coding agent and model. Two open-weights models reach the top quality band, one at about half the cost per task of Claude Code with Opus 4.8 ($0.92 against $1.76). Opus 4.8 scores 0.521 in Claude Code and 0.454 in OpenCode. One run per task, scored by a model, from a vendor that sells routing policies."
  - title: "Renting the frontier, owning the core IP"
    author: Andy Nolan (Thoughtworks)
    url: "https://www.thoughtworks.com/insights/blog/generative-ai/renting-the-frontier--owning-the-core-ip--how-we-cut-ai-forecast"
    type: article
    year: 2026
    note: "A method for choosing per workload: place each on a grid of differentiation against data sovereignty, replay real traffic against candidate models and hosts, and simulate costs. Its 72% saving is a worst-case forecast for 2028, and Thoughtworks sells the method and tooling to clients through its AI Factory team; the post also promotes its partners Crusoe and NVIDIA."
---
