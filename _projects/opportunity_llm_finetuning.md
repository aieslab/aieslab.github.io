---
layout: page
title: Fine-Tuning LLMs for HVAC Diagnostics
description: Building domain-specialized LLMs that understand HVAC systems through fine-tuning and benchmark development.
img: assets/img/projects/llm-finetuning.png
importance: 3
category: opportunity
keywords:
  - LLM
  - Fine-Tuning
  - HVAC
  - Open Source
---

## What We're Doing

General-purpose LLMs struggle with HVAC questions. Ask GPT-4 about chiller surge or VAV minimum airflow and you'll get confident but often wrong answers. We're building domain-specialized models that actually understand building systems.

We've created:
- 12,000+ training examples covering equipment, controls, faults, and operations
- 800-question benchmark spanning diagnostics, control logic, and fault interpretation
- Expert-validated evaluation criteria

## Current State

Initial fine-tuning experiments show clear improvement over base models on our benchmark. We want to expand the dataset, refine the evaluation methodology, and release everything open-source.

## What You'd Work On

- Expand and clean the training dataset
- Design better evaluation metrics for open-ended HVAC responses
- Run fine-tuning experiments (LoRA, QLoRA, full fine-tuning)
- Prepare datasets and models for public release
- Write documentation and papers

## Open Questions

- What training data composition yields the best domain transfer?
- How do we evaluate "correctness" for diagnostic responses where multiple answers might be valid?
- What model size works best for edge deployment in buildings?

## Who We're Looking For

Someone with NLP/LLM experience who wants to work on vertical AI. You'll need fine-tuning skills (Hugging Face ecosystem) and good writing ability for documentation. HVAC knowledge is a bonus but not required—you'll learn.

## Goal

Open-source the benchmark and fine-tuned models. Establish this as the standard evaluation for building-domain LLMs.
