# Disk Scheduling
- Transferring data to/from secondary memory is the worst bottleneck of a general computing system
- As a [[computer]] deals with multiple processes over time, request to access the disk accumulate
- [[Operating system]]s use disk scheduling to determine which requests to complete first
- Scheduling algorithms primarily try to solve issues with seek time

## First-Come, First-Served
- Similar to the [[CPU]] scheduling algorithm
- One of the easiest to implement but not the most efficient
- Process requests in order they arrive
  - Disregard the current position of the heads
- Head often moves over cylinders whose requests are pending

## Shortest-Seek-Time-First
- Moves heads by the minimum amount necessary to satisfy a request
- Could result in the heads changing directions after each request is satisfied
- Does not guarantee smallest overall head movement
- Improvement over performance of FCFS
- It's possible an early request never gets processed
  - New requests keep getting added close to where the head is
  - New requests are closer --> higher priority
  - Called **starvation**

## SCAN
- Read/write heads move in toward the spindle then out toward the platter edge
  - Back and forth between spindle and platter edge
- Satisfy requests along the way
- No chance of starvation

