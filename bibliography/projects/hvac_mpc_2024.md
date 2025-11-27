---
layout: distill
title: "HVAC Model Predictive Control"
description: Advanced MPC for building HVAC systems with physics-informed constraints
date: 2024-01-01
---

## Overview

Development of model predictive control strategies for commercial building HVAC systems. This project focuses on hybrid approaches that combine physics-based thermal models with data-driven learning to optimize energy consumption while maintaining occupant comfort.

## Key Features

- **Real-time optimization** with 15-minute prediction horizons
- **Integration** with building management systems (BMS)
- **Energy savings** of 20-30% in pilot deployments
- **Robust constraint handling** for comfort requirements

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/placeholder.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/placeholder.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Control system architecture and deployment results
</div>

## Methodology

Our approach combines:

1. **Physics-based models**: RC thermal models for building dynamics
2. **Data-driven learning**: Neural networks for disturbance prediction
3. **MPC formulation**: Convex optimization for real-time control

$$
\min_{u} \sum_{k=0}^{N-1} \left( c_k P_k + \lambda \|T_k - T_{\text{set}}\|^2 \right)
$$

subject to thermal dynamics and comfort constraints.

## Results

**Status:** Active field deployment at two commercial buildings

- Building A: 25% energy reduction, maintained comfort within ±0.5°C
- Building B: 18% energy reduction, 15% peak demand reduction

## Code

Implementation available (contact for access):

- Python-based MPC controller
- Building simulation environment
- Integration with common BMS protocols
