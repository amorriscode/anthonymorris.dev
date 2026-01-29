[[computer science]] [[operating system]]

# CS Primer - Operating Systems

## Intro to Operating Systems
- [Chapter two of OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf)
- Fetch --> Decode --> Execute
	- Basics of the [[von Neumann architecture]]
- In charge of making sure the system operates correctly and efficiently
- Virtual machine
	- Takes a physical resource (processor, memory, disk, etc.) and transforms it into an easy-to-use virtual form
- Sys calls
	- OS APIs
- A resource manager
- Policies determine which programs should run
- "You should be using Emacs. If you are using vi, there is probably something wrong with you. If you are using something that is not a real code editor, that is even worse." 💀
- Protocols for protecting writes
	- Journaling
	- Copy-on-write
- Goals
	- Abstractions
	- Performance
	- Protection between apps
	- Reliability
	- Energy efficiency
	- Security
- System call vs procedure call
	- System call transfers control into the OS while raising the hardware privilege level
- User apps run in "user mode"
	- Hardware restricts what apps can do
### Stack Overflow
- Stack is a memory region allocated by the OS
	- Overflowing it, you try to write to memory _outside_ the region where you don't have permission
- OS raises a segfault due to the illegal memory address
	- It doesn't know what the cause of the segfault is which is why you don't get an actual stack overflow error
- Historically the heap was started at low addresses, stack at high addresses
	- The big gap in the middle maximized the space available before collision
	- Doesn't matter anymore thanks to enormous virtual address space
- What contributes to the size of a stack frame?
	- Data
	- Return address
	- Rounding up to alignment boundaries
		- Usually 16 bytes on modern systems
		- Helps with performance
- You can't map all the virtual address space to actual hardware
- [[Address Space Layout Randomization]]
- Programs can request an increase to their stack limit with `setrlimit`
	- You can raise your soft limit up to the hard limit but only root can raise hard limits
	- `getrlimit` to check limits
- Threads get their own stack to avoid collissions
- `vmmap`
	- Virtual size --> how much address space is reserved for the stack
	- Resident size --> how much physical RAM is being used
- Demand paging
	- Declaring an array doesn't allocate physical RAM, you have to write to the memory
	- OS maps physical memory when you touch it
## Byte write
- File systems don't track individual bytes on disk
	- Space is allocated in fixed-size chunks (blocks)
	- Blocks are usually 4096 bytes (4 KiB)
	- Writing 1 byte still gets a 4 KiB block
- Larger blocks === less bookkeeping overhead but more wasted space
- `/dev/urandom` is an interface to the kernel's random number generator
- File descriptor is a "handle" to an open file
	- More efficient for accessing a file (open once)
	- Keeps state (position tracking, etc.)