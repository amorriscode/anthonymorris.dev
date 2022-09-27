[[book]] [[Crafting Interpreters]] [[programming language]] [[compiler]]

# A Map of the Territory
## Parts of a Language
### Scanning
- Scanning or lexing
	- [[Lexical analysis]]
- Scanner takes a stream of characters --> chunks them into tokens

### Parsing
- Syntax gets grammar
	- Ability to compose larger expressions/statements from smaller parts
- Parser builds an [[abstract syntax tree]] from a sequence of tokens
- Many parsing techniques used today were conceived to parse human language by [[AI]] researchers
- Reports syntax errors to the user

### Static analysis
- Most languages do this in multiple steps
- Binding or resolution
- For each identifier:
		- Find out where the name is defined
		- Wire the two together
- Type checking occurs here for statically typed languages
- Scope --> a region of code where a name can be used to refer to a declaration
- Results are stored in one of many places:
	- Often as attributes on the [[abstract syntax tree|AST]]
	- In a lookup table (symbol table)
		- Keys to the table are identifiers (names of variables, declarations)

### Intermediate representations
- Not tied to the source or destination form
	- An interface between the two languages
- Allows you to support multiple source targets and target platforms

### Optimization
- Swapping user's code with more efficient implementations with the same semantics
- Example: [[constant folding]]

### Code Generation
- Produces assembly-like instructions a [[CPU]] can run
- Can produce code for a real CPU or a virtual one
	- When targeting virtual CPUs we produce [[bytecode]]

### Virtual Machine
- Runs [[bytecode]]
- Emulates a hypothetical chip supporting a virtual architecture at runtime
- Slower than running native machine code
	- Every instruction is simulated when it executes
- More simple and portable than native machine code

### Runtime
- Either:
	- Tell the [[operating system]] to run our machine code
	- Start up a [[language virtual machine]] and run our [[bytecode]]
- For [[compiled programming language]]s, code implementing the runtime is inserted in the executable
	- [[Golang]] programs include a copy of Go's runtime
- For [[interpreted programming language]]s, the runtime is in the [[interpreter]] or [[language virtual machine]]

## Shortcuts and Alternate Routes
### Single-pass compilers
- Skip syntax trees and other intermediate representations
- Restrict the design of the language

### Tree-walk interpreters
- Begin executing code after parsing into an [[abstract syntax tree|AST]]
- The [[interpreter]] traverses the syntax tree one branch and leaf at a time
	- Evaluates each node as it goes
- Usually slow
	- Not practical for general-purpose languages

### Transpilers
- Compile source code to a _different_ high level language
- Utilize the target high level language's toolset to compile to lower level code

## Compilers and interpreters
- Compiling
	- Implementation technique
	- Translates source language to some other form (usually lower level language)
- [[Compiler]]
	- Translate source code to some other form but doesn't execute it
	- User has to run the output
- [[Interpreter]]
	- Takes in source code and executes it immediately
	- Runs program from source
- Something can be both a compiler and an interpreter
	- Eg. [[CPython]]
	- Most scripting languages work this way

## Challenges
1. In an open source implementation of a [[programming language]], find the code that implements the scanner and parser. Are they handwritten or generated?
2. [[Just-in-time compilation]] tends to be the fastest way to implement dynamically typed languages, but not all of them use it. What reasons are there to _not_ JIT?
	- Has a startup delay
		- Must make tradeoffs between compilation time and quality of code generated
	- Can introduce security issues
		- [[just-in-time compilation|JIT]] compiler outputs [[machine code]] directly into memory then executes it
		- This compiler can be used to execute arbitrary code
3. Most Lisp implementations that compile to C also contain an interpreter that lets them execute Lisp code on the fly as well. Why?
	- Code can be rewritten at runtime (eg. macros)
		- Staged compilation (requires an interpreter)
			- Compile macros --> link them into compiler --> compile code
	- Late binding
		- Function being called is looked up at runtime
		- Method called on an object is looked up at runtime
		- In Lisp, global function calls are looked up at runtime via a symbols' function cell
			- Function bindings are mutable
			- https://en.wikipedia.org/wiki/Late_binding#Late_binding_in_Lisp