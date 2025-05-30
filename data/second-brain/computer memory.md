w# Computer Memory

- Think of memory like a set of drawers
  - Each drawer has an address
- Collection of cells with unique physical addresses
  - Number of bits in each location varies from one machine to the other
  - More common computers are byte addressable
    - Memory addresses are made up of a certain number of bytes
- The contents of memory alone aren't too useful
  - Need to know how to interpret the contents
- Main memory
  - Active programs and data stored
  - Volatile
- Secondary memory
  - Nonvolatile
  - Data maintained even with power off

## RAM

- Random Access Memory
- Each location can be accessed and changed
- Volatile
  - Does not retain its bit configuration when the power is turned off
  - Loses data when power is off

## ROM

- Read Only Memory
- Each location can be accessed but _not_ changed
- Contents are permanently _burned_ into the chip
- Used for storing instructions that the computer needs to start itself

## Secondary Storage Devices

- Used because main memory is volatile and limited
- Places to store data outside of main memory

### Magnetic Tape

![Magnetic tape](/assets/second-brain/2020-09-28-17-44-58.png)

- First truly mass storage device
- Cannot hold much data
- Requires you to scrub to find data in the middle
  - Not efficient
- Four measures of efficiency
  - **Seek time**
    - Time it takes for read/write head to get positioned over specified track
  - **Latency**
    - Time it takes for specified sector to spin to read/write head
  - **Access time**
    - Time it takes for block to start being read
    - Sum of seek time and latency
  - **Transfer rate**
    - Rate at which data moves from the disk to memory
    - kasodkasoda
[[Magnetic tape]]
### Magnetic Disks

![A disk and hard disk drive](/assets/second-brain/2020-09-28-17-45-22.png)

- Disk drive
- Cross between CD player and tape recorder
- Read/write head travels across a spinning magnetic disk
  - Retrieves or records data
- Surface of each disk is organized into **tracks** and **sectors**
  - Tracks
    - Concentric circles around surface of disk
    - Divided into sectors
  - Sector
    - A division of a track
    - Holds a block of information as continuous sequence of bits
    - Blocks of data nearer center are more densely packed

## Addresses

- **Logical address**
  - Reference to a stored value relative to the program making the reference
- **Physical address**
  - Actual address in the main memory device
- **Address binding**
  - Mapping from a logical address to a physical address
  - As long as we keep track of where a program is stored, we can always determine the physical address that corresponds to any logical address

[[Computer Science]]

