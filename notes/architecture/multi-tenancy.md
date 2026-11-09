---
title: Multi-tenancy
description: "How a SaaS product shares infrastructure and data among customers while keeping them apart."
why: "The tenancy model sets cost per customer, blast radius, what enterprise buyers accept and how hard the data layer is to change later. One tenant reading another's data is among the worst failures a SaaS company can have."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 3
tags: [saas, tenant-isolation, data-partitioning, row-level-security, noisy-neighbor, sharding]
related: [architecture/system-design, data/databases, security/application-security, security/identity-and-access]
sources:
  - title: "Tenancy Models for a Multitenant Solution"
    author: Microsoft
    url: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models"
    type: guide
    year: 2025
    note: "A vendor guide to defining a tenant and choosing how much to share. It compares automated single-tenant, fully multitenant, and vertically and horizontally partitioned deployments, with the benefits and risks of each. It is written for Azure, and the models are general."
  - title: "Silo, Pool, and Bridge Models"
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html"
    type: docs
    year: 2023
    note: "A page from the AWS SaaS Lens that defines three categories of SaaS architecture: silo for dedicated resources, pool for shared resources and bridge for a mix of the two. It is the vendor's vocabulary."
  - title: "Multi-Tenant Application Security Cheat Sheet"
    author: OWASP
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html"
    type: guide
    year: 2026
    note: "Security practices for applications that serve many customers from one codebase and often one database. It covers tenant context, database isolation, cross-tenant access, caches and sessions, asynchronous work, file storage, onboarding and offboarding, and audit logging."
  - title: "Row Security Policies"
    author: PostgreSQL Global Development Group
    url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
    type: docs
    year: 2026
    note: "The PostgreSQL reference for policies that limit which rows each role can read or change. It covers permissive and restrictive policies and who bypasses them: superusers, roles with BYPASSRLS and, unless forced, table owners."
  - title: "Herding elephants: Lessons learned from sharding Postgres at Notion"
    author: Garrett Fidalgo
    url: "https://www.notion.com/blog/sharding-postgres-at-notion"
    type: article
    year: 2021
    note: "Notion's account of splitting one PostgreSQL database into 480 logical shards on 32 physical databases, partitioned by workspace ID. It covers when to shard, the design choices, the double-write migration and what the team would change."
  - title: "Fairness in multi-tenant systems"
    author: Amazon Web Services
    url: "https://builder.aws.com/content/3Eupj3d2bo4fEvlzYbICMZNhQ3B/fairness-in-multi-tenant-systems"
    type: article
    year: 2020
    note: "Amazon's account of how rate limits, per-tenant quotas and resource isolation keep one customer's surge from crowding out others on shared services. It also covers admission control, distributed rate limiting and API designs that help customers stay within limits."
  - title: "Workload isolation using shuffle-sharding"
    author: Amazon Web Services
    url: "https://builder.aws.com/content/3F06NpJ8YeoIGP8VHTw4n81pFn8/workload-isolation-using-shuffle-sharding"
    type: article
    year: 2019
    note: "Amazon's account of limiting the impact of failures by giving each customer a mostly unique combination of workers. Its main example is Route 53's defense against DDoS attacks."
---
