---
title: "Building From Source"
description: "Going back to my roots and playing sys admin."
date: "2021-09-29T00:00:00"
tags: ["OpenBSD", "Linux", "Programming"]
---

```bash
                                  .
                                  ').
                                /;((
                              .'____`.
                              | g    | create
                              |  a   | something
                              |   r  | worth
                              | bash | rewriting
                              `-____-'
```

The first code I ever wrote was written in [AutoHotKey](https://www.autohotkey.com/). It's a scripting language for Windows. It's object is simple: allow users to automate the boring stuff. I abused the language and built GUI programs with it. I wouldn't recommend it but here we are.

I was in IT. Most of my time was spent setting up servers, installing printers, or practicing my patience while debugging over the phone with customers. There was a lot of boring stuff waiting to be automated. I'm grateful I got my start writing code during that time, but I also got to spend a lot of time playing [sys admin](https://en.wikipedia.org/wiki/System_administrator).

My terminal adventures mostly consisted of me stumbling my way through commands I didn't understand. No one ever told me about `man`. I barely knew what Linux was and [OpenBSD](https://www.openbsd.org/) could have been something that NASA used to keep astronauts alive in space.

I've come a long way since my [AutoHotKey](https://www.autohotkey.com/) days. I no longer write scripts in Windows. Instead, I avoid PHP at all costs, ship JavaScript bundles that are too large, and dream of grokking Rust. But lately I've been spending a lot of my time closer to my roots.

My friend [Alex](https://alexkarle.com/) and I have started exploring our very own [tilde community](https://tildeverse.org/). We [named it garbash](https://garbash.com/~alex/notes/001-domain-name.txt) because of a joke that was made in a PR to fix some of our bash scripts at [Monthly](http://monthly.com/). It's our tiny own space on the internet to play on the web like the days of old. We have our own [git](https://garbash.com/~alex/notes/007-git-coding.txt), [IRC](https://garbash.com/~alex/notes/008-local-irc.txt), [email](https://garbash.com/~alex/notes/004-mail-server.txt), and [web](https://garbash.com/~alex/notes/003-httpd.txt) servers.

It's given me a chance to connect with my past in a way I didn't expect. I'm no longer wrestling printer drivers or battling the bugs within my [AutoHotKey](https://www.autohotkey.com/) fax management software. Instead, [Alex](https://alexkarle.com/) and I are pair programming and configuring software that is open and [free](https://en.wikipedia.org/wiki/Free_and_open-source_software#Four_essential_freedoms_of_Free_Software).

One great thing about [OpenBSD](https://www.openbsd.org/) is that the source code is publicly available. All of the source is in one repo. It's even [available for online perusing](https://cvsweb.openbsd.org/cgi-bin/cvsweb/).

If you want to build from the source files, you can clone their publicly available code to your machine! [OpenBSD](https://www.openbsd.org/) expects everything to live in `/usr/src` which is where the [source code lives the garbash server](https://garbash.com/~alex/notes/006-use-the-src.txt).

Let's take a look inside `/usr/src`:

```bash
$ ls -lah /usr/src
total 120
drwxrwxr-x   16 root  wsrc    512B Sep 22 00:49 .
drwxr-xr-x   16 root  wheel   512B Sep 21 21:07 ..
-rw-r--r--    1 alex  wsrc     39B Sep 22 00:47 .git
-rw-r--r--    1 alex  wsrc      7B Sep 22 00:47 .gitignore
-rw-r--r--    1 alex  wsrc    3.6K Sep 22 00:47 Makefile
-rw-r--r--    1 alex  wsrc   15.7K Sep 22 00:47 Makefile.cross
drwxr-xr-x   32 alex  wsrc    512B Sep 22 00:47 bin
drwxr-xr-x   21 alex  wsrc    512B Sep 22 00:47 distrib
drwxr-xr-x   26 alex  wsrc    1.5K Sep 22 00:47 etc
drwxr-xr-x   43 alex  wsrc    1.0K Sep 22 00:47 games
drwxr-xr-x    8 alex  wsrc    512B Sep 22 00:48 gnu
drwxr-xr-x    6 alex  wsrc    2.0K Sep 22 00:48 include
drwxr-xr-x   37 alex  wsrc    1.0K Sep 22 00:48 lib
drwxr-xr-x   29 alex  wsrc    1.0K Sep 22 00:48 libexec
drwxr-xr-x   13 alex  wsrc    512B Sep 22 00:48 regress
drwxr-xr-x   68 alex  wsrc    1.5K Sep 22 00:48 sbin
drwxr-xr-x   12 alex  wsrc    512B Sep 22 00:48 share
drwxr-xr-x   25 alex  wsrc    512B Sep 22 00:49 sys
drwxr-xr-x  208 alex  wsrc    3.5K Sep 22 00:49 usr.bin
drwxr-xr-x  147 alex  wsrc    2.5K Sep 22 00:49 usr.sbin
```

All of that source code just waiting to be built. If we take a look inside the `bin` directory, there might be some familiar names.

```bash
$ ls -lah /usr/src/bin
total 136
drwxr-xr-x  32 alex  wsrc   512B Sep 22 00:47 .
drwxrwxr-x  16 root  wsrc   512B Sep 22 00:49 ..
-rw-r--r--   1 alex  wsrc   241B Sep 22 00:47 Makefile
-rw-r--r--   1 alex  wsrc   145B Sep 22 00:47 Makefile.inc
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 cat
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 chio
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 chmod
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 cp
drwxr-xr-x   3 alex  wsrc   1.0K Sep 22 00:47 csh
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 date
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 dd
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 df
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 domainname
drwxr-xr-x   2 alex  wsrc   512B Sep 22 00:47 echo
... and so much more!
```

A wild `cat` appears! I can literally use `cat` to read the code that compiles to make `cat` (`cat /usr/src/bin/cat/cat.c`). If you wanted to, you could rewrite `cat` in anyway you please and rebuild the program. If you feel up to it, you can [build an OpenBSD release from source](https://man.openbsd.org/release.8). [Alex](https://alexkarle.com/) wrote a great post about [doing out-of-tree builds on OpenBSD](https://alexkarle.com/make-obj.html). It's recommended reading if you're looking for something a little more technical.

There are _a lot_ of other cool things about [OpenBSD](https://www.openbsd.org/). They provide [full source access](https://cvsweb.openbsd.org/cgi-bin/cvsweb/), provide an incredibly [generous approach to licensing](https://www.openbsd.org/policy.html), want to be [the most secure operating system](https://www.openbsd.org/security.html), and [more](https://www.openbsd.org/goals.html).

A few years ago, when I was still doing IT, I took a lot of it for granted. I looked at programming as my way out. I was looking at it from the wrong angle back then. My focus was completing tasks for work. I learned what I needed to to make it through my day.

Today, I'm an explorer. More akin to [John Carmack](https://en.wikipedia.org/wiki/John_Carmack) than [Jacques Cousteau](https://en.wikipedia.org/wiki/Jacques_Cousteau) but you know what I mean. I don't want to be a [sys admin](https://en.wikipedia.org/wiki/System_administrator), but building from source? Sign me up!
