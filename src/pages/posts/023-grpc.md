---
title: "rip rest : gRPC is the new cool thing"
date: 2020-07-22
author: "SocraticDev"
image: ../../images/grpc.png
tags:
  - technology
  - programming
is_archived: true
---

> gRPC is a modern open source high performance RPC framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.

##### The coming end of the HTTP REST protocol?

The arrival of ``gRPC`` on the web probably signals the end of the omnipotence of REST APIs. The performance and interoperability requirements for modern systems favor this newcomer.

- ``gRPC`` wins in terms of performance. It ensures the transmission of light messages in binary form while REST transmits character strings in ``JSON`` format which are heavier on the network. This makes a noticeable difference for _smartphones_

- All gRPC framework (available to most popular programming languages) ensure flawless boiler-plate code generation for building binary message clients and servers. Automatic generation of these critical entities will save developers precious time ... and avoid errors that are difficult to diagnose!

- Much like Microsoft's ``WCF`` framework, ``gRPC`` enforces strict specifications. ``HTTP APIs`` with ``JSON`` messages do not impose any specifications. Unfortunately, today's web developers are constantly debating over ``HTTP verbs`` and appropriate return codes. ``gRP`` ensures a consistent developer experience across all platforms and across all implementations.

- ``gRPC``, via the ``HTTP/2`` protocol, supports all types of streaming: unary, server-to-client, client-to-server and bi-directional

- ``gRPC`` allows the client to manage the behavior of remote procedures: _deadlines_, _timeouts_ and _cancellations_

##### Use cases

- Micro-services where low latency and high onset are required

- Bi-directional point-to-point communication in real time

- Polyglot environments where several programming languages ​​are used: ``gRPC`` offers complete frameworks in several languages.

- Environments where network capacity is limited. A ``gRPC`` message will always be much lighter than a ``JSON`` payload

##### Weaknesses of gRPC

- Modern browsers do not currently support ``gRPC``. Microsoft's bet is to promote the adoption of ``Blazor``. A framework which offers a ``gRPC`` compatible web client 

- Being ``binary buffers``, messages exchanged between clients and servers, are not human-readable

- ``gRPC`` has limitations in terms of realtime _broadcast_ over a network. For this use case, an async notification frameworks like ``SignalR`` is more suitable

- Because it requires ``HTTP/2`` clients, inter-process communication is better served by other technologies that can do without them. For example, Microsoft uses ``pipes`` as a lightweight method of rapid communication between processes.


##### Source

[https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1](https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1)

[https://grpc.io/](https://grpc.io/)
