# Architecture notes

What I read, use and think about as a solution architect working with AI agents. Curated links, each with my note, and my take on every topic. By [Przemek Łuniewski](https://foster.systems).

**Site:** https://foster-systems.github.io/architecture-notes · **For agents:** [llms.txt](https://foster-systems.github.io/architecture-notes/llms.txt) · **Changes:** [posts](posts/) and the [commit history](https://github.com/foster-systems/architecture-notes/commits/main)

## Topics

<!-- topics -->

### [Foundations](notes/foundations/)

The basics that are always good and always true.

- [Domain-driven design](notes/foundations/ddd.md): Building software around a shared model of the business domain, split into bounded contexts with explicit relationships.
- [SOLID principles](notes/foundations/solid.md): Five design principles (SRP, OCP, LSP, ISP, DIP) for managing dependencies so code stays easy to change.
- [Test-driven development](notes/foundations/tdd.md): A loop of writing a small failing test, making it pass, then cleaning up the design, one behaviour at a time.

### [AI engineering](notes/ai-engineering/)

How applications built on language models work, and how to build them well.

- [AI engineering basics](notes/ai-engineering/basics.md): How applications and agents built on language models work: prompts, context, tools, retrieval and evals.

### [Agentic engineering](notes/agentic-engineering/)

Delivering and running software with AI agents: what works, what to control, which tools.

- [Governing agents](notes/agentic-engineering/governance.md): Keeping AI agents and agent fleets safe, checked and accountable: permissions, sandboxes, harnesses, approval gates and security controls.
- [Agentic tools](notes/agentic-engineering/tools.md): The main coding agents and open conventions used for agentic software delivery in late 2026.
<!-- /topics -->

## How it works

- One topic is one Markdown file in `notes/<section>/`: front matter holds the summary, why it matters, and 5–7 sources with my notes; the body is my take.
- Each change comes with a post in `posts/`, commenting on what was added, removed or changed, and why.
- Every push to `main` rebuilds the site. Details for contributors and agents: [AGENTS.md](AGENTS.md).

Suggest a source by opening an [issue](https://github.com/foster-systems/architecture-notes/issues).

## Licence

Text in `notes/` and `posts/`: [CC BY 4.0](LICENSE-CONTENT). Code: [MIT](LICENSE). Linked sources belong to their authors.
