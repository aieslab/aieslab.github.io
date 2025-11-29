---
layout: page
title: Autonomous Agents for 24/7 Facility Operations
description: Building AI agents that can autonomously operate buildings with reliable reasoning and safe control actions.
img: assets/img/projects/llm-agents.png
importance: 4
category: opportunity
keywords:
  - Agentic AI
  - Autonomous Control
  - Facility Management
  - Safety
---

## What We're Doing

We have chatbots running at a few buildings. They pull data, answer questions, run simple diagnostics. But they need a human for everything. We're trying to make them autonomous enough to handle overnight operations, catch issues before they become problems, and only escalate when actually necessary.

Right now the systems can:
- Query BMS data and sensor trends
- Look up equipment specs from manuals
- Run diagnostic checks
- Answer questions about building operation

What we want:
- Actually monitoring 24/7 without supervision
- Catching anomalies and investigating root causes
- Making safe control adjustments within bounds
- Scheduling preventive maintenance based on conditions
- Escalating to humans only when needed

## Current Deployments

We have systems at:
- ITE College Singapore (NVIDIA DGX infrastructure)
- Central Pattana retail properties (multi-site)
- JW Marriott Bangkok (441 rooms)

They're assistants right now. We want them autonomous.

## What You'd Actually Do

- Design agent architectures that don't break things when they're wrong
- Build safety constraints that make sense for real buildings
- Figure out when the agent should be confident vs ask for help
- Test on live buildings with real consequences
- Document what goes wrong so we learn from it

## Real Questions We're Dealing With

- How do you make an agent that knows what it doesn't know?
- What level of autonomy is safe before you need human approval?
- How do you audit agent decisions when something goes wrong?
- What happens when the BMS data is unreliable or missing?

## Who We Need

Someone who cares about reliability over demos. Experience with LLM agents (LangChain, LangGraph, ReAct patterns) helps. You should be comfortable working on systems where failure means real people get too hot or too cold, not just bad metrics.
