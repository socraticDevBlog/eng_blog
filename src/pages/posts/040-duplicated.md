---
title: "keeping your hard drive tidy"
date: 2021-04-24
author: "SocraticDev"
image: ../../images/dupeGuru.png
tags:
  - productivity
---

As time passes by, our hard drives fill up with a lot of files. As we are using various cloud storage providers like `dropbox` or `oneDrive` and working from different machines, we often end up having the same files in duplicate, triplicate, etc. 

This is not acceptable.

##### Avoid keeping duplicated files 

Duplicated working files are to be avoided. They harm your productivity and put your backup strategy in jeopardy. What to do ? Scan your files for duplicates and delete them !

This is not something you want to spend days doing manually.  Use a specialized software tool to help you.

I've discovered [dupeGuru](https://dupeguru.voltaicideas.net/) and I am currently pruning my busy hard drives.

> dupeGuru is a cross-platform (Linux, OS X, Windows) GUI tool to find duplicate files in a system. It’s written mostly in Python 3 and has the peculiarity of using multiple GUI toolkits, all using the same core Python code. On OS X, the UI layer is written in Objective-C and uses Cocoa. On Linux 7 Windows, it’s written in Python and uses Qt5.

How does it work?  After installing it to your machine, you point it to a hard drive directory and let it scan it. It will not only check for duplicated file names. It will also analyse images, audio and video files to find duplicates.

> dupeGuru is good with pictures. It has a special Picture mode that can scan pictures fuzzily, allowing you to find pictures that are similar, but not exactly the same.

Then it will lists all files and some of them will be duplicates, triplicates, etc. Then you select which one to delete and type ``ctrl-D`` to remove them.

A clean hard drive is a happy hard drive.

#### sources

[https://dupeguru.voltaicideas.net/](https://dupeguru.voltaicideas.net/)