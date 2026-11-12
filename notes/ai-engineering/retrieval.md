---
title: Retrieval
description: "Giving a language model the right documents at answer time: search over a company's own data, and the choice between retrieval and long context."
why: "Most AI products answer from data the model was not trained on, such as a customer's documents. When retrieval misses, the model answers anyway, so wrong results look like normal output and are found late."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [rag, retrieval, search, embeddings, long-context]
related: [ai-engineering/basics, ai-engineering/evals, data/databases]
sources:
  - title: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
    author: "Patrick Lewis et al. (Facebook AI Research, UCL, NYU)"
    url: "https://arxiv.org/abs/2005.11401"
    type: paper
    year: 2020
    note: "The NeurIPS 2020 paper that named retrieval-augmented generation. It pairs a language model with a dense vector index of Wikipedia and shows that retrieved passages make generated text more specific and factual, and that swapping the index updates what the model knows without retraining."
  - title: Seven Failure Points When Engineering a Retrieval Augmented Generation System
    author: "Scott Barnett, Stefanus Kurniawan, Srikanth Thudumu, Zach Brannelly, Mohamed Abdelrazek"
    url: "https://arxiv.org/abs/2401.05856"
    type: paper
    year: 2024
    note: "An experience report from three RAG systems in research, education and biomedicine. It names seven points where they fail, from missing content and missed top-ranked documents to answers in the wrong format. It concludes that such a system can only be validated in operation."
  - title: Introducing Contextual Retrieval
    author: "Anthropic (Daniel Ford)"
    url: "https://www.anthropic.com/engineering/contextual-retrieval"
    type: article
    year: 2024
    note: "Explains the standard pipeline of chunks, embeddings, BM25 keyword search merged by rank fusion, and reranking, then adds a generated line of context to each chunk before indexing. Across four kinds of documents, the share of relevant documents missed in the top 20 chunks falls from 5.7% to 1.9% with all steps combined. The vendor ran the test and used its own model to write the context lines."
  - title: "Retrieval Augmented Generation or Long-Context LLMs? A Comprehensive Study and Hybrid Approach"
    author: "Zhuowan Li, Cheng Li, Mingyang Zhang, Qiaozhu Mei, Michael Bendersky (Google DeepMind, University of Michigan)"
    url: "https://arxiv.org/abs/2407.16833"
    type: paper
    year: 2024
    note: "An EMNLP 2024 industry paper comparing retrieval with putting whole documents into a long context window. Long context scored higher on average when affordable, retrieval cost far less, and letting the model choose per query performed comparably to long context at 39% to 65% lower cost. The tested models are from 2024."
  - title: "Context Rot: How Increasing Input Tokens Impacts LLM Performance"
    author: "Kelly Hong, Anton Troynikov, Jeff Huber (Chroma)"
    url: "https://research.trychroma.com/context-rot"
    type: article
    year: 2025
    note: "A technical report testing 18 models on simple tasks while only the input length grows. Accuracy drops as inputs get longer, often unevenly, even where models score near perfectly on needle-in-a-haystack tests. Chroma sells a retrieval database."
  - title: MTEB
    author: "Niklas Muennighoff et al. (MTEB contributors)"
    url: "https://github.com/embeddings-benchmark/mteb"
    type: tool
    year: 2026
    note: "The open benchmark and leaderboard for text embedding models, covering retrieval, reranking, clustering and many languages. It can run a candidate model on chosen tasks, so a team can compare embedding models on data like its own."
---
