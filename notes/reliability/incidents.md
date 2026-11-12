---
title: Incidents
description: "Responding to production failures and learning from them: severity, roles, communication and post-incident reviews."
why: "Incidents test whether a team can communicate and restore service under pressure, in front of its customers. A small company needs a simple response process before its first serious outage, and a habit of learning from each one."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [incidents, incident-response, postmortems, incident-metrics]
related: [reliability/on-call, reliability/backups, reliability/observability, reliability/slos, law-and-compliance/nis2-and-cra]
sources:
  - title: Incident Response Guide
    author: PagerDuty
    url: "https://docs.pagerduty.com/ops-guides/incident-response-guide"
    type: guide
    year: 2026
    note: "A cut-down public version of PagerDuty's internal process for major incidents. It covers severity levels, roles such as incident commander and scribe, communication, postmortems and training. PagerDuty sells incident response software."
  - title: "Postmortem Culture: Learning from Failure"
    author: John Lunney and Sue Lueder
    url: "https://sre.google/sre-book/postmortem-culture/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book on blameless postmortems: what triggers one, what it records and how it is reviewed and shared."
  - title: Debriefing Facilitation Guide
    author: John Allspaw, Morgan Evans and Daniel Schauenberg
    url: "https://github.com/etsy/DebriefingFacilitationGuide"
    type: guide
    year: 2016
    note: "Etsy's guide to running a post-incident review as a facilitated group discussion. It covers preparing from the timeline, talking first to the people who would usually be blamed, and asking questions that draw out how people saw the situation. Its stated goal is learning, not a list of fixes."
  - title: "What happens when the pager goes off?"
    author: Increment
    url: "https://increment.com/on-call/when-the-pager-goes-off/"
    type: article
    year: 2017
    note: "A survey of over thirty companies, including Amazon, Dropbox, Facebook, Google and Netflix, on how they respond to incidents. It found that they follow nearly the same steps: triage, coordinate, mitigate, resolve and follow up."
  - title: Incident Metrics in SRE
    author: Štěpán Davidovič
    url: "https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/"
    type: paper
    year: 2021
    note: "A Google report that tests MTTR and similar incident averages with Monte Carlo simulation on incident data from Google and three other companies. It shows they are too noisy to track trends or judge whether a change helped, because incidents are few and their durations vary widely. It proposes narrower metrics tied to the question being asked."
  - title: How Complex Systems Fail
    author: Richard I. Cook
    url: "https://how.complexsystems.fail/"
    type: article
    year: 2000
    note: "A short essay of 18 points on failure in systems such as healthcare, transport and power generation. It argues that accidents come from several small faults combining and that hindsight biases investigation."
  - title: A List of Post-mortems!
    author: Dan Luu
    url: "https://github.com/danluu/post-mortems"
    type: repo
    year: 2026
    note: "A curated list of public postmortems, each with a short summary, grouped by failure type such as config errors, hardware and time."
---
