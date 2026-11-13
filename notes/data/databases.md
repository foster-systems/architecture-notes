---
title: Databases
description: "Choosing the main database of a software product, usually a relational one such as Postgres, using it well and changing its schema safely."
why: "The database holds the state a company cannot rebuild, and it is the hardest part of the stack to replace. One locking migration can take the whole product down."
review: 30
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [postgres, relational, schema-migrations, indexing, zero-downtime]
related: [data/database-scaling, data/data-pipelines, architecture/multi-tenancy, architecture/build-or-buy, reliability/backups, reliability/incidents]
sources:
  - title: "What Goes Around Comes Around... And Around..."
    author: Michael Stonebraker and Andrew Pavlo
    url: "https://db.cs.cmu.edu/papers/2024/whatgoesaround-sigmodrec2024.pdf"
    type: paper
    year: 2024
    note: "A SIGMOD Record review of twenty years of data models and query languages, from MapReduce and key-value stores to document, vector and graph databases. It gives a verdict on each kind of system, dead, niche or becoming relational, and finds that SQL and relational systems absorbed the challengers' good ideas."
  - title: "Use The Index, Luke"
    author: Markus Winand
    url: "https://use-the-index-luke.com/"
    type: guide
    year: 2026
    note: "The free web edition of a book on SQL indexing for application developers. It covers Postgres, MySQL, Oracle, SQL Server and Db2, with notes per product."
  - title: Don't Do This
    author: PostgreSQL wiki
    url: "https://wiki.postgresql.org/wiki/Don%27t_Do_This"
    type: docs
    year: 2026
    note: "A community wiki page of common Postgres mistakes in encoding, SQL constructs, date and text storage, and authentication. Each entry says why to avoid the feature and when it is still right."
  - title: Evolutionary Database Design
    author: Pramod Sadalage and Martin Fowler
    url: "https://martinfowler.com/articles/evodb.html"
    type: article
    year: 2016
    note: "The article that set out schema changes as small migrations kept in version control with the application code. It also covers a database per developer and transition phases for destructive changes. It draws on Thoughtworks projects."
  - title: Zero-downtime Postgres migrations - the hard parts
    author: Chris Sinjakli (GoCardless)
    url: "https://gocardless.com/blog/zero-downtime-postgres-migrations-the-hard-parts/"
    type: article
    year: 2015
    note: "GoCardless's account of about 15 seconds of API downtime caused by a migration that added foreign keys. It explains how a migration waiting in the Postgres lock queue blocks ordinary queries behind it. It ends with practices such as setting `lock_timeout`."
  - title: Strong Migrations
    author: Andrew Kane
    url: "https://github.com/ankane/strong_migrations"
    type: repo
    year: 2026
    note: "A Ruby gem that catches unsafe migrations in development, for Rails on Postgres, MySQL and MariaDB. Its README lists each risky operation with a bad example and a safe multi-step alternative."
---
