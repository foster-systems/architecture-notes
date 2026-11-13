---
title: Service level objectives
description: "Reliability targets based on what users experience, and the error budgets that follow from them."
why: "An SLO gives a team a number for deciding when to ship features and when to work on reliability. An error budget makes that decision agreed in advance, and the SLO sets the internal target behind any SLA the company signs."
review: 30
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [slo, sli, error-budget, availability, alerting]
related: [reliability/observability, reliability/incidents, delivery/delivery-metrics, law-and-compliance/saas-contracts]
sources:
  - title: Service Level Objectives
    author: Chris Jones, John Wilkes and Niall Murphy
    url: "https://sre.google/sre-book/service-level-objectives/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book that defines SLIs, SLOs and SLAs. It covers which indicators to measure for different kinds of system and how to choose targets."
  - title: Embracing Risk
    author: Marc Alvidrez
    url: "https://sre.google/sre-book/embracing-risk/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book on setting a reliability level that fits each service, since extra reliability costs more and slows feature work. It ends with the case for error budgets."
  - title: Implementing SLOs
    author: Steven Thurgood and David Ferguson
    url: "https://sre.google/workbook/implementing-slos/"
    type: guide
    year: 2018
    note: "A chapter of the SRE Workbook with a step-by-step method for choosing SLIs, setting first SLOs and getting stakeholders to agree. Its worked example is a mobile phone game."
  - title: Alerting on SLOs
    author: Steven Thurgood
    url: "https://sre.google/workbook/alerting-on-slos/"
    type: guide
    year: 2018
    note: "A chapter of the SRE Workbook that compares six ways to turn an SLO into alerts, on precision, recall, detection time and reset time. It recommends multiwindow, multi-burn-rate alerts, gives starting thresholds and covers low-traffic services."
  - title: Example Error Budget Policy
    author: Steven Thurgood
    url: "https://sre.google/workbook/error-budget-policy/"
    type: guide
    year: 2018
    note: "A complete sample policy from the SRE Workbook, written for an example game service. It states when releases stop, when feature work may continue and what triggers a postmortem."
  - title: The Calculus of Service Availability
    author: Ben Treynor, Mike Dahlin, Vivek Rau and Betsy Beyer
    url: "https://sre.google/static/pdf/calculus_of.pdf"
    type: article
    year: 2017
    note: "An ACM Queue article on how the availability of a service is limited by its critical dependencies. It defines availability from how often outages happen and how long they last, and states the rule of the extra 9: each critical dependency must be more available than the service. It covers ways to soften a weak dependency, such as caching, failing open and graceful degradation."
  - title: Sloth
    author: slok
    url: "https://github.com/slok/sloth"
    type: tool
    year: 2026
    note: "An open-source generator that turns a short SLO spec into Prometheus recording rules, multiwindow, multi-burn-rate alerts and a Grafana dashboard. It also reads OpenSLO specs."
---
