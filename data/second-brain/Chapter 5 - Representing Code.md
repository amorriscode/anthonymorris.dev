[[book]] [[Crafting Interpreters]] [[programming language]] [[compiler]]
# Chapter 5 - Representing Code
## Context-Free Grammars
## Rules for grammars
- Rules are used to generate strings in the grammar
	- Strings are derivations (derived from the rules)
- Called productions (produce strings)
- Productions have:
	- Head
		- Its name
	- Body
		- Describes what it generates
## Visitor pattern
- Design pattern
- Used to help minimize the pain from the [[expression problem]]
- Build out a class (`PastryVisitor`) that has specific `visit` methods for each subclass of the thing you are visiting