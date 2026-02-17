# NovaMind CIS Benchmark MLOps Pipeline

```{admonition} Project Info
:class: tip
**Category:** MLOps / LLMs · **Date:** Dec 2025 · [GitHub](https://github.com/rijalsankalp/llms-final-project)
```

## Overview

Engineered a production-grade MLOps pipeline to fine-tune and deploy Qwen2.5 LLMs for CIS security benchmarks. This project demonstrates end-to-end LLM fine-tuning, optimization, and production deployment practices.

## Key Highlights

::::{grid} 2
:gutter: 2

:::{grid-item}
✅ 70% cost reduction via AWS Spot Instances
:::
:::{grid-item}
✅ End-to-end CI/CD with GitHub Actions + SageMaker
:::
:::{grid-item}
✅ Serverless deployment with FastAPI + Docker
:::
:::{grid-item}
✅ PEFT/LoRA fine-tuning with Flash Attention 2
:::
::::

## Technical Details

1. **Parameter-Efficient Fine-Tuning:** Implemented PEFT with LoRA to efficiently adapt Qwen2.5-0.5B-Instruct using Flash Attention 2 and BF16 precision, reducing memory requirements while maintaining model quality.

2. **CI/CD Pipeline:** Automated the entire CI/CD pipeline with GitHub Actions and AWS SageMaker, achieving a 70% cost reduction via Managed Spot Instances for training jobs.

3. **Serverless Deployment:** Deployed the fine-tuned model with serverless inference using FastAPI + Docker for scalability, enabling on-demand predictions without maintaining always-on infrastructure.

4. **Experiment Tracking:** Integrated Weights & Biases (wandb) for comprehensive model tracking, experiment logging, and evaluation using BLEU and ROUGE metrics to measure generation quality.

## Tags

`Python` `PyTorch` `FastAPI` `AWS` `Docker` `CI/CD` `MLOps` `LLMs`
