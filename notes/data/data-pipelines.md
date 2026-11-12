---
title: Data pipelines
description: "Moving data from source systems into a warehouse or lakehouse, transforming it for analysis, and orchestrating the jobs."
why: "Reporting, analytics and AI features all read from these pipelines. A small company needs few of the parts, and each part it adds has to be run and paid for."
horizon: current
reviewed: 2026-11-11
sidebar:
  order: 3
tags: [ingestion, transformation, warehouse, lakehouse, orchestration, change-data-capture]
related: [data/databases, data/product-analytics, data/privacy-by-design, infrastructure/finops]
sources:
  - title: Big Data is Dead
    author: Jordan Tigani
    url: "https://motherduck.com/blog/big-data-is-dead/"
    type: article
    year: 2023
    note: "An essay by a founding engineer of Google BigQuery who argues that most organisations do not have enough data to need specialised systems. It draws on BigQuery customer sizes and query patterns, with charts drawn from memory. MotherDuck, his company, publishes it and sells an alternative."
  - title: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics"
    author: Michael Armbrust, Ali Ghodsi, Reynold Xin and Matei Zaharia
    url: "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf"
    type: paper
    year: 2021
    note: "The CIDR 2021 paper that sets out the case for the lakehouse: warehouse features built directly on open file formats such as Parquet. The authors work at Databricks, which sells a lakehouse."
  - title: Dimensional Modeling Techniques
    author: Kimball Group
    url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/"
    type: guide
    year: 2013
    note: "An index of the modelling techniques from The Data Warehouse Toolkit, third edition, with one page per technique. Dimensional modelling, which Ralph Kimball's 1996 book brought to data warehousing, organises analytical data into fact tables and dimension tables."
  - title: How we structure our dbt projects
    author: dbt Labs
    url: "https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview"
    type: guide
    year: 2026
    note: "The vendor's recommended layout for SQL transformation code, in staging, intermediate and marts layers that move data from the shape of its sources to the shape of the business. Each recommendation comes with its reasons, so a team can tell when to deviate."
  - title: Debezium Architecture
    author: Debezium
    url: "https://debezium.io/documentation/reference/stable/architecture.html"
    type: docs
    year: 2026
    note: "Documentation for an open source change data capture tool, which reads row changes from a database's replication log, such as Postgres's, and streams them as events. It can run on Kafka Connect, as a standalone server, or embedded in a Java application."
  - title: Best Practices
    author: Apache Airflow
    url: "https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html"
    type: docs
    year: 2026
    note: "The Airflow project's guidance on writing workflows: tasks that give the same result when re-run, reading fixed partitions of input, light top-level code, and testing. It also covers maintenance of Airflow's own metadata database and upgrades."
  - title: "Engineers Shouldn't Write ETL: A Guide to Building a High Functioning Data Science Department"
    author: Jeff Magnusson
    url: "https://multithreaded.stitchfix.com/blog/2016/03/16/engineers-shouldnt-write-etl/"
    type: article
    year: 2016
    note: "An account of how Stitch Fix gives data scientists end-to-end ownership of their pipelines, while engineers build the platforms underneath. It names the trade-off: technical efficiency is given up for speed and autonomy."
---
