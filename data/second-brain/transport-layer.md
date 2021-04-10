# Transport Layer (Layer 4)

- Responsible for transporting application payloads across network connections
- Two main protocols:
  - TCP
    - Makes connection with end host
    - Checks whether or not data was received
    - Connection-oriented protocol
    - If messages are too large, breaks them into segments
  - UDP
    - Does not guarantee delivery
    - Connectionless protocol
    - Message is called a datagram
- Protocols add their own control info at the beginning of a payload
  - A header
  - Process of adding a header to data from layer above is called **encapsulation**
- Communicates between the [[session layer]] and the [[network layer]]

[[Computer Science]] [[Networking]] [[OSI Model]]

