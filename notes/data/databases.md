---
title: Databases
description: "Choosing and running a database at a small company, with Postgres as the default, and changing its schema safely."
why: "The database holds the state a company cannot rebuild, and it is the hardest part of the stack to replace. One locking migration or one untested backup can take the whole product down."
horizon: foundation
reviewed: 2026-11-09
sidebar:
  order: 1
tags: [postgres, schema-migrations, indexing, backups, zero-downtime]
related: [data/data-pipelines, architecture/multi-tenancy, architecture/build-or-buy, reliability/incidents]
sources:
  - title: Don't Do This
    author: PostgreSQL wiki
    url: "https://wiki.postgresql.org/wiki/Don%27t_Do_This"
    type: docs
    year: 2024
    note: "A community wiki page of common Postgres mistakes in encoding, SQL constructs, date and text storage, and authentication. Each entry says why to avoid the feature and when it is still right."
  - title: "Use The Index, Luke"
    author: Markus Winand
    url: "https://use-the-index-luke.com/"
    type: guide
    year: 2026
    note: "The free web edition of a book on SQL indexing, written for application developers. It covers Postgres, MySQL, Oracle, SQL Server and Db2, with notes per product."
  - title: Evolutionary Database Design
    author: Pramod Sadalage and Martin Fowler
    url: "https://martinfowler.com/articles/evodb.html"
    type: article
    year: 2016
    note: "A long article on evolving a schema alongside the application. It covers small numbered migrations in version control, a private database per developer, and transition phases for destructive changes. It draws on Thoughtworks projects."
  - title: Just use Postgres
    author: Ethan McCue
    url: "https://mccue.dev/pages/8-16-24-just-use-postgres"
    type: article
    year: 2024
    note: "An essay that recommends Postgres as the default for most new applications that need persistent storage. It goes through the alternatives one by one, including SQLite, DynamoDB, MongoDB, Kafka and MySQL, and says when each one still fits."
  - title: Zero-downtime Postgres migrations - the hard parts
    author: Chris Sinjakli (GoCardless)
    url: "https://gocardless.com/blog/zero-downtime-postgres-migrations-the-hard-parts/"
    type: article
    year: 2019
    note: "GoCardless's account of about 15 seconds of API downtime caused by a migration that added foreign keys. It explains how a migration waiting in the Postgres lock queue blocks ordinary queries behind it, and lists the practices that follow, such as setting `lock_timeout`."
  - title: Strong Migrations
    author: Andrew Kane
    url: "https://github.com/ankane/strong_migrations"
    type: repo
    year: 2026
    note: "A Ruby gem that catches unsafe migrations in development, for Rails on Postgres, MySQL and MariaDB. Its README lists each risky operation with a bad example and a safe multi-step alternative."
  - title: Postmortem of database outage of January 31
    author: GitLab
    url: "https://about.gitlab.com/blog/2017/02/10/postmortem-of-database-outage-of-january-31/"
    type: article
    year: 2017
    note: "GitLab's public report on an outage in which an engineer deleted data from the primary database. About six hours of database records were lost, because several backup methods had failed or were never enabled. It finds that nobody owned or regularly tested the backups."
---
