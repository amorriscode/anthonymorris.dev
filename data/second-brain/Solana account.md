[[Solana]] [[blockchain]]

# Accounts
- Has an address (public key) and an owner (address of a program account)
- Store state/data
	- "Files" on the network ledger
- Each account has a unique address
- Size limits
	- Normal accounts --> 10MB
	- PDA accounts --> 10KB
- PDA accounts can be used to sign on behalf of programs
- Account size fixed at creation time
	- Can be adjusted with `realloc`
- Data storage is paid with rent
	- Prevents accounts from being deleted
- Default account owner is the System Program

## Types of accounts
- Data accounts
	- Store data
	- Types
		- System owned accounts
		- Program Derived Address accounts
- Program accounts
	- Store executable programs
	- Do not store state
- Native accounts
	- Native Solana programs
	- Eg. System, Stake, and Vote programs

## Fields
|Field|Description|
|---|---|
|lamports|Number of lamports owned by account|
|owner|Program owner of account|
|executable|Whether the account can process instructions|
|data|Raw data byte array stored by the account|
|rent_epoch|Next epoch that the account will owe rent|

- Only a data account's owner can modify its data and debit lamports
- Anyone can credit lamports to a data account
- Owner of an account may assign a new owner if the account's data is zeroed out

## Rent
- Storing data costs SOL
- If you maintain 2 years of rent in an account, you are exempt from paying rent
- Rent is paid during two different timings
	- When referenced by a transaction
	- Once an epoch
- A percentage of rent is destroyed, the rest is distributed to vote accounts
- If an account runs out of funds to pay rent, it is deallocated and the data is removed