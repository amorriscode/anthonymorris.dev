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