# Shelf

A subjective reading list on building software companies, sorted by topic. Each source has a short note on what it is.

**Site:** https://notes.foster.systems · **For agents:** [llms.txt](https://notes.foster.systems/llms.txt)

## Topics

<!-- topics -->

### [Foundations](notes/foundations/)

The basics that are always good and always true.

- [Architecture patterns](notes/foundations/patterns.md): Catalogues of named, reusable solutions for structuring applications and distributed systems.
- [Domain-driven design](notes/foundations/ddd.md): Building software around a shared model of the business domain, split into bounded contexts with explicit relationships.
- [SOLID principles](notes/foundations/solid.md): Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change.
- [Technical debt](notes/foundations/technical-debt.md): What technical debt is and how to manage it.
- [Test-driven development](notes/foundations/tdd.md): A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time.

### [AI engineering](notes/ai-engineering/)

How applications built on language models work, and how to build them well.

- [Agent system design](notes/ai-engineering/agent-systems.md): Designing systems where agents choose the path at runtime: one agent or several, shared state, memory, tools, tracing and failure.
- [AI engineering basics](notes/ai-engineering/basics.md): How applications and agents built on language models work: prompts, context, tools, retrieval and evals.
- [Choosing models per workload](notes/ai-engineering/model-choice.md): Which model runs which work and where it is hosted, chosen per workload and checked on real traffic.
- [Evals](notes/ai-engineering/evals.md): How to evaluate LLM applications and agents, during development and in production.

### [Agentic engineering](notes/agentic-engineering/)

Delivering and running software with AI agents: what works, what to control, which tools.

- [Agentic tools](notes/agentic-engineering/tools.md): The main coding agents and open conventions used for agentic software delivery in late 2026.
- [Delivery at agent scale](notes/agentic-engineering/delivery.md): Source control, CI and merge queues when many agents change one codebase at once.
- [Governing agents](notes/agentic-engineering/governance.md): Keeping AI agents and agent fleets safe, checked and accountable: permissions, sandboxes, harnesses, approval gates and security controls.
- [Supervising agents](notes/agentic-engineering/supervising-agents.md): The engineer's job when agents write the code: directing them, checking their output, stepping in, and keeping the skill to do it.

### [Architecture](notes/architecture/)

How systems are shaped and how those decisions are made.

- [API design](notes/architecture/api-design.md): Designing web and service APIs that stay usable as they change: REST, gRPC, OpenAPI, versioning and compatibility.
- [Architecture decisions](notes/architecture/architecture-decisions.md): Making architecture decisions and recording them so the reasoning survives: ADRs, RFCs, design docs and C4 diagrams.
- [Build or buy](notes/architecture/build-or-buy.md): Deciding what to build, what to buy and what to adopt, and the risk each dependency brings.
- [Multi-tenancy](notes/architecture/multi-tenancy.md): How a SaaS product shares infrastructure and data among customers while keeping them apart.
- [System design](notes/architecture/system-design.md): How distributed systems behave: consistency, replication, partitioning, failure and overload.

### [Data](notes/data/)

Storing, moving and using a company's data.

- [Data pipelines](notes/data/data-pipelines.md): Moving data from source systems into a warehouse or lakehouse, transforming it for analysis, and orchestrating the jobs.
- [Databases](notes/data/databases.md): Choosing and running a database at a small company, with Postgres as the default, and changing its schema safely.
- [Privacy by design](notes/data/privacy-by-design.md): Engineering practice for personal data: collecting less, keeping it for a set time, and deleting it everywhere it went.
- [Product analytics](notes/data/product-analytics.md): Tracking what users do in a product as events, and using that data to answer product questions.

### [Infrastructure and cost](notes/infrastructure/)

Setting up cloud infrastructure, running software on it and paying for it.

- [Cloud foundations](notes/infrastructure/cloud-foundations.md): The base of a cloud setup: accounts, networks, architecture reviews and infrastructure defined in code.
- [FinOps](notes/infrastructure/finops.md): Managing cloud spend as an engineering and business practice, including cost per unit of value.
- [Platform engineering](notes/infrastructure/platform-engineering.md): Internal platforms that give product teams self-service infrastructure, and the choice of what runs containers.

### [Delivery](notes/delivery/)

Getting changes to production: pipelines, tests and how to measure the result.

