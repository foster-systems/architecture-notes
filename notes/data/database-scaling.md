---
title: Scaling the database
description: "Keeping one main database healthy as load grows, and splitting it when one server is no longer enough: connections, vacuum, replicas, partitioning and sharding."
why: "A growing product usually hits the limits of its first database before any other part of the stack. Each step, from a connection pooler to sharding, costs more than the last, and a late start leaves little runway."
reviewed: 2026-11-11
sidebar:
  order: 2
tags: [postgres, connection-pooling, vacuum, replication, partitioning, sharding]
related: [data/databases, architecture/multi-tenancy, architecture/system-design, reliability/incidents]
sources:
  - title: How to Manage Connections Efficiently in Postgres, or Any Database
    author: Brandur Leach
    url: "https://brandur.org/postgres-connections"
    type: article
    year: 2018
    note: "An article on why database connections are a scarce resource, starting from Postgres's process-per-connection model. It covers connection pools in the application, holding connections for as short a time as possible, and PgBouncer between nodes."
  - title: Routine Vacuuming
    author: PostgreSQL Global Development Group
    url: "https://www.postgresql.org/docs/current/routine-vacuuming.html"
    type: docs
    year: 2026
    note: "The official section on vacuuming: reclaiming space from dead rows, updating planner statistics and preventing transaction ID wraparound. It explains autovacuum and the point at which Postgres stops accepting writes to avoid data loss."
  - title: Transaction ID Wraparound in Postgres
    author: David Cramer (Sentry)
    url: "https://blog.sentry.io/transaction-id-wraparound-in-postgres/"
    type: article
    year: 2015
    note: "Sentry's report on an outage that lasted most of a US working day, when its main Postgres database neared transaction ID wraparound and stopped accepting writes. It explains the mechanism and the choices made during recovery."
  - title: "High Availability, Load Balancing, and Replication: Comparison of Different Solutions"
    author: PostgreSQL Global Development Group
    url: "https://www.postgresql.org/docs/current/different-replication-solutions.html"
    type: docs
    year: 2026
    note: "The official comparison of ways to run Postgres on more than one server, from shared disks and write-ahead log shipping to logical replication and data partitioning. A feature matrix sets out what each one gives, such as replicas that accept reads or no data loss when the primary fails."
  - title: The growing pains of database architecture
    author: Tim Liang (Figma)
    url: "https://www.figma.com/blog/how-figma-scaled-to-multiple-databases/"
    type: article
    year: 2023
    note: "Figma's account of outgrowing a single Postgres database on the largest available instance in 2020. It describes the short-term fixes, such as read replicas and PgBouncer, and then vertical partitioning: moving groups of tables to their own databases."
  - title: How Figma's databases team lived to tell the scale
    author: Sammy Steele (Figma)
    url: "https://www.figma.com/blog/how-figmas-databases-team-lived-to-tell-the-scale/"
    type: article
    year: 2024
    note: "The follow-up on sharding tables horizontally while staying on Postgres. It explains why Figma did not move to CockroachDB, TiDB, Spanner or Vitess, and how it rolled out sharding logically through views before splitting the data physically."
  - title: Partitioning GitHub's relational databases to handle scale
    author: Thomas Maurer (GitHub)
    url: "https://github.blog/engineering/infrastructure/partitioning-githubs-relational-databases-scale/"
    type: article
    year: 2021
    note: "GitHub's account of splitting its main MySQL cluster. Tables were first grouped into schema domains, with a linter that rejects cross-domain queries and one that reports cross-domain transactions, and then moved with Vitess or a custom write cutover. It reports a 50% load reduction on the hosts that now hold the data once on that cluster."
---
