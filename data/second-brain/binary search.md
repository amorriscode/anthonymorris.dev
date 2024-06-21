[[Computer Science]] [[Algorithm]] [[search]]
# Binary Search
- List _must be sorted_
- Divide and conquer
- Eliminates half the elements every time
- Maximum steps --> $log_2 n$
- As input doubles, the maximum number of steps increases by one
## Complexity

| Time                                               | Space |
| -------------------------------------------------- | ----- |
| $O(log(n))$                                        |       |
| _Split the search space by two on every iteration_ |       |
## Process
- Start by searching in the middle
- If what you are looking for is _smaller_ than what you find in the middle, restrict search up to the middle
- If what you are looking for is _bigger_ than what you find in the middle, restrict search space from middle on
- Repeat until you find what you're looking for or your search space has nothing in it
## Implementations
### JavaScript
```javascript
function binarySearch(target, sortedArray) {
  // Start the search space with the entire array
  let lowIndex = 0;
  let highIndex = sortedArray.length - 1;

  // While the search space has elements in it...
  while (lowIndex <= highIndex) {
    // Grab the middle, acounting for a min (lowIndex)
    const middleIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);
    const guess = sortedArray[middleIndex];

    // Target found!
    if (guess === target) {
      return middleIndex;
    }

    if (guess < target) {
      // Middle is less than target
      // Adjust search space to second half of current search space
      lowIndex = middleIndex + 1;
    } else {
      // Middle is greater than target
      // Adjust search space to first half of current space
      highIndex = middleIndex - 1;
    }
  }

  return -1;
}
```
### Python
```python
def binary_search(target, sortedArray):
  lowIndex = 0
  highIndex = len(list) - 1

  while lowIndex <= highIndex:
    middleIndex = (lowIndex + highIndex) / 2
    guess = sortedArray[middleIndex]

    if guess == target:
      return middleIndex

    if guess < target:
      lowIndex = middleIndex + 1
    else:
      highIndex = middleIndex - 1

  return None
```