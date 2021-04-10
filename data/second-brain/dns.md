# DNS (Domain Name System)

- Bridge the gap between humans and [[computer]]s
  - Humans are better with names, [[computer]]s are great with numbers
- Resolves names --> numbers
  - `https://google.com` --> `216.58.193.78`
- [[Application Layer]] client-server system of [[computer]]s and databases
- Made up of:
  - Name space
    - Entire collection of [[computer]] names and their IPs
    - Stored in databases on DNS name servers around the globe
  - Name servers
    - Hold databases organized in hierarchical structure
  - Resolvers
    - DNS client that requests info from DNS name servers

## Root Servers

- Root of the DNS hierarchy
- 13 sets of root servers around the world
  - Operated by 12 different organizations
  - Each set has their own unique [[IP address]]

## TLD Server

- Stores address information for top level domains (`.com`, `.ca`, etc.)

## Authoritative Name Server

- Responsible for knowing everything about the domain
- Includes IP for the domain name

## Domain Names

- Character-based names are easier to remember
- Last part of FQDN is called top-level domain (TLD)
- Can be registered with Internet naming authority
  - Works on behalf of ICANN
  - Restricts what types of hosts can be associated with `.arpa`, `.mil`, `.int`, `.edu`, and `.gov`
- Name resolution
  - Process of discovering IP address when you have the FQDN

### Fully Qualified Domain Name

- Fully qualified domain names
- Unique character-based name

[[Computer Science]] [[Networking]]

