# Handwritten Devanagari Character Recognition

```{admonition} Project Info
:class: tip
**Category:** Computer Vision · **Date:** Sep 2025 · [GitHub](https://github.com/rijalsankalp/Handwritten-Devanagari-Character-Recognition)
```

## Overview

Developed a deep learning pipeline for handwritten Devanagari character recognition with 96.8% accuracy on 10,000+ character samples. Built custom dataset creation framework and designed CNN architectures tailored for non-Latin script recognition challenges.

## Key Highlights

::::{grid} 2
:gutter: 2

:::{grid-item}
✅ 96.8% recognition accuracy
:::
:::{grid-item}
✅ 46 character classes
:::
:::{grid-item}
✅ Custom data augmentation pipeline
:::
:::{grid-item}
✅ 10,000+ training samples
:::
::::

## Technical Details

1. **Custom CNN:** Designed and trained a custom CNN architecture optimized for the unique stroke patterns and ligatures in Devanagari script, handling 46 character classes.

2. **End-to-End Pipeline:** Built an end-to-end pipeline from data collection with custom OpenCV-based image preprocessing (binarization, noise removal, character segmentation) through model training and evaluation.

3. **Data Augmentation:** Implemented robust data augmentation strategies including elastic deformation, rotation, and thickness variation to simulate real-world handwriting variations.

4. **Evaluation:** Achieved 96.8% accuracy with comprehensive per-class evaluation and confusion matrix analysis to identify commonly confused characters.

## Tags

`Python` `TensorFlow` `Keras` `OpenCV` `Computer Vision` `CNN`
