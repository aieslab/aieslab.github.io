---
layout: page
title: Automated Building Digitization with LLM Pipelines
description: Automating metadata creation using LLMs to extract information from BIM files and building documentation.
img: assets/img/projects/building-digitization.png
importance: 5
category: opportunity
keywords:
  - Knowledge Graph
  - BIM
  - Automation
  - NLP
---

## What We're Doing

Every time we deploy at a new building, we spend 2-3 weeks manually mapping sensors to equipment, tagging data points, and building metadata. It's tedious and error-prone. Most of the information exists in BIM files, equipment schedules, and submittal documents, but in formats that are impossible to parse automatically.

We want to use LLMs to automate this:
- Parse IFC files and equipment schedules
- Extract sensor mappings from submittal documents
- Match IoT point names to physical equipment
- Build knowledge graphs that our control systems can use
- Flag uncertainties for human review

## Current Reality

Everything's manual. Each site has its own documentation format. Some have clean BIM models, some have PDFs of hand-drawn schematics from 1997. The person who installed the sensors never documented what connects to what.

## What You'd Actually Do

- Build LLM pipelines that can handle messy building docs
- Parse BIM files, PDFs, and Excel sheets with wildly inconsistent formats
- Design knowledge graph schemas that work across building types
- Create validation tools so humans can catch mistakes efficiently
- Test on actual building documentation from our deployment sites

## Real Problems

- Documentation quality varies from excellent BIM models to barely-legible PDFs
- Equipment naming is inconsistent (is "AHU-01" the same as "AHU 1" or "Air Handler Unit 01"?)
- Critical information often lives in technician notes, not official docs
- Some sites have no documentation at all

## Who We Need

Someone who's comfortable working with messy, inconsistent data. NLP experience helps. Knowledge graphs (Neo4j, RDF) are useful. You don't need to know buildings, but you need to be okay with domain complexity where there's no single right answer.
