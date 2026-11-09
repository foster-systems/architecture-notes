---
title: Choosing models per workload
description: "Which model runs which work and where it is hosted, chosen per workload and checked on real traffic."
why: "Model and host set the cost, quality and data exposure of every agent run, and both keep changing. Architects need a repeatable way to choose and to check the choice."
horizon: current
reviewed: 2026-11-06
tags: [models, open-weight, routing, inference, cost, evals]
related: [ai-engineering/basics, ai-engineering/agent-systems]
sources:
  - title: "Renting the frontier, owning the core IP"
    author: Andy Nolan (Thoughtworks)
    url: "https://www.thoughtworks.com/insights/blog/generative-ai/renting-the-frontier--owning-the-core-ip--how-we-cut-ai-forecast"
    type: article
    year: 2026
    note: "A method for choosing per workload: a grid of differentiation against sovereignty, then replay of real traffic and cost simulation. Its 72% saving is a worst-case forecast for 2028, and the post promotes a vendor partnership."
  - title: Blanket frontier model usage
    author: Thoughtworks Technology Radar
    url: "https://www.thoughtworks.com/radar/techniques/blanket-frontier-model-usage"
    type: article
    year: 2026
    note: "Warns against using the strongest model for everything. Switch at boundaries such as a new session or subagent, because each model has its own prompt cache, and measure, because a stronger model can use fewer tokens. Opinion, without data."
  - title: "Launching the Endpoint Accuracy Index: Same Model, Different Accuracy"
    author: Artificial Analysis
    url: "https://artificialanalysis.ai/articles/endpoint-accuracy-index"
    type: article
    year: 2026
    note: "Measures the same open weights across hosts. On a tool-calling test of gpt-oss-120b, some endpoints score 22% against 37% for the reference deployment. Test the endpoint you will use."
  - title: Recent open weights model launches
    author: Artificial Analysis
    url: "https://artificialanalysis.ai/articles/recent-open-weights-model-launches"
    type: article
    year: 2026
    note: "In April 2026 the top open-weight models were 6 index points behind the top proprietary model, and further behind on hard tasks: 43–46% against 61% on TerminalBench Hard. A dated snapshot."
  - title: "Open source vs. frontier AI models: Which are best for coding?"
    author: Ron Meldiner (Faros)
    url: "https://www.faros.ai/blog/open-models-vs-frontier-models"
    type: article
    year: 2026
    note: "Runs 211 real tasks through seven pairs of agent tool and model. Opus 4.8 scores 0.521 in Claude Code and 0.454 in OpenCode, so test the pair you will run. One run per task, scored by a model, from a vendor that sells routing."
---
