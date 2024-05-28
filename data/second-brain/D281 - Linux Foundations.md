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
- In Linux, file extensions are only useful to the user, the OS ignores them
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
	- Search
		- Forward: `/` then `Enter`
		- Backward from current position: `/` then `?`
		- Moving through matches:
			- Forward: `n`
			- Backward: `Shift + N`
- `more`
	- Less features than `less` but always available
- `head`/`tail`
	- Display the first/last ten lines of a file
- `sort`
	- Sorting
- `wc`
	- Prints file statistics
- `cut`
	- Extract columns from a file or STDIN
	- Usually used for delimited databases files (eg. csv)
- `grep`
	- Filter based on a specified pattern
### Pager movement commands
| Key      | Movement        |
| -------- | --------------- |
| Spacebar | Window forward  |
| B        | Window backward |
| Enter    | Line forward    |
| Q        | Exit            |
| H        | Help            |
#### Input/Output redirection
- STDOUT `1>` or `>`
- STDERR `2>`
- Both STDOUT and STDERR `&>`
- STDIN `<`
#### Regular expressions
- `.`
	- Single character
- `[ ]`
	- A list or range of characters to match *one* character
	- If `^` is the first character then it means any character _not_ in the list
- `*`
	- Previous character zero or more times
- `^`
	- If it is the first character in the pattern --> pattern must be at the beginning of the line
- `$`
	- If the last character in the pattern --> pattern must be at the end of the line
- `?`
	- Matches previous character zero or one time
- `+`
	- Matches previous character one or more times
- `|`
	- Logical "or"
## Where data is stored
### Processes
- Info provided by pseudo filesystem under `/proc`
	- Also contains info about system hardware and current kernel config
- Hardware devices through files under `/dev`
	- Information about those devices provided by pseudo filesystem under `/sys`
