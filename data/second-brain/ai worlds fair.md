[[artificial intelligence|AI]]
# AI World's Fair

## Day One
- [[Anthropic Prompt Doctor]]
## Day Two
- Measuring the ROI of AI
	- [[Beyang Liu]] from [[Sourcegraph]]
	- Coding without AI
		- Should be straight forward
		- Gaps appear
			- Bridging gaps takes time and focus
	- AI helps bridge gaps experienced when coding
		- Allows us to get to the finish line faster
	- Everyone is trying to understand the ROI of AI
	- Measuring the ROI is MP-hard
		- MP --> "measure productivity"
		- If you can measure human productivity then you can measure AI ROI
	- Frameworks for evaluation AI ROI
		- Roles eliminated
			- How many roles can you eliminate as you increase productivity?
			- Hasn't been observed by [[Sourcegraph]] in the software industry
		- A/B velocity
			- How it works
				- Measure two groups with/without a tool
				- Which group was more productive?
			- Criticisms
				- High cost and effort
				- No two teams are the same
		- Time saved as a function of engagement
			- How it works
				- Identify key product actions
				- Estimate time saved per action (lower bound)
				- Measure product actions
			- Criticisms
				- No second order effects measured
				- Hard to map to large company initiatives
		- Impact on KPIs
			- How it works
				- Track KPIs
					- Lines of Code
					- DORA
				- Tie KPIs to dollar value or business impact
			- Criticisms
				- LoC is a bad metric
				- DORA is ops efficiency, not dev productivity
				- Hard to map KPIs to $ saved
		- Impact on key initiatives
			- How it works
				- Identify how a tool can help with a key initiative
				- Prove that the tool accelerates the initiative
			- Criticisms
				- "Move faster" isn't always an OKR
		- Survey
			- How it works
				- Run a pilot
				- Ask the devs
			- Criticisms
				- Not direct connection to ROI
	- Be skeptical of claims that P=NP
		- It's hard to perfectly measure ROI
	- Define clear success criteria
	- Dev tools are cheap but dev time is often misvalued
	- Should we continue measuring engineers the same way in the world of AI automation?
	- Mythical Man Month
		- 100x lever for small productive teams (as few people as possible)
- Productionizing GenAI Models
	- [[Lukas Biewald]] from [[Weights and Biases]]
	- "How many people have LLMs in production?"
		- "Wow, more than I've ever seen. Why'd ya'll come to this talk?"
		- "Because it's not going well..."
	- Democratization of AI is here
		- Every software engineering team is likely to add AI capabilities
	- AI: easy to demo, hard to productionize
		- AI somehow makes CEOs stupid
		- The bar for quality seems to have gone done, even though it was already low for software
	- Software development is linear while AI development is experimental
		- Fundamentally different workflows
		- Software development --> code is IP
		- AI development --> learning is your IP
			- How do you save your lessons?
			- Reproducibility matters
	- Lessons for building LLM-powered apps
		- Build an eval framework
		- Start with lightweight prototypes
		- Incorporate end-user feedback
		- Iterate
	- Eval best practices
		- Use multiple eval sets/techniques
		- Make sure metrics correlate with the UX
		- Do it
- Building production [[RAG]] systems at scale (with 10s of millions users)
	- Nikhil Thota from [[Perplexity]]
	- Ends up being systems engineering problems
	- Backend perf
		- Distributed systems
		- Model sizes
	- UX
		- Progressive output
			- Users will wait if they think it'll be worth it
			- Eg. show all the work that Perplexity is during
		- Perceived latency
			- Streaming to make it feel like stuff is happening
	- Evaluating quality
		- Big investment in tooling and human effort
		- Eval intermediate steps and thought processes
			- Errors compound in the system
		- "Scratchpad"
			- Perplexity uses Chain of Thought so the model explains itself
			- Can look into and debug the CoT
		- Handle non-determinism and edge cases
		- LLM as a Judge scales better but is not nearly as accurate
			- Still rely a lot on human annotators
	- Orchestration
		- Coordinating between all the systems is complex
		- Build to be model agnostic
	- Everything is built in house
	- Use keyword search + embeddings
	- Collections
		- Allows you to make groupings for multiple questions
		- Can define a prompt for any question in the collection
- GitHub Next Explorations
	- [[Rahul Pandita]] from [[GitHub]]
	- "AI is the new electricity"
		- [[Andrew Ng]] believes AI will transform every industry just like electricity did many years ago
	- GItHub Next's charter is to explore the future of engineering
		- Don't know what the future looks like so they must explore
		- https://githubnext.com/projects/speclang/
	- Copilot Next Editor Suggestion
		- Suggest a change somewhere your cursor _isn't_
		- Eg. if you change a parameters for a function call, suggest updating documentation
	- GitHub Workspace
	- "We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time." ~ T.S. Eliot
- Cursor: Building the Human-AI Hybrid Engineer
	- Model is trained to predict next edit (Copilot++)
	- Hard problems being solved
		- Sub-300ms next-action model
		- Code-specific speculative inference
		- Merkle tree file sync server
		- Context building engine
		- Scalable doc scraping infra
		- Model caching
		- Auto-updating framework
		- Remote perf profiles
		- etc, etc
- The AI emperor has no DAUs: why most devs still don't use code AI
	- [[Quinn Slack]] from [[Sourcegraph]]
	- Best case estimate: ~5% of professional developers use AI to code
	- Why devs don't use AI?
		- It isn't perfect
		- Don't need it
		- Company doesn't use it
		- Too expensive
		- Security/privacy concerns
			- Seeing less of that now
	- Usage needs to grow a lot
	- Lessons from building Cody
		- Hype fools you and your customers
			- You have to be a DAU yourself
			- Don't always listen to the customers, understand what they _really_ want/need
			- If it's so good, why not exploit it vs sell it?
			- Tweets do not transfer to DAU
		- AI code completion is too perfect as a feature
			- Most other code AI features don't come close
- The Future of Knowledge Assistants
	- [[Jerry Liu]] from [[LlamaIndex]]
	- A better knowledge assistant
		- Advanced data and retrieval modules
			- Good RAG begins with parsers
				- Good parsing can improve performance
				- Helps reduce hallucinations
		- Advanced single-agent query flows
			- Ingredients
				- Routing
				- Tool use
				- One-shot planning
				- Memory
			- Agentic RAG
				- Interact with data services as tools, not just a simple query --> vector DB
				-  Remaining gaps
					- Specialist agents tend to be better at tasks
					- Agents fail when there are too many tools available
					- Interacting with other agents isn't great
		- General multi-agent task solvers
			- Why?
				- Specialization
				- Parallelization
				- Cost/latency
			- Challenges
				- Defining service architecture
				- Constrained vs unconstrained flows
			- Llama Agents
				- Agents as microservices
				- Service oriented, distributed architecture
					- Communicate via message queue
				- Encapsulation and modularity
				- Communication via standardized APIs
				- Easy to deploy
				- Scalability and resource management
			- 
	- LLM apps are only as good as your data
		- Garbage in, garbage out