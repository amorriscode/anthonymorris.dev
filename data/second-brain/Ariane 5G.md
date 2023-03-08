---
aliases: [Ariane 5]
---

[[rocket]]

# Ariane 5G
- During its maiden voyage it crashed due to a buffer overflow
	- Used coded from the Ariane 4
		- Assumptions were correct for the Ariane 4 but not the Ariane 5 trajectory
	- Tried to convert data from 64-bit floating point --> 16-bit signed integer
		- Caused an overflow
	- Programmers only wrote code to protect four out of seven critical variables from overflowing