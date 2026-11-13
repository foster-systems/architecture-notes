---
title: Privacy by design
description: "Engineering practice for personal data: collecting less, keeping it for a set time, and deleting it everywhere it went."
why: "GDPR requires data protection by design and by default. Retention and deletion are hard to add once personal data has spread into logs, backups and warehouses, so a company that designs for them early avoids rework when a customer or regulator asks."
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [personal-data, data-minimisation, retention, deletion, threat-modelling]
related: [law-and-compliance/gdpr, data/databases, data/product-analytics, security/application-security]
sources:
  - title: Guidelines 4/2019 on Article 25 Data Protection by Design and by Default
    author: European Data Protection Board
    url: "https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en"
    agents: "https://www.edpb.europa.eu/system/files/documents/files/file1/edpb_guidelines_201904_dataprotection_by_design_and_by_default_v2.0_en.pdf"
    type: guide
    year: 2020
    note: "The EU data protection authorities' interpretation of the GDPR duty to build data protection into processing. For each data protection principle it lists key design and default elements, with examples. It also recommends how controllers, processors and producers of products can work together on it."
  - title: GDPR developer's guide
    author: CNIL
    url: "https://www.cnil.fr/en/gdpr-developers-guide"
    type: guide
    year: 2020
    note: "A guide for developers from the French data protection authority, in 17 short sheets. They cover minimisation, user profiles, retention periods, data subject rights and analytics."
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
    note: "A report from the EU cybersecurity agency on technologies for data protection by design and by default, such as anonymisation, pseudonymisation and encryption. It assesses how each one helps meet the data protection principles in GDPR Article 5."
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
    note: "A USENIX Security 2020 paper on a deletion framework deployed in three online social networks at Facebook. Developers annotate data types, and the framework runs and checks deletion across data stores, with a window to restore data deleted by mistake."
  - title: How Google retains data we collect
    author: Google
    url: "https://policies.google.com/technologies/retention"
    type: docs
    year: 2026
    note: "Google's public description of how deletion works in its systems. Data leaves view first, then storage over about two months, and encrypted backups can hold it for up to six months. It is the vendor's account."
---
