[[book]] [[Crafting Interpreters]] [[programming language]] [[compiler]]

# The Lox Language
- Lox syntax is a member of the C family
- "If we wanted something elegant, we'd probably mimic Pascal or Smalltalk."
	- TODO: look at Pascal and Smalltalk
- Lox's scoping is similar to Scheme
- Mix between functional and object oriented paradigms
- Further reading: [The next 700 programming languages](https://www.cs.cmu.edu/~crary/819-f09/Landin66.pdf)

## Dynamic Typing
- Lox is dynamically typed
- Variables can hold any type of value
	- Different types at different times
- Static type systems are a lot of work to learn and implement

## Automatic Memory Management
- To main techniques for managing memory:
	- Reference counting
		- Simpler to implement
	- Tracing garbage collection
		- Further reading: [A Unified Theory of Garbage Collection](https://www.cs.cornell.edu/courses/cs6120/2019fa/blog/unified-theory-gc/#:~:text=Broadly%20speaking%2C%20garbage%20collection%20(GC,of%20explicitly%20freeing%20allocated%20memory.)

## Data Types
- Included in Lox:
	- Booleans
	- Numbers
		- Lox only has double-precision floating point
	- Strings
	- Nil
		- `nil` to distinguish itself from Java or C's `null`
		- Worth trying to ban if you are building a statically typed language

## Expressions
- --> produces a value

### Arithmetic
- Operands are subexpressions on either side of the operator
	- When there are two operands we call them binary operators
- Operator types:
	- Infix
		- In-between operands
	- Prefix
		- Operator comes before operands
	- Postfix
		- Operator comes after operands
- Available arithmetic operators:
	- `+`
	- `-`
	- `/`
	- `*`
- The available operators can only be used on numbers except `+` which can concatenate strings

### Comparison and equality
- Always return a Boolean result
- Available comparison operators:
	- `<`
	- `>`
	- `<=`
	- `>=`
	- `==`
	- `!=`

### Logical Operators
- Available logical operators:
	- `!`
	- `or`
	- `and`
- `and` and `or` short-circuit to control flow through a program\

### Precedence and grouping
- Operators have the same precedence and associativity as C
- Can use `()` to group expressions and force precedence

## Statements
- --> produces an effect
- A `;` denotes the end of a statement
- Can be scoped by wrapping them in `{}`

## Variables
- Declared using `var`
- Omitting the initializer defaults a variable to `nil`

## Control flow
- Available control flow statements:
	- `if`
	- `while`
	- `for`

## Functions
- First class
	- Real values
	- Can get a reference to, store in a variable, etc.
- Looks the same as C
	- eg. `makeBreakfast(bacon, eggs, toast)`
- Parenthesis are mandatory to call the function
- Defined with the `fun` keyword
- **argument**
	- An actual value passed to a function when called
	- A function call has an argument list
	- aka actual parameters
- **parameter**
	- Variable holding the value of an argument _inside_ the body of a function
	- Function declaration has a parameter list
	- aka formal parameters
- Use `return` to return a value
	- If a function reaches the end of a block without seeing a `return` it implicitly returns `nil`

## Closures
- When a function "holds on" to a reference to a variable outside of its block

## Classes
- OOP concepts are built into Lox for completeness
	- They are popular and the concepts are widely used
	- Helpful to learn

### Classes or prototypes
- Classes
	- Came first
	- Common in [[C++]], [[Java]], [[C#]], etc.
	- Two core concepts:
		- Instances
			- Store state of each object
			- Have a reference to the instance's class
		- Classes
			- Contain methods and inheritance chain
			- Calling a method on an instance looks up the instance's class then calls the method there
- Prototypes
	- Virtually forgotten until [[JavaScript]] gained popularity
	- Merge the concepts of instances and classes
		- Classes don't exist
	- Each object may contain state and methods
		- Objects directly inherit from each other ("delegate to")

### Instantiation and initialization
- Can freely add properties onto objects
- Can access fields or methods inside an object using `this`
- Initializer is called automatically when you create an instance of an object
	- `init()`
	- Params passed to the class are forward to the initializer

### Inheritance
- Single inheritance is supported
- A class inherits using the `<` operator
- `class Brunch < Breakfast`
	- `Brunch` is a derived class (subclass)
	- `Breakfast` is a base class (superclass)
- Every method on a superclass is available on a subclass

## The Standard Library
- Functionality implemented directly in the interpreter
- Lox has almost no standard library
	- We have `print` and `clock`

## Challenges
1.  Write some sample Lox programs and run them (you can use the implementations of Lox in [my repository](https://github.com/munificent/craftinginterpreters)). Try to come up with edge case behavior I didn’t specify here. Does it do what you expect? Why or why not?
2.  This informal introduction leaves a _lot_ unspecified. List several open questions you have about the language’s syntax and semantics. What do you think the answers should be?
3.  Lox is a pretty tiny language. What features do you think it is missing that would make it annoying to use for real programs? (Aside from the standard library, of course.)
	- Concurrency features
	- Ternaries
	- Arrays
	- Maps
	- Bitwise operators