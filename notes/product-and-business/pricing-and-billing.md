---
title: Pricing and billing
description: "SaaS pricing models, usage-based billing and the engineering of billing systems."
why: "A pricing model decides what the product must meter, store and enforce, so a pricing change is often an engineering project. Billing bugs charge customers the wrong amount."
horizon: current
reviewed: 2026-11-09
tags: [pricing, billing, usage-based, metering, ledger, saas]
related: [product-and-business/saas-metrics, architecture/build-or-buy, infrastructure/finops]
sources:
  - title: "Pricing low-touch SaaS"
    author: Patrick McKenzie
    url: "https://stripe.com/guides/atlas/saas-pricing"
    type: guide
    year: 2026
    note: "A Stripe Atlas guide to pricing and packaging SaaS sold mostly without sales contact. It works through example companies selling to consumers, small businesses, niche markets and enterprises. The author has built four software companies."
  - title: "The AI pricing and monetization playbook"
    author: Bessemer Venture Partners
    url: "https://www.bvp.com/atlas/the-ai-pricing-and-monetization-playbook"
    type: guide
    year: 2026
    note: "A venture firm's guide to pricing AI products, where compute cost per query keeps gross margins below those of traditional SaaS. It compares consumption, workflow, outcome and hybrid models, with examples from Intercom and others. It sets out seven pricing principles."
  - title: "How subscriptions work"
    author: Stripe
    url: "https://docs.stripe.com/billing/subscriptions/overview"
    type: docs
    year: 2026
    note: "Stripe's reference for the subscription lifecycle: statuses, invoice and payment states, failed payments and the webhook events that signal each change. It is the vendor's documentation of its own product."
  - title: "Why billing systems are a nightmare for engineers"
    author: Anh-Tho Chuong
    url: "https://www.getlago.com/blog/why-billing-systems-are-a-nightmare-for-engineers"
    type: article
    year: 2022
    note: "A list of what makes billing hard to build: date logic, plan changes, metering at scale, idempotent event handling, failed payments and tax. The author draws on building Qonto's internal billing system. It is a billing vendor's account and ends by presenting Lago."
  - title: "Anatomy of a serverless usage based billing system"
    author: Richard Artoul
    url: "https://www.warpstream.com/blog/anatomy-of-a-serverless-usage-based-billing-system"
    type: article
    year: 2024
    note: "WarpStream's co-founder describes how the company meters three billable dimensions and hands ingestion, storage and billing logic to Orb. It shows how idempotency keys stop resubmitted events from charging customers twice. It is a vendor's first-hand account of its own system."
  - title: "Accounting For Developers, Part I: The Fundamentals"
    author: Lucas Rocha
    url: "https://www.moderntreasury.com/journal/accounting-for-developers-part-i"
    type: article
    year: 2025
    note: "The first of three parts teaching accounting to engineers who build systems that handle money. It covers accounts, transactions, ledgers, and debit-normal and credit-normal balances. The author is a product manager at the vendor Modern Treasury."
  - title: "getlago/lago"
    author: Lago
    url: "https://github.com/getlago/lago"
    type: repo
    year: 2026
    note: "An open-source metering and usage-based billing API, licensed AGPL-3.0. It covers event ingestion with deduplication, charge models, wallets and credits, invoices, taxes and dunning. Its feature list shows what a full billing system contains."
---
