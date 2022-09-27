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

## Lexemes and Tokens
- Scan list of characters and group them into the smallest  sequences that have meaning
- Each group of meaningful characters is a **lexeme**

```lox
var language = "lox";
```

- Lexeme from the above example:
	- `var`
	- `language`
	- `=`
	- `"lox"`
	- `;`

## Regular Languages and Expressions
- Rules uses to determine how a language groups characters into lexemes is called its **lexical grammar**
- If a language's rules can be defined by a [[regular expression]] then the language is a [[regular language]]