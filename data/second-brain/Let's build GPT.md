[[artificial intelligence|AI]] [[technology]]

# Let's build GPT: from scratch, in code, spelled out
by [[Andrej Karpathy]]
https://www.youtube.com/watch?v=kCc8FmEb1nY&t=1s

- [[GPT]] --> Generatively Pre-trained Transformer
- Training on a small toy dataset (tiny Shakespeare)
- Build [nanoGPT](https://github.com/karpathy/nanoGPT) from scratch
- Character-level language model
	- Characters --> integers
	- Very simple, results in long sequences

## Tokenize text
- Convert raw text as a string --> some sequence of integers according to some vocabulary of possible elements
- Example tokenizers
	- SentencePiece ([[Google]])
		- Sub-word unit level (usually what would be used in productions)
	- tiktoken ([[OpenAI]])
- 

## Supplemental material
- Attention is All You Need paper: https://arxiv.org/abs/1706.03762
- [[OpenAI]] GPT-3 Paper: https://arxiv.org/abs/2005.14165