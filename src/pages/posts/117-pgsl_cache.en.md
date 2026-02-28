---
title: "Just Use PostgreSQL as a Cache Instead of Redis"
date: 2026-02-28
author: "SocraticDev"
image: ../../images/pgsql-cache-blog.png
tags:
  - technology
  - devops
is_archived: false
---

I read Martin Heinz’s 2023 blog post “You Don’t Need a Dedicated Cache Service
– PostgreSQL as a Cache” from start to finish.
[#DevOps](https://en.socratic.dev/tag/devops/) or not, I tested the
implementation to see what it gave back.

The dark side of a passion for technology is the risk of adopting
ill‑founded beliefs about topics you don’t really master.  
For example, I read a post on Hackernews about the PostgreSQL database
system. Apparently PostgreSQL can also act as a cache subsystem
(think Redis) and even as a message broker. Win‑win: you get rid of Redis
and RabbitMQ and treat yourself to a four‑day workweek.

And PostgreSQL can even tell me when the next bus leaves for Montréal, right?

### what are the requirements?

Before annoying everyone with the latest revelation picked up between
two mouthfuls of peanut‑butter toast, we need to check if it actually works.

Let's open our eyes and ears and figure out what a cache is and what it
requires. A cache like Redis is a system that temporarily stores data
in memory so it can be retrieved much faster than if we had to go fetch
it from the primary database.

So it’s a bit rich to say we’re going to use a database to cache items.  
Still, we note that cached items are stored temporarily and the primary
quality of a cache subsystem is read performance.

Then for the “temporary” aspect, we need a mechanism that frees items
from memory after some time.

### the truth is in the blog

The trick is to stretch breakfast by eating a banana or some berries.
That way you can go further than the catchy headline of a blog post and
learn more.

I read Martin Heinz’s 2023 blog post “You Don’t Need a Dedicated Cache Service
– PostgreSQL as a Cache” from start to finish.
[#DevOps](https://en.socratic.dev/tag/devops/) or not, I tested the
implementation to see what it gave back.

```sql
CREATE UNLOGGED TABLE cache (
    id serial PRIMARY KEY,
    key text UNIQUE NOT NULL,
    value jsonb,
    inserted_at timestamp);
```

First, it’s not *plug‑and‑play*. The first step is pretty simple.
Create an SQL table called `cache` and mark it `UNLOGGED`. An UNLOGGED
table doesn’t write its updates to the WAL (write‑ahead log), which
makes it faster but means it can lose its contents if the server
crashes.

Not too scary, right?

Next, to make sure items don’t bloat the `cache` table, we need to
implement some sort of TTL mechanism.  
Martin Heinz suggests using the `pg_cron` extension to schedule jobs
that will call a stored procedure to delete every item older than the
given parameter.

Just the words “stored procedure” give me the same feeling as
Proust’s madeleine.

In 2026, imagine your least grumpy DevOps engineer showing the new wave
of developers how *fun* a stored procedures in a SQL database can become in the
long term.  

Putting toothpaste back in the tube is harder than landing a rocket
vertically, isn’t it?

### SWOT on Martin Heinz’s proposal

#### strengths

Your DevOps team is barely keeping its head above water. You already
have PostgreSQL servers on hand. In less than a morning they can spin up
a cache table with TTL logic and hand it over to developers.

No need to provision new resources or commit themselves to support them.

#### weaknesses

It’s not Redis. Developers will quickly notice they have to talk to the
“cache” through their favorite ORM (or pure SQL transactions). 

And they won’t be able to add “Redis” to their résumé.

Also, until proven otherwise, it’ll probably be slower than Redis.

#### opportunities

With the arrival of the Cloud and managed services, DBAs have vanished.
By coaxing your DevOps folks into tinkering with PGSQL, you might sneak
in the responsibility for administering the database servers without
anyone noticing!

#### risks

If you know your system is heavily used, needs rock‑solid realtime
performance and must scale easily, then don’t let the siren songs of the
web seduce you—pick Redis.

#### Still sounds cool, I want to try

- Docker Desktop
- git
- DBeaver or any IDE that can connect to a `pgsql` server

If you have those two items (and cannot count), clone my GitHub repo
[`sandboxes`](https://github.com/socraticDevBlog/sandboxes/) and dig in the `pgsql-cache` directory. Open the `README.md` file in Preview mode
(if you’re not masochistic) and follow the instructions.

I’ve put together a little lab that will provision and configure a
PostgreSQL database with a `cache` table and `cron`. Then you can run a
small C# API that shows how to interact with the pgsql cache.

`translated from french by Chatgpt`

### sources

[You Don’t Need a Dedicated Cache Service - PostgreSQL as a Cache](https://www.martinheinz.dev/blog/105)

[pgsql database used as a cache](https://github.com/socraticDevBlog/sandboxes/tree/main/pgsql-cache)
