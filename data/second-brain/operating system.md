[[Computer Science]]
# Operating System
- Software that manages [[computer]] resources
  - I/O devices, memory, etc.
- Provides an interface for system interaction
- Uses **multiprogramming**
  - Technique of keeping multiple programs in main [[computer memory]] at the same time
  - Programs compete for the [[CPU]]
- Process management
  - Keeping track of information of active processes
    - Progress, intermediate states, etc.
  - **Process**
    - Dynamic representation of a program during execution
- **CPU scheduling** determines which process in memory is given access to the [[CPU]]
## Memory Management

- OS performs the following tasks:
  - Track where and how a program resides in memory
  - Convert logical program addresses into actual memory addresses
- Keeps track of secondary [[computer memory]] in two ways
  1. Maintains a table indicating which blocks of [[computer memory]] are free
  2. For each directory, it maintains a table that records information about the files in the directory
### Single Contiguous Memory Management
- A program is loaded into one continuous area of memory
- Only one program other than the OS can be processed at one time
- Logical address --> an integer value relative to the starting point of the program
  - To get physical addresses, we add a logical address to the starting address of the program in physical memory
- Simple to implement and manage
- Wastes memory space and [[CPU]] time
### Partition Memory Management
![Address resolution in partition memory management](/assets/second-brain/2020-10-28-17-32-06.png)

- Multiple programs allowed in memory
  - OS must make sure they don't access each other's memory space
- Programs are loaded into those partitions
- **Base register**
  - Holds beginning address of the current partition
- **Bounds register**
  - Holds the length of the current partition
  - Helps ensure memory addresses are within bounds
#### Fixed-partition technique
- Memory is divided into a specific number of partitions
- Partition size is fixed when the OS initially boots
- Jobs are loaded into a partition large enough to hold it
- OS keeps a record of addresses at which each partition begins and its length
#### Dynamic-partition technique
- Memory is divided into partitions as needed
- Each partition is unique to a program
- Main memory can be viewed as one large empty partition
### Paged Memory Management
![Paged memory management](/assets/second-brain/2020-10-28-17-34-32.png)

- Main memory is divided into fixed-size blocks called **frames**
- Processes are divided **pages** and in frames when loaded
  - Pages made me scattered around or out of order
  - Pages can be mixed among other pages from separate processes
- OS maintains a **page-map table (PMT)** to keep track of each process
- Processes no longer need to be stored contiguously in memory
- **Demand paging**
  - Extension to paged memory
  - Pages are brought into memory only when referenced (on demand)
  - **Page swap**
    - Bringing in one page from secondary memory, possibly causing another to be removed
## Process Management
- Processes move through specific states in a system
  - ![Process life cycle](/assets/second-brain/2020-10-28-17-40-00.png)
  - New
    - Process created
  - Ready
    - No barriers to its execution
    - Waiting for its chance to use the [[CPU]]
  - Running
    - Currently being executed by the [[CPU]]
    - Instructions being processed in the fetch-execution cycle
  - Waiting
    - Waiting for resources (other than the [[CPU]])
    - E.g. waiting for user input
  - Terminated
    - Execution is completed
    - No longer active
- **Process control block**
  - Data structure used by OS to manage information about a process
### CPU Scheduling
- Act of determining which process in the ready state should move to the running state
- **Nonpreemptive scheduling**
  - Occurs when currently executing process gives up the [[CPU]] voluntarily
  - Decisions made when a process switches from running --> waiting or when a program terminates
- **Preemptive scheduling**
  - Occurs when the OS decides to favour another process, preempting the currently executing process