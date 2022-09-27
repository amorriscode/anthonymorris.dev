[[book]] [[Crafting Interpreters]] [[programming language]] [[compiler]]

# Scanning
- First step to any compiler or interpreter
- Scanner takes in raw source as a series of characters and groups it into tokens
	- Scanning or lexing (lexical analysis)

## The Interpreter Framework
- Can be run in two ways
	- Command line with a path to a Lox file
	- Interactively
- Will be using exit codes defined in the UNIX [“sysexits.h”](https://www.freebsd.org/cgi/man.cgi?query=sysexits&apropos=0&sektion=0&manpath=FreeBSD+4.3-RELEASE&format=html)