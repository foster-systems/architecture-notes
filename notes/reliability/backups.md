---
title: Backups and disaster recovery
description: "Keeping copies of data that can be restored, and planning how to recover from losing a database, a region or a cloud account."
why: "Lost customer data can end a young company, and backups that were never restored often fail when they are needed. Recovery targets for data loss and downtime decide what to back up, how often, and how much standby capacity to pay for."
reviewed: 2026-11-11
sidebar:
  order: 5
tags: [backups, disaster-recovery, rpo, rto, restore-testing, ransomware]
related: [reliability/incidents, data/databases, data/database-scaling, architecture/multi-tenancy]
sources:
  - title: "Data Integrity: What You Read Is What You Wrote"
    author: Raymond Blum and Rhandeev Singh
    url: "https://sre.google/sre-book/data-integrity/"
    type: article
    year: 2017
    note: "A chapter of Google's SRE book on data loss and recovery. It separates backups from archives and replication from recoverability, and says restores must be tested end to end. It includes case studies from Gmail and Google Music."
  - title: Disaster recovery options in the cloud
    author: Amazon Web Services
    url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
    type: guide
    year: 2021
    note: "Part of an AWS whitepaper on meeting recovery time and recovery point objectives. It compares four strategies in rising cost and complexity: backup and restore, pilot light, warm standby and multi-site active/active. Its examples use AWS services, which AWS sells."
  - title: Backup and Restore
    author: PostgreSQL Global Development Group
    url: "https://www.postgresql.org/docs/current/backup.html"
    type: docs
    year: 2026
    note: "The PostgreSQL manual's chapter on its three backup methods: SQL dumps, file system copies, and continuous archiving of the write-ahead log for point-in-time recovery. It sets out the strengths and limits of each."
  - title: Principles for ransomware-resistant cloud backups
    author: National Cyber Security Centre (UK)
    url: "https://www.ncsc.gov.uk/guidance/principles-for-ransomware-resistant-cloud-backups"
    type: guide
    year: 2024
    note: "Five principles from the UK's national cyber security agency for cloud backups that an attacker cannot destroy. They include blocking deletion of backups, restoring an older version when newer ones are corrupt, and alerting on privileged changes."
  - title: Postmortem of database outage of January 31
    author: GitLab
    url: "https://about.gitlab.com/blog/postmortem-of-database-outage-of-january-31/"
    type: article
    year: 2017
    note: "GitLab's account of an engineer deleting its production database by mistake. Its regular pg_dump backups had not been working, disk snapshots were off for the database, and nobody owned backup testing. It restored from a copy made six hours earlier for staging and lost the changes in between."
  - title: Post-Incident Review on the Atlassian April 2022 outage
    author: Atlassian
    url: "https://www.atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage"
    type: article
    year: 2022
    note: "Atlassian's review of a script that deleted the sites of 775 customers by mistake. Backups were intact and no customer lost more than five minutes of data, but restoring many customers at once had never been automated, so some waited up to 14 days. Deleted customer contacts also slowed communication."
---
