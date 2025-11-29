---
layout: page
title: Multi-AHU Coordination and Adaptive Control for Large Retail Spaces
description: Coordinated control for multiple AHUs cooling the same retail floor space with adaptive setpoints and VSD adjustment.
img: assets/img/projects/multi-ahu.png
importance: 2
category: opportunity
keywords:
  - Multi-AHU
  - VSD
  - Adaptive Control
  - Retail
  - PMV
---

## What We're Doing

Large retail buildings (10,000+ m²) use multiple AHUs cooling the same open floor area. The units are distributed but their effects overlap. One AHU's output affects temperature readings that other AHUs respond to. Current control treats each unit independently with identical setpoints, which leads to fighting, uneven temperatures, and wasted energy.

We want coordinated control that:
- Adjusts VSD speeds across multiple AHUs based on zone conditions
- Adapts setpoints to actual load distribution (solar, occupancy, product heat)
- Maintains uniform PMV across the floor, not just at individual sensors
- Learns building response and improves over time

## Current State

Rule-based control running at large retail sites. All AHUs get the same setpoint and fan speed commands. PMV stays within bounds but we see temperature gradients across floors and units fighting each other. Solar pre-cooling logic exists but the multi-AHU coordination is basic.

## What You'd Work On

- Model the thermal interaction between distributed AHUs in open-plan retail
- Develop coordinated control algorithms (MPC, distributed control, or learning-based)
- Implement adaptive setpoint and VSD adjustment based on zone feedback
- Test on live multi-AHU systems and compare against baseline
- Quantify comfort uniformity and energy improvements

## Open Questions

- How do we model the coupling between AHUs serving overlapping zones?
- What coordination strategy works best: centralized MPC, distributed consensus, or learning?
- How do we handle the different disturbances (solar gain varies by location, occupancy moves)?
- Can we learn the building's thermal response online without extensive commissioning?

## Who We're Looking For

Someone with control systems background interested in multi-agent or distributed control problems. Experience with MPC or adaptive control is valuable. You should be comfortable with real systems where the model is uncertain and conditions change.
