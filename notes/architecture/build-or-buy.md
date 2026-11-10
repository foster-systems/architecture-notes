---
title: Build or buy
description: "Deciding what to build, what to buy and what to adopt, and the risk each dependency brings."
why: "A small company has little engineering time and needs to spend it on what makes the product different. Every technology and vendor adopted also becomes a long-term operating cost and a dependency."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 7
tags: [build-vs-buy, boring-technology, vendor-risk, lock-in, strategy]
related: [architecture/architecture-decisions, infrastructure/finops, security/supply-chain, team/engineering-strategy, foundations/technical-debt, law-and-compliance/open-source-licences]
sources:
  - title: "Choose Boring Technology"
    author: Dan McKinley
    url: "https://mcfunley.com/choose-boring-technology"
    type: article
    year: 2015
    note: "An essay arguing that a company has limited capacity for risky technology, so it should favor mature tools and add new ones only after company-wide discussion. It draws on the author's time at Etsy. A spoken version is at boringtechnology.club."
  - title: "In Defense of Not-Invented-Here Syndrome"
    author: Joel Spolsky
    url: "https://www.joelonsoftware.com/2001/10/14/in-defense-of-not-invented-here-syndrome/"
    type: article
    year: 2001
    note: "An essay arguing against reusing outside code by default, with examples from Microsoft and Amazon. Its rule is to do core business functions in-house, while non-core work can be outsourced."
  - title: "Utility Vs Strategic Dichotomy"
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/UtilityVsStrategicDichotomy.html"
    type: article
    year: 2010
    note: "Splits software into utility work, where the aim is low cost and avoiding failure, and strategic work, where speed matters most. For utility functions it advises buying a package and fitting the business process to it. For strategic work it advises building software suited to the business."
  - title: "Don't get locked up into avoiding lock-in"
    author: Gregor Hohpe
    url: "https://martinfowler.com/articles/oss-lockin.html"
    type: article
    year: 2019
    note: "Separates vendor, platform, skills and mental lock-in, and notes that open source does not remove all of them. It gives simple models for weighing the cost of avoiding lock-in against the benefit."
  - title: "Why we're leaving the cloud"
    author: David Heinemeier Hansson
    url: "https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0"
    type: article
    year: 2022
    note: "The CTO of 37signals explains the decision to move Basecamp and HEY off cloud hosting. He argues that cost and complexity outweigh the benefits for a medium-sized business with steady growth."
  - title: "Regulation (EU) 2023/2854 (Data Act)"
    author: European Union
    url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng"
    agents: "https://publications.europa.eu/resource/cellar/ef51c6ab-a06c-11ee-b164-01aa75ed71a1.0006.03/DOC_1"
    type: law
    year: 2023
    note: "An EU regulation on access to and use of data, applicable since 12 September 2025. Chapter VI gives customers of cloud and other data processing services rights when switching provider: at most two months' notice, a 30-day transition in the normal case and no switching charges from 12 January 2027."
---