- Pseudo filesystems appear to be real files on disk but only exist in memory
- `ps aux`
	- View all running processes
	- `a` -- all processes, not just for the current user
	- `u` -- display detailed user-oriented info
	- `x` -- all processes (extension of `a` including ones without a controlling terminal
### Network configuration
### IP addresses
- IPv4
	- Four 8-bit numbers
	- Limited to ~4.3 billion addresses
- IPv6
	- 128-bit addresses
	- Much larger address pool that won't start running out like IPv4
### Network config files
- `/etc/hosts`
	- Table of hostnames to IP addresses
	- Used to supplement a DNS server
- `/etc/resolv.conf`
	- IP addresses of name servers system uses to resolve names of IP addresses
- `/etc/nsswitch.conf`
	- Used to modify where hostname lookups occur
### Network tools
- `ifconfig`
	- Interface configuration
	- Used to display network configuration information
	- Can be used to temporarily modify network settings
- `ip`
	- Replacing `ifconfig` in some distros
	- One-stop shop for configuration and control of networking
- `route`
	- Show what routing devices are available on the network
- `ping`
	- Used to determine if a machine can be reached
- `netstat`
	- Provides network information
	- Can display routing table similar to `route`
- `ss`
	- Shows socket statistics
	- Find what connections are currently established between local and remote machines
	- Similar to `netstat`
- `dig`
	- Queries DNS server to determine if info needed is available
		- eg. `dig example.com` --> can `example.com` get resolved?
	- Can use `+trace` to show entire resolution process
- `ssh`
	- Used to connect to another machine across the network
	- If you don't provide a username it will use the username you are currently logged in as
## System and user security
- Users belong to at least one group
- Root account is disabled on Ubuntu
- `sudo`
	- Execute commands as another user
	- `root` is assumed by default
	- Prompts for a user password initially and then every time a command is run >5 minutes apart
- `su`
	- Switch user
- `/etc/passwd`
	- Defines account info for user accounts
	- Contains the following data for each user:
		- Name
		- Password placeholder
		- User ID
		- Primary group ID
		- Comment
		- Home directory
		- Shell
- `/etc/shadow`
	- Contains account info related to user's password
	- Passwords are encrypted and cannot be read
- `/etc/group`
	- Defines supplement group membership for users
	- Contains the following fields:
		- Group name
		- Password placeholder
		- GID
		- User list
- `id`
	- Print user and group info for a specified user
- `who`
	- Displays a list of users who are logged in
	- Contains the following fields:
		- Username
		- Terminal
		- Date
		- Host
- `last`
	- Reads entire login history from `/var/log/wtmp`
	- Displays all logins and reboot records by default
## Creating users and groups
- Some distributions automatically create a group account for the user (User Private Group)
	- Name of group matches username
	- User is the only one in the group
- If the distribution doesn't make a group for the user then they usually have the `users` group as their primary group
- `groupadd`
	- Used to create a group
	- `-g` allows you to set the group ID
		- Need to consider user IDs if setting the group ID
	- Group name considerations
		- Start with `a-z` or `_`
		- Ideally <16 characters, _never_ more than 32
		- After the first character you can user alphanumerics, `-`, or `_`
		- Last character should not be a `-`
- `groupmod`
	- Change the name (`-n`) or GID (`-g`) of a group
	- Any files associated with a group when you change the GID will no longer be associated with any group name (only the old GID)
		- You can find orphaned files by searching with `find / -nogroup`
- `groupdel`
	- Delete a group
- `useradd`
	- Add users
	- `-D` view or change some default values (also stored in `/etc/default/useradd`)
		- Group
			- Default primary group
			- If not specified, usually `100` which is the `users` group
			- `-g` option on the CLI
		- Base
			- Default base directory for the user's home directory
			- `-b` option on the CLI 
		- Inactive
			- Number of days after password expires that the account is disabled
			- `-f` option on the CLI
		- Expire
			- No default value
			- Expiration date of the user
			- `-e` option on the CLI
		- Shell
			- Default shell for a user
			- `-s` option on the CLI
		- Skeleton directory
			- Which skeleton directory has its contents copied into the new user's home directory
			- `-k` option on the CLI
		- Create mail spool
			- Where to place incoming mail
- `usermod`
	- Modify a user
	- Some commands fail while the user is logged in
	- Some commands don't apply until the next time a user logs in
- `userdel`
	- Delete a user
- `/etc/login.defs`
	- More user defaults
- `passwd`
	- Set a password for a user
- `chage`
	- Used to manage password aging info in `/etc/shadow`
## Ownership and permissions
- Users own files they create by default
- Ownership is determined by the UID and GID associated with a file
	- Changing either of these cam orphan a file
- `newgrp`
	- Change your current primary group
	- Useful when you want to create a file that should belong to a different group than your current primary group
- `chgrp`
	- Change the group owner of an existing file
	- Without admin privileges a user can only change the group to one they belong to
- `chown`
	- Change user ownership of files and directories
	- Can only be used to change user ownership by the root user
	- Can also change group ownership
### Permission groups
- `[-]rw-r--r-- 1 root root 4135 May 27 21:08 /etc/passwd`
	- Type of file:
		- `-`
			- Regular file
			- May be empty or contain text or binary data
		- `-d`
			- Directory
		- `l`
			- Symbolic link
			- Pointer to another file
		- `b`
			- Block file
			- Relates to a block hardware device
			- Data is read in blocks of data
		- `c`
			- Character file
			- Relates to a character hardware device
			- Data is read one byte at a time
		- `p`
			- Pipe file
			- Similar to the pipe symbol
			- Allows the output of one process to communicate to another process through the file
		- `s`
			- Socket file
			- Allows two processes to communicate
- `-[rw-]r--r-- 1 root root 4135 May 27 21:08 /etc/passwd`
	- User owner
	- If you are the owner then only the owner permissions are used to determine access
- `-rw-[r--]r-- 1 root root 4135 May 27 21:08 /etc/passwd`
	- Group owner
- `-rw-r--[r--] 1 root root 4135 May 27 21:08 /etc/passwd`
	- Other permissions ("world's permissions")
	- Permissions for anyone that is not the file owner or a member of the file's group
### Permission types
- Read
- Write
- Execute
### Numeric permission setting
- Based on the octal numbering system
- Each permission is assigned a numeric value
	- Read --> 4
	- Write --> 2
	- Execute --> 1
- Combination of numbers from 0 to 7 are used to set permissions
	- 7 --> `rwx`
	- 6 --> `rw-`
	- 5 --> `r-x`
	- 4 --> `r--`
	- 3 --> `-wx`
	- 2 --> `-w-`
	- 1 --> `--x`
	- 0 --> `---`
- `stat`
	- Shows permissions in both symbolic and numeric methods
- `umask`
	- Determines default permissions set when a file or directory is created
	- The `umask` value is subtracted from the maximum allowable default permissions
	- Maximum default value permissions:
		- Files --> `rw-rw-rw-`
		- Directories --> `rwxrwxrwx`
## Special directories and files
- `setuid`
	- Allows users to run an executable with permissions of the file owner vs the user running the executable
	- Add/subtract `4000` when using `chmod` to adjust permissions
- `setgid`
	- Used to make sure files/directories can inherit the group ID of their parent
- Sticky bit
	- Used to prevent users from deleting files they don't own in a shared directory
	- Add/subtract `1000` when using `chmod` to adjust permissions
### Links
- Hard links are two files that point to the same inode
	- Use `find -inum` to find where files to an inode are
	- Don't break if one of the links is deleted
	- Can't be linked to directories
- Symbolic links are files that point to another file
	- Easier to see where they link to
	- Break if the original file is deleted
	- Can be linked to directories
- `ln`
	- Used to create hard links
	- `-s` creates symbolic links