# Pep/9

![Pep/9 CPU and memory](/assets/second-brain/2020-10-07-16-54-37.png)

- [[Virtual machine]]
- 40 machine instructions
- Has 16-bit (65,536 bytes) of [[computer memory]]
- [[CPU] has seven registers
  - PC (See [[arithmetic logic unit]])
  - IR (See [[arithmetic logic unit]])
  - Accumulator (A)
    - Holds data and results of operations
- Uses [[ASCII]]
- Has memory-mapped [[input-output]]

## Instruction Format

![Pep/9 instruction format](/assets/second-brain/2020-10-09-10-37-34.png)

- Either 1 byte or 3 bytes in length
  - 1 byte --> operand specifier _not_ included
  - 3 bytes --> operand specifier included
- Two parts
  - 8-bit instruction specifier
  - 16-bit operand specifier

### Instruction Specifier

- Op codes vary from 4 bits to 8 bits long
- 5th bit is the register specifier
- 3-bit addressing mode specifier
  - Indicates hot to interpret contents of operand specifier
  - Address mode $000$ --> operand specifier contains data value to be used as operand
    - Immediate
  - Address mode $001$ --> operand specifier contains memory address
    - Direct

[[Computer Science]] [[Computing Systems]]

