---
layout: page
title: Solar Pre-Cooling with Closed-Loop Control for Retail Buildings
description: Developing predictive control for solar pre-cooling in retail buildings with rooftop PV.
img: assets/img/projects/solar-precooling.png
importance: 2
category: opportunity
keywords:
  - Solar PV
  - Pre-Cooling
  - Thermal Storage
  - Predictive Control
---

## What We're Doing

Large retail buildings with rooftop solar can pre-cool during periods of excess generation, storing "coolth" in the building mass. This reduces peak demand and maximizes solar self-consumption. We have rule-based logic doing this now—we want to make it predictive and learning-based.

Current logic:
- Calculate real-time solar surplus (generation minus load)
- Trigger pre-cooling when surplus exceeds threshold
- Constrain cooling to keep PMV within ±0.5
- Softstart/softclose for peak demand limiting

## Current State

The rule-based ASP (Autonomous Solar Pre-cooling) system runs at multiple Dohome retail sites. It works, but it's reactive—it doesn't anticipate solar availability or learn building thermal dynamics. We want closed-loop control that predicts and optimizes.

## What You'd Work On

- Build ML models for solar generation and cooling load forecasting
- Develop predictive controllers that optimize pre-cooling schedules
- Implement closed-loop control with real-time comfort feedback
- Compare learning-based performance against rule-based baseline

## Open Questions

- How do we predict optimal pre-cooling windows using weather and occupancy forecasts?
- What ML approaches best capture building thermal response from operational data?
- How aggressive can pre-cooling be before comfort violations occur?

## Who We're Looking For

Someone with ML experience who's interested in energy systems. Time-series forecasting skills are valuable. You don't need to know buildings deeply—we can teach that—but you should be comfortable with messy real-world data.

## Sites

- Dohome retail megastores (500+ kW rooftop solar each)
- Global House retail chain (8 branches planned)
