# Performance-Aware Programming
- Created by [[Casey Muratori]]

## Introduction
- Optimization
	- Well-known practice
	- Take a program --> maximize performance
- Modern programming has created incredibly slow programs
	- Programming practices, tool chains, methodologies all add up
- Modern software is ~1000x slower than it should be
- What is performance-aware programming?
	- Programming with the considerations of what makes software fast or slow
	- Understanding how your decisions impact the software performance scale
- [[CPU]]
	- Does most of the work
	- Takes in instructions and does some work
- How can we improve the performance of the [[CPU]]?
	- Reduce the number of instructions
	- Increase the speed instructions move through the CPU
- Over time, CPUs have gotten more complex and programmers have a less intimate understanding of how they work
- 