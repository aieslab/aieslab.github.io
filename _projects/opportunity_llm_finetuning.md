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

Off-the-shelf LLMs don't understand HVAC. Ask about chiller surge, VAV minimum airflow, or AHU economizer faults and you'll get generic answers that sound right but miss the specifics. We're fine-tuning open-source models to actually know this stuff.

We've built:
- 12,000+ training examples from real equipment manuals, fault logs, and control sequences
- 800-question benchmark covering diagnostics, control logic, and fault interpretation
- Evaluation framework validated against HVAC engineers

## Infrastructure

We're an official NVIDIA partner with H100 GPU access for this project. You'll work on state-of-the-art open-source models like Qwen 3 and GLM 4.6, not closed APIs. Everything gets released open-source.

## What You'd Actually Do

- Clean and expand the training dataset (real building data, not synthetic)
- Run fine-tuning experiments on H100s (LoRA, full fine-tuning, different architectures)
- Build better evaluation metrics for technical responses where multiple answers are valid
- Benchmark against closed models to prove open-source can compete
- Write docs and papers for public release

## Open Questions

- Which model architecture works best for technical reasoning about physical systems?
- How do we balance general reasoning ability with domain-specific knowledge?
- Can we get deployment-ready models small enough to run locally on building controllers?
- What's the minimum dataset size for reliable domain transfer?

## Who We Need

Someone who's actually fine-tuned models before. You should know the Hugging Face ecosystem, understand LoRA/QLoRA, and have opinions about dataset quality. HVAC knowledge isn't required but you need to care about getting technical details right, not just metrics.

## Goal

Release the first open-source HVAC-specialized LLM that beats closed models on building diagnostics. Make it the standard for anyone building AI tools for facility management.
