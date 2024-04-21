[[wgu]] [[Course]] [[computer science]]
# D281 - Linux Foundations
> Linux Foundations prepares learners for the LPI Linux Essentials certification, and is an introduction to Linux as an operating system as well as an introduction to open-source concepts and the basics of the Linux command line. Learners will gain skills in identifying the fundamentals of open-source software and to develop resources for data access and security.
## Resources
- [YouTube playlist](https://www.youtube.com/playlist?list=PL78ppT-_wOmvlYSfyiLvkrsZTdQJ7A24L)
- [Cisco course](https://www.netacad.com/courses/os-it/ndg-linux-essentials)
- [Study guide](https://ebookcentral.proquest.com/lib/westerngovernors-ebooks/reader.action?docID=6002518&ppg=1)
- [Reddit overview](https://www.reddit.com/r/WGU_CompSci/comments/1aebq62/passed_d281_linux_foundations/)
## What is Linux?
- Usually when people say "Linux" they mean [[GNU]]/[[Linux]]
	- Combination of software
	- Defines the [[operating system]]
## FLOSS and FOSS
- FLOSS
	- Free/Libre/Open Source Software
	- Libre is all about freedom; do what you want
- FOSS
	- Free and Open Source Software
- [[Open source]]
- [[FSF]]
	- GNU came from this
- Licenses range from permissive to more restrictive (copyleft)
## Operating systems
- Linux distributions
	- Bundling of software (web browser, email client, package manager, etc.) to make a useful system
	- Run the Linux kernel
		- Kernel is like an air traffic controller, applications are the airplanes
		- Kernel decides which program gets which block of memory, starts/stops applications, handles displaying text, etc.
		- Abstracts things away for applications to access them (eg. writing to storage)
	- Debian based
		- More community focused than some other distros
		- Ubuntu + Ubuntu variants
			- Most popular Debian distro
		- Any `.deb` based systems
	- Red Hat based
		- RHEL
			- Red Hat Enterprise Linux
		- Fedora
			- Shorter release cycles than RHEL
		- CentOS
			- Recompiles RHEL and gives them away for free
			- No paid support like RHEL
		- RPM (Red Hat Package Manager) based systems
	- Other
		- Arch
		- Slackware
		- SUSE
			- Derived from Slackware
		- Android
			- Most popular Linux distro
			- Uses Dalvik virtual machine
				- Provides a good platform for mobile devices
			- Lacks typical packages like GNU so incompatible with desktop Linux distros
		- Embedded systems
		- Linux From Scratch
			- Teaches you to build a distro from the ground up
### Decision points
- Role
	- Desktop vs server
- Function
- Life cycle
- Stability
- Compatibility
- Cost
- Interface
### Linux
- Life cycle
	- Distros are broadly enthusiast or enterprise
	- Enterprise distros are stable, have good support, regular releases, etc.
## Working in Linux
### Major applications
- Typically three categories of software
	- Server applications
		- No interaction with I/O (monitor, keyboard)
		- Interacts with other computers
	- Desktop applications
		- Users directly interact with them
	- Tools
		- Make it easier to manage computer systems
### Server applications
#### Email servers
- Mail Transfer Agent (MTA)
	- User to transfer messages to other systems
- Mail Delivery Agent (MDA)
	- Sorts the email in a user's mailbox
	- Invoked from the final MTA in the chain
- POP/IMAP server
	- Post Office Protocol (POP) and Internet Message Access Protocol (IMAP) allow email clients to get emails from email servers
#### File sharing
- Samba
	- Windows-centric
	- Allows a Linux machine to share files and work on a Windows domain
- Netatalk
	- Allows a Linux machine to perform as an Apple Macintosh file server
	- Network File System (NFS)
### Desktop applications
- Email
	- Thunderbird
	- Evolution
	- KMail
- Creative
	- Blender
	- GIMP (GNU Image Manipulation Program)
	- Audacity
- Productivity
	- LibreOffice
### Console tools
#### Shells
- Accepts commands from a user and passes them to the Linux kernel to execute
- Provides a language for interacting with the environment
- Two main shell families:
	- Bourne shell
	- C shell
- More modern shells:
	- Bourne Again Shell (bash)
		- Default on most systems
	- tsch
#### Text editors
- Fully featured:
	- vi/vim
	- emacs
- Simpler:
	- pico
	- nano
### Package managers
- Adding, updating, or removing packages usually requires administrative access
#### Debian
- `.deb` extension
- `dpkg`
	- Lower level tool for managing Debian packages
- `apt-get`
	- Advanced Package Tool
	- Frontend for `dpkg`
	- Makes management of packages easier
#### RPM
- Standard package management system according to Linux Standards Base
- `.rpm` extension
- `rpm`
	- Backend to the package management system
	- Install, update, query, or remove packages
- `yum` and `up2date`
	- Frontends for RPM
	- Automate resolving dependency issues
### Linux in the cloud
- Powers 90% of the public cloud workload
- Most virtual servers are based on some version of the Linux kernel
- Why is Linux uniquely suited for the cloud?
	- Flexibility
		- Modular design
		- Huge ecosystem
	- Accessibility
	- Cost-effective
		- Power efficient operating system
		- Kernel is completely free (as are many applications)
	- Manageability
		- Very widespread, lots of talent in the industry know how to use Linux
		- Can be managed by automated programs
	- Security
		- One of the most secure and reliable operating systems
		- Open source lends itself to security vulnerabilities being discovered and fixed quickly
	- Virtualization
## Open source software and licensing
- Open source users have a right to obtain the source code
- Increases accountability for bugs, security vulnerabilities, and compatibility issues
	- Becomes a shared responsibility
### Licensing
- Three components
	- Ownership
	- Money transfer
	- Licensing
- End User License Agreement (EULA)
	- Legal document that must be accepted to install software
- GNU General Public License v2 (GPLv2)
	- Source code must be made available to those who ask
	- Anyone can make changes to the code
		- If you distribute your changes, they must also be GPLv2 licensed
	- No one can charge for distributing the code
- Berkeley Software Distribution (BSD)
	- Simpler than GPL
	- Can redistribute source/binaries if you maintain copyright notices and don't imply original creator endorses your code
		- "Do what you want, don't take credit"
### Creative Commons
- Tries to carry the intentions of FOSS licenses to non-software things
- Available conditions:
	- Attribution (BY)
		- Creator must be given credit even if they don't endorse the use
	- ShareAlike (SA)
		- Can copy, distribute, perform, and modify if they do so under the same terms
	- NonCommercial (NC)
		- Can't do anything commercially with the work
	- NoDerivatives (ND)
		- Creator must provide permission to modify
- Licenses
	- Attribution (CC BY)
		- Similar to BSD
		- Can use the content in any way but must give credit to the creator
	- Attribution ShareAlike (CC BY-SA)
		- Copyleft version of Attribution
		- Derived works must have same license
	- Attribution NoDerivs (CC BY-ND)
		- You can redistribute but cannot modify
	- Attribution NonCmercial (CC BY-NC)
		- CC BY but can't use it for commercial purposes
	- Attribution NonCommercial ShareAlike (CC BY-NC-SA)
		- CC BY-NC + changes must be shared under the same license
	- Attribution NonCommercial NoDerivs (CC BY-NC-ND)
		- Sharing can be done for non-commercial purposes, no modifying
	- No Rights Reserved (CC0)
		- Creative Commons version of public domain
## Command line skills
