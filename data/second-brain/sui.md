[[blockchain]] [[cryptocurrency]]

# Sui
- Built on [[Rust]]
- Uses [[Move]] for its packages (aka [[smart contracts]])ß
	- It's own flavour of [[Move]] (made a Meta)
- Permissionless Layer 1 blockchain
- Horizontally scalable
	- Most transactions are processable in parallel
	- Better resource utilization
	- Can increase throughput by adding resources
- Chooses simpler/low-latency primitives over consensus
	- Consensus is opt-in

## Token
- Native SUI token
	- Fixed supply
	- Used to pay gas
	- Used as delegated stake on validators

## Validators
- Voting power of validators is a function of delegated stake
- Set of validators is Byzantine fault tolerant
- Fees collected from transactions are distributed to validators based on their contribution to the system

## Highlights
- Scalability, instant settlement
- Safety baked into the smart contract language
- Rich, composable on-chain assets
- Better web3 UX
- DAG-based mempool and efficient Byzantine Fault Tolerant consensus