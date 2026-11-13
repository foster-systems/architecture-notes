---
title: Evals
description: "Testing whether an LLM application or agent does its job, during development and in production."
why: "Model output varies from run to run, so a change that looks fine in one trial can break others. Evals tell a team whether a prompt, model or tool change made the product better or worse."
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [evals, llm-apps, agents, llm-as-judge, regression-testing, statistics]
related: [ai-engineering/basics, ai-engineering/retrieval, ai-engineering/agent-systems, ai-engineering/model-choice, reliability/observability]
sources:
  - title: "AI Evals: Everything You Need to Know"
    author: "Hamel Husain, Shreya Shankar"
    url: "https://hamel.dev/blog/posts/evals-faq/"
    type: guide
    year: 2026
    note: "An FAQ of about 60 questions on evaluating LLM products, drawn from teaching more than 5,000 engineers and product managers. It runs from error analysis of real traces and checking LLM judges against human labels to CI versus production monitoring and evals for RAG and agents. The authors call its advice sharp opinions, and the page promotes their paid course."
  - title: Demystifying evals for AI agents
    author: "Anthropic (Mikaela Grace, Jeremy Hadfield, Rodrigo Olivares, Jiri De Jonghe)"
    url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
    type: article
    year: 2026
    note: "A guide to evaluating agents that call tools over many turns. It defines tasks, trials and graders, separates capability evals from regression evals, and explains pass@k against pass^k for agents that must succeed every time. Drawn from Anthropic's own agents and its customers'."
  - title: "Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations"
    author: Evan Miller (Anthropic)
    url: "https://arxiv.org/abs/2411.00640"
    type: paper
    year: 2024
    note: "Treats an eval as an experiment on a sample of questions. It shows how to report standard errors, cluster them when questions are related, resample answers to cut noise, compare two models question by question, and size an eval with power analysis."
  - title: Evaluating the Effectiveness of LLM-Evaluators (aka LLM-as-Judge)
    author: Eugene Yan
    url: "https://eugeneyan.com/writing/llm-evaluators/"
    type: article
    year: 2024
    note: "A review of about two dozen papers on language models that grade another model's output. It weighs critiques against evidence and ends with guidance on direct scoring versus pairwise comparison, and on API models versus finetuned evaluators."
  - title: "Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences"
    author: "Shreya Shankar, J.D. Zamfirescu-Pereira, Björn Hartmann, Aditya G. Parameswaran, Ian Arawjo"
    url: "https://arxiv.org/abs/2404.12272"
    type: paper
    year: 2024
    note: "Presents EvalGen, an interface that builds evaluators and keeps those that agree with a person's grades. Its user study names criteria drift: people need criteria to grade outputs, but grading outputs changes the criteria."
  - title: Inspect
    author: "UK AI Security Institute, Meridian Labs"
    url: "https://inspect.aisi.org.uk/"
    type: framework
    year: 2026
    note: "An open-source framework for model and agent evaluations, developed by the UK government's AI Security Institute and Meridian Labs. It has reusable datasets, solvers and scorers, over 200 prebuilt evaluations, a web viewer for results, and sandboxes for running untrusted model code."
  - title: promptfoo
    author: Promptfoo
    url: "https://github.com/promptfoo/promptfoo"
    type: repo
    year: 2026
    note: "A command-line tool and library for testing prompts, agents and RAG systems, also used for red teaming. It runs in CI/CD and compares models across providers. The README states it is now part of OpenAI and remains MIT licensed."
---
