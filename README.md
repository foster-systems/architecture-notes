# Shelf

A subjective reading list on building software companies, sorted by topic. Each source has a short note on what it is.

**Site:** https://notes.foster.systems · **For agents:** [llms.txt](https://notes.foster.systems/llms.txt)

## Topics

<!-- topics -->

### [Foundations](notes/foundations/)

Design principles and practices that outlast any stack.

- [Domain-driven design](notes/foundations/ddd.md): Building software around a shared model of the business domain, split into bounded contexts with explicit relationships.
- [Test-driven development](notes/foundations/tdd.md): A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time.
- [SOLID principles](notes/foundations/solid.md): Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change.
- [Technical debt](notes/foundations/technical-debt.md): What technical debt is and how to manage it.

### [AI engineering](notes/ai-engineering/)

How applications built on language models work, and how to build them well.

- [AI engineering basics](notes/ai-engineering/basics.md): How applications and agents built on language models work: prompts, context, tools, retrieval and evals.
- [Evals](notes/ai-engineering/evals.md): How to evaluate LLM applications and agents, during development and in production.
- [Agent system design](notes/ai-engineering/agent-systems.md): Designing systems where agents choose the path at runtime: one agent or several, shared state, memory, tools, tracing and failure.
- [Choosing models per workload](notes/ai-engineering/model-choice.md): Which model runs which work and where it is hosted, chosen per workload and checked on real traffic.

### [Agentic engineering](notes/agentic-engineering/)

Delivering and running software with AI agents: what works, what to control, which tools.

- [Agentic tools](notes/agentic-engineering/tools.md): The main coding agents and open conventions used for agentic software delivery in late 2026.
- [Governing agents](notes/agentic-engineering/governance.md): Keeping AI agents and agent fleets safe, checked and accountable: permissions, sandboxes, harnesses, approval gates and security controls.
- [Supervising agents](notes/agentic-engineering/supervising-agents.md): The engineer's job when agents write the code: directing them, checking their output, stepping in, and keeping the skill to do it.
- [Delivery at agent scale](notes/agentic-engineering/delivery.md): Source control, CI and merge queues when many agents change one codebase at once.

### [Architecture](notes/architecture/)

How systems are shaped and how those decisions are made.

- [System design](notes/architecture/system-design.md): How distributed systems behave: consistency, replication, partitioning, failure and overload.
- [Architecture styles and patterns](notes/architecture/styles.md): The first structural decision of a software company (monolith, modular monolith or services) and the catalogues of named patterns.
- [Multi-tenancy](notes/architecture/multi-tenancy.md): How a SaaS product shares infrastructure and data among customers while keeping them apart.
- [API design](notes/architecture/api-design.md): Designing web and service APIs that stay usable as they change: REST, gRPC, OpenAPI, versioning and compatibility.
- [Web frontend](notes/architecture/web-frontend.md): The client side of a SaaS web application: rendering choices, web performance and accessibility.
- [Architecture decisions](notes/architecture/architecture-decisions.md): Making architecture decisions and recording them so the reasoning survives: ADRs, RFCs, design docs and C4 diagrams.
- [Build or buy](notes/architecture/build-or-buy.md): Deciding what to build, what to buy and what to adopt, and the risk each dependency brings.

### [Data](notes/data/)

Storing, moving and using a company's data.

- [Databases](notes/data/databases.md): Choosing and running a database at a small company, with Postgres as the default, and changing its schema safely.
- [Data pipelines](notes/data/data-pipelines.md): Moving data from source systems into a warehouse or lakehouse, transforming it for analysis, and orchestrating the jobs.
- [Product analytics](notes/data/product-analytics.md): Tracking what users do in a product as events, and using that data to answer product questions.
- [Privacy by design](notes/data/privacy-by-design.md): Engineering practice for personal data: collecting less, keeping it for a set time, and deleting it everywhere it went.

### [Infrastructure and cost](notes/infrastructure/)

Setting up cloud infrastructure, running software on it and paying for it.

- [Cloud foundations](notes/infrastructure/cloud-foundations.md): The base of a cloud setup: accounts, networks, architecture reviews and infrastructure defined in code.
- [Platform engineering](notes/infrastructure/platform-engineering.md): Internal platforms that give product teams self-service infrastructure, and the choice of what runs containers.
- [FinOps](notes/infrastructure/finops.md): Managing cloud spend as an engineering and business practice, including cost per unit of value.

### [Delivery](notes/delivery/)

Getting changes to production: pipelines, tests and how to measure the result.

- [CI/CD](notes/delivery/ci-cd.md): How code gets from commit to production: continuous delivery, deployment practice and feature flags.
- [Testing strategy](notes/delivery/testing-strategy.md): What to test at what level: the test pyramid, its alternatives and contract tests.
- [Delivery metrics](notes/delivery/delivery-metrics.md): How to measure software delivery and developer productivity: DORA, SPACE and developer experience research.

