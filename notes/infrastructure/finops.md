---
title: FinOps
description: "Managing cloud spend as an engineering and business practice, including cost per unit of value."
why: "Cloud spend moves with every deploy and falls directly on gross margin in a SaaS company. Cost per customer or per request shows whether infrastructure spend grows faster than the business."
horizon: current
reviewed: 2026-11-09
tags: [finops, cloud-cost, unit-economics, gross-margin, cost-optimization]
related: [infrastructure/cloud-foundations, infrastructure/platform-engineering, product-and-business/saas-metrics, product-and-business/pricing-and-billing, ai-engineering/model-choice]
sources:
  - title: FinOps Framework
    author: FinOps Foundation
    url: "https://www.finops.org/framework/"
    type: framework
    year: 2026
    note: "The FinOps Foundation's reference model for managing technology spend. It sets out six principles, three phases (Inform, Optimize, Operate), four domains and 22 capabilities. It also includes personas and a maturity model."
  - title: Unit Economics
    author: FinOps Foundation
    url: "https://www.finops.org/framework/capabilities/unit-economics/"
    type: guide
    year: 2026
    note: "The framework's page on connecting technology spend to the value it creates. It separates resource metrics, such as cost per GB or per token, from business metrics, such as cost per customer. It describes maturity levels from simple variable-cost metrics to fully loaded, governed ones."
  - title: "FOCUS: FinOps Open Cost & Usage Specification"
    author: FOCUS project
    url: "https://focus.finops.org/"
    type: spec
    year: 2026
    note: "An open specification that puts billing data from cloud, SaaS, AI and other vendors into one format. Version 1.4 is the latest release. AWS, Microsoft, Google Cloud and others publish datasets in it."
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
    note: "An analysis of how cloud spend erodes margins and market value at scaled public software companies, with Dropbox as a case of repatriation. It argues that infrastructure spend should be a first-class metric. The authors work at the venture firm Andreessen Horowitz."
  - title: Infracost
    author: Infracost
    url: "https://github.com/infracost/infracost"
    type: repo
    year: 2026
    note: "An open-source tool that estimates the cost of infrastructure code before it is deployed and posts cost changes on pull requests. It works with Terraform, Terragrunt, CloudFormation and AWS CDK. A paid dashboard is sold separately."
---
