---
title: "between shell, bash and others"
date: 2022-01-27
author: "SocraticDev"
image: ../../images/shell_blog.png
tags:
  - technology
  - linux
is_archived: true
---

Any computerized system is a complex structure based on several layers of software protocols and hardware elements. The `OSI` model starts from the physical layer, electrical impulses to end on the application layer. For ordinary mortals, the application layer is an attractive user interface (`UI` for _user interface_): a web or mobile application.

Usually, for developers, the application layer presents itself as functionalities made available via textual commands typed on a keyboard and viewed on a terminal.

##### another analogy
The `linux` model is based on a kernel, a software kernel orchestrating the interactions between software and hardware. The outer layer, the software shell, is called in English `shell`. In the `Unix/Unix-like` world, the computer scientist accesses the power of the system through a software shell like `shell`, `bash` or `zsh`.

> "The term 'shell' originates from terminology used with early Unix-like operating systems where it had the more specific meaning to designate the highest layer of Unix system interfaces, as opposed to the low-level layer, called the kernel.
>
>The first American computer designers used to describe the different software layers of a system by an analogy: that of the kernel and the nutshell.
>
>The word "kernel" refers to the edible part of the nut. This is the part enclosed in the shell. The hull being the inedible part of the fruit, called "shell" in English. The underlying idea being that "to access the edible (useful) part, you have to go through the shell".

#### POSIX

`POSIX` is an acronym for _Portable Operating System Interface_. A technical standard defined in 1988 by the IEEE (Institute of Electrical and Electronics Engineers). It is a set of standards prescribed to ensure the interoperability of different computerized systems. Input and output services (`IO`), user interfaces (`Bourne shell`) as well as utility commands like `awk` and `echo` are characterized.

This standard dating from the late 1980s ensures compatibility between different operating systems. For example, `Microsoft Windows NT 3.0, 4.0` are `POSIX` certified.

However, the standard is not perfect. Some bugs remain and several innovations are not supported. Therefore, not being 'POSIX compliant' is not a defect in itself.

#### sh or Bourne Shell

`sh` or `Bourne shell` is a command programming language following the `POSIX` standard. Its advantage is compatibility with different systems. This language uses the syntax and semantics of older programming languages; mostly `ALGOL68`.

A `sh` script will therefore run smoothly on a `bash` running system. It is the most portable scripting language. We are sure that it can be executed on any `POSIX`, `UNIX` and `UNIX-like` system.

#### bash or Bourne Again Shell
`bash` or `Bourne Again Shell` is a programming language that takes some features of `sh` while enriching it. This is the default shell of most `GNU/Linux` distributions. It is not `POSIX` certified but still conforms to some standards like `IEEE POSIX Shell and Tools`.

`bash` is still very portable within the `GNU/Linux` ecosystem. It is found in the same place on almost all our systems: `/bin/bash`.

One may prefer `bash` for its richness of features in terms of programming and interactive use.

#### bash vs. sh

|                           bash                          |sh                                                            |
|---------------------------------------------------------|--------------------------------------------------------------|
| Bourne Again SHell                                      | SHell                                                        |
| developed by Brain Fox                                 | développé par Stephen R. Bourne                              |
| successor to sh                                        | prédécesseur de bash                                         |
| more features                                           | less features                                     |
| is not POSIX compliant                               | is POSIX compliant                                          |
| easy to use                                          | more difficult to use than bash                           |
| less portable than sh                                   | more portable than bash                                       |
| bash scripting is specific to bash environment | sh scripting targets all shells |
| implements `history` command                        | does not implement `history` command                       |

#### zsh and others delusions

`Z shell` or `zsh` is the default software shell on the MacOS operating system. Many `GNU/linux` users also like to use this _shell_ because of its functionality and pleasing aesthetics.

> The first version of zsh was written by Paul Falstad in 1990, while a student at Princeton University. The name "zsh" comes from Zhong Shao, a Yale professor and teaching assistant at Princeton University. Paul Falstad thought that Shao's login identifier, "zsh", was a suitable name for a shell.

##### (from wikipedia)
In particular, zsh provides the following features:

- Completion of commands, options and arguments of most commands. In particular, typing the sequence of characters “cd <TAB>” will only allow completion by directories.
- Very advanced "Globbing" or "Expansion [archive]" functions
- Sharing command history between all currently active zsh shells.
- Improved use of variables and arrays.
- Editing of multi-line commands in a single buffer.
- "Spelling" correction of typed commands.
- Several compatibility modes (zsh can for example be seen as a bourne shell when executed as /bin/sh).
- Customizable command prompt, with the ability to display information on the right side of the screen that disappears if the command typed is too long.
- zsh supports Unicode since version 4.32 and is more flexible and lightweight than bash[ref. necessary], in particular thanks to a division of the code into dynamically loadable modules.

`translated from french by google translate`

#### sources

[https://fr.wikipedia.org/wiki/Interface_système](https://fr.wikipedia.org/wiki/Interface_système)

[https://www.geeksforgeeks.org/difference-between-sh-and-bash/](https://www.geeksforgeeks.org/difference-between-sh-and-bash)

[https://fr.wikipedia.org/wiki/POSIX](https://fr.wikipedia.org/wiki/POSIX)

[https://fr.wikipedia.org/wiki/Z_Shell](https://fr.wikipedia.org/wiki/Z_Shell)
