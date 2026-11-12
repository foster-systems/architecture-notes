---
title: Application security
description: "Building secure web applications: common risks, security requirements, secure development practices and threat modelling."
why: "A small software company rarely has a security team, so the engineers who build the product apply the controls themselves. A flaw they miss reaches customers' data."
horizon: foundation
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [security, owasp, appsec, secure-sdlc, threat-modelling]
related: [security/security-programme, security/identity-and-access, security/supply-chain, security/vulnerability-handling, architecture/api-design, agentic-engineering/governance]
sources:
  - title: "OWASP Top 10:2025"
    author: OWASP
    url: "https://top10.owasp.org/2025/"
    type: guide
    year: 2025
    note: "A ranked list of the ten most critical web application security risks, in its 8th edition. It is built from data on over 2.8 million applications and a community survey. Broken access control is first and software supply chain failures third."
  - title: OWASP Application Security Verification Standard
    author: OWASP
    url: "https://asvs.owasp.org/"
    type: spec
    year: 2025
    note: "A framework of security requirements for designing, developing and testing web applications and web services. Developers use it as a list of requirements, and testers as a basis for checking controls. Version 5.0.0, from May 2025, is the stable release."
  - title: OWASP Cheat Sheet Series
    author: OWASP
    url: "https://cheatsheetseries.owasp.org/"
    type: docs
    year: 2026
    note: "More than 130 short guides, each on one application security topic. It is an OWASP project maintained in the open on GitHub."
  - title: "Secure Software Development Framework (SSDF) Version 1.1 (SP 800-218)"
    author: "Murugiah Souppaya, Karen Scarfone, Donna Dodson (NIST)"
    url: "https://csrc.nist.gov/pubs/sp/800/218/final"
    type: framework
    year: 2022
    note: "A core set of high-level secure development practices that can be added to any software development life cycle. It aims to reduce vulnerabilities in released software, limit the impact of those left unaddressed, and give buyers and suppliers a common vocabulary. A draft of version 1.2 was published in December 2025."
  - title: Threat Modeling Manifesto
    author: "Adam Shostack, Kim Wuyts and 13 other practitioners"
    url: "https://www.threatmodelingmanifesto.org/"
    type: guide
    year: 2020
    note: "A short statement of values and principles for threat modelling, in the format of the Agile Manifesto. It fits any methodology and is not a how-to. It frames the work as four questions: what is being built, what can go wrong, what to do about it, and whether the job was good enough."
  - title: Secure by Design at Google
    author: "Christoph Kern (Google)"
    url: "https://research.google/pubs/secure-by-design-at-google/"
    agents: "https://storage.googleapis.com/gweb-research2023-media/pubtools/7661.pdf"
    type: paper
    year: 2024
    note: "A Google whitepaper on how it builds security into software design. Its main finding is that a product's security comes largely from its developer ecosystem: libraries, frameworks, tools and platforms. It argues that this ecosystem, not each developer, should guarantee key security properties, and reports that Google has nearly eliminated XSS and SQL injection in web applications built on its main internal frameworks. The vendor's own account."
  - title: Web Security Academy
    author: PortSwigger
    url: "https://portswigger.net/web-security"
    type: guide
    year: 2026
    note: "Free web security training with text explanations, video summaries and interactive labs on attacks such as SQL injection, XSS, CSRF and request smuggling. PortSwigger sells Burp Suite, a web security testing tool."
---
