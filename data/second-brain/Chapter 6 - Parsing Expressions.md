[[book]] [[Crafting Interpreters]] [[programming language]] [[compiler]]
# Chapter 6 - Parsing Expressions
- Given a string, a parser maps tokens to terminals in the grammar and figures out which rules could have generated the string
- A parser has two jobs
	- Produce a syntax tree from a valid sequence of tokens
	- Detect and report errors from an invalid sequence of tokens
## Ambiguity and the Parsing Game
- Some strings can be generated in multiple ways
- We use rules for precedence and associativity to resolve any ambiguity during parsing

| Name       | Operators         | Associates |
| ---------- | ----------------- | ---------- |
| Equality   | `==` `!=`         | Left       |
| Comparison | `>` `>=` `<` `<=` | Left       |
| Term       | `-` `+`           | Left       |
| Factor     | `/` `*`           | Left       |
| Unary      | `!` `-`           | Right      |
## Recursive Descent Parsing
- A top-down parser
	- Starts at the top (outermost) grammar rule
	- Works its way down into nested subexpressions prior to reaching the leaves of the syntax tree
- Used in GCC, V8, and more