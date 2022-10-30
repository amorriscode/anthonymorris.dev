[[cryptocurrency]] [[blockchain]] [[Solana]]

# Programs
- aka smart contracts
- Foundation of on-chain activity
- Process instructions from end users and other programs
- Stateless
	- Data is stored in separate [[Solana account]]s and passed in via instructions
- Stored in [[Solana account]]s marked as `executable`
- All programs are
	- Owned by the [[BPF Loader]]
	- Executed by the [[Solana]] runtime
- Language support
	- Rust
	- C++
	- Any language that targets the LLVM's BPF
- Have a single entry point where instruction processing takes place
	- `process_instruction`
	- Parameters included:
		- `program_id`: `pubkey`
		- `accounts`: `array`
		- `instruction_data`: `byte array`

## Native Programs and the Solana Program Library (SPL)
- Core building blocks for on-chain interactions
- Native Programs
	- Base functionality required for operating validators
	- Included programs:
		- System Program
- SPL Programs
	- Support on-chain activities
		- Creating, swapping, and lending tokens
		- Generating stake pools
		- Maintaining an on-chain name service
	- Includes programs:
		- SPL Token Program
			- Can be invoked via CLI
		- Associated Token Account Program