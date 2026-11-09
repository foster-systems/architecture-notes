---
title: Web frontend
description: "The client side of a SaaS web application: rendering choices, web performance and accessibility."
why: "Rendering choices decide how much JavaScript each user's device must run. In the EU, accessibility is a legal duty for products and services such as e-commerce and banking."
horizon: current
reviewed: 2026-11-09
sidebar:
  order: 4
tags: [frontend, rendering, ssr, islands, performance, core-web-vitals, accessibility, wcag, eaa]
related: [architecture/api-design, law-and-compliance/gdpr]
sources:
  - title: "Rendering on the web"
    author: Addy Osmani and Jason Miller
    url: "https://web.dev/articles/rendering-on-the-web"
    type: guide
    year: 2026
    note: "A guide on web.dev to the main ways of producing a page: server-side, static and client-side rendering, hydration and streaming. It compares their trade-offs in load metrics and the JavaScript they send."
  - title: "Islands Architecture"
    author: Jason Miller
    url: "https://jasonformat.com/islands-architecture/"
    type: article
    year: 2020
    note: "The post by the creator of Preact that documented the islands pattern. Servers render HTML pages, and interactive regions hydrate separately on the client as small, self-contained widgets. It contrasts the pattern with single-page applications."
  - title: "Web Vitals"
    author: Philip Walton
    url: "https://web.dev/articles/vitals"
    type: guide
    year: 2024
    note: "Google's own definition of the Core Web Vitals: Largest Contentful Paint for loading, Interaction to Next Paint for interactivity and Cumulative Layout Shift for visual stability. It gives a target for each, assessed at the 75th percentile of page loads."
  - title: "The Performance Inequality Gap, 2026"
    author: Alex Russell
    url: "https://infrequently.org/2025/11/performance-inequality-gap-2026/"
    type: article
    year: 2025
    note: "The eighth part of a series on device, network and web content trends. It sets page-weight budgets for 3- and 5-second load targets, split into JavaScript and other resources. It also names a network profile and test devices that represent a 75th-percentile user."
  - title: "WCAG 2 Overview"
    author: W3C Web Accessibility Initiative
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/"
    type: docs
    year: 2026
    note: "The W3C overview of the Web Content Accessibility Guidelines, the international technical standard for making web content accessible to people with disabilities. It lists versions 2.0, 2.1 and 2.2 with their dates and encourages use of the latest."
  - title: "ARIA Authoring Practices Guide (APG)"
    author: W3C Web Accessibility Initiative
    url: "https://www.w3.org/WAI/ARIA/apg/"
    type: guide
    year: 2026
    note: "A W3C reference on using ARIA accessibility semantics in common design patterns and widgets. It has design patterns with working examples, and guidance on practices such as landmarks and accessible names."
  - title: "European Accessibility Act (EAA)"
    author: European Commission
    url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en"
    type: docs
    year: 2026
    note: "The Commission's page on the Act. It lists the products and services covered, including computers and operating systems, smartphones, banking services, e-books and e-commerce. It says Member States had to incorporate the Act into national law by June 2022."
---
