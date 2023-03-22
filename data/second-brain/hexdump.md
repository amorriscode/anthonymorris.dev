[[computer science]] [[linux]] [[command line]]

# `hexdump`

- Displays a files contents in hexadecimal, decimal, octal, or ASCII

## Example

```
❯ hexdump -C /bin/ls | head
00000000  ca fe ba be 00 00 00 02  01 00 00 07 00 00 00 03  |................|
00000010  00 00 40 00 00 01 1c c0  00 00 00 0e 01 00 00 0c  |..@.............|
00000020  80 00 00 02 00 01 80 00  00 01 5a f0 00 00 00 0e  |..........Z.....|
00000030  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
*
00004000  cf fa ed fe 07 00 00 01  03 00 00 00 02 00 00 00  |................|
00004010  12 00 00 00 18 07 00 00  85 00 20 00 00 00 00 00  |.......... .....|
00004020  19 00 00 00 48 00 00 00  5f 5f 50 41 47 45 5a 45  |....H...__PAGEZE|
00004030  52 4f 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |RO..............|
00004040  00 00 00 00 01 00 00 00  00 00 00 00 00 00 00 00  |................|
```

- First column says what the offset is from the beginning of the file
	- eg. `00000010` --> 16 so `00` is the 16th byte
- Displays printable ASCII characters (eg. `PAGEZERO` above)
- An `*` means there is repetition between the index above/below it