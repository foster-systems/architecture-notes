---
title: Securing AI features
description: "Protecting the language model features of a product, such as assistants, search over customer data and agents that call tools, from prompt injection, data leaks and misuse."
why: "A language model cannot reliably tell its developer's instructions from text an attacker planted in a document, email or web page, and no product fully removes this risk. The design has to limit what a fooled model can read and do."
review: 7
reviewed: 2026-11-12
sidebar:
  order: 3
tags: [security, ai, llm, prompt-injection, owasp, etsi]
related: [security/application-security, agentic-engineering/governance, ai-engineering/agent-systems, ai-engineering/retrieval, law-and-compliance/ai-act]
sources:
  - title: "OWASP Top 10 for LLM Applications 2026"
    author: OWASP GenAI Security Project
    url: "https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/"
    agents: "https://github.com/GenAI-Security-Project/GenAI-LLM-Top10"
    type: guide
    year: 2026
    note: "A ranked list of the ten main security risks of applications that use a language model as a component, from prompt injection and sensitive information disclosure to excessive agency and unbounded consumption. Each entry gives examples, mitigations and attack scenarios. The 2026 ranking weighs a practitioner vote at three quarters and an analysis of 6,639 recorded incidents at one quarter. Risks of models that act on their own with tools and memory belong to OWASP's separate Top 10 for Agentic Applications."
  - title: "Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection"
    author: "Kai Greshake, Sahar Abdelnabi, Shailesh Mishra, Christoph Endres, Thorsten Holz, Mario Fritz"
    url: "https://arxiv.org/abs/2302.12173"
    type: paper
    year: 2023
    note: "The paper that introduced indirect prompt injection: instructions planted in data an application's model later retrieves, which let an attacker steer it without direct access. It sets out a taxonomy of impacts, such as data theft, worming and manipulated content, and demonstrates attacks on Bing's GPT-4 chat and code-completion engines."
  - title: "Prompt injection is not SQL injection (it may be worse)"
    author: UK National Cyber Security Centre
    url: "https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection"
    type: article
    year: 2025
    note: "A post by the UK's national cyber security agency on why prompt injection, unlike SQL injection, has no root fix: a language model draws no line between data and instructions. It treats the model as a confusable deputy and recommends dropping its privileges to those of whoever supplied the content, deterministic limits on tool calls, and logging of inputs, outputs and tool calls. It warns against products that claim to stop prompt injection."
  - title: "Defeating Prompt Injections by Design"
    author: "Edoardo Debenedetti, Ilia Shumailov, Tianqi Fan, Jamie Hayes, Nicholas Carlini, Daniel Fabian, Christoph Kern, Chongyang Shi, Andreas Terzis, Florian Tramèr"
    url: "https://arxiv.org/abs/2503.18813"
    type: paper
    year: 2025
    note: "A paper presenting CaMeL, a layer around a language model that keeps an application secure even when the model is fooled. The trusted user request fixes the control flow, so retrieved data cannot change which steps run, and capabilities on each value enforce policies on where private data may flow. On the AgentDojo benchmark it completes 77% of tasks with provable security, against 84% for an undefended system."
  - title: "ETSI EN 304 223: Baseline Cyber Security Requirements for AI Models and Systems"
    author: ETSI
    url: "https://www.etsi.org/deliver/etsi_en/304200_304299/304223/02.01.01_60/en_304223v020101p.pdf"
    type: spec
    year: 2025
    note: "A European Standard with baseline security requirements for AI models and systems, generative AI included. It sets 13 principles across five phases of the AI lifecycle, from secure design to end of life, and names who is mainly responsible for each: developers, system operators or data custodians. Version 2.1.1, from December 2025, follows ETSI TS 104 223; ETSI TR 104 128 gives implementation examples."
---
