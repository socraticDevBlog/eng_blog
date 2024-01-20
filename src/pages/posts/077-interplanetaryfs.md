---
title: "interplanetary file system: just another blockchain scam?"
date: 2024-01-20
author: "socraticDev"
image: ../../images/ipfs.png
tags:
  - ideas
  - technology
---

>The Interplanetary File System (`IPFS`) is a distributed file storage protocol
>that allows computers all over the globe to store and serve files as part of a
>giant peer-to-peer network. Any computer, anywhere in the world, can download
>the IPFS software and start hosting and serving files. If someone runs IPFS on
>their computer and uploads a file to the IPFS network, that file can be viewed
>and downloaded by anyone else in the world who is also running IPFS."

### What is a _filesystem_

A file system is a way of organizing and storing data on
a computer or physical media. In addition to supervising the writing processes
and data reading, it allows management of data location, write and read
authorization, adding metadata to files, etc.

There are several file systems and we prefer some depending on our usecase.
Some systems guarantee better performance for _logs_ management (`HTFS`), while
others are designed for large distributed systems (`HDFS`).

### IPFS

`IPFS` acts sort of like bitTorrent. Shared files are not
stored on centralized servers but rather on users' machines. A _hashing_ system makes it possible to characterize each of these
and make the entire file, or a portion of it, available to peers.
these.

The advantages of such a system? the freedom of users not to be
subject to a central authority, improving data persistence
over time, the improvement of the software: applications with a vocation
sharing without central authority. 

### So another blockchain scam?

Not really... One of the fundamental problems of a decentralized system is to
motivate stakeholders to participate in the long term; to share their
computer resources (disk space, compute power, bandwidth, electricity) with strangers.

Of course `IPFS` is often discussed in the same circles frequented by
blockchain followers. But the `IPFS` protocol is not necessarily linked to
blockchain technologies. **The idea of ​​a decentralized system is what unites
them**. In the case of the `IPFS` protocol, it's about data and files hosting being decentralized.

Viewing blockchain as essentially a scam misses the mark
according. The target for a decentralized information system is to establish
a reward system that motivates actors to share their resources
physical: storage space, networking and _compute_ resources on their
personal machines (smartphones, laptops, etc.)

For example, a project like [FileCoin](https://filecoin.io/) aims to be a
response to the incentive problem. Instead of downloading a file from
centralized servers, I will be able to download it from several
sources located much closer to me: 1.5 MB from my local community college, 0.7
MB from a  neighbor, etc. 

Everyone shall be duly compensated for having contributed to the sharing.

I wanted to share my recent discovery of the InterPlanetary File System.
I think I understand the main points and I like the concept. But I am far from
being an expert and, if this new decentralized protocol gives you please too, I
invite you to dig deeper or even participate in the project!

`translated from french by google translate`

### sources 

[Cloudflare Docs - Interplanetary File System (IPFS)](https://developers.cloudflare.com/web3/ipfs-gateway/concepts/ipfs/)

[IPFS - Discover What's Out There with IPFS](https://ipfs.tech/)

[https://github.com/ipfs](https://github.com/ipfs)

[Juan Benet's homepage](https://juan.benet.ai/)

[Filecoin is an open-source cloud storage marketplace, protocol, and incentive layer.](https://filecoin.io/)