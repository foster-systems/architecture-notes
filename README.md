# Architecture notes

A curated, canonical list of what matters in solution architecture with AI agents: per topic, the sources I trust, each with my note. My agents and I use it as a reference: when I mention a topic, this is what I mean. By [Przemek Łuniewski](https://foster.systems).

**Site:** https://notes.foster.systems · **For agents:** [llms.txt](https://notes.foster.systems/llms.txt)

## Topics

<!-- topics -->

### [Foundations](notes/foundations/)

The basics that are always good and always true.

- [Architecture patterns](notes/foundations/patterns.md): Catalogues of named, reusable solutions for structuring applications and distributed systems.
- [Domain-driven design](notes/foundations/ddd.md): Building software around a shared model of the business domain, split into bounded contexts with explicit relationships.
- [SOLID principles](notes/foundations/solid.md): Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change.
- [Test-driven development](notes/foundations/tdd.md): A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time.

### [AI engineering](notes/ai-engineering/)

How applications built on language models work, and how to build them well.

- [Agent system design](notes/ai-engineering/agent-systems.md): Designing systems where agents choose the path at runtime: one agent or several, shared state, tools, tracing and failure.
- [AI engineering basics](notes/ai-engineering/basics.md): How applications and agents built on language models work: prompts, context, tools, retrieval and evals.

### [Agentic engineering](notes/agentic-engineering/)

Delivering and running software with AI agents: what works, what to control, which tools.

- [Agentic tools](notes/agentic-engineering/tools.md): The main coding agents and open conventions used for agentic software delivery in late 2026.
- [Delivery at agent scale](notes/agentic-engineering/delivery.md): Source control, CI and merge queues when many agents change one codebase at once.
- [Governing agents](notes/agentic-engineering/governance.md): Keeping AI agents and agent fleets safe, checked and accountable: permissions, sandboxes, harnesses, approval gates and security controls.
- [Supervising agents](notes/agentic-engineering/supervising-agents.md): The engineer's job when agents write the code: directing them, checking their output, stepping in, and keeping the skill to do it.
<!-- /topics -->

## How it works

- One topic is one Markdown file in `notes/`; folders are sections and can nest. Front matter holds the summary, why it matters, and 5–7 sources with my notes. No body.
- Topics show the current state only. The [commit history](https://github.com/foster-systems/architecture-notes/commits/main) records changes.
- Every source must be readable by agents. A nightly check (`npm run links`) finds dead or blocked links; an agent fixes them or asks me.
- Every push to `main` rebuilds the site. Details for contributors and agents: [AGENTS.md](AGENTS.md).

Suggest a source by opening an [issue](https://github.com/foster-systems/architecture-notes/issues).

## Licence

Text in `notes/`: [CC BY 4.0](LICENSE-CONTENT). Code: [MIT](LICENSE). Linked sources belong to their authors.
