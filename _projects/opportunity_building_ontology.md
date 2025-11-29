---
layout: page
title: Building Ontology for LLM-Based Reasoning
description: Developing richer ontologies using Brick Schema and graph databases to support LLM reasoning about building systems.
img: assets/img/projects/building-ontology.png
importance: 6
category: opportunity
keywords:
  - Brick Schema
  - Ontology
  - Graph Database
  - Semantic Reasoning
---

## What We're Doing

Our AI agents need to understand building systems. When a room is too hot, the agent should know that the VAV box connects to an AHU, which connects to a chiller, and that the problem could be anywhere in that chain. Right now we use Haystack tags, which are basically flat key-value pairs. It works for organizing data but not for reasoning.

We're testing Brick Schema and graph databases to see if richer structure actually helps:
- Semantic relationships between equipment
- System hierarchies and dependencies
- Control sequences and operating modes
- Extensions for Southeast Asian building types (different HVAC approaches)

## Current Reality

Using Haystack tags at most sites. It's simple and works for data organization, but when the agent needs to reason about "what affects what," we're stuck writing custom logic for every building.

## What You'd Actually Do

- Compare Brick Schema, Haystack, and RealEstateCore on real buildings
- Build graph database schemas that agents can actually query
- Test if structured ontologies help LLM reasoning or just add complexity
- Design schema extensions for our specific use cases
- Contribute back to open standards if we find something useful

## Real Questions

- Does semantic structure actually improve agent reasoning, or is it just overhead?
- How do we represent temporal patterns (schedules, sequences, seasons)?
- Can we build ontologies that work across different building types without becoming unusable?
- What happens when the real building doesn't match the model?

## Who We Need

Someone with knowledge graphs or semantic web experience. RDF, OWL, SPARQL, or graph databases (Neo4j). You should care about whether formalism helps or just makes things complicated.
