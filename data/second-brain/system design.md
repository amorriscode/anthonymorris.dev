[[Computer Science]] [[Programming]] [[Interview]]

# System Design

## Interviews

- During the [[interview]], the answer might not be objectively correct
  - Because of this, it's important to *defend* your answer

## Time Template

### Feature (5 min)
- Use cases
- Scenarios that will not be covered
- Who will use
- How many will use
- Usage patterns

### Estimations (5 min)
- Throughput (QPS for read and write queries)
- Latency expected from the system (for read and write queries)
- Read/Write ratio
- Traffic estimates
	- Write (QPS, Volume of data)
	- Read  (QPS, Volume of data)
- Storage estimates
- Memory estimates
	- If we are using a cache, what is the kind of data we want to store in cache
	- How much RAM and how many machines do we need for us to achieve this?
	- Amount of data you want to store in disk/ssd

### Design Goals (5 min)
- Latency and Throughput requirements
- Consistency vs Availability  (Weak/strong/eventual => consistency | Failover/replication => availability)

### High-level Design (5-10 min)
- APIs for Read/Write scenarios for crucial components
- Database schema
- Basic algorithm
- High level design for Read/Write scenario

### Deep Dive (15-20 min)
- Scaling the algorithm
- Scaling individual components
	- Availability, Consistency and Scale story for each component
	- Consistency and availability patterns
- Think about the following components, how they would fit in and how it would help
	- DNS
	- CDN (Push vs Pull)
	- Load Balancers (Active-Passive, Active-Active, Layer 4, Layer 7)
	- Reverse Proxy
	- Application layer scaling (Microservices, Service Discovery)
	- DB (RDBMS, NoSQL)
		- RDBMS
			- Master-slave, Master-master, Federation, Sharding, Denormalization, SQL Tuning
		- NoSQL
			- Key-Value, Wide-Column, Graph, Document
				- Fast-lookups
					- RAM (Bounded size) => Redis, Memcached
					- AP (Unbounded size) => Cassandra, RIAK, Voldemort
					- CP (Unbounded size) => HBase, MongoDB, Couchbase, DynamoDB
	- Caches
		- Client caching, CDN caching, Webserver caching, Database caching, Application caching, Cache @Query level, Cache @Object level
		- Eviction policies
			- Cache aside
			- Write through
			- Write behind
			- Refresh ahead
	- Asynchronism
		- Message queues
		- Task queues
		- Back pressure
	- Communication
		- TCP
		- UDP
		- REST
		- RPC