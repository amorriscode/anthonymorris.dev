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