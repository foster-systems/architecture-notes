---
title: Evals
description: "How to evaluate LLM applications and agents, during development and in production."
why: "Model output varies from run to run, so a change that looks fine in one trial can break others. Evals tell a small team whether a prompt, model or tool change made the product better or worse."
horizon: current
reviewed: 2026-11-09
tags: [evals, llm-apps, agents, llm-as-judge, regression-testing, observability]
related: [ai-engineering/basics, ai-engineering/agent-systems, ai-engineering/model-choice, reliability/observability]
sources:
  - title: Your AI Product Needs Evals
    author: Hamel Husain
    url: "https://hamel.dev/blog/posts/evals/"
    type: article
    year: 2024
    note: "A framework for domain-specific LLM evals, with a real estate assistant as the case study. It has three levels: unit-test-style assertions, human and model-based evaluation with trace logging, and A/B testing."
  - title: Demystifying evals for AI agents
    author: "Mikaela Grace, Jeremy Hadfield, Rodrigo Olivares, Jiri De Jonghe (Anthropic)"
    url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
    type: article
    year: 2026
    note: "Anthropic's guide to evaluating agents that call tools over many turns. It defines tasks, trials and graders, separates capability evals from regression evals, and shows how automated evals fit with production monitoring and human review."
  - title: Evaluating the Effectiveness of LLM-Evaluators (aka LLM-as-Judge)
    author: Eugene Yan
    url: "https://eugeneyan.com/writing/llm-evaluators/"
    type: article
    year: 2024
    note: "A review of about two dozen papers on language models that judge another model's output. It weighs critiques against evidence and ends with guidance on direct scoring versus pairwise comparison, and API-based versus finetuned evaluators."
  - title: "Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences"
    author: "Shreya Shankar, J.D. Zamfirescu-Pereira, Björn Hartmann, Aditya G. Parameswaran, Ian Arawjo"
    url: "https://arxiv.org/abs/2404.12272"
    type: paper
    year: 2024
    note: "A paper presenting EvalGen, an interface for building evaluators that agree with human grades. Its study names criteria drift: grading outputs changes the criteria used to grade them."
  - title: Inspect
    author: "UK AI Security Institute, Meridian Labs"
    url: "https://inspect.aisi.org.uk/"
    type: framework
    year: 2026
    note: "An open-source framework for model and agent evaluations. It has reusable parts for defining evals, over 200 prebuilt benchmarks, a web viewer for results, and sandboxes for untrusted model code."
  - title: promptfoo
    author: Promptfoo
    url: "https://github.com/promptfoo/promptfoo"
    type: repo
    year: 2026
    note: "A command-line tool and library for testing prompts, agents and RAG systems, also used for red teaming. It runs in CI/CD and compares models across providers. The README states it is now part of OpenAI and remains MIT licensed."
  - title: Evaluation Overview
    author: Langfuse
    url: "https://langfuse.com/docs/evaluation/overview"
    type: docs
    year: 2026
    note: "The vendor's documentation for evaluation in Langfuse, available as a cloud service or self-hosted. It separates offline evaluation on a fixed dataset before shipping from online evaluation of live production traces. Scores come from LLM judges, human annotation or custom code."
---
