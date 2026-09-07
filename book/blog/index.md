# Blog

Welcome to my research and technical blog. I use this space to share ongoing experiments, project updates, tutorials, and lessons from building machine-learning systems.

My current writing focuses on AI safety and mechanistic interpretability, including causal investigations of how language models represent and use information during reasoning. I also write about NLP research, MLOps, model deployment, and multimodal learning.

---

## Tracing Reasoning in Qwen3 with Causal Interventions

_September 7, 2026 · AI Safety · Mechanistic Interpretability_

Large language models can produce convincing explanations, but a fluent chain of thought does not by itself show that the stated reasoning caused the answer. In my ongoing AI safety and explainability study, I am using mechanistic interpretability to examine whether Qwen3-0.6B's internal states carry information that causally influences its response.

The guiding question is simple: when the model reasons about a relation, where does answer-relevant information become available, and does changing that internal state change the answer?

### From Observation to Intervention

Reading a model's outputs or decoding information from its activations can reveal correlations. Causal tracing goes a step further. I run the model on a clean prompt and a matched corrupted prompt, then replace selected corrupted activations with activations from the clean run. If the model's answer shifts toward the clean answer, the patched state carried causally useful information.

I use TransformerLens to patch the residual stream across Qwen3-0.6B's 28 layers. The first localization experiment covered 39 prompt positions, for a total of 1,092 interventions. Identity-patching controls check that the intervention code reproduces the expected baseline within numerical tolerance.

### A More Controlled, Position-Matched Probe

Broad localization can be difficult to interpret because the clean and corrupted sequences may diverge. I therefore added a stricter experiment that holds the prompt and teacher-forced continuation text fixed, changes only a selected prompt state during prefill, and patches the residual stream at the same downstream probe position.

The clean and corrupted internal states favor opposite relation tokens. Their causal separation becomes clear in later layers, allowing the experiment to track when the selected information becomes available to the answer computation without moving activations across mismatched token positions.

### Testing Generalization

I repeated the position-matched experiment across 21 candidate name permutations. Each example had to pass fixed behavioral and probe criteria before inclusion:

- 12 examples qualified for the causal analysis.
- Nine were rejected because the clean baseline did not show the required behavioral contrast.
- Across qualified examples, bidirectional source-state transfer became consistent in later layers.
- Mean transfer reached approximately 0.96 at layer 25 and was complete immediately before the layer-27 readout.

Keeping the rejected examples visible matters. These findings support generalization among examples for which the model first exhibits the required behavior; they do not demonstrate robustness across arbitrary name assignments.

### What the Result Means

Activation recovery localizes where answer-relevant information is causally available. It does not necessarily reveal where the information was originally computed. Strong effects near the final readout can reflect information that has already propagated through the network.

The result also does not yet establish that the model's verbalized chain of thought is necessary for its answer. Activation-level causal influence, decodability, and the causal importance of a written reasoning event are different claims. Testing the last claim requires controlled interventions over complete semantic spans followed by on-policy generation and comparison across multiple continuations.

### Continuing the Study

This is ongoing work. The current experiments establish a reproducible foundation for studying internal causal structure while keeping conclusions tied to the evidence. Future stages will test the relationship between internal causal states and verbalized reasoning more directly.

You can read the [project overview](../projects/reasoning-causal-tracing.md) or explore the [code, notebooks, results, and figures on GitHub](https://github.com/rijalsankalp/reasoning-causal-tracing).

```{raw} html
<script src="https://utteranc.es/client.js"
        repo="rijalsankalp/rijalsankalp.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```
