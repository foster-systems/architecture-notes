---
title: Pricing and billing
description: "How a software company prices and packages its product, and how billing systems meter usage, charge customers and keep the records right."
why: "A pricing model decides what the product must meter, store and enforce, so a pricing change is often an engineering project. AI features add a cost per request, which pushes pricing toward usage, and billing bugs charge customers the wrong amount."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [pricing, packaging, billing, usage-based, metering, ledger, saas, ai]
related: [product-and-business/saas-metrics, product-and-business/go-to-market, architecture/build-or-buy, infrastructure/finops]
sources:
  - title: "Pricing low-touch SaaS"
    author: Patrick McKenzie
    url: "https://stripe.com/guides/atlas/saas-pricing"
    type: guide
    year: 2018
    note: "A Stripe Atlas guide to pricing and packaging SaaS sold mostly without sales contact. It works through case studies of real companies, grouped by who they sell to: consumers, undifferentiated small businesses, tight verticals and sophisticated businesses. The author built four software companies, two of them SaaS."
  - title: "The state of B2B monetization in 2026"
    author: Kyle Poyar
    url: "https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026"
    type: article
    year: 2026
    note: "Findings from an April–May 2026 survey of about 230 B2B software and AI companies on how they price. Hybrid pricing, such as seats plus AI usage, is the most common model at 37%, and the median target gross margin for AI features is about 50%, against 70–80% for SaaS. The full report is for paid subscribers; the newsletter is sponsored by the billing vendor Metronome."
  - title: "The AI pricing and monetization playbook"
    author: Bessemer Venture Partners
    url: "https://www.bvp.com/atlas/the-ai-pricing-and-monetization-playbook"
    type: guide
    year: 2026
    note: "A venture firm's guide to pricing AI products, where every query has a compute cost and gross margins sit below those of traditional SaaS. It compares consumption, workflow, outcome and hybrid models, with examples such as Intercom's price per resolved ticket. It gives seven pricing principles and five practices for founders."
  - title: "How subscriptions work"
    author: Stripe
    url: "https://docs.stripe.com/billing/subscriptions/overview"
    type: docs
    year: 2026
    note: "Stripe's reference for the subscription lifecycle: statuses, invoice and payment states, failed payments and the webhook events that signal each change. It is the vendor's documentation of its own product."
  - title: "Why billing systems are a nightmare for engineers"
    author: Raffi Sarkissian and Anh-Tho Chuong
    url: "https://www.getlago.com/blog/why-billing-systems-are-a-nightmare-for-engineers"
    type: article
    year: 2022
    note: "A list of what makes billing hard to build: date logic, plan changes, metering at scale, idempotent event handling, failed payments and tax. Raffi Sarkissian writes the body from building Qonto's internal billing system, after an introduction by Anh-Tho Chuong. Both co-founded the open-source billing vendor Lago, which the post presents at the end."
  - title: "Anatomy of a serverless usage based billing system"
    author: Richard Artoul
    url: "https://www.warpstream.com/blog/anatomy-of-a-serverless-usage-based-billing-system"
    type: article
    year: 2024
    note: "WarpStream's co-founder describes how the company meters three billable dimensions and hands invoicing to the billing vendor Orb. It shows how idempotency keys stop resubmitted usage events from charging customers twice. It is a first-hand account of one company's system."
  - title: "Accounting For Developers, Part I: The Fundamentals"
    author: Lucas Rocha
    url: "https://www.moderntreasury.com/journal/accounting-for-developers-part-i"
    type: article
    year: 2025
    note: "The first of three parts teaching double-entry accounting to engineers who build systems that move or record money. It covers accounts, transactions, ledgers, and debit-normal and credit-normal balances. The author is a product manager at the ledger vendor Modern Treasury."
---
