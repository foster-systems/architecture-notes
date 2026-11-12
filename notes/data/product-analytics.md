---
title: Product analytics
description: "Tracking what users do in a product as events, and using that data to answer product questions and judge experiments."
why: "Product decisions at a small company rest on a few numbers, such as activation and retention. Those numbers depend on the events behind them, and past events are hard to repair."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [event-tracking, tracking-plan, metrics, retention, experimentation]
related: [data/data-pipelines, data/privacy-by-design, product-and-business/saas-metrics, product-and-business/product-discovery, law-and-compliance/cookies]
sources:
  - title: "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications"
    author: Kerry Rodden, Hilary Hutchinson and Xin Fu
    url: "https://research.google.com/pubs/archive/36299.pdf"
    type: paper
    year: 2010
    note: "A CHI 2010 note from Google that introduced the HEART framework for user-centred metrics: happiness, engagement, adoption, retention and task success. It adds a process that maps product goals to signals and then to metrics, with examples from Google products."
  - title: Data Collection Best Practices
    author: Twilio Segment
    url: "https://www.twilio.com/docs/segment/protocols/tracking-plan/best-practices"
    type: docs
    year: 2026
    note: "Segment's guide to a tracking plan: start from business objectives, then fix naming standards, such as the Object + Action pattern for event names. It is the vendor's documentation."
  - title: Product analytics best practices
    author: PostHog
    url: "https://posthog.com/docs/product-analytics/best-practices"
    type: docs
    year: 2026
    note: "Recommendations for reliable tracking, such as consistent user IDs across platforms, versioned events, fixed event names, and tracking on the backend where accuracy matters. It is the vendor's documentation."
  - title: Retention
    author: Sequoia Capital Data Science team
    url: "https://articles.sequoiacap.com/retention"
    type: article
    year: 2018
    note: "A guide to measuring retention against the product's natural usage frequency, with curve shapes and cohort charts for consumer, subscription and SaaS businesses. It gives benchmark figures for games. It is part of Sequoia's series on building products with data."
  - title: How Not To Run an A/B Test
    author: Evan Miller
    url: "https://www.evanmiller.org/how-not-to-run-an-ab-test.html"
    type: article
    year: 2010
    note: "A short article on why checking a running A/B test and stopping at the first significant result produces false positives. It gives a formula for fixing the sample size in advance."
  - title: "A Dirty Dozen: Twelve Common Metric Interpretation Pitfalls in Online Controlled Experiments"
    author: Pavel Dmitriev, Somit Gupta, Dong Woo Kim and Garnet Vaz
    url: "https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/"
    type: paper
    year: 2017
    note: "A KDD 2017 paper from Microsoft's experimentation team, drawn from thousands of experiments, on twelve ways metric movements get misread. Each pitfall has an example from a real experiment and guidance on detecting and avoiding it."
---
