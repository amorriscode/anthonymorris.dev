[[cryptocurrency]] [[blockchain]]

# Solana
- [[Open source]]
- Permissionless
- High transactions per second
- [[Consensus algorithm]]: [[Proof of History]]
- [[SOL]] is the native token
- Transaction fees are deterministic
	- You can't pay higher fees to increase chances of being included in the next block

# Proof-of-Stake
- People/entities run programs on computers (validators)
- Validators process incoming transactions as well as vote on and append new blocks to the blockchain
- Validators votes on the legitimacy of a block are stake-weighted
	- More stake a validator has, the more influence the validator has in determining the outcome

## Development
- [[Lamport]]s
	- Fractional [[SOL]]
- Public keys
	- Point to accounts on the network
	- Often referred to as addresses
	- 256-bit
	- Shown as base-58 encoded strings
- JSON RPC API
	- All interactions on Solana happen through the RPC API
	- HTTP POST with a JSON body
	- Payload requires:
		- `jsonrpc`
			- Version number
			- Must be ``&quot;2.0&quot;
		- `id`
			- Identifier you choose for identifying the call
			- String or a whole number
		- `method`
			- Name of the method being invoked
		- `params`
			- An array containing params to use during method invocation
- `@solana/web3.js`
	- JavaScript library for making JSON RPC API calls