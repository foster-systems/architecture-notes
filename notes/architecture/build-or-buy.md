---
title: Build or buy
description: "Deciding what to build, what to buy and what to adopt, and the risk each dependency brings."
why: "A small company has little engineering time and needs to spend it on what makes the product different. Every technology and vendor adopted also becomes a long-term operating cost and a dependency."
reviewed: 2026-11-11
sidebar:
  order: 9
tags: [build-vs-buy, boring-technology, dependencies, vendor-risk, lock-in, cloud-exit, strategy]
related: [architecture/architecture-decisions, infrastructure/finops, security/supply-chain, team/engineering-strategy, foundations/technical-debt, law-and-compliance/open-source-licences, law-and-compliance/data-act]
sources:
  - title: "Choose Boring Technology"
    author: Dan McKinley
    url: "https://mcfunley.com/choose-boring-technology"
    type: article
    year: 2015
    note: "An essay arguing that a company has limited capacity for risky technology, so it should favor mature tools and add new ones only after the team has discussed the cost of running them. It draws on the author's time at Etsy. A talk version is at boringtechnology.club."
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
    note: "Separates kinds of lock-in, from vendor, product and platform to skills, legal and mental lock-in, and notes that open source does not remove all of them. It gives simple models for weighing the cost of avoiding lock-in against the benefit."
  - title: "Questions for a new technology"
    author: Kellan Elliott-McCrea
    url: "https://kellanem.com/notes/new-tech"
    type: article
    year: 2019
    note: "A short list of questions an engineering leader asks before a team adopts a new technology: what problem it solves, why the current stack cannot, what new costs it brings, and whether it will replace what it duplicates. The author was CTO at Etsy."
  - title: "Our Software Dependency Problem"
    author: Russ Cox
    url: "https://research.swtch.com/deps"
    type: article
    year: 2019
    note: "An essay by the Go project's technical lead at the time on the risk in every third-party package. It gives a method for inspecting a dependency before adopting it (design, code quality, testing, maintenance, usage, security, licence and its own dependencies), then for isolating, avoiding, upgrading and watching it."
  - title: "Our cloud-exit savings will now top ten million over five years"
    author: David Heinemeier Hansson
    url: "https://world.hey.com/dhh/our-cloud-exit-savings-will-now-top-ten-million-over-five-years-c7d9b5bd"
    type: article
    year: 2024
    note: "37signals' CTO reports the result of moving seven apps, HEY among them, from AWS to owned hardware: the yearly cloud bill fell from $3.2 million to $1.3 million with the same operations team. He says the cloud still suits very early companies and highly variable load. It links back to the 2022 post that announced the move."
---