### [Reliability](notes/reliability/)

Seeing what production does, setting targets for it and recovering when it fails.

- [Observability](notes/reliability/observability.md): Understanding what running systems do through logs, metrics and traces.
- [Service level objectives](notes/reliability/slos.md): Reliability targets based on what users experience, and the error budgets that follow from them.
- [Incidents](notes/reliability/incidents.md): Responding to production failures, learning from them, staffing on-call and recovering lost data.

### [Security](notes/security/)

Securing the product and how it is built.

- [Application security](notes/security/application-security.md): Building secure web applications: common risks, security requirements, secure development practices and threat modelling.
- [Identity and access](notes/security/identity-and-access.md): Proving who a user or service is and limiting what it can do: authentication, OAuth, passkeys, authorization, least privilege and secrets management.
- [Software supply chain](notes/security/supply-chain.md): Keeping dependencies, build pipelines and releases trustworthy: provenance, software bills of materials, dependency risk and signing.

### [Law and compliance](notes/law-and-compliance/)

The laws, standards and licences that bind a software company working in the EU.

- [GDPR](notes/law-and-compliance/gdpr.md): The EU regulation on personal data, with EDPB guidance on processors and the Commission's tools for international transfers.
- [EU AI Act](notes/law-and-compliance/ai-act.md): The EU regulation on AI systems and general-purpose models, as amended by the Digital Omnibus on AI.
- [NIS2 and the Cyber Resilience Act](notes/law-and-compliance/nis2-and-cra.md): Two EU cybersecurity laws: NIS2 binds providers of services such as cloud and SaaS, and the Cyber Resilience Act binds makers of software and hardware products.
- [EU Data Act](notes/law-and-compliance/data-act.md): The EU regulation on access to data from connected products and on switching between cloud services, SaaS included.
- [SOC 2 and ISO/IEC 27001](notes/law-and-compliance/soc2-and-iso27001.md): Two security assurance schemes: SOC 2, a report by a CPA firm under AICPA criteria, and ISO/IEC 27001, a certifiable standard for information security management.
- [Open source licences](notes/law-and-compliance/open-source-licences.md): What open source licences allow and require when a company builds its product on open source code.

### [Product and business](notes/product-and-business/)

The business a software company's technology serves: product discovery, pricing, enterprise readiness, metrics and funding.

- [Product discovery](notes/product-and-business/product-discovery.md): How product teams find what to build, and how engineers work with product.
- [Pricing and billing](notes/product-and-business/pricing-and-billing.md): SaaS pricing models, usage-based billing and the engineering of billing systems.
- [Enterprise readiness](notes/product-and-business/enterprise-readiness.md): The features and assurances larger customers require before they buy a SaaS product: single sign-on, user provisioning, audit logs, roles and security reviews.
- [SaaS metrics](notes/product-and-business/saas-metrics.md): How ARR, churn, retention, CAC and gross margin are defined and used.
- [Fundraising and due diligence](notes/product-and-business/fundraising-and-due-diligence.md): What investors look at, how technical due diligence works and the standard early-stage funding documents.

### [Team](notes/team/)

The people who build the software and how they are led.

- [Hiring](notes/team/hiring.md): How to find and assess engineers and bring them into the team: funnels, work samples, interviews and onboarding.
- [Team design](notes/team/team-design.md): How teams are structured and how they communicate: Conway's law, Team Topologies, team size and remote work.
- [Technical leadership](notes/team/technical-leadership.md): The early-stage CTO's job: what the role is, how it changes as the team grows to about 30, CTO versus VP of Engineering, and how much code to keep writing.
- [Engineering strategy](notes/team/engineering-strategy.md): Writing and running a technical strategy, and working with the founders and the board.

### [Watch](notes/watch/)

What to follow as technology moves: what is trending, conferences, reports, newsletters and people.

- [Reports and radars](notes/watch/reports-and-radars.md): Recurring reports and radars that track technology, developer practice and security year by year.
- [Newsletters and live feeds](notes/watch/newsletters.md): Regular newsletters on AI, security, reliability and leadership, and live feeds that show what is trending among practitioners.
- [People](notes/watch/people.md): Individuals whose writing shapes engineering practice today, across engineering, AI and leadership.
- [Conferences](notes/watch/conferences.md): Recurring conferences on software architecture, AI engineering, reliability, cloud and security, with recordings of their talks online.
<!-- /topics -->

## Contributing

Suggest a source by opening an [issue](https://github.com/foster-systems/architecture-notes/issues).

## Licence

Text in `notes/`: [CC BY 4.0](LICENSE-CONTENT). Code: [MIT](LICENSE). Linked sources belong to their authors.
