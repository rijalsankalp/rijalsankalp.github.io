# Image Caption Generation

```{admonition} Project Info
:class: tip
**Category:** Multimodal AI · **Date:** Oct 2025 · [GitHub](https://github.com/rijalsankalp/ImageCaptionGeneration)
```

## Overview

Implemented a multimodal image captioning system using Vision Transformer (ViT) for visual feature extraction and GPT-2 for natural language generation. The project covers data preprocessing, model training, cross-modal attention mechanisms, and evaluation using ROUGE/BLEU scores.

## Key Highlights

::::{grid} 2
:gutter: 2

:::{grid-item}
✅ ROUGE-L score of 0.52 on COCO
:::
:::{grid-item}
✅ ViT + GPT-2 cross-modal architecture
:::
:::{grid-item}
✅ Cross-attention mechanisms
:::
:::{grid-item}
✅ COCO dataset evaluation
:::
::::

## Technical Details

1. **Cross-Modal Architecture:** Designed a cross-modal architecture combining a pre-trained Vision Transformer for spatial visual embeddings with GPT-2 for autoregressive caption generation, connected via a learned projection layer.

2. **Performance:** Achieved ROUGE-L of 0.52 on the COCO dataset through extensive hyperparameter tuning and training strategies.

3. **Cross-Attention:** Implemented cross-attention mechanisms that allow the language model to attend to relevant visual features at each generation step, improving caption relevance and specificity.

4. **Experiments:** Conducted extensive experiments with different transfer learning configurations and fine-tuning schedules to optimize the balance between visual understanding and language fluency.

## Tags

`Python` `PyTorch` `Vision Transformer` `GPT-2` `Multimodal Learning` `NLP`
