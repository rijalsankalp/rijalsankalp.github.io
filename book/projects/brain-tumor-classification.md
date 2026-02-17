# Brain Tumor Classification

```{admonition} Project Info
:class: tip
**Category:** Deep Learning / Medical Imaging · **Date:** Nov 2025 · [GitHub](https://github.com/rijalsankalp/Brain-Tumor-Classification)
```

## Overview

Built and trained convolutional neural networks for automated classification of brain tumors from MRI scans using ResNet50 and transfer learning. Integrated Grad-CAM for model interpretability, enabling visualization of salient regions to support clinical decision-making.

## Key Highlights

::::{grid} 2
:gutter: 2

:::{grid-item}
✅ 94.2% classification accuracy
:::
:::{grid-item}
✅ Grad-CAM interpretability for clinical use
:::
:::{grid-item}
✅ ResNet50 transfer learning
:::
:::{grid-item}
✅ 3,000+ medical images processed
:::
::::

## Technical Details

1. **Transfer Learning:** Implemented transfer learning with ResNet50 pre-trained on ImageNet, fine-tuning the final layers for brain tumor classification across 4 classes (glioma, meningioma, pituitary, no tumor).

2. **High Accuracy:** Achieved 94.2% accuracy on a stratified test set of 3,000+ medical images through careful data augmentation and hyperparameter optimization.

3. **Interpretability:** Integrated Gradient-weighted Class Activation Mapping (Grad-CAM) to produce visual explanations of the model's predictions, highlighting regions in MRI scans most relevant to the diagnosis.

4. **Preprocessing Pipeline:** Implemented comprehensive preprocessing including normalization, resizing, and augmentation (rotation, flip, zoom) to improve generalization across different MRI acquisition protocols.

## Tags

`Python` `TensorFlow` `Keras` `Grad-CAM` `Medical Imaging` `Transfer Learning`
