[[Computer Science]] [[Computing Systems]] [[virtual machine]]

# System Virtual Machine
- Hypothetical machine
- Designed to contain important features of real computers

## Network Connections
- Every VM has a vNIC (virtual NIC)
  - Can connect VM to other machines
  - Operates at the [[data link layer]]
- Maximum number of vNICs depends on limits imposed by hypervisor
- Networking modes
  - Bridged
    - vNIC accesses physical network using host machine's NIC
    - Obtains own [[IP address]], default gateway, and network mask from [[DHCP]] server on physical [[LAN]]
    - Appears to other nodes as a regular client/server on the network
  - NAT
    - vNIC relies on host machine to act as NAT device
    - Obtains [[IP address]] from host
    - Hypervisor acts as a [[DHCP]] server
    - Other nodes on network won't have direct access
      - Must go through host
  - Host-only
    - VMs on one host can exchange data with each other and the host
    - Cannot communicate to nodes outside the host
    - Never receive or transmit data with host's physical NIC