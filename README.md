# Shelf

A curated reading list for building and running a software company, from the first prototype to scale-up: technology, product, law and team. Each source has a short note on what it is. Scope and selection criteria: [About](notes/about.md).

**Site:** https://shelf.foster.systems · **For agents:** [llms.txt](https://shelf.foster.systems/llms.txt)

## Topics

<!-- topics -->

### [Foundations](notes/foundations/)

Design principles and practices that outlast any stack.

- [Complexity and modular design](notes/foundations/complexity.md): What makes software hard to understand and change, and how splitting a system into modules keeps that in check.
- [SOLID principles](notes/foundations/solid.md): Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change.
- [Domain-driven design](notes/foundations/ddd.md): Building software around a shared model of the business domain, split into bounded contexts with explicit relationships.
- [Test-driven development](notes/foundations/tdd.md): A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time.
- [Technical debt](notes/foundations/technical-debt.md): Shortcuts and aging choices in code and design that make later changes slower, and how to decide which to pay back.
- [Refactoring and rewrites](notes/foundations/refactoring.md): Improving the structure of working code without changing what it does, and choosing between rewriting a system and replacing it piece by piece.

### [AI engineering](notes/ai-engineering/)

How applications built on language models work, and how to build them well.

- [AI engineering basics](notes/ai-engineering/basics.md): How applications and agents built on language models work: the model, its context, tools and the system around them.
- [Retrieval](notes/ai-engineering/retrieval.md): Giving a language model the right documents at answer time: search over a company's own data, and the choice between retrieval and long context.
- [Evals](notes/ai-engineering/evals.md): Testing whether an LLM application or agent does its job, during development and in production.
- [Agent system design](notes/ai-engineering/agent-systems.md): Designing software in which language model agents choose their own steps at runtime: how many agents, what they share and remember, and which tools they get.
- [Choosing models per workload](notes/ai-engineering/model-choice.md): Deciding which model runs which work and where it is hosted, and checking the choice on the team's own tasks.

### [Agentic engineering](notes/agentic-engineering/)

Building software with AI coding agents: whether they help, which ones to use, and how to steer, secure, supervise and ship with them.

- [Adopting coding agents](notes/agentic-engineering/adoption.md): Rolling out coding agents in an engineering team, and checking whether they make the team faster and its software better.
- [Coding agents](notes/agentic-engineering/tools.md): The main coding agents and the open formats they share for repository instructions, tools and skills.
- [Steering coding agents](notes/agentic-engineering/steering.md): Setting up a codebase so agents do good work: instructions, specs, tests and automated checks.
- [Securing coding agents](notes/agentic-engineering/governance.md): Limiting what coding agents can reach and do: permissions, sandboxes, network limits, third-party plugins and prompt injection.
- [Supervising coding agents](notes/agentic-engineering/supervising-agents.md): The engineer's job when agents write the code: directing them, judging their output, stepping in, and keeping the skill to do it.
- [Delivering agent-written code](notes/agentic-engineering/delivery.md): Keeping code review, CI and merging ahead of the rate at which agents produce changes.

### [Architecture](notes/architecture/)

How systems are shaped and how those decisions are made.

- [System design](notes/architecture/system-design.md): How distributed systems behave: consistency, replication, partitioning, failure and overload.
- [Architecture styles and patterns](notes/architecture/styles.md): The first structural decision of a software company (monolith, modular monolith or services) and the named patterns for building distributed systems.
- [Multi-tenancy](notes/architecture/multi-tenancy.md): How a SaaS product shares infrastructure and data among customers while keeping them apart.
- [API design](notes/architecture/api-design.md): Designing web and service APIs that stay usable as they change: REST, gRPC, OpenAPI, versioning and compatibility.
- [Asynchronous work and messaging](notes/architecture/messaging.md): Moving work out of the request with background jobs, queues and events, and keeping data correct when a message is late, lost or delivered twice.
- [Caching](notes/architecture/caching.md): Keeping copies of data close to where they are used: HTTP and CDN caches, application caches, invalidation and the failures caches cause.
- [Web frontend](notes/architecture/web-frontend.md): The client side of a SaaS web application: rendering choices, web performance and accessibility.
- [Architecture decisions](notes/architecture/architecture-decisions.md): Making architecture decisions and recording them so the reasoning survives: ADRs, RFCs, design docs and C4 diagrams.
- [Build or buy](notes/architecture/build-or-buy.md): Deciding what to build, what to buy and what to adopt, and the risk each dependency brings.

### [Data](notes/data/)

Storing, moving and using a company's data.

- [Databases](notes/data/databases.md): Choosing the main database of a software product, usually a relational one such as Postgres, using it well and changing its schema safely.
- [Scaling the database](notes/data/database-scaling.md): Keeping one main database healthy as load grows, and splitting it when one server is no longer enough: connections, vacuum, replicas, partitioning and sharding.
- [Data pipelines](notes/data/data-pipelines.md): Moving data from source systems into a warehouse or lakehouse, transforming it for analysis, and orchestrating the jobs.
- [Product analytics](notes/data/product-analytics.md): Tracking what users do in a product as events, and using that data to answer product questions and judge experiments.
- [Privacy by design](notes/data/privacy-by-design.md): Engineering practice for personal data: collecting less, keeping it for a set time, and deleting it everywhere it went.

### [Infrastructure and cost](notes/infrastructure/)

Setting up cloud infrastructure, running software on it and paying for it.

- [Cloud foundations](notes/infrastructure/cloud-foundations.md): The base of a cloud setup: accounts, region, network, a security baseline and reviews of the architecture.
- [Infrastructure as code](notes/infrastructure/infrastructure-as-code.md): Defining servers, networks and cloud services in versioned code that a tool applies, instead of setting them up by hand.
- [Hosting and compute](notes/infrastructure/hosting.md): Choosing what runs the application: a platform as a service, serverless functions, containers on an orchestrator such as Kubernetes, or plain servers.
- [Platform engineering](notes/infrastructure/platform-engineering.md): Internal platforms that give product teams self-service infrastructure, tools and supported default paths, run as a product for developers.
- [FinOps](notes/infrastructure/finops.md): Managing cloud and AI spend as a shared practice of engineering, finance and product, measured as cost per unit of value.

### [Delivery](notes/delivery/)

Getting changes to production: pipelines, tests, code review and how to measure the result.

- [CI/CD](notes/delivery/ci-cd.md): How code gets from commit to production: continuous integration and delivery, branching, deployment safety and feature flags.
- [Testing strategy](notes/delivery/testing-strategy.md): What to test at which level: the test pyramid and its alternatives, contract tests and code coverage.
- [Code review](notes/delivery/code-review.md): How a team reviews changes to its code: what reviewers look for, how fast reviews should be, and whether to review before or after merging.
- [Delivery metrics](notes/delivery/delivery-metrics.md): How to measure software delivery and developer productivity: DORA metrics, the SPACE and developer experience frameworks, and the limits of measurement.

### [Reliability](notes/reliability/)

Seeing what production does, setting targets for it and recovering when it fails.

- [Observability](notes/reliability/observability.md): Understanding what running systems do through logs, metrics and traces.
- [Service level objectives](notes/reliability/slos.md): Reliability targets based on what users experience, and the error budgets that follow from them.
- [Incidents](notes/reliability/incidents.md): Responding to production failures and learning from them: severity, roles, communication and post-incident reviews.
- [On-call](notes/reliability/on-call.md): Who answers production alerts outside working hours, how the rotation is run, and what it costs the people on it.
- [Backups and disaster recovery](notes/reliability/backups.md): Keeping copies of data that can be restored, and planning how to recover from losing a database, a region or a cloud account.

### [Security](notes/security/)

Securing the company, its product and how the product is built.

- [Security programme](notes/security/security-programme.md): The security work a software company does before and after its first security hire: a baseline of controls, who owns security, what to do first, and readiness for a breach.
- [Application security](notes/security/application-security.md): Building secure web applications: common risks, security requirements, secure development practices and threat modelling.
- [Securing AI features](notes/security/ai-features.md): Protecting the language model features of a product, such as assistants, search over customer data and agents that call tools, from prompt injection, data leaks and misuse.
- [Identity and access](notes/security/identity-and-access.md): Proving who a user or service is and limiting what it can do: authentication, passkeys, OAuth, authorization and secrets.
- [Software supply chain](notes/security/supply-chain.md): Keeping dependencies, build pipelines and releases trustworthy: dependency choice and scanning, CI hardening, provenance, software bills of materials and signing.
- [Vulnerability handling](notes/security/vulnerability-handling.md): Receiving vulnerability reports, deciding which flaws to fix first, and disclosing them in coordination with the people who found them.

### [Law and compliance](notes/law-and-compliance/)

The laws, contracts, standards and rights a software company working in the EU has to handle.

