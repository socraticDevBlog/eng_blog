---
title: "interplanetary file system: just another blockchain scam?"
date: 2024-01-20
author: "socraticDev"
image: ../../images/ipfs.png
tags:
  - ideas
  - technology
is_archived: true
---

>The Interplanetary File System (`IPFS`) is a distributed file storage protocol
>that allows computers all over the globe to store and serve files as part of a
>giant peer-to-peer network. Any computer, anywhere in the world, can download
>the IPFS software and start hosting and serving files. If someone runs IPFS on
>their computer and uploads a file to the IPFS network, that file can be viewed
>and downloaded by anyone else in the world who is also running IPFS."

### What is a _file system?_

A file system is a scheme for storing and organizing digital data on one or more computer hard drives or other physical media. Supervision of reading and writing processes is essential. A file system manages data location, read and write
permissions, metadata, and more.

There are several file systems, favoring different use cases.
Some guarantee better performance for _log_ management (`HTFS`), while
others are designed for large distributed systems (`HDFS`).

### IPFS

`IPFS` acts similarly to BitTorrent. Shared files are not
stored on centralized servers but rather on users' machines. A _hashing_ system distinguishes each file and chunk, allowing files and folders to be pieced back together from multiple peers.

The advantages of such a system include freedom from central authority and
improved long-term data persistence.

### So, another blockchain scam?

Not really. One of the fundamental problems of a decentralized system is failure to
motivate stakeholders to participate in the long term: to share their
computer resources (disk space, processing power, bandwidth, and electricity) with strangers.

Of course, `IPFS` is often discussed by blockchain enthusiasts.
But the `IPFS` protocol is not necessarily linked to
blockchain technologies. **The idea of ​​a decentralized system is what equates
IPFS with blockchain**. In the case of the `IPFS` protocol, it's about decentralized data and file hosting.

Viewing blockchain as essentially a scam misses the mark.
The goal of a decentralized information system should be to establish
a reward system that motivates participants to share physical computer resources, either from 
personal machines or data center capacity.

For example, the [FileCoin](https://filecoin.io/) project aims to solve the incentive problem. Instead of downloading a file from
centralized servers, I can download it from several
sources located much closer to me: 1.5 MB from my local community college, 0.7
MB from a neighbor, and so forth.

Everyone shall be duly compensated for their file sharing contribution.

I wanted to share my recent discovery of the InterPlanetary File System.
Going over the main aspects, I generally agree with the concept. But I am far from
being an expert and, if this new decentralized protocol pleases you too, I
invite you to [dig deeper](https://docs.ipfs.tech/how-to/) or even participate in the project!

`Originally written in French.`

### Sources

[Cloudflare Docs - Interplanetary File System (IPFS)](https://developers.cloudflare.com/web3/ipfs-gateway/concepts/ipfs/)

[IPFS - Discover What's Out There with IPFS](https://ipfs.tech/)

[https://github.com/ipfs](https://github.com/ipfs)

[Juan Benet's homepage](https://juan.benet.ai/)

[Filecoin is an open-source cloud storage marketplace, protocol, and incentive layer.](https://filecoin.io/)
