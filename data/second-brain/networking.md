# Networking

- Two primary protocols
  - [[TCP-IP]]
- Wired and wireless share many similarities
  - Same use of layer 3 [[network layer]]
- [Network Calculators](http://subnetmask.info/)

## Topologies

- Star topology
  - When all devices connect to one central [[network switch]]
- Bus topology
  - Multiple switches chained together in a single line

## Networks

- PAN (Personal Area Network)
  - A network of personal devices
  - Smallest network
  - Phone --> computer
- [[LAN]] (Local Area Network)
  - Small network (E.g. office, home, or building)
- MAN (Metropolitan Area Network)
  - Group of [[LAN]]s in the same geographical area
  - Sometimes called a Campus Area Network (CAN)
- WAN (Wide Area Network)
  - Group of [[LAN]]s spread out over a wide geographical area
  - The [[Internet]] is the largest WAN
- WLAN (Wireless [[LAN]])
  - Networks that transmit signals through air
  - Use [[radio waves]]

## Addressing

- [[Data Link Layer]]: [[MAC address]]
- [[Network Layer]]: [[IP Address]]
- [[Transport Layer]]: Port numbers
- [[Application Layer]]:
  - FQDNs
  - [[Computer]] names
  - Host names

### Network Address Translation (NAT)

- Gateway device substitutes private IP with its own public IP
  - When [[computer]]s need access to other networks on the [[internet]]
- Uses a NAT table to do the translation
  - Different variations handle the translation
- Translate one IP --> another IP
  - Private --> public
  - Public --> private
- Designed to conserve public IP addresses needed by a network

#### Variations

- Static/Source Network Address Translation (SNAT)
  - Gateway assigns same public IP to host each time it makes a request to access the [[Internet]]
- Dynamic Network Address Translation (DNAT)
  - Gateway has pool of public addresses it assigns to local host when it makes a request to access the [[Internet]]
- Port Address Translation (PAT)
  - Most popular form of NAT
  - Process of assigning TCP port number to each ongoing session between local host and [[Internet]] host
  - Which device and port should the traffic go to?

## Ports and Sockets

- Port numbers
  - Ensure data is transmitted to correct process among multiple processes running on the computer
  - Divided into three types:
    - Well-known ports --> 0 to 1023
    - Registered ports --> 1024 to 49151
    - Dynamic and private ports --> 49152 to 65535
- Socket
  - Consists of host's IP and port number of an application running on the host
  - Example: `10.43.3.87:23`

## DMZ (Demilitarized Zone)

- Physical or logical subnetwork
- Adds additional layer of security for a LAN
- Separates public facing resources from the rest of an organization's network
  - The rest of the network is firewalled

[[Computer Science]]

