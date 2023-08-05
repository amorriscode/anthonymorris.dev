---
aliases: [large language model]
---

[[artificial intelligence|AI]]

# LLM

## Patterns for building systems and products
- Seven key patterns
	- Evals
		- Measure performance
	- RAG
		- Add recent, external knowledge
	- Fine-tuning
		- Get better at specific tasks
	- Caching
		- Reduce latency and cost
	- Guardrails
		- Ensure output quality
	- Defensive UX
		- Anticipate and manage errors gracefully
	- Collect user feedback

### Evals
- Measure hoe well the system/product is doing
- Detect regressions

#### Benchmarks
- [MMLU](https://arxiv.org/abs/2009.03300)
	- Set of 57 tasks that span elementary math, US history, computer science, law, etc.
	- Models must demonstrate extensive world knowledge and problem-solving abilities
- [EleutherAI Eval](https://github.com/EleutherAI/lm-evaluation-harness)
	- Unified framework to test models
	- Uses zero/few-shot settings on 200 tasks
	- Incorporates a large number of evals
- [HELM](https://arxiv.org/abs/2211.09110)
	- Comprehensive assessment across many domains
	- Metrics include accuracy, calibration, robustness, fairness, bias, toxicity, etc.
- [AlpacaEval](https://github.com/tatsu-lab/alpaca_eval)
	- Automated evaluation framework
	- Measures how often a strong LLM prefers the output of one model over a reference model
	- Metrics include win rate, bias, latency, price, variance, etc.
	- Validated to have a high agreement with 20k human annotations

#### Metrics
- Come in two categories
	- Context-dependent
		- Take context into account
		- Often proposed for a specific task
			- Using them for other tasks requires tweaking
	- Context-free
		- Not tied to context when evaluating outputs
		- Only compare output with provided gold references
		- Task agnostic
			- Easier to use with a wide variety of tasks
- [BLEU](https://dl.acm.org/doi/10.3115/1073083.1073135)

### Retrieval Augmented Generation
- RAG
- Fetches relevant data from outside the model and enhances input with the data
- Provides richer context to improve output
- Helps reduce hallucinations by grounding the model with context
- Cheaper than continuously pre-training an LLM
- Easier to remove biased or toxic documents