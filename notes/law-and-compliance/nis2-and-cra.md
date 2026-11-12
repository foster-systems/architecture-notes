---
title: NIS2 and the Cyber Resilience Act
description: "Two EU cybersecurity laws: NIS2 binds providers of services such as cloud and SaaS, and the Cyber Resilience Act binds makers of software and hardware products."
why: "A SaaS provider falls under NIS2 as a cloud computing service provider once it is medium-sized or larger under the EU definition; a smaller one that sells to NIS2 entities meets NIS2 terms through their supply-chain duties. A web app used only through a browser is not a Cyber Resilience Act product, but an installed client or mobile app is, and the backend it needs is covered with it."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [nis2, cra, eu-law, compliance, cybersecurity, incident-reporting, sbom]
related: [security/vulnerability-handling, security/supply-chain, reliability/incidents, law-and-compliance/gdpr, law-and-compliance/soc2-and-iso27001]
sources:
  - title: "Directive (EU) 2022/2555 (NIS 2 Directive)"
    author: European Union
    url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng"
    agents: "https://publications.europa.eu/resource/cellar/9b84d482-85bd-11ed-9887-01aa75ed71a1.0006.03/DOC_1"
    type: law
    year: 2022
    note: "The full text of NIS2, which each member state applies through its own law. Its annexes list cloud computing, data centre and managed service providers, and recital 33 counts SaaS as a cloud service model. Article 20 makes management accountable, Article 21 lists the minimum security measures and Article 23 sets incident reports at 24 hours, 72 hours and one month."
  - title: "Commission Implementing Regulation (EU) 2024/2690"
    author: European Commission
    url: "https://eur-lex.europa.eu/eli/reg_impl/2024/2690/oj/eng"
    agents: "https://publications.europa.eu/resource/cellar/28f15de8-8ce9-11ef-a130-01aa75ed71a1.0006.03/DOC_1"
    type: law
    year: 2024
    note: "The detailed NIS2 security requirements for cloud computing, managed service and other digital providers, the same in every member state. The annex sets out the measures, from security policy and incident handling to supply chain security. The regulation also defines when an incident counts as significant."
  - title: NIS2 Technical Implementation Guidance
    author: ENISA
    url: "https://www.enisa.europa.eu/publications/nis2-technical-implementation-guidance"
    type: guide
    year: 2025
    note: "The EU cybersecurity agency's practical advice on Implementing Regulation 2024/2690, with examples of evidence and mappings of the requirements. It is written for companies in digital infrastructure, ICT service management and digital services."
  - title: "Regulation (EU) 2024/2847 (Cyber Resilience Act)"
    author: European Union
    url: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng"
    agents: "https://publications.europa.eu/resource/cellar/21b7d4eb-a6e2-11ef-85f0-01aa75ed71a1.0006.03/DOC_1"
    type: law
    year: 2024
    note: "The full text of the Act, which sets security requirements for products with digital elements and their remote data processing. Recital 12 places SaaS under NIS2 rather than this Act. Article 13 sets a support period of at least five years, or the expected time in use if shorter; Article 14 reporting applies from 11 September 2026 and most other duties from 11 December 2027."
  - title: "Commission guidance on the application of the Cyber Resilience Act, C(2026) 5252"
    author: European Commission
    url: "https://ec.europa.eu/newsroom/dae/redirection/document/131456"
    type: guide
    year: 2026
    note: "The Commission's non-binding guidance of 27 July 2026, with 67 examples. It explains when software is a product, when a backend counts as remote data processing and how support periods work. Example 5 says a web app used only through a browser is not itself a product, while an installed client is, together with the remote processing it relies on."
  - title: "BSI TR-03183: Cyber Resilience Requirements for Manufacturers and Products"
    author: "Federal Office for Information Security (BSI)"
    url: "https://www.bsi.bund.de/dok/TR-03183-en"
    type: guide
    year: 2026
    note: "The German cybersecurity agency's technical guideline on how to meet the Act, written for manufacturers without mature security processes. Its parts cover general requirements, software bills of materials and handling vulnerability reports, with controls in machine-readable OSCAL. It is non-binding and will give way to harmonised European standards."
  - title: Single Reporting Platform (SRP)
    author: ENISA
    url: "https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp"
    type: docs
    year: 2026
    note: "ENISA's page for the platform through which manufacturers send Cyber Resilience Act reports of actively exploited vulnerabilities and severe incidents. A manufacturer reports once, and the platform passes the report to the relevant authorities. The page links the portal, an FAQ, the user manual and the list of coordinating CSIRTs."
---
