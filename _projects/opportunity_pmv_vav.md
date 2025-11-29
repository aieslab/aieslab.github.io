---
layout: page
title: PMV-Based Air-Side Optimization for VAV Systems
description: We're developing a coordinated control scheme for AHUs and VAV boxes using PMV as the feedback variable.
img: assets/img/projects/vav-optimization.png
importance: 1
category: opportunity
keywords:
  - VAV
  - PMV
  - AHU
  - Zone Control
---

## What We're Doing

We're building a control system that optimizes the entire air-side of large commercial buildings—AHUs, VAV boxes, fans, dampers—using thermal comfort (PMV) as the primary feedback signal instead of just temperature.

The controller coordinates:
- Supply air temperature reset based on zone demands
- Duct static pressure via VSD fan control
- Fresh air dampers for demand-controlled ventilation
- Zone-level VAV damper positions and reheat

## Current State

We have rule-based control running in production at retail megastores and office buildings. The system maintains PMV within ±0.5 and reduces energy, but the coordination between AHU-level and zone-level decisions is basic. We want to make it smarter.

## What You'd Work On

- Develop MPC or RL-based controllers for coordinated air-side optimization
- Implement algorithms on live VAV systems
- Analyze real operational data to understand comfort-energy trade-offs
- Validate performance against baseline control

## Open Questions

- How do we handle the coupling between supply air temperature, pressure, and zone demands in real-time?
- What's the right balance between comfort responsiveness and energy efficiency?
- Can we learn adaptive PMV targets from occupant feedback?

## Who We're Looking For

Someone with background in control systems or building physics. Experience with Python and optimization (Pyomo, CasADi, do-mpc) is useful. You should be comfortable working with real systems that don't behave like textbooks.

## Sites

- Retail megastores (10,000+ m² floor area)
- Commercial office buildings in Bangkok
