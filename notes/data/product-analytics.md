---
title: Product analytics
description: "Tracking what users do in a product as events, and using that data to answer product questions."
why: "Product decisions at a small company rest on a few numbers, such as activation and retention. Those numbers depend on the events behind them, and past events are hard to repair."
horizon: current
reviewed: 2026-11-09
sidebar:
  order: 3
tags: [event-tracking, tracking-plan, metrics, retention, experimentation]
related: [data/data-pipelines, data/privacy-by-design, product-and-business/saas-metrics, product-and-business/product-discovery]
sources:
  - title: Data Collection Best Practices
    author: Twilio Segment
    url: "https://www.twilio.com/docs/segment/protocols/tracking-plan/best-practices"
    type: docs
    year: 2026
    note: "Segment's guide to naming events and properties: casing, the Object + Action pattern, and keeping changing values out of names. It is the vendor's documentation."
  - title: Plan your taxonomy
    author: Amplitude
    url: "https://amplitude.com/docs/data/data-planning-playbook"
    type: docs
    year: 2026
    note: "A playbook for designing a tracking plan, from business objectives to key metrics to the events and properties behind them. It is the vendor's documentation."
  - title: Product analytics best practices
    author: PostHog
    url: "https://posthog.com/docs/product-analytics/best-practices"
    type: docs
    year: 2026
    note: "Ten recommendations for reliable tracking, such as explicit events for key business actions, careful choice of user IDs, backend tracking, and filtering out internal users. It is the vendor's documentation."
  - title: "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications"
    author: Kerry Rodden, Hilary Hutchinson and Xin Fu
    url: "https://research.google.com/pubs/archive/36299.pdf"
    type: paper
    year: 2010
    note: "A CHI 2010 note from Google that describes the HEART framework for user-centred metrics and a process for mapping product goals to metrics. It includes examples from product teams at Google."
  - title: Retention
    author: Sequoia Capital Data Science team
    url: "https://articles.sequoiacap.com/retention"
    type: article
    year: 2018
    note: "A guide to measuring retention, with curve shapes and cohort charts for consumer, subscription and SaaS businesses, and benchmark figures for games. It is part of Sequoia's series on building products using data."
  - title: How Not To Run an A/B Test
    author: Evan Miller
    url: "https://www.evanmiller.org/how-not-to-run-an-ab-test.html"
    type: article
    year: 2010
    note: "A short article on why peeking at a running A/B test and stopping at the first significant result produces false positives. It gives a rule of thumb for fixing the sample size in advance."
  - title: "A Dirty Dozen: Twelve Common Metric Interpretation Pitfalls in Online Controlled Experiments"
    author: Pavel Dmitriev, Somit Gupta, Dong Woo Kim and Garnet Vaz
    url: "https://exp-platform.com/Documents/2017-08%20KDDMetricInterpretationPitfalls.pdf"
    type: paper
    year: 2017
    note: "A KDD 2017 paper from Microsoft's experimentation team on twelve ways metric movements get misread. Each pitfall has an example from a real experiment and guidance on detecting and avoiding it."
---
