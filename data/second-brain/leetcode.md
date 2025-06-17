[[algorithm]] [[computer science]]
# leetcode
## Patterns
### Prefix sum
- Preprocessing an array into a new array
	- Each element at index `i` is the sum of the array up to `i`
- Use when you need to perform multiple sum queries on a subarray or need to calculate cumulative sums
### Two pointers
- Uses two pointers to iterate through a list
- Use when dealing with sorted arrays/lists where you need to find pairs that satisfy a condition
#### How to tell if a problem matches this pattern
- Linear data structure
- Process pairs of data elements
- Dynamic pointer movement
#### Real world examples
- Memory management~
	- Memory pool is initialized with two pointers (start pointer and end pointer)
### Sliding window
- Used to find a subarray or substring that satisfies a specific condition
	- Optimizes time complexity by maintaining a window of elements
- Window may be fixed or variable
- Use this when dealing with contiguous subarrays or substrings
#### How to tell if a problem matches this pattern
- Contiguous data
- Processing subsets of elements
	- Repeated computations on contiguous subset of data (subarray, substring, etc.)
- Efficient computation time complexity
	- Computations performed as the window moves are constant or small time
#### Real world examples
- Telecommunications
	- Maximum number of users connected to a cell tower in every k-millisecond sliding window
- Video streaming
	- Given number of buffering events in a given user session, figure out the median number of buffering events in each one-minute interval
- Social media content mining
	- Given lists of topics that two users have posted about, find the shortest sequence of posts by one user that includes all topics the other user has posted about
### Fast and slow pointers (hare and tortoise)
- Used to detect properties within data structures
	- Eg. cycles, midpoints, or intersections
- Speeds can be adjusted depending on the problem
#### How to tell if a problem matches this pattern
- Cycle or intersection detection
	- Loops in a linked list or array
	- Intersection of two linked lists or arrays
- Starting element of second quantile
	- Middle element of an array or linked list (start of second half)
#### Real world examples
- Symlink verification
- Compiling an object-oriented program
	- Cyclic dependency detection
### Merge intervals
- Working with time ranges that might overlap
- Identifying overlapping intervals and merging them into one
#### How to tell if a problem matches this pattern
- Array of intervals
- Overlapping intervals
#### Real world examples
- Display busy schedule
- Schedule a new meeting
- Task scheduling in operating systems
### Linked list in-place reversal
- Reverses a linked list
- Doesn't require extra space
### Monotonic stack
- Stack is used to maintain a sequence of elements in order
- Use when finding the next greater/smaller element
### Top k elements
- Finds the top k largest/smallest elements in data
- Uses heaps or sorting
## Binary tree traversal
- Visiting all nodes of a binary tree in a specific order
	- Pre-order: root --> left --> right
	- In-order: left --> root --> right
	- Post-order: left --> right --> root
### Depth-first search
- Traversal technique that explores as far down a branch as possible prior to backtracking
- Use this for exploring all paths or branches in graphs or trees
### Breadth-first search
- Traversal technique that explores nodes level by level
- Use this for finding the shortest paths in unweighted graphs or level-order traversal in trees
### Matrix traversal
- Traversing a matrix using techniques like DFS or BFS
- Use this when traversing 2D grids or matrices
### Backtracking
- Explores all possible solutions and backtracks when a solution path fails
- Use this when you need to find all (or some) solutions that satisfy some constraints
	- Eg. combinatorial problems
### Dynamic programming
- Breaking down problems into smaller subproblems
- Solved in a bottom-up or top-down approach
- Has multiple sub-patterns
	- Fibonacci numbers
	- 0/1 knapsack
	- Longest common subsequence
	- Longest increasing subsequence
	- Subset sum
	- Matrix chain multiplication