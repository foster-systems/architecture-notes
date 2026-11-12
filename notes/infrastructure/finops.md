---
title: FinOps
description: "Managing cloud and AI spend as a shared practice of engineering, finance and product, measured as cost per unit of value."
why: "Cloud and AI spend move with every deploy and prompt, and in a SaaS company they fall directly on gross margin. Cost per customer or per request shows whether spend grows faster than the business."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [finops, cloud-cost, ai-cost, unit-economics, gross-margin, cost-optimization]
related: [infrastructure/cloud-foundations, infrastructure/hosting, infrastructure/infrastructure-as-code, product-and-business/saas-metrics, product-and-business/pricing-and-billing, ai-engineering/model-choice]
sources:
  - title: FinOps Framework
    author: FinOps Foundation
    url: "https://www.finops.org/framework/"
    type: framework
    year: 2026
    note: "The FinOps Foundation's reference model for managing technology spend, built from practitioners' experience. It sets out six principles, personas, phases, a maturity model and four domains with 22 capabilities. The foundation is a Linux Foundation project that also sells training and certification."
  - title: Unit Economics
    author: FinOps Foundation
    url: "https://www.finops.org/framework/capabilities/unit-economics/"
    type: guide
    year: 2026
    note: "The framework's page on tying technology spend to the value it creates. It separates resource metrics, such as cost per GB or per token, from business metrics, such as cost per customer or per transaction. At the first maturity level it advises adding usage counters early so unit costs can be measured later."
  - title: FinOps for AI Overview
    author: FinOps Foundation
    url: "https://www.finops.org/wg/finops-for-ai-overview/"
    type: guide
    year: 2026
    note: "A guide to how AI spend differs from other cloud spend: tokens as the unit, fast-changing prices and buyers outside engineering. It advises allocating spend before optimizing it, committing only once usage is stable, and measuring cost per successful outcome of a use case."
  - title: Cost Optimization Pillar - AWS Well-Architected Framework
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html"
    type: guide
    year: 2024
    note: "AWS's guidance on cloud financial management, spend awareness, cost-effective resources, matching supply to demand and reducing cost over time. It is written for CTOs, CFOs, architects and developers. It is the vendor's account of its own platform."
  - title: The Cost of Cloud, a Trillion Dollar Paradox
    author: Sarah Wang and Martin Casado
    url: "https://a16z.com/the-cost-of-cloud-a-trillion-dollar-paradox/"
    type: article
    year: 2021
    note: "An analysis of how cloud spend lowers margins and market value at large public software companies, with Dropbox's move to its own infrastructure as the main case. It argues that infrastructure spend should be a first-class metric, optimized early, with a later move off the cloud kept possible in the design. The authors work at the venture firm Andreessen Horowitz."
  - title: Infracost
    author: Infracost
    url: "https://github.com/infracost/infracost"
    type: repo
    year: 2026
    note: "An open-source tool that estimates the cost of infrastructure code before it is deployed and shows cost changes in pull requests, editors and coding agents. It works with Terraform, Terragrunt, CloudFormation and AWS CDK. The CLI needs an Infracost account; the free tier is limited and the vendor sells paid plans."
---
