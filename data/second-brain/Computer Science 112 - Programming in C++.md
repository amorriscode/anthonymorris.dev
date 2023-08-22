[[wgu]] [[college]] [[computer science]] [[programming]] [[C++]]

# Computer Science 112 - Programming in C++

## Chapter 1 - Computer Programming Elements and Basics
- Programming requires two important skills:
	1. Ability to analyze and understand a problem
	2. Ability to describe that problem to a computer so it can solve the problem
- A program is a set of instructions that tells a computer how to solve a problem
- Steps to writing a program
	- Understand the problem
	- Design a solution
	- Draw a flow chart
	- Write pseudocode
	- Write code
	- Test and debug
	- Test with real users
	- Release the program
	- Iterate on the next version

### 5 basic elements of programming
1. Input
	- Getting data into the computer
2. Output
	- Getting results out of the computer
3. Looping and conditionals
	- Cycling through a set of instructions until a condition is met
4. Mathematical operations (arithmetic)
	- Performing calculations on your data
5. Variables and data structures
	- Storing data

### Types of loops
- Event-controlled loops
	- Can be stopped by an external event
- Counter-controlled loops
	- Stopped when a counter reaches a specific value

### Programming logic and syntax
- Syntax are the rules that dictate how to form a program
- Statements are a single line of code that does something
- A variable is a container used to store a value
- A keyword is a reserved word within a programming language
	- Eg. `print`, `var`, `let`, etc.

### Pseudocode
- A plain English version of the instructions the computer program should do
- Guidelines for writing useful pseudocode:
	- Break down logic for each individual step
	- Order is critical
	- Leaving some details out is okay

### Algorithms
- An algorithm is a recipe describing the steps a computer will take to solve a problem

## Chapter 2 - Programming Basics in C++

### Procedural vs Object-Oriented Programming
- Procedural programming
	- Program organized into small blocks (procedures, functions, or subroutines)
	- High flexibility and efficiency for systems programming
- [[Object-oriented programming]]
	- Program is organized into a collection of components called objects
	- Objects are real-world entities with two distinct features:
		- Characteristics (data)
			- Properties of real-world entities
		- Behavior (methods)
			- Set of operations an object can perform
			- A method is simply a function associated with a class
	- A class is a framework or template for an object
	- An object is an instance of a class

### Differences between C and C++
- Since [[C++]] is a superset, it can run most C code
- Language
	- C
		- Procedural
	- C++
		- Procedural and object-oriented (hybrid)
- Relationship
	- C
		- Subset of C++
		- Code written in C++ cannot run in C
	- C++
		- Superset of C
		- Code written in C can usually run in C++
- Structure
	- C
		- Function-driven
		- Eg. `scanf` and `printf` for input and output
	- C++
		- Object-driven
		- Eg. `cin` and `cout` for input and output
- Object-oriented support
	- C
		- None
	- C++
		- Supports encapsulation, inheritance, and polymorphism
- Memory
	- C
		- `calloc` and `malloc` for dynamic memory allocation
		- `free` for memory deallocation
	- C++
		- `new` for memory allocation
		- `delete` for memory deallocation
- Encapsulation
	- C
		- None
	- C++
		- Data and functions are encapsulated to form an object
- Error handling
	- C
		- No direct support
	- C++
		- Has direct support

### Principles of Object-Oriented Programming
#### Encapsulation
- Grouping data and methods that work on data together
- Providing an interface to users to accomplish tasks without knowing the implementation details

### Inheritance
- Ability of a class to use the attributes and methods of another class
- Reduces code redundancy through code reuse

#### Polymorphism
- Ability to display multiple forms
	- Eg. A person who is a sister, mother, friend, and programmer all at once
- In OOP, the ability for objects of different types to be accessed using the same interface
	- The internal implementation may be different depending on the object

### Numeric data types
- There is no standard for numeric data types in C++
	- Names and range values can differ slightly depending on the implementation and processor
- Best practice is to use the smallest data type possible for any situation to conserve memory
- Integers
	- `short int`
	- `int`
	- `long`
- Floating points
	- `float`
	- `double`
		- Twice the size of floats
	- `long double`
		- Twice the size of doubles

#### Storage and size
|Data type|Storage|
|--|--|
|`char`|1 byte|
|`bool`|1 byte|
|`int`|4 bytes|
|`short int`|2 bytes|
|`long`|8 bytes|
|`float`|4 bytes|
|`double`|8 bytes|

|Data type|Range|
|--|--|
|`char`|-127 to 127|
|`unsigned char`|0 to 255|
|`unsigned int`|0 to 4294967295|
|`short int`|-32768 to 32767|
|`unsigned short int`|0 to 65535|
|`int`|-2,147,483,648 to 2,147,483,647|
|`long int`|-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807|
|`unsigned long`|0 to 18,446,744,073,709,551,615|
|`float`|1.17549e-38 to 3.40282e+38|
|`double`|2.22507e-308 to 1.79769e+308|

## Chapter 5 - Arrays and Vectors
- An array is a list of elements
	- Static size
- A vector is a list of elements
	- Dynamic size

### Vector methods
|Type of Action|Action|Description|
|---|---|---|
|Modifier|push_back|Add element to end|
|Modifier|insert|Insert an element at an index|
|Modifier|erase|Erase elements|
|Modifier|swap|Swap out content|
|Iterator|begin|Returns control to the beginning|
|Iterator|end|Moves control to end|
|Size|size|Returns the size of the vector|
|Size|empty|Returns if the vector is empty|
|Access|at|Get an element at specified index|
|Access|front|Get the first element|
|Access|back|access the last element|

## Chapter 6 - Strings
- The `string` class dynamically allocates the memory required for a string
### C++ string functions
|Function|Description|Example|
|---|---|---|
|size(); length()|Same functions, both return size/length of the string|cout << banner.size();|
|begin(); end();|Starting and ending index of the string|cout << banner.end();|
|clear();|Blanks out the string|banner.clear();|
|empty();|If a string is empty, returns true|if(banner.empty()) { }|
|replace(start, length, string);|Replaces a string from starting position to a set number|banner.replace(1, 5, "Hi");|
|substr(start, end);|Finds substring in range indicated|string s = banner.substr(0, 5);|
|compare(string& str);|Compares strings and returns 0 if equal|if(banner.compare(1, 3, "Wel") == 0) {}|