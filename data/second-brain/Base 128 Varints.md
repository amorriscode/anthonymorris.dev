[[computer science]] [[Protocol Buffers]] [[encoding]]

# Base 128 Varints

Variable-width integers (varints) allow encoding unsigned 64-bit integers using anywhere between one and ten bytes. The smaller the value, the fewer the bytes

Each byte has a _continuation bit_ that indicates if the following byte is part of the varint. This is the _most significant bit_ (MSB) of the byte. Lower 7 bits are a payload. The integer is built by appending together 7-bit payloads of its bytes.

## Examples

The number 1 is encoded as `01`. A single bit so the MSB is not set.

```
0000 0001
^ msb
```

150 is encoded as `9601`:

```
10010110 00000001
^ msb ^ msb
```

To determine it's value:
1. Drop the MSB from each byte (lets us know we reached the end of the number)
2. Concatenate 7-bit payloads
3. Interpret it as a little-endian, 64-bit unsigned integer

```
10010110 00000001 // Original inputs.
0010110 0000001 // Drop continuation bits.
0000001 0010110 // Put into little-endian order.
10010110 // Concatenate.
128 + 16 + 4 + 2 = 150 // Interpret as integer.
```
