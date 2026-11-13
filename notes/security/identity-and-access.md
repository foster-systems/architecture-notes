---
title: Identity and access
description: "Proving who a user or service is and limiting what it can do: authentication, passkeys, OAuth, authorization and secrets."
why: "Broken access control is the top risk in the OWASP Top 10:2025. How users sign in, where tokens live and how permissions are modelled are decided early and are hard to change later. Least privilege and well-kept secrets limit the damage when a credential leaks."
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [security, identity, authentication, authorization, oauth, passkeys, least-privilege, secrets]
related: [security/application-security, security/security-programme, architecture/multi-tenancy, product-and-business/enterprise-readiness, law-and-compliance/soc2-and-iso27001]
sources:
  - title: "Digital Identity Guidelines: Authentication and Authenticator Management (SP 800-63B-4)"
    author: "David Temoshok et al. (NIST)"
    url: "https://pages.nist.gov/800-63-4/sp800-63b.html"
    type: spec
    year: 2025
    note: "NIST's technical requirements for authentication at three assurance levels, final since July 2025. It sets at least 15 characters for single-factor passwords, forbids composition rules and does not require periodic changes. It also covers phishing resistance and syncable authenticators."
  - title: What are passkeys?
    author: "W3C Web Identity & Credentials Adoption CG and FIDO Alliance members"
    url: "https://passkeys.dev/docs/intro/what-are-passkeys/"
    type: docs
    year: 2026
    note: "An introduction to passkeys on a site run by members of both groups. It describes passkeys as unique per service, breach-resistant and phishing-resistant. The site also has developer docs, device support tables and tools."
  - title: Best Current Practice for OAuth 2.0 Security
    author: "T. Lodderstedt, J. Bradley, A. Labunets, D. Fett (IETF)"
    url: "https://www.rfc-editor.org/rfc/rfc9700"
    type: spec
    year: 2025
    note: "RFC 9700, the IETF's current security advice for OAuth 2.0. It extends the threat model of the earlier RFCs with practical experience. It says the resource owner password credentials grant must not be used and the implicit grant should not be used."
  - title: OAuth 2.0 for Browser-Based Applications
    author: "A. Parecki, P. De Ryck, D. Waite (IETF)"
    url: "https://www.rfc-editor.org/rfc/rfc10017"
    type: spec
    year: 2026
    note: "RFC 10017, the IETF's best current practice for OAuth in JavaScript frontends such as single-page apps. It compares architectures in decreasing order of security, starting with a backend for frontend that keeps tokens out of the browser. It also says that a frontend and API on one domain can use a cookie session and often need no OAuth between them."
  - title: Authorization Cheat Sheet
    author: OWASP Cheat Sheet Series
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
    type: guide
    year: 2026
    note: "OWASP's guidance on implementing authorization in an application. It covers least privilege, denying by default, checking permissions on every request and testing authorization logic. It prefers attribute- and relationship-based access control over RBAC."
  - title: "Zanzibar: Google's Consistent, Global Authorization System"
    author: "Ruoming Pang et al. (Google)"
    url: "https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/"
    type: paper
    year: 2019
    note: "The USENIX ATC paper on the system that stores and evaluates access control lists for hundreds of Google services. It describes a uniform data model and configuration language for access policies. It reports scale, latency and availability from three years of production."
  - title: Secrets Management Cheat Sheet
    author: OWASP Cheat Sheet Series
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
    type: guide
    year: 2026
    note: "OWASP's guidance on the secret lifecycle: creation, rotation, revocation and expiration. It covers CI/CD pipelines, cloud providers, containers, encryption, leak detection and incident response."
---