- [CI/CD](notes/delivery/ci-cd.md): How code gets from commit to production: continuous delivery, deployment practice and feature flags.
- [Delivery metrics](notes/delivery/delivery-metrics.md): How to measure software delivery and developer productivity: DORA, SPACE and developer experience research.
- [Testing strategy](notes/delivery/testing-strategy.md): What to test at what level: the test pyramid, its alternatives and contract tests.

### [Reliability](notes/reliability/)

Seeing what production does, setting targets for it and recovering when it fails.

- [Incidents](notes/reliability/incidents.md): Responding to production failures, learning from them, staffing on-call and recovering lost data.
- [Observability](notes/reliability/observability.md): Understanding what running systems do through logs, metrics and traces.
- [Service level objectives](notes/reliability/slos.md): Reliability targets based on what users experience, and the error budgets that follow from them.

### [Security](notes/security/)

Securing the product and how it is built.

- [Application security](notes/security/application-security.md): Secure development and web application security: common risks, security requirements, secure development practices and threat modelling.
- [Identity and access](notes/security/identity-and-access.md): Proving who a user or service is and limiting what it can do: authentication, OAuth, passkeys, authorization, least privilege and secrets management.
- [Software supply chain](notes/security/supply-chain.md): Keeping dependencies, build pipelines and releases trustworthy: provenance, software bills of materials, dependency risk and signing.

### [Law and compliance](notes/law-and-compliance/)

The laws and standards that bind a software company working in the EU.

- [EU AI Act](notes/law-and-compliance/ai-act.md): The EU regulation on AI systems and general-purpose models, as amended by the Digital Omnibus on AI.
- [GDPR](notes/law-and-compliance/gdpr.md): The EU regulation on personal data, with EDPB guidance on processors and the Commission's tools for international transfers.
- [NIS2 and the Cyber Resilience Act](notes/law-and-compliance/nis2-and-cra.md): Two EU cybersecurity laws: NIS2 binds providers of services such as cloud and SaaS, and the Cyber Resilience Act binds makers of software and hardware products.
- [SOC 2 and ISO/IEC 27001](notes/law-and-compliance/soc2-and-iso27001.md): Two security assurance schemes: SOC 2, a report by a CPA firm under AICPA criteria, and ISO/IEC 27001, a certifiable standard for information security management.

### [Product and business](notes/product-and-business/)

The business a software company's technology serves: pricing, metrics, product discovery and funding.

- [Fundraising and due diligence](notes/product-and-business/fundraising-and-due-diligence.md): What investors look at, how technical due diligence works and the standard early-stage funding documents.
- [Pricing and billing](notes/product-and-business/pricing-and-billing.md): SaaS pricing models, usage-based billing and the engineering of billing systems.
- [Product discovery](notes/product-and-business/product-discovery.md): How product teams find what to build, and how engineers work with product.
- [SaaS metrics](notes/product-and-business/saas-metrics.md): How ARR, churn, retention, CAC and gross margin are defined and used.

### [Team](notes/team/)

The people who build the software and how they are led.

- [Engineering strategy](notes/team/engineering-strategy.md): Writing and running a technical strategy, and working with the founders and the board.
- [Hiring](notes/team/hiring.md): How to find and assess engineers and bring them into the team: funnels, work samples, interviews and onboarding.
- [Team design](notes/team/team-design.md): How teams are structured and how they communicate: Conway's law, Team Topologies, team size and remote work.
- [Technical leadership](notes/team/technical-leadership.md): Leading while still building: the CTO and staff-plus roles, how much code to keep writing, and managing people.

### [Watch](notes/watch/)

What to follow as technology moves: recurring reports, newsletters and people.

- [Newsletters and engineering blogs](notes/watch/newsletters.md): Regular newsletters and engineering blogs that report what is changing in AI, security, reliability and leadership.
- [People](notes/watch/people.md): Individuals whose writing shapes engineering practice today, across engineering, AI and leadership.
- [Reports and radars](notes/watch/reports-and-radars.md): Recurring reports and radars that track technology, developer practice and security year by year.
<!-- /topics -->

## Contributing

Suggest a source by opening an [issue](https://github.com/foster-systems/architecture-notes/issues).

## Licence

Text in `notes/`: [CC BY 4.0](LICENSE-CONTENT). Code: [MIT](LICENSE). Linked sources belong to their authors.
