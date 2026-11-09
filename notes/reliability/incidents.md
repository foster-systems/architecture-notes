---
title: Incidents
description: "Responding to production failures, learning from them, staffing on-call and recovering lost data."
why: "Incidents test whether a team can communicate, restore service and recover data under pressure. A small company needs these basics before its first serious outage."
horizon: foundation
reviewed: 2026-11-09
tags: [incidents, postmortems, on-call, backups, disaster-recovery]
related: [reliability/observability, reliability/slos, data/databases, security/application-security]
sources:
  - title: "Postmortem Culture: Learning from Failure"
    author: John Lunney and Sue Lueder
    url: "https://sre.google/sre-book/postmortem-culture/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book on blameless postmortems: what triggers one, what it records and how it is reviewed and shared."
  - title: PagerDuty Incident Response Documentation
    author: PagerDuty
    url: "https://response.pagerduty.com/"
    type: guide
    year: 2026
    note: "A cut-down public version of PagerDuty's internal process for major incidents. It covers on-call, severity levels, roles, communication, postmortems and training for incident commanders. It is the vendor's account of its own practice."
  - title: Being On-Call
    author: Andrea Spadaccini
    url: "https://sre.google/sre-book/being-on-call/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book on balancing the quantity and quality of on-call work, with limits on load. Its figures, such as a minimum rotation of eight engineers, describe Google teams."
  - title: "Data Integrity: What You Read Is What You Wrote"
    author: Raymond Blum and Rhandeev Singh
    url: "https://sre.google/sre-book/data-integrity/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book on data loss and recovery. It separates backups from archives and replication from recoverability, and says restores must be exercised end to end. It includes case studies from Gmail and Google Music."
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
