---
title: Complexity and modular design
description: "What makes software hard to understand and change, and how splitting a system into modules keeps that in check."
why: "Complexity sets how fast a codebase can change and how many people can work in it at once. Naming where it comes from lets a team choose the simpler design before the cost shows up in every change."
review: 30
reviewed: 2026-11-11
sidebar:
  order: 1
tags: [complexity, modularity, information-hiding, simplicity, software-design, yagni]
related: [foundations/solid, foundations/technical-debt, foundations/refactoring, architecture/styles]
sources:
  - title: On the Criteria To Be Used in Decomposing Systems into Modules
    author: D. L. Parnas
    url: "https://wstomv.win.tue.nl/edu/2ip30/references/criteria_for_modularization.pdf"
    type: paper
    year: 1972
    note: "The Communications of the ACM paper that introduced information hiding. It splits one small system in two ways and argues that each module should hide a design decision likely to change, not a step in the processing."
  - title: "No Silver Bullet: Essence and Accidents of Software Engineering"
    author: "Frederick P. Brooks, Jr."
    url: "https://www.cs.unc.edu/techreports/86-020.pdf"
    agents: "https://www.cgl.ucsf.edu/Outreach/pc204/NoSilverBullet.html"
    type: paper
    year: 1986
    note: "Brooks's essay that separates the essential complexity of a software problem from the accidental complexity of its tools. It argues that no single technique will bring a tenfold gain within a decade, and names the attacks it expects to help: buying instead of building, prototyping, incremental development and great designers. The link is the University of North Carolina technical report; the agents copy is the 1987 IEEE Computer text."
  - title: Simple Made Easy
    author: Rich Hickey
    url: "https://www.youtube.com/watch?v=SxdOUGdseq4"
    type: talk
    year: 2011
    note: "A Strange Loop keynote by the author of Clojure. It defines simple as not intertwined and easy as near at hand, and argues that choosing the familiar over the simple is a main source of complexity. State, objects and ORMs are among its examples."
  - title: A Philosophy of Software Design
    author: John Ousterhout
    url: "https://www.youtube.com/watch?v=bmSAYlu0NcY"
    type: talk
    year: 2018
    note: "A Talks at Google lecture by the Stanford professor who wrote the book of the same name. It presents problem decomposition as the central skill of design, and deep modules, with simple interfaces over much functionality, as its main tool."
  - title: A Philosophy of Software Design vs Clean Code
    author: "John Ousterhout, Robert C. Martin"
    url: "https://github.com/johnousterhout/aposd-vs-clean-code"
    type: repo
    year: 2025
    note: "A written debate between the authors of the two books, held from September 2024 to February 2025. They disagree on method length, comments and test-driven development, and each rewrites the same example program."
  - title: Yagni
    author: Martin Fowler
    url: "https://martinfowler.com/bliki/Yagni.html"
    type: article
    year: 2015
    note: "An explanation of the Extreme Programming rule not to build capabilities for features you only presume you will need. It names the costs of building them early (build, delay, carry and repair) and notes that the rule works only in code that is easy to change."
---
