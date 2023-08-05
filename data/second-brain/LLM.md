---
aliases: [large language model]
---

[[artificial intelligence|AI]]

# LLM

## Patterns for building systems and products
- https://eugeneyan.com/writing/llm-patterns/#evals-to-measure-performance
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

### Fine-tuning
- Process of taking a pre-trained model and refining it for a specific task
- Can refer to several concepts
	- Continued pre-training
		- Apply to same pre-training regime on the base model but with domain-specific data
	- Instruction fine-tuning
		- Pre-trained model is fine-tuned with instruction-output pairs
		- Model is made to follow instructions
	- Single-task fine-tuning
		- Model is honed for a narrow/specific task
		- Similar to BERT and T5
	- Reinforcement learning with human feedback (RLHF)
		- Combines instruction fine-tuning with reinforcement learning

#### Why fine-tune?
- Performance and control
	- Improve performance of off-the-shelf models
	- Greater control over LLM behaviour
- Modularization
	- Enables using multiple models that are good at different things
- Reduced dependencies
	- Less legal risk if you own the models (not needing external APIs)
	- Can get around third-party issues like rate-limiting, high costs, or restrictive filters

#### Techniques
- Soft prompt tuning
	- Prepends trainable tensor to the model's input embeddings
- Prefix tuning
	- Prepends trainable parameters to the hidden state of all transformer blocks
- Adapter technique
	- Adds fully connected network layers twice to each transformer block
- Low-rank Adaptation (LoRA)
- QLoRA

#### How to apply?
1. Collect data/labels
2. Define evaluation metrics
3. Select a pre-trained model
	- Falcon-40B is known to perform well (unwieldy to fine-tune)
	- Falcon-7B
5. Update the model architecture
6. Pick a fine-tuning approach
	- LoRA or QLoRA good places to start
7. Hyperparameter tuning

### Caching
- Store data previously retrieved or computed
- Popular approach is to cache LLM response keyed on embedding of the input request
	- If any new request is semantically similar, serve the cached response

### Guardrails
- Ensure output quality
- Validate LLM output and make sure it sounds good, is syntactically correct, factual and free from harmful content
- Helps to make sure outputs are reliable and consistent for production
- Tools:
	- https://github.com/microsoft/guidance
	- https://github.com/ShreyaR/guardrails

### Defensive UX
- Anticipate and manage any inaccuracies or hallucinations
	- ie. handle errors gracefully
- LLMs are _not_ deterministic which makes it hard to create consistent UI/UX
- Microsoft's [Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/)
	- More focused on mental models
- Google’s [People + AI Guidebook](https://pair.withgoogle.com/guidebook/)
	- More focused on training data and model development
- Apple’s [Human Interface Guidelines for Machine Learning](https://developer.apple.com/design/human-interface-guidelines/machine-learning)
	- More focused on UX
	- How Apple's design principles can be applied to ML-infused products