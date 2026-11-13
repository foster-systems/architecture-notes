---
title: Caching
description: "Keeping copies of data close to where they are used: HTTP and CDN caches, application caches, invalidation and the failures caches cause."
why: "A cache cuts latency and database load, and a product soon depends on it. Wrong cache rules can serve one user's private data to another, and an empty cache can overload the database and cause an outage."
reviewed: 2026-11-11
sidebar:
  order: 6
tags: [caching, http-caching, cdn, cache-aside, invalidation, thundering-herd, cache-deception]
related: [architecture/system-design, architecture/multi-tenancy, architecture/web-frontend, data/database-scaling, security/application-security]
sources:
  - title: "HTTP caching"
    author: MDN contributors
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
    type: guide
    year: 2026
    note: "A guide to how browsers, proxies and CDNs store and reuse HTTP responses under the HTTP caching standard, RFC 9111. It covers private and shared caches, freshness with max-age, Vary, validation, cache busting for static assets and common patterns. It warns that a personalized response stored in a shared cache can leak to other users."
  - title: "Default cache behavior"
    author: Cloudflare
    url: "https://developers.cloudflare.com/cache/concepts/default-cache-behavior/"
    type: docs
    year: 2026
    note: "Cloudflare's documentation for its own CDN on what it caches when no rule overrides the defaults. It skips responses marked private or no-store and responses that set a cookie, and it caches by file extension, so HTML and JSON are not cached by default. It also lists default edge lifetimes per status code and how a cache lock sends only one request to the origin for simultaneous misses."
  - title: "Cache-Aside pattern"
    author: Microsoft
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
    type: docs
    year: 2025
    note: "The Azure Architecture Center's description of cache-aside: the application reads from the cache, loads from the data store on a miss, and invalidates the cached item when it writes. It covers expiration, eviction, priming, local and shared caches, and the windows in which readers see stale data. It compares the pattern with write-through caching and says when not to use it."
  - title: "Caching challenges and strategies"
    author: Jas Chhabra
    url: "https://builder.aws.com/content/3K9TeXp6strMiJ4vhakpRD7BQWO/caching-challenges-and-strategies"
    type: article
    year: 2019
    note: "An Amazon Builders' Library article on how Amazon teams decide to add a cache and how they run it. It explains how a service comes to depend on its cache, so a cold or failed cache sends a surge of traffic to the systems behind it. It covers local and external caches, soft and hard TTLs, caching errors, request coalescing against thundering herds, and security risks such as cache poisoning."
  - title: "Cache made consistent"
    author: Lu Pan
    url: "https://engineering.fb.com/2022/06/08/core-infra/cache-made-consistent/"
    type: article
    year: 2022
    note: "A Meta engineering post on cache invalidation in its TAO and Memcache caches. It shows how a cache fill racing with an invalidation can leave a stale value in the cache indefinitely. It describes how Meta measures cache consistency against the database and traces cache changes in that race window, with a real bug found this way."
  - title: "Web cache deception"
    author: PortSwigger
    url: "https://portswigger.net/web-security/web-cache-deception"
    type: guide
    year: 2024
    note: "A lesson in PortSwigger's free Web Security Academy, based on research first presented at Black Hat USA 2024. It explains how differences in how a cache and the origin server read a URL let an attacker get a victim's private page stored in a shared cache and then read it. It ends with defences, such as marking dynamic responses no-store and private. PortSwigger sells the Burp Suite security testing tools."
---
