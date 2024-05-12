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
### Variables
- Local variables
	- Only exist in the current shell
		- When closing the shell, variables are lost
	- Can't affect other commands/applications
- Environment variables
	- Also called global variables
	- Examples: `PATH`, `HOME`, `HISTSIZE`
	- `env` outputs environment variables
- `export` turns a local variable into an environment variable
	- Remove exported variables with `unset`
- `PATH` variable
	- Contains a list of directories that the shell will look in to find commands
### Command types
- `type` allows you to check a commands type
- Internal commands
	- Built-in to the shell
	- Eg. `cd`, `echo`
- External commands
	- Binary executables stored in directories
	- Eg. `ls`, `cal`
	- Using the `which` command will tell you where the shell is running that command from
- Aliases can be created with `alias name=command`
	- Shorten commands you commonly run
	- `type` will identify when a command is an alias
### Quotes
- Double quotes
	- Prevent the shell from interpreting meta characters, including glob characters
	- Allow for command substitution and variable substitution
- Single quotes
	- Prevents the shell interpreting meta characters, glob characters, variables, and command substitution
- Backslash
	- Can be used to stop the shell from interpreting a character
- Backticks
	- Used to specify a command within a command (command substitution)
### Control statements
- Semicolon `;`
	- Used to run multiple commands, one after another
	- Each command runs regardless of the result of the previous command
- Double ampersand `&&`
	- Logical "and" operator
	- Only if the previous command _succeeds_ will the next command run
- Double pipe `||`
	- Logical "or" operator
	- Only if the previous command _fails_ will the next command run
### Helpful commands
- `uname`
	- Lists information about the current system
	- `-n/--nodename` will give the node name
- `history`
	- View your command history
	- Param is a number of how many history items you want to see (eg. `history 5`)
## Getting help
### Man pages
- Use `man -f <command>` to search man pages by name
	- Allows you to see when there are different man pages with the same name (eg. for `passwd`)
	- `whatis` often does the same thing
- Use `man -k <command>` to search man pages by name and description
	- `apropos` often does the same thing
- Sections
	- Name
		- Name of the command and a brief description
	- Synopsis
		- Examples and shows how to execute the command
		- Square brackets indicate something is optional
	- Description
		- Detailed description of the command
	- Options
		- All options for the command listed with descriptions
	- Files
		- Lists files associated with the command
	- Author
		- Name of the author
		- Sometimes includes contact info
	- Reporting bugs
		- Details how to report bugs
	- Copyright
		- Provides copyright information
	- See also
		- Helps find additional information related to the command
- Searching a man page
	- Use `/` to search through man pages
	- Press `n` to move to the next match
	- Press `SHIFT+N` to move to the previous match
- Category sections
	- Man pages are split into various sections
	- Next to the command you'll see a number (eg. `CAL(1)`) that identifies the category
	- Sections:
		1. General commands
		2. System calls
		3. Library calls
		4. Special files
		5. File formats and conventions
		6. Games
		7. Miscellaneous
		8. System administration commands
		9. Kernel routines
### Finding stuff
- `locate`
	- Searches a database of all files/directories
		- The database is generated ~nightly
		- Can manually update the database with `updatedb`
	- `-c` shows how many files/directories match the search term
	- `-b` only includes listings that have the search term in the base name of the filename
	- `\` in the search term only outputs filenames that exactly match
- `info`
	- Documentation with an organizational structure
	- More conducive for learning vs man pages which are more reference
## Filesystem
- Directories are files
	- They store the names of the files within them and the inode number for where that file is on disk
### Home directory
- `/home`
- When opening a shell, users are automatically placed in their home directory
		- They have full control to create/modify/delete files and directories here
- `~` is an alias for a user's home directory
		- `~<username>` will take you to a specific user's home directory
### Listing files and directories
- `ls`
	- `-a` shows hidden files
	- `-l` lists metadata for the files/directories
	- `-h` shows the file size in a human-readable size
		- Must be used with `-l`
	- `-d` refers to the current directory
		- Not really useful without `-l`
	- `-R` performs recursive listing
	- `-S` sorts by file size
	- `-t` sorts by timestamp
	- `--full-time` will list complete timestamps
	- `-r` reverse the sort
- The `?` can be used to match exactly 1 character in a name
	- eg. `ls -d /etc/????` - list all files in `/etc` that are exactly 4 characters long
- `[ ]` can be used to match any character from a set
	- eg. `ls -d /etc/[abcd]*` - display all files in `/etc` that start with `a`, `b`, `c`, or `d`
#### Long listing
```
**sysadmin@localhost:~$** ls -l /var/log/
total 900                                                                       
-rw-r--r-- 1 root   root  15322 Dec 10 21:33 alternatives.log
drwxr-xr-x 1 root   root   4096 Jul 19 06:52 apt
-rw-r----- 1 syslog adm     371 Dec 15 16:38 auth.log
-rw-r--r-- 1 root   root  35330 May 26  2018 bootstrap.log
-rw-rw---- 1 root   utmp      0 May 26  2018 btmp
-rw-r----- 1 syslog adm     197 Dec 15 16:38 cron.log
-rw-r--r-- 1 root   adm   85083 Dec 10 21:33 dmesg
-rw-r--r-- 1 root   root 351960 Jul 19 06:52 dpkg.log
-rw-r--r-- 1 root   root  32064 Dec 10 21:33 faillog
drwxr-xr-x 2 root   root   4096 Jul 19 06:51 journal
-rw-rw-r-- 1 root   utmp 292584 Dec 15 16:38 lastlog
-rw-r----- 1 syslog adm   14185 Dec 15 16:38 syslog
-rw------- 1 root   root  64128 Dec 10 21:33 tallylog
-rw-rw-r-- 1 root   utmp    384 Dec 15 16:38 wtmp
```
- File type
	- First character of each line
	- Types of files:
		- `d` - directory
		- `-` - regular file
		- `l` - symbolic link
		- `s` - socket
			-  Allows for communication between processes
		- `p` - pipe
			- Allows for communication between processes
		- `b` - block file
			- Used to communicate with hardware
		- `c` - character file
			- Used to communicate with hardware
- Permissions
	- Next nine characters
- Hard link count
	- How many hard links there are to the file
- User owner
	- Every file is owned by a user account
	- Owner can set permissions on the file
- Group owner
	- Which group owns the file
	- Any member of a group inherits the permissions to the file
- File size
	- Size of file in bytes
	- For directories, how many bytes are reserved to keep track of the filenames in the directory
		- Not useful for directories
- Timestamp
	- When the contents were last modified
	- For directories, when a file was added/removed
- File name
## Archiving and compression
- Archiving
	- Combine multiple files into one
- Compression
	- Make files smaller by removing redundant information
	- Two types:
		- Lossless
		- Lossy
- `gzip`
	- Most common Linux tool used for compression
	- `-l` provides info about the compression
		- Compression ratio shows how much the file was reduced
	- Uses the Lempel-Ziv data compression algorithm
- `gunzip`
	- Used to decompress
	- Same as `gzip -d`
- `tar`
	- `tar -c [-f ARCHIVE] [OPTIONS] [FILE...]`
	- Used to archive files
	- Short for TApe aRchive
	- Has three modes:
		- Create
			- Make a new archive
		- Extract
			- Pull one or more files out of an archive
		- List
			- Show contents of an archive witout extracting
	- Options
		- `-c` (create mode)
			- Create an archive
		- `-t` (list mode)
			- List files in an archive
		- `-x` (extract mode)
			- Extract files from an archive
			- `-v`
				- Verbosely list processed files
		- `-f ARCHIVE`
			- Specify the archive file to operate on
		- `-z`
			- Compress/decompress using `gzip`
		- `-j`
			- Compress/decompress using `bzip2`
## Working with Text
- `cat`
	- Useful for creating and display text files
- `less`
	- Default pager for commands like `man`
	- More advanced that `cat`
- `more`
	- Less features than `less` but always available
- `head`/`tail`
	- Display the first/last ten lines of a file
### Pager movement commands
| Key      | Movement        |
| -------- | --------------- |
| Spacebar | Window forward  |
| B        | Window backward |
| Enter    | Line forward    |
| Q        | Exit            |
| H        | Help            |
