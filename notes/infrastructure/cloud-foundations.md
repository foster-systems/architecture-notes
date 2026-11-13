---
title: Cloud foundations
description: "The base of a cloud setup: accounts, region, network, a security baseline and reviews of the architecture."
why: "Accounts, region and network ranges are chosen in the first weeks and are hard to change once production depends on them. A few controls set at the start reduce the most common security risks of a new cloud account."
review: 30
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [cloud, accounts, regions, networking, well-architected, landing-zone]
related: [infrastructure/infrastructure-as-code, infrastructure/hosting, infrastructure/finops, security/identity-and-access, architecture/multi-tenancy]
sources:
  - title: AWS Well-Architected Framework
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
    type: framework
    year: 2024
    note: "A set of questions for reviewing a workload on AWS, grouped in six pillars: operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. AWS describes the review as a conversation about design decisions. It is the vendor's account of good practice on its own platform."
  - title: Azure Well-Architected Framework
    author: Microsoft
    url: "https://learn.microsoft.com/azure/well-architected/"
    type: framework
    year: 2026
    note: "Microsoft's counterpart for Azure: five pillars, design guidance and review tools for checking a workload before production. It has a section on SaaS workloads for startups and established software vendors. It is the vendor's account."
  - title: Organizing Your AWS Environment Using Multiple Accounts
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/organizing-your-aws-environment.html"
    type: guide
    year: 2025
    note: "AWS's recommendations for separating workloads and environments into accounts grouped in organizational units. It treats the account as the boundary for access, service limits and billing. It says the practices apply once the first production workloads are planned."
  - title: AWS Startup Security Baseline
    author: "Faisal Farooq, Matthew de Anda, Harsh Chunawala and Justin Plock (Amazon Web Services)"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-startup-security-baseline/introduction.html"
    type: guide
    year: 2026
    note: "A short set of controls for early-stage startups on AWS, split into account controls and workload controls. It covers credentials, logging, contact details and basic data boundaries, written for a single account that later grows into several. It is the vendor's guidance for its own platform."
  - title: What to Consider when Selecting a Region for your Workloads
    author: Saud Albazei (Amazon Web Services)
    url: "https://aws.amazon.com/blogs/architecture/what-to-consider-when-selecting-a-region-for-your-workloads/"
    type: article
    year: 2021
    note: "A short method for choosing a cloud region, written for startups. It weighs four factors: compliance with data residency rules, latency to users, price and the services available there, with compliance overriding the rest. It is an AWS blog post; the examples and services are AWS's."
  - title: Best practices and reference architectures for VPC design
    author: Google Cloud
    url: "https://docs.cloud.google.com/architecture/best-practices-vpc-design"
    type: guide
    year: 2025
    note: "Google's best-practice guide to designing a cloud network, from address planning to connecting several networks. It advises designing the network early and keeping it simple, and ends with reference architectures. The details are specific to Google Cloud."
---
