---
title: Privacy by design
description: "Engineering practice for personal data: collecting less, keeping it for a set time, and deleting it everywhere it went."
why: "Retention and deletion are hard to add once personal data has spread into logs, backups and warehouses. A small company that designs for them early avoids the rework when a customer or regulator asks."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 4
tags: [personal-data, data-minimisation, retention, deletion, threat-modelling]
related: [law-and-compliance/gdpr, data/databases, data/product-analytics, security/application-security]
sources:
  - title: GDPR developer's guide
    author: CNIL
    url: "https://www.cnil.fr/en/gdpr-developers-guide"
    type: guide
    year: 2021
    note: "A guide for developers from the French data protection authority, in 17 short sheets. They cover minimisation, user profiles, retention periods, data subject rights and analytics. The source is on GitHub."
  - title: Privacy Design Strategies (The Little Blue Book)
    author: Jaap-Henk Hoepman
    url: "https://www.cs.ru.nl/~jhh/publications/pds-booklet.pdf"
    type: guide
    year: 2022
    note: "A free booklet for designers and engineers of systems that process personal data. It sets out eight strategies, such as minimise, separate and hide, each with examples and technologies."
  - title: Data Protection Engineering
    author: ENISA
    url: "https://www.enisa.europa.eu/publications/data-protection-engineering"
    type: guide
    year: 2022
    note: "A report from the EU cybersecurity agency that surveys technologies for data protection by design and by default. It assesses how well each one supports the data protection principles in GDPR Article 5."
  - title: LINDDUN
    author: DistriNet, KU Leuven
    url: "https://linddun.org/"
    type: framework
    year: 2026
    note: "A privacy threat modelling framework, first published in 2010. Its name lists the threat types: linking, identifying, non-repudiation, detecting, data disclosure, unawareness and non-compliance. The site has threat trees, examples and instructions."
  - title: "DELF: Safeguarding deletion correctness in Online Social Networks"
    author: Katriel Cohn-Gordon et al.
    url: "https://www.usenix.org/conference/usenixsecurity20/presentation/cohn-gordon"
    type: paper
    year: 2020
    note: "A USENIX Security 2020 paper on a deletion framework deployed in three online social networks. Developers annotate data types, and the framework runs and checks deletion across data stores, with a window to reverse mistakes."
  - title: How Google retains data we collect
    author: Google
    url: "https://policies.google.com/technologies/retention"
    type: docs
    year: 2026
    note: "Google's public description of how deletion works in its systems. Data leaves view first, then storage over about two months, and encrypted backups can hold it for up to six months. It is the vendor's account."
  - title: OWASP Top 10 Privacy Risks
    author: OWASP
    url: "https://owasp.org/www-project-top-10-privacy-risks/"
    type: guide
    year: 2021
    note: "A ranked list of ten privacy risks, version 2.0. It includes insufficient deletion of user data and collection of data not required for the consented purpose."
---