- [GDPR](notes/law-and-compliance/gdpr.md): The EU regulation on how organisations collect, use, share and protect personal data.
- [Cookies and tracking consent](notes/law-and-compliance/cookies.md): The EU rule that a website or app needs the user's consent before it stores or reads information on their device, unless the service strictly needs it.
- [EU AI Act](notes/law-and-compliance/ai-act.md): The EU regulation on AI systems and general-purpose AI models, as amended by the Digital Omnibus on AI in 2026.
- [NIS2 and the Cyber Resilience Act](notes/law-and-compliance/nis2-and-cra.md): Two EU cybersecurity laws: NIS2 binds providers of services such as cloud and SaaS, and the Cyber Resilience Act binds makers of software and hardware products.
- [EU Data Act](notes/law-and-compliance/data-act.md): The EU regulation on access to data from connected products and on switching between cloud services, SaaS included.
- [EU consumer law](notes/law-and-compliance/consumer-law.md): The EU rules for selling apps, digital content, digital services and subscriptions to consumers: information before the contract, the right of withdrawal, conformity of digital products, unfair terms and unfair commercial practices.
- [EU Digital Services Act](notes/law-and-compliance/digital-services-act.md): The EU regulation on intermediary services, such as hosting services and online platforms, and on how they handle illegal content and moderate what users post.
- [SaaS customer contracts](notes/law-and-compliance/saas-contracts.md): The agreements a SaaS company signs with business customers: the service agreement, the service level agreement and the data processing agreement.
- [SOC 2 and ISO/IEC 27001](notes/law-and-compliance/soc2-and-iso27001.md): Two security assurance schemes: SOC 2, a report by a CPA firm under AICPA criteria, and ISO/IEC 27001, a certifiable standard for information security management.
- [Open source licences](notes/law-and-compliance/open-source-licences.md): What open source licences allow and require when a company builds its product on open source code.
- [Intellectual property](notes/law-and-compliance/intellectual-property.md): The rights a software company can hold in its code, name, inventions and know-how, and how it makes sure it owns them.

### [Product and business](notes/product-and-business/)

The business a software company's technology serves: product discovery, go-to-market, pricing, enterprise readiness, metrics, runway, funding and equity.

- [Product discovery](notes/product-and-business/product-discovery.md): How a software company decides what to build, tests ideas with customers before building them, and tells whether it has product-market fit.
- [Go-to-market and early sales](notes/product-and-business/go-to-market.md): How a software company finds its first customers, matches its way of selling to its price point, and moves from founder-led sales to a sales team.
- [Pricing and billing](notes/product-and-business/pricing-and-billing.md): How a software company prices and packages its product, and how billing systems meter usage, charge customers and keep the records right.
- [Enterprise readiness](notes/product-and-business/enterprise-readiness.md): The features and assurances larger customers require before they buy a SaaS product: single sign-on, user provisioning, audit logs, roles and security reviews.
- [SaaS metrics](notes/product-and-business/saas-metrics.md): How recurring revenue, retention, churn, customer acquisition cost and gross margin are defined, calculated and compared with peers.
- [Runway and financial planning](notes/product-and-business/runway-and-financial-planning.md): How a software company measures burn and runway, tells whether it reaches profit on the cash it has, and plans revenue, headcount and spending.
- [Fundraising and due diligence](notes/product-and-business/fundraising-and-due-diligence.md): How early-stage software companies raise money, the standard funding documents, and how investors run technical due diligence.
- [Equity and stock options](notes/product-and-business/equity-and-stock-options.md): How founders split ownership, how founder shares vest and are taxed, and how a company sizes and runs stock options for employees.

### [Team](notes/team/)

The people who build the software and how they are led.

- [Hiring](notes/team/hiring.md): How a company finds and assesses engineers and brings them into the team: the hiring funnel, structured interviews, work samples and onboarding.
- [Levels, pay and performance](notes/team/levels-and-pay.md): How a software company defines engineering levels, sets pay, and runs performance reviews and promotions.
- [Team design](notes/team/team-design.md): How engineering teams are split and sized, how they work together, and where they work: Conway's law, Team Topologies, team size, and remote and office work.
- [Engineering management](notes/team/engineering-management.md): Managing engineers day to day: appointing the first managers, one-on-ones, feedback, underperformance and letting people go.
- [Technical leadership](notes/team/technical-leadership.md): The startup CTO's job: what the role is, how it changes as the engineering team grows, when to hire a VP of Engineering, and how much code to keep writing.
- [Engineering strategy](notes/team/engineering-strategy.md): How engineering leaders write and run a technical strategy, and how they report on engineering to the CEO, peers and the board.

### [Watch](notes/watch/)

What to follow as technology, practice and regulation move: reports, newsletters and live feeds, people, conferences, startup writing and EU regulatory change.

- [Reports and radars](notes/watch/reports-and-radars.md): Recurring reports and radars on technology choices, software delivery, AI and security breaches.
- [Newsletters and live feeds](notes/watch/newsletters.md): Newsletters on AI, security, reliability and engineering leadership, and live feeds of what practitioners read and star.
- [People](notes/watch/people.md): Individuals whose writing shapes engineering practice today, across software design, AI, observability and leadership.
- [Conferences](notes/watch/conferences.md): Recurring conferences on software architecture, AI engineering, reliability, cloud infrastructure and application security, with recordings of their talks online.
- [Startups and product](notes/watch/startups.md): Essays, articles, podcasts and talks on starting and growing a software company: product-market fit, product management and growth.
- [Regulatory change](notes/watch/regulation.md): Official trackers, decision databases and newsletters that follow new EU rules on data, AI and cybersecurity, and how regulators apply them.
<!-- /topics -->

## Contributing

Suggest a source by opening an [issue](https://github.com/foster-systems/architecture-notes/issues).

## Licence

Text in `notes/`: [CC BY 4.0](LICENSE-CONTENT). Code: [MIT](LICENSE). Linked sources belong to their authors.
