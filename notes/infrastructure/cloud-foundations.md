---
title: Cloud foundations
description: "The base of a cloud setup: accounts, networks, architecture reviews and infrastructure defined in code."
why: "Account boundaries and network ranges are set early and are hard to change once production depends on them. Infrastructure in code keeps a small team's setup repeatable and reviewable."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 1
tags: [cloud, accounts, networking, well-architected, infrastructure-as-code]
related: [infrastructure/platform-engineering, infrastructure/finops, security/identity-and-access, architecture/multi-tenancy]
sources:
  - title: AWS Well-Architected Framework
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
    type: framework
    year: 2024
    note: "A set of questions for reviewing a workload on AWS, grouped in six pillars: operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. It is the vendor's account of good practice on its own platform."
  - title: Azure Well-Architected Framework
    author: Microsoft
    url: "https://learn.microsoft.com/azure/well-architected/"
    type: framework
    year: 2026
    note: "Microsoft's counterpart for Azure, with five pillars, design guides and review tools. It has a section on SaaS workloads for startups and established software vendors. It is the vendor's account."
  - title: Organizing Your AWS Environment Using Multiple Accounts
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/organizing-your-aws-environment.html"
    type: guide
    year: 2025
    note: "AWS's recommendations for separating workloads into accounts and organizational units. It treats the account as the boundary for access, limits and billing. It says the practices apply from the first production workloads."
  - title: Best practices and reference architectures for VPC design
    author: Google Cloud
    url: "https://docs.cloud.google.com/architecture/best-practices-vpc-design"
    type: guide
    year: 2025
    note: "Google's guide to designing cloud networks: subnets, shared networks, connecting networks, firewall rules, NAT and DNS. It ends with reference architectures. The details are specific to Google Cloud."
  - title: Infrastructure As Code
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/InfrastructureAsCode.html"
    type: article
    year: 2016
    note: "A short definition of infrastructure as code and its core practices: executable definition files, versioning everything, continuous testing and small changes. It draws on Kief Morris's book on the subject."
  - title: OpenTofu
    author: OpenTofu, Linux Foundation
    url: "https://opentofu.org/docs/intro/"
    type: tool
    year: 2023
    note: "An open-source infrastructure as code tool that defines cloud and on-premises resources in configuration files. It is a community fork of Terraform, created in 2023 after HashiCorp moved Terraform to the Business Source License."
  - title: A Comprehensive Guide to Terraform
    author: Yevgeniy Brikman
    url: "https://gruntwork.io/blog/a-comprehensive-guide-to-terraform"
    type: guide
    year: 2016
    note: "A six-part series by a co-founder of Gruntwork, on tool choice, state, reusable modules, common pitfalls and using Terraform as a team."
---
