[[solana]] [[blockchain]] [[cryptocurrency|crypto]]

# Solana Economics
- Rewards validators in two ways
	- Protocol-based rewards
		- New tokens created on a predetermined inflation schedule
		- Generated from inflationary issuances
		- Given on a protocol-based inflation schedule
	- Transaction fees
		- Participant-to-participant transfers

## Terminology
- Total Current Supply
	- Total amount of tokens that have been generated
	- Excludes tokens burnt
	- 500,000,000 SOL were instantiated in the genesis block
- Inflation Rate (%)
	- Annualized growth rate of the *Total Current Supply* at any point in time
- Inflation Schedule
	- Deterministic description of token issuance over time
	- De-inflationary schedule
		- Inflation starts at its highest value and the rate reduces over time
	- Parameterized by three numbers:
		- Initial Inflation Rate (%)
			- Rate when inflation first enabled
			- Token issuance rate can only decrease at this point
		- Dis-inflation Rate (%)
			- Rate at which inflation is reduced
		- Long-term Inflation Rate (%)
			- Stable, long-term inflation rate
- Effective Inflation Rate (%)
	- Inflation rate observed on the network
		- After accounting for other factors that can decrease Total Current Supply
			- 50% of each transaction fee is burned (remaining goes to validators)
			- Loss of private keys, slashing events, etc. reduce supply
- Staking Yield (%)
	- Interest earned on SOL network
	- Used to avoid token dilution due to inflation
- Token Dilution (%)
	- Change in proportional representation of a set of tokens within a larger set due to introduction of new tokens
	- Staked or un-staked tokens due to the introduction and distribution of inflation issuance
- Adjusted Staking Yield (%)
	- Change in fractional token supply ownership of staked tokens due to distribution of inflation issuance
	- Positive dilutive effects of inflation

## Transaction Fees
- Paid to process instructions on Solana
	- Paid by submitter, collected by a validator
- Each transaction is processed by the current leader validation-client
	- Once confirmed as a global state transaction, the transaction fee is paid to the network

### Why transaction fees?
- Compensate validators
- Reduce network spam
- Provide long-term economic stability of the network through a protocol-captured minimum fee per transaction

### Why burn some fees?
- Helps retain leader incentive to include as many transactions as possible
- Provides an inflation limiting mechanism that protects against "tax evasion" attacks (side-channel fee payments?) [[RESEARCH]]
- Can help prevent malicious validators from censoring transactions

### Calculating transaction fees
- Calculated based on two main parts:
	- Static set base fee per signature
	- Number of compute units used during the transaction
- Each transaction has a maximum number of compute units (compute budget)

### Prioritization fee
- Recently introduced (when?)
- Additional fee paid to boost how a transaction is prioritized
	- Results in faster transaction execution times

## Storage Rent Economics
- Accounts with data must pay "rent" to keep their state in memory