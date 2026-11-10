---
title: Choosing models per workload
description: "Which model runs which work and where it is hosted, chosen per workload and checked on real traffic."
why: "Model and host set the cost, quality and data exposure of every agent run, and both keep changing. A team needs a repeatable way to choose and to check the choice."
horizon: emerging
reviewed: 2026-11-10
sidebar:
  order: 4
tags: [models, open-weight, routing, inference, cost, evals]
related: [ai-engineering/basics, ai-engineering/agent-systems]
sources:
  - title: "Practices for Automated Benchmark Evaluations of Language Models (NIST AI 800-2)"
    author: NIST Center for AI Standards and Innovation
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-2.ipd.pdf"
    type: guide
    year: 2026
    note: "Voluntary practices from a US government standards body for benchmarking language models and agents, including to compare systems for deployment. It covers choosing benchmarks, keeping results comparable and close to real use, recording exact model versions and reporting uncertainty. NIST lists it as an initial public draft."
  - title: "Launching the Endpoint Accuracy Index: Same Model, Different Accuracy"
    author: Artificial Analysis
    url: "https://artificialanalysis.ai/articles/endpoint-accuracy-index"
    type: article
    year: 2026
    note: "Measures the same open weights across hosts. On a tool-calling test of gpt-oss-120b, some endpoints score 22% against 37% for the reference deployment."
  - title: Announcing Artificial Analysis Intelligence Index v5
    author: Artificial Analysis
    url: "https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5"
    type: article
    year: 2026
    note: "Announces version 5 of the publisher's model index, dated 27 October 2026. It puts the top open-weights model, Kimi K3.1 Pro, at 46 against 58 for the top proprietary model, a gap of 12 points where version 4.3 showed 3. Among models with weights released by that date, the best score 32. The article lists Kimi K3.1 Pro's weights as not yet released; Moonshot published them on Hugging Face on 2 November 2026 under its own licence. A dated snapshot."
  - title: "Open source vs. frontier AI models: Which are best for coding?"
    author: Ron Meldiner (Faros)
    url: "https://www.faros.ai/blog/open-models-vs-frontier-models"
    type: article
    year: 2026
    note: "Runs 211 real tasks through seven pairs of agent tool and model. Opus 4.8 scores 0.521 in Claude Code and 0.454 in OpenCode. One run per task, scored by a model, from a vendor that sells routing."
  - title: Blanket frontier model usage
    author: Thoughtworks Technology Radar
    url: "https://www.thoughtworks.com/radar/techniques/blanket-frontier-model-usage"
    type: article
    year: 2026
    note: "A Technology Radar entry from November 2026 that cautions against defaulting every task to the most capable model. It names switching points such as a new session or subagent, notes that each model has its own prompt cache, and says more capable models sometimes use fewer tokens overall. Opinion, without data."
  - title: "Renting the frontier, owning the core IP"
    author: Andy Nolan (Thoughtworks)
    url: "https://www.thoughtworks.com/insights/blog/generative-ai/renting-the-frontier--owning-the-core-ip--how-we-cut-ai-forecast"
    type: article
    year: 2026
    note: "A method for choosing per workload: a grid of differentiation against sovereignty, then replay of real traffic and cost simulation. Its 72% saving is a worst-case forecast for 2028, and the post promotes a vendor partnership."
---
