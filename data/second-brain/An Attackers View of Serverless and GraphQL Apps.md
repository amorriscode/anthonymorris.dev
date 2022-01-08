# An Attackers View of Serverless and GraphQL Apps

**Event:** AppSecCali 2019
**Speaker:** [[Abhay Bhargav]]
[Watch the talk on YouTube](https://www.youtube.com/watch?v=xr2YX5JbDbM)

- Looking for attack vectors in [[serverless]] and [[GraphQL]]
	- [[Serverless]] and [[GraphQL]] both have many attack vectors on their own
	- Abhay figures these will often be paired together so that's why the talk is this way
- [DVFaaS](https://github.com/we45/DVFaaS-Damn-Vulnerable-Functions-as-a-Service)
	- Damn Vulnerable Functions as a Service ([[serverless]])
	- Deploy them and test vulnerabilities of FaaS
- Gentle introduction (the below are in Abhay's words)
	- [[Serverless]]
		- We are talking about Functions as a Service
		- Single-purpose functions running in in a [[cloud service provider]]
		- Monolith --> microservice --> FaaS
			- Consistently making a smaller version of compute
		- Functions are triggered via an event
		- Scalability built in
		- The function doesn't have ports so there aren't really network vulnerabilities
		- tl;dr
			- Short lived
			- No ports
			- No state
			- Single purpose
	- [[GraphQL]]
		- Used a lot in mobile applications

[[talk]] [[We Watch Tech]]