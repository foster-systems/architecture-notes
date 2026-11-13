---
title: Enterprise readiness
description: "The features and assurances larger customers require before they buy a SaaS product: single sign-on, user provisioning, audit logs, roles and security reviews."
why: "Enterprise deals often depend on these features, and each one is easier to build early than to retrofit. Their identity standards are changing, so what counts as enterprise-grade keeps moving."
review: 7
reviewed: 2026-11-11
sidebar:
  order: 4
tags: [enterprise, sso, scim, provisioning, audit-logs, rbac, security-questionnaire, saas]
related: [security/identity-and-access, architecture/multi-tenancy, law-and-compliance/soc2-and-iso27001, law-and-compliance/saas-contracts, product-and-business/pricing-and-billing]
sources:
  - title: EnterpriseReady
    author: Replicated
    url: "https://www.enterpriseready.io/"
    type: guide
    year: 2016
    note: "A free guide to the features enterprise buyers expect from SaaS, drawn from a study of 50 leading SaaS applications. It has one chapter per feature, among them single sign-on, audit logs, role-based access control, change management, deployment options and SLAs. It is published by Replicated, a vendor of tools for shipping software to enterprise customers."
  - title: IPSIE Levels
    author: OpenID Foundation IPSIE Working Group
    url: "https://github.com/openid/ipsie/blob/main/ipsie-levels.md"
    type: spec
    year: 2026
    note: "A working draft from the OpenID Foundation group defining how enterprise applications should integrate with an identity provider. It sets independent levels for session lifecycle (single sign-on, forced logout, continuous access) and account lifecycle (deprovisioning, user and group sync, roles), each stating what the application and the identity provider must do. The group profiles existing standards such as OpenID Connect and SCIM, and does not write new ones."
  - title: "System for Cross-domain Identity Management: Protocol (RFC 7644)"
    author: P. Hunt et al. (IETF)
    url: "https://www.rfc-editor.org/rfc/rfc7644"
    type: spec
    year: 2015
    note: "The IETF standard HTTP protocol for creating, reading, updating and deleting users and groups across domains. Identity providers use it to provision and deprovision accounts in SaaS applications. It was updated by RFC 9865 (cursor pagination, October 2025) and RFC 9967 (security event tokens, May 2026)."
  - title: "STAR Level 1: Security Questionnaire (CAIQ v4.1)"
    author: Cloud Security Alliance
    url: "https://cloudsecurityalliance.org/artifacts/star-level-1-security-questionnaire-caiq-v4"
    type: framework
    year: 2026
    note: "A standard set of yes-or-no questions on a cloud provider's security controls, mapped to the CSA Cloud Controls Matrix. Customers and auditors use it to assess providers, and a provider can publish its answers in the CSA STAR Registry. It downloads without an account."
  - title: The SSO Wall of Shame
    author: Rob Chahin
    url: "https://sso.tax/"
    type: article
    year: 2018
    note: "A list of SaaS vendors that charge extra for single sign-on, with each vendor's price increase over the base plan and a source link. It argues that SSO is a basic security requirement and should not be a premium feature. It is maintained on GitHub and still updated, and shows how SaaS vendors price SSO in practice."
---
