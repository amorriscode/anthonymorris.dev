[[software]]

# Zero one infinity rule
- Rule of thumb proposed by [[Willem van der Poel]]
- Argues that arbitrary limits on instances of data or structure should **not** be allowed
- We should only allow
	- 0
	- 1
	- Infinity
- Software should not put arbitrary limits on an entity

## Example
Using file systems, how does this apply?
- 0
	- Topmost directory has zero parent directories
- 1
	- Each subdirectory has exactly one parent
- Infinity
	- Each directory can contain ~infinite files or subdirectories
	- Limitations may be defined by things like storage space but not by software

