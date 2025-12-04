---
title: "Expect: automation and semi-automation of processes under Linux"
date: 2020-08-07
author: "SocraticDev"
image: ../../images/expect.png
tags:
  - linux
  - productivity
is_archived: true
---

``Expect`` is a ``TCL`` based utility which excels in automating interactive tasks.

>  ``Expect`` is  a program that "talks" to other interactive programs according to a script. Following the script, Expect knows what can be expected from a program and what the correct response should be.  An interpreted language provides branching and high-level control structures to direct the dialogue.  In addition, the user can take control and interact directly when desired, afterward returning control to the script.
>
> <cite>-- man page for ``Expect``</cite>

This short script below (** strongly discouraged **) automatically provides your root password when requested by the system. This example illustrates the interactive aspect of automation with ``Expect``. The script starts, performs certain actions, and returns control to the user.

```
expect -c '
spawn bash
sleep 0.3
send -- "sudo ls\n"
expect "password for"
send -- "<Your Password>\n"
interact
exit
'
```

##### Some use cases

- ``Expect`` was used, in the time of telephone modem connections, for the server to call users and, thus, avoid charges for the call;

- Reliability and sustainability: it is used as an automated testing tool by critical components of ``GNU/Linux`` such as ``gcc`` and ``LLVM``. It is therefore worth the cost of investing time and effort to learn how to use it well and integrate it into your workflow;

- Executing tasks usually performed by humans as they involve periods of inactivity, cursor movement, etc;

- Automatically triggering completion with ``TAB`` and then hand over to the user;

- Automatically invoking keyboard shortcuts in ``bash``;

- Interacting naturally with programs like a human would;

- Filling in the gaps of a program where it would lack ways to interact programmatically with it, but on the other hand allowing a human user to do it manually;

- Partial automation: performing certain operations and then handing over to a human user.

##### Why isn't ``Expect`` better known?

- It is a very ecclectic application. First of all, its name, ``Expect``, is really not great in terms of ``SEO``. Rather difficult to look for help in ``Google`` by using this keyword;

- Then, it's an interpreter who doesn't really have his own language. ``Expect`` uses ``TCL`` while adding extensions to it. Thus, it is sometimes difficult to determine if we are dealing with vanilla ``TCL`` or a peculiarity of ``Expect``;

- Despite its weak presence on the web, by reading the documentation related to ``TCL``, we discover a universe of unsuspected possibilities to benifit from your ``UNIX`` or ``GNU/Linux`` systems.

##### Sources

[Don Libes' Expect: A Surprisingly Underappreciated Unix Automation Tool](https://blog.robertelder.org/don-libes-expect-unix-automation-tool/)

[https://wiki.tcl-lang.org/page/Expect](https://wiki.tcl-lang.org/page/Expect)
