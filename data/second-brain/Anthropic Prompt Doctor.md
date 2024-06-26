[[ai worlds fair]] [[artificial intelligence|AI]] [[LLM]]
# Anthropic Prompt Doctor
- People bring prompts with [[Zack Witten]]
- [[Anthropic]]'s workbench has eval built in
- Tips
	- Use capitalization and proper grammar
		- ~probably works
	- XML to separate parts of the prompt
		- Claude is trained with XML data
		- The most important thing is clearly separating sections of the prompt (other separators might work just as good)
	- Helpful to avoid being _too_ constraining (eg. "Every response must be..." vs. "Responses should be 3-4 sentences...")
	- Be clear and reduce ambiguity
	- Ordering of components?
		- Info > Instructions
			- Instructions are followed more closely to the end of the prompt
		- Instructions _after_ long documents
	- Most reliable way to get Claude to output JSON is the assistant prefill functionality
		- Putting words in Claude's mouth
	- Utilize stop sequences!
	- Claude seems to follow instructions better in the user message
