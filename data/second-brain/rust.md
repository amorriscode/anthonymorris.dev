# Rust

- Prototyping is a bit harder

## [[Systems Programming]] in Rust

- Runs fast
- Low resource usage
- Memory safe ([[compiler]]'s responsibility)
  - By default
  - At compile time
  - Across multiple threads

## Ownership

- One owner of each data
- When owner goes out of scope, data is cleaned up
- Owner can transfer ownership (borrowing)
  - Let other code read/write without transferring data
  - `&` --> An immutable borrow

## Resources

- [Rust Starter Kit](https://wiki.alopex.li/RustStarterKit2020)

[[Computer Science]] [[Programming Language]]

