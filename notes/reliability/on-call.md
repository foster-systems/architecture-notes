---
title: On-call
description: "Who answers production alerts outside working hours, how the rotation is run, and what it costs the people on it."
why: "A software company needs someone on call from its first paying customers, usually its own engineers. A rotation with too few people or noisy alerts burns them out, and in the EU stand-by time can count as working time."
review: 30
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [on-call, pager, rotation, alerting, working-time]
related: [reliability/incidents, reliability/observability, reliability/slos, team/team-design]
sources:
  - title: Being On-Call
    author: Andrea Spadaccini
    url: "https://sre.google/sre-book/being-on-call/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book on balancing the quantity and quality of on-call work. It caps on-call at 25% of an engineer's time and covers response times, alert load and stress. Its figures, such as a minimum rotation of eight engineers, describe Google teams."
  - title: On-Call
    author: Ollie Cook, Sara Smollett, Andrea Spadaccini, Cara Donnelly, Jian Ma and Garrett Plasky
    url: "https://sre.google/workbook/on-call/"
    type: guide
    year: 2018
    note: "A chapter of the SRE Workbook that answers readers who found the first book's on-call advice did not fit smaller teams. It covers pager load, flexible scheduling and compensation, with case studies from Google and Evernote."
  - title: On-call at any size
    author: Increment
    url: "https://increment.com/on-call/on-call-at-any-size/"
    type: article
    year: 2017
    note: "Advice on running on-call at each company size, from a garage startup of up to 10 people to companies of over 10,000. It covers alerting tools, monitoring, rotations and incident process at each stage."
  - title: "On Call Shouldn't Suck: A Guide For Managers"
    author: Charity Majors
    url: "https://charity.wtf/2020/10/03/on-call-shouldnt-suck-a-guide-for-managers/"
    type: article
    year: 2020
    note: "An essay on what managers owe engineers who are on call for their own code. It asks for alerts routed to people who can fix them, no project work during a shift, tracking of out-of-hours pages and some form of compensation. The author co-founded Honeycomb, an observability vendor."
  - title: Interpretative Communication on Directive 2003/88/EC concerning certain aspects of the organisation of working time
    author: European Commission
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52023XC0324(01)"
    agents: "https://publications.europa.eu/resource/cellar/2bd7c585-c9e8-11ed-a05c-01aa75ed71a1.0006.03/DOC_1"
    type: guide
    year: 2023
    note: "The Commission's reading of the EU Working Time Directive and the Court of Justice's case law on it. It explains when stand-by time counts as working time: when the required response time and other constraints significantly limit how the worker can use that time. It is not binding; national law and courts apply the directive."
---
