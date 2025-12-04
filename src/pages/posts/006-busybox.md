---
title: What is BusyBox ?
date: 2020-02-13
author: "SocraticDev"
image: ../../images/busybox.jpg
tags:
  - linux
  - technology
is_archived: true
---
BusyBox (_box occupied_) considers itself the Swiss Army Knife of Linux for embedded systems. BusyBox combines minimal versions of several UNIX utilities into a small executable file. The utilities offered by BusyBox are less complete than those available in full distributions like Ubuntu and CentOS. However, it provides substantially all the functionality expected from a Linux system such as `` ls``, `` vi``, `` chmod``, etc.

BusyBox was designed to meet the constraints of memory space and limited resources of embedded systems and, today, the containers supporting microservices. BusyBox is extremely modular: you can include or exclude functionality and commands at the time of compilation. It is therefore easy to customize for the specific needs of the systems that use it.

As an executable interfacing with the Linux kernel, BusyBox is used in many POSIX environments such as the Android mobile operating system and the minimalist Linux distributions used in the world of micro-services. We even see it used by large distributions like Ubuntu at the time of the boot of the system (__boot flow__).

The operating system [Alpine Linux] (https://alpinelinux.org/) uses BusyBox for all of its commands and functionalities. By executing the command `` ls -lh / bin`` in an Alpine terminal, we see that the majority of the commands do not refer to executable files occupying disk space. Rather, they are symbolic links (_symlink_) to the binary file of BusyBox. For example: `` netstat -> / bin / busybox``.
### sources

[https://www.busybox.net](https://www.busybox.net)

[https://www.wikiwand.com/fr/BusyBox](https://www.wikiwand.com/fr/BusyBox)
