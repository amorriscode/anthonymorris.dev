[[course]] [[CS Primer]]

# Computer Systems
- Also called computer architecture
	- How the machine expects data to be encoded
- Understanding it enables us to write faster, more more-efficient/secure code
- Recommended textbook: [Computer Systems: A Programmer’s Perspective](http://csapp.cs.cmu.edu/)

## Topics
- Bits and bytes
- Intro to [[C]]
- Low-level programming
- [[CPU]] microarchitecture and low-level performance
- The memory hierarchy ([[CPU]] caches)

## Bits and bytes
- Develop skills for working with binary encodings of data
	- Useful for networking, databases, etc.
- Key concepts:
	- Fixed width integer encodings and byte ordering
	- Signed integer encodings
	- IEEE-754 floating point scheme
	- Unicode, UTF-8, and other encodings

### Protobuf varint
- Implement [Base 128 Varint](https://protobuf.dev/programming-guides/encoding/#varints) encoding using [[Protocol Buffers]]
- Can we come up with a variable length encoding to save space?

#### Explainers
- What does it mean for something to "be" a certain number of bits?
	- We have a fixed amount of bits to store data
		- Memory is allocated for a value
	- The amount of memory limits determines can be stored there
		- eg. 4 bits can only store `0000` --> `1111`
		- Adding `1` to `1111` results in `0000` (overflow)
	- The "width" is how many bits something takes up
	- [[Python]] solves overflows in software