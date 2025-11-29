---
layout: page
title: Physics-Informed MPC for Chiller Plants
description: Building MPC controllers that combine physics-based chiller models with data-driven load forecasts for optimal plant operation.
img: assets/img/projects/chiller-mpc.png
importance: 7
category: opportunity
keywords:
  - MPC
  - Chiller Plant
  - Physics-Informed
  - Load Forecasting
---

## What We're Doing

Chiller plants waste energy through poor staging decisions and suboptimal setpoints. We're building MPC controllers that combine physics-based equipment models with data-driven load forecasting to run plants more efficiently.

The controller decides:
- Which chillers to run (staging)
- Chilled water and condenser water setpoints
- Part-load distribution across running chillers
- Pump and cooling tower operation

## Current State

We have chiller plant monitoring and basic optimization at multiple sites. Current control is mostly rule-based or relies on simple curves. We want model-predictive approaches that anticipate load changes.

## What You'd Work On

- Develop physics-based chiller performance models
- Build ML models for cooling load forecasting
- Design MPC formulations that are tractable for real-time control
- Implement and validate on live chiller plants
- Quantify energy savings vs. baseline

## Open Questions

- How do we balance physics-based accuracy with data-driven adaptability?
- What forecasting approaches work best for different building types?
- How do we handle model-plant mismatch in real deployments?

## Who We're Looking For

Someone with control systems or optimization background. Experience with MPC frameworks (do-mpc, CasADi, Pyomo) is valuable. Understanding of thermodynamics and HVAC is helpful but we can teach it.

## Sites

- Commercial buildings with central chiller plants
- Industrial facilities in Thailand
