---
layout: distill
title: "Data Centre Cooling Optimization"
description: RL-based control for data centre thermal management
date: 2024-01-01
---

## Overview

Reinforcement learning approach to optimize cooling system operation in data centres. Focuses on coordinating CRAC units, free cooling, and server workload distribution to minimize PUE while maintaining thermal safety.

## Approach

### Algorithm: Soft Actor-Critic (SAC)

We use SAC with safety constraints for continuous control of:

- CRAC unit setpoints
- Free cooling valve positions
- Server workload distribution

### Key Innovation: Digital Twin Training

- High-fidelity simulation environment
- Transfer learning to real facilities
- Safe exploration through simulation

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/placeholder.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Digital twin environment for RL training
</div>

## Results

**Collaboration:** Industry partner (confidential)

- **15% reduction** in cooling energy consumption
- **Improved thermal uniformity** across server racks
- **Safe deployment** with automatic fallback controls

### Performance Comparison

| Metric               | Baseline | RL Controller | Improvement |
| -------------------- | -------- | ------------- | ----------- |
| PUE                  | 1.45     | 1.28          | -11.7%      |
| Cooling Energy (kWh) | 1000     | 850           | -15%        |
| Max Rack Temp (°C)   | 28.5     | 26.2          | -8.1%       |

## Technology Stack

- **RL Framework**: Stable-Baselines3
- **Simulation**: EnergyPlus + custom DC models
- **Deployment**: Docker containers, REST API
- **Monitoring**: Grafana dashboards
