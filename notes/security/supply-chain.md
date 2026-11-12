---
title: Software supply chain
description: "Keeping dependencies, build pipelines and releases trustworthy: dependency choice and scanning, CI hardening, provenance, software bills of materials and signing."
why: "Most code a small company ships comes from dependencies, and its CI pipeline holds the tokens to publish and deploy. A poisoned package or a stolen CI token reaches production through the normal build."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [security, supply-chain, slsa, sbom, dependencies, ci, signing]
related: [security/application-security, security/vulnerability-handling, delivery/ci-cd, agentic-engineering/governance, law-and-compliance/nis2-and-cra, law-and-compliance/open-source-licences]
sources:
  - title: SLSA specification
    author: "SLSA project (Linux Foundation)"
    url: "https://slsa.dev/spec/v1.2/"
    type: framework
    year: 2025
    note: "A set of incrementally adoptable guidelines for supply chain security, set by industry consensus. It is organized in tracks and levels: the Build Track covers how artifacts are built, and version 1.2, from November 2025, adds a Source Track for how source code is changed."
  - title: Concise Guide for Evaluating Open Source Software
    author: OpenSSF Best Practices Working Group
    url: "https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software"
    type: guide
    year: 2025
    note: "A list of questions and checks for developers choosing an open source dependency or tool. They cover whether the dependency is needed at all, its authenticity, maintenance, security practices, adoption, licensing and the code itself. It notes that well-regarded software may still do poorly on some checks."
  - title: "OSV - Open Source Vulnerabilities"
    author: "OSV project (Google)"
    url: "https://osv.dev/"
    type: tool
    year: 2026
    note: "A distributed vulnerability database for open source that maps vulnerabilities to package versions or commit hashes. It aggregates sources such as GitHub Security Advisories, PyPA and RustSec. OSV-Scanner checks lockfiles, SBOMs and container images against it."
  - title: Secure use reference for GitHub Actions
    author: GitHub
    url: "https://docs.github.com/en/actions/reference/security/secure-use"
    type: docs
    year: 2026
    note: "GitHub's security reference for its CI service. It covers least-privilege tokens, secrets, script injection, the risk of privileged triggers such as pull_request_target running untrusted pull request code, and pinning third-party actions to a full commit SHA or a lockfile. The vendor's guidance for its own product."
  - title: "2026 Minimum Elements for a Software Bill of Materials (SBOM)"
    author: "CISA, NSA, FBI and international partners"
    url: "https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom"
    agents: "https://web.archive.org/web/20261105152948/https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom"
    type: guide
    year: 2026
    note: "Joint guidance on the baseline an SBOM should meet, from July 2026. It replaces the minimum elements NTIA published in 2021 and includes feedback from a 2025 public comment period. It applies to all software and notes that AI and SaaS may need further elements."
  - title: Sigstore overview
    author: "Sigstore project (OpenSSF)"
    url: "https://docs.sigstore.dev/about/overview/"
    type: tool
    year: 2026
    note: "An open source project for signing software artifacts and verifying the signatures. Signing uses ephemeral keys and short-lived certificates bound to an OpenID Connect identity, and each signing event goes into a public, auditable log. Its parts are Cosign, Fulcio and Rekor."
  - title: "Post-mortem of Shai-Hulud attack on November 24th, 2025"
    author: "Oliver Browne (PostHog)"
    url: "https://posthog.com/blog/nov-24-shai-hulud-attack-post-mortem"
    type: article
    year: 2025
    note: "How a self-replicating npm worm got malicious versions of PostHog's JavaScript SDKs published. The chain began with a malicious pull request run by a pull_request_target workflow, and a static analysis alert on that workflow had been dismissed. Lists the fixes: trusted publishing, review of workflow changes, and pnpm 10 with install scripts off and a minimum release age. The vendor's own account."
---
