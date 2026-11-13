---
title: About
description: "What Shelf covers, how sources are chosen and removed, and how to use it."
---

Shelf is a curated reading list for building and running a software company, from the first prototype to scale-up: technology, product, law and team. For each topic it lists a few sources and says what each one is. [Przemek Łuniewski](https://foster.systems) keeps it.

## What belongs

Shelf covers a software company's first four stages: the idea, the search for product–market fit, early growth and scale-up, up to a few hundred people. A topic belongs when people who build or run such a company meet it as a decision or a task. Topics that are costly to get wrong are added first.

## How sources are chosen

A source is added when its producer has done real work on the subject, it shows evidence or a method, it still holds, it is the origin of the idea or its best current explanation, and it adds something no other source in the topic gives. A vendor's interest is named in the note. These checks are adapted from [Garousi et al.'s criteria for grey literature](https://arxiv.org/abs/1707.02553).

A source is removed when it is misleading, superseded, trivial, out of scope, covered better by another source, or no longer readable. These reasons are adapted from the [CREW method](https://archive.org/details/crewmethod12)'s weeding criteria. Each note's claims are traced to the original source, as in [SIFT](https://hapgood.us/2019/06/19/sift-the-four-moves/).

Sources are free to read, without a login, and readable by AI agents. Each topic has 5 to 7.

## How it is kept

Each topic is reviewed against these criteria every 30 days, or every 7 where the field moves fast, such as AI, EU law and cloud tooling.

AI agents look for sources and review the existing ones. A second agent, on a different model, checks each change against these criteria, and an automated build checks format and links before it is published. Each page links to its history on GitHub; a removal's commit names its reason.

Links only: no copied text. Quotes are rare and short. Inclusion is not an endorsement.

## For agents

Read [llms.txt](../llms.txt) for the index. Append `.md` to any topic URL for its Markdown, or read the [repo](https://github.com/foster-systems/architecture-notes) directly. Front matter holds the summary, why it matters, and the sources.

## Suggest a source

Open an [issue](https://github.com/foster-systems/architecture-notes/issues) with the link and one line on why.

## Licence

The text is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): share it, with credit. The site code is MIT. Linked sources belong to their authors.
