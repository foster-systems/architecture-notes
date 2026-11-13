---
title: Email delivery
description: "Sending a product's email, such as sign-up, password reset and billing messages, so that it reaches the inbox: SPF, DKIM and DMARC, sending domains and IP addresses, and the rules of the large mailbox providers."
why: "Most products depend on email for sign-up, login and billing, and a message that lands in spam breaks those flows without an error. Gmail and Outlook require authentication from bulk senders and filter or reject mail that fails it. A sending domain's reputation is slow to build and quick to lose."
reviewed: 2026-11-14
sidebar:
  order: 4
tags: [email, deliverability, spf, dkim, dmarc, dns]
related: [infrastructure/hosting, infrastructure/cloud-foundations, architecture/messaging, architecture/build-or-buy, security/application-security]
sources:
  - title: "Domain-Based Message Authentication, Reporting, and Conformance (DMARC)"
    author: "T. Herr and J. Levine (eds.), IETF"
    url: "https://www.rfc-editor.org/rfc/rfc9989.html"
    type: spec
    year: 2026
    note: "The Internet standard that lets a domain owner publish a DNS policy telling receivers how to treat mail whose From domain does not match a domain passed by SPF or DKIM, and where to send reports. It replaces RFC 7489 and moves DMARC onto the standards track. RFC 9990 and RFC 9991 define the aggregate and failure reports."
  - title: M3AAWG Sender Best Common Practices
    author: M3AAWG
    url: "https://www.m3aawg.org/senderbcp"
    type: guide
    year: 2026
    note: "The consensus practices of the Messaging, Malware and Mobile Anti-Abuse Working Group, an industry body of mailbox providers, email service providers and senders. It covers authentication, bounce handling, domain warming, shared and dedicated IP addresses, and collecting addresses with opt-in consent. Version 4.0, of August 2026, replaces the 2011 and 2015 editions."
  - title: Sending Domains Best Common Practices
    author: M3AAWG
    url: "https://www.m3aawg.org/SendingDomsBCP"
    type: guide
    year: 2019
    note: "A short M3AAWG guide to choosing and setting up the domain names a company sends email from. It covers splitting mail streams, such as transactional and marketing, across subdomains, building domain reputation, DNS and authentication setup, and moving between email service providers. The Sender Best Common Practices refer to it for detail on domains."
  - title: Email sender guidelines
    author: Google
    url: "https://support.google.com/mail/answer/81126"
    type: docs
    year: 2026
    note: "Gmail's requirements for anyone sending to Gmail accounts, enforced since February 2024. All senders need SPF or DKIM, valid reverse DNS, TLS and a spam rate under 0.3%. Senders of more than 5,000 messages a day also need DMARC, an aligned From domain and one-click unsubscribe."
  - title: "Strengthening Email Ecosystem: Outlook's New Requirements for High-Volume Senders"
    author: Microsoft
    url: "https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730"
    type: article
    year: 2025
    note: "Microsoft's announcement of the authentication rules for domains sending more than 5,000 messages a day to Outlook.com, Hotmail and Live addresses. SPF and DKIM must pass and DMARC must be published with at least p=none. An update of 29 April 2025 replaced the plan to route failing mail to Junk: since 5 May 2025 it is rejected with error 550 5.7.515."
---
