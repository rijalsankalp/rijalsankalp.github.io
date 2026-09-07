# Reasoning Causal Tracing

```{admonition} Ongoing Research
:class: tip
**Category:** AI Safety / Mechanistic Interpretability · **Started:** Aug 2026 · [GitHub](https://github.com/rijalsankalp/reasoning-causal-tracing)
```

## Overview

This project investigates whether Qwen3-0.6B's verbalized reasoning tracks internal computations that influence its final answer. I use causal interventions on model activations to study how answer-relevant information moves through the residual stream during a controlled relational-reasoning task.

## Research Approach

1. **Behavioral controls:** Construct matched clean and corrupted prompts whose correct answers differ, and verify that the model favors the expected answer in each condition.
2. **Causal localization:** Patch residual-stream activations from the clean run into the corrupted run across 28 layers and 39 prompt positions, producing 1,092 interventions.
3. **Position-matched probing:** Hold the prompt and teacher-forced continuation fixed while changing a selected prompt state, then patch the same downstream probe position across layers.
4. **Generalization testing:** Repeat the controlled probe across 21 name permutations and retain both qualified and rejected examples under fixed behavioral criteria.

## Findings So Far

- Early recovery at the changed relation token and later recovery at downstream positions show how clean answer-relevant information becomes causally available through the prompt.
- In the position-matched study, 12 of 21 name permutations qualified; the other nine failed the required clean behavioral contrast and were reported separately.
- Across qualified examples, bidirectional transfer became consistent in later layers, reached about 0.96 by layer 25, and was complete immediately before the layer-27 readout.

These results localize where information is causally available to the model. They do not necessarily identify where that information was originally computed, and the activation-level intervention does not yet establish that the verbalized chain of thought is necessary for the answer.

## Reproducibility

The repository includes experiment scripts, notebooks, saved results, and figures. Runs use fixed seeds and deterministic decoding where generation is involved, with identity-patching controls to detect implementation or numerical errors.

## Tags

`Python` `PyTorch` `TransformerLens` `Qwen3` `Activation Patching` `AI Safety` `Mechanistic Interpretability`
