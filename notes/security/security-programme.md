---
title: Security programme
description: "The security work a software company does before and after its first security hire: a baseline of controls, who owns security, what to do first, and readiness for a breach."
why: "Until it hires security staff, a company's security is decided by its founders and engineers, often when the first large customer sends a security questionnaire. A short baseline and a clear owner cover the most common risks and make those reviews easier to pass."
review: 30
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [security, security-programme, baseline, mfa, phishing, incident-response]
related: [security/application-security, security/identity-and-access, security/vulnerability-handling, law-and-compliance/soc2-and-iso27001, product-and-business/enterprise-readiness, reliability/incidents, infrastructure/cloud-foundations]
sources:
  - title: Starting Up Security
    author: Ryan McGeehan
    url: "https://scrty.io/"
    type: guide
    year: 2026
    note: "Essays and a short book on managing security risk in a growing company, by a former security director at Facebook and Coinbase whose background is incident response. The book's chapters cover the security team's mission, when to hire a security leader, budgets, fundamentals, testing and incidents. He advises security companies, HackerOne among them."
  - title: Minimum Viable Secure Product (MVSP)
    author: "MVSP working group (Google, Salesforce, Okta, Slack and others)"
    url: "https://mvsp.dev/mvsp.en/"
    type: framework
    year: 2023
    note: "A short checklist of security controls that business software should have before enterprise customers buy it. It covers business, application design, implementation and operational controls, such as a vulnerability disclosure policy, single sign-on at no extra cost, fixes within 90 days and backups kept in a separate location. Version 3.0 is from November 2023; several contributors sell compliance tools."
  - title: "The NIST Cybersecurity Framework (CSF) 2.0"
    author: NIST
    url: "https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final"
    type: framework
    year: 2024
    note: "A taxonomy of security outcomes for any organisation, whatever its size or maturity. It says what to achieve, not how, and links to guidance on practices and controls. Version 2.0, from February 2024, adds a Govern function, and NIST publishes a quick-start guide for small businesses."
  - title: The mechanics of a sophisticated phishing scam and how we stopped it
    author: "Matthew Prince, Daniel Stinson-Diess, Sourov Zaman (Cloudflare)"
    url: "https://blog.cloudflare.com/2022-07-sms-phishing-attacks/"
    type: article
    year: 2022
    note: "Cloudflare's account of the 2022 SMS phishing attack that also breached Twilio. Three employees entered their credentials on the fake login page, but the attacker could not sign in because every employee uses a FIDO2 security key bound to the real site. Cloudflare sells the zero trust products it used in the response."
  - title: Building Secure and Reliable Systems
    author: "Heather Adkins, Betsy Beyer, Paul Blankinship, Ana Oprea, Piotr Lewandowski, Adam Stubblefield (Google)"
    url: "https://google.github.io/building-secure-and-reliable-systems/raw/toc.html"
    type: guide
    year: 2020
    note: "Google's book on designing and running systems that are both secure and reliable, free to read online. Its later parts cover disaster planning, crisis management, recovery after a compromise, who owns security as an organisation grows, and security culture. The examples come from Google's scale."
---
