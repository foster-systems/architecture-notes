---
title: Application security
description: "Secure development and web application security: common risks, security requirements, secure development practices and threat modelling."
why: "A small software company rarely has a security team, so the people who build the product apply the controls themselves. These sources give them a list of risks, a requirements baseline and a way to reason about design."
horizon: foundation
reviewed: 2026-11-09
tags: [security, owasp, appsec, secure-sdlc, threat-modelling]
related: [security/supply-chain, security/identity-and-access, architecture/api-design, agentic-engineering/governance]
sources:
  - title: "OWASP Top 10:2025"
    author: OWASP
    url: "https://top10.owasp.org/2025/"
    type: guide
    year: 2025
    note: "A ranked list of the ten most critical web application security risks, in its 8th edition. It is built from data on over 2.8 million applications and a practitioner survey. Broken access control is first and software supply chain failures third."
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
  - title: "Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities"
    author: "Murugiah Souppaya, Karen Scarfone, Donna Dodson (NIST)"
    url: "https://csrc.nist.gov/pubs/sp/800/218/final"
    type: framework
    year: 2022
    note: "NIST SP 800-218: a core set of high-level secure development practices that can be added to any software development life cycle. It aims to reduce vulnerabilities in released software, limit the impact of those left unaddressed, and give buyers and suppliers a common vocabulary."
  - title: Threat Modeling Manifesto
    author: "Adam Shostack, Kim Wuyts and 13 other practitioners"
    url: "https://www.threatmodelingmanifesto.org/"
    type: guide
    year: 2020
    note: "A short statement of values and principles for threat modelling, in the format of the Agile Manifesto. It fits any methodology and is not a how-to. It frames the work as four questions: what is being built, what can go wrong, what to do about it, and whether the job was good enough."
  - title: Tackling cybersecurity vulnerabilities through Secure by Design
    author: "Royal Hansen, Christoph Kern (Google)"
    url: "https://blog.google/technology/safety-security/tackling-cybersecurity-vulnerabilities-through-secure-by-design/"
    type: article
    year: 2024
    note: "Google's introduction to its whitepaper Secure by Design at Google, which it links. It gives four design principles and argues that responsibility for security should move from individual developers to the developer ecosystem, which can prevent entire classes of vulnerabilities. The vendor's own account."
  - title: Web Security Academy
    author: PortSwigger
    url: "https://portswigger.net/web-security"
    type: guide
    year: 2026
    note: "Free web security training from the maker of Burp Suite. It has text explanations, video summaries and interactive labs on attacks such as SQL injection, XSS and CSRF."
---
