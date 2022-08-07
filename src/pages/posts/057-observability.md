---
title: "Observability: put some ops in your devs"
date: 2022-08-07
author: "SocraticDev"
image: ../../images/observability.png
tags:
  - ideas
  - cloud
---

Observability is a trending topic in cloud native software systems. 

"Observability" is a relatively new concept in software development operations.
It is close to DevOps culture. When developers get to integrate
deployments and operations in their software lifecycle, a different set of
concerns appear:

- only knowing about customers receiving 500 errors is not enough information
  to resolve an incident
- as a dev, I need to have more access to production systems in order to resolve incidents
- monitoring is fine, but not enough because we can't know in advance what part of the
  system will cause a failure

Basically, observability is the quality of a system that allows developers to
understand its state from its output.

> "our definition of “observability” for software systems is a measure of how
> well you can understand and explain any state your system can get into, no
> matter how novel or bizarre."

Modern computer systems are complex. Computer systems as monolithic stacks living on servers are a thing of the
past. Nowadays, most new systems are built for the cloud. Favoring a
composition of interlinked micro-services. That entails many short lived
processes, payloads depending on various sub-systems; most of which developers
are not responsable for.

## observability is not monitoring

There is a risk in approaching modern computer systems with the
mindset of an traditional system administrator. Observability is not
monitoring. Monitoring an application only gives a small overview of the
system: the number of requests per minute, a count of 500 errors, etc.

What developers need are tools that enable them to peek inside the systems they are maintaining.
As an example, they need to be able to trace an error right to the request a
user has submited.

> "A mindset and culture rooted in the shibboleths of monitoring—dashboards,
> alerts, static thresholds—isn’t helpful to unlock the full potential of
> observability. An observability tool might have access to a very large volume
> of very granular data, but successfully making sense of the mountain of
> data—which is the ultimate arbiter of the overall viability and utility of
> the tool, and arguably that of observability itself!— requires a
> hypothesis-driven, iterative debugging mindset."<cite>Charity Majors and
> al.(2022), "Observability Engineering", O'Reilly</cite>

## DevOps is the way to go

DevOps is certainly the most practical way for an organization to publish a
product. Traditional system administration's habits and mindset is too narrow
to fullfil the requirements of modern complex distributed systems.

Be serious about DevOps.

Give developers ownership over their deployment pipelines.

Give developers ownership over their systems running in production.

## why developers should handle system operations? 

Because pretty much everything now is built `as code` and developers know
how to code.

Because complex systems problems are of the "unknown unknowns" category. It
means that you don't know and you can't know in advance what would be the cause of
an outage. If you do, it means that you are running a faulty product. It means
developers know the root cause of the problem but are unable to fix it. It
means the organization failed to give priority to making quality software.

Complex systems require the mindset of a developer. A developer is trained and
experienced at debugging systems. Developers are also good at problem solving. They
just need the appropriate tooling to dig into a system while it is in
production.

## instrumenting code

Observability is a property of a system. "Observability is a measure of how
well we can understand a system from the work it does, and how to make it
better."

Instrumentation is an abstract word that relates to all actions developers take
to make their system more observable.

With the transition to DevOps and SRE (Site reliability engineering), system
instrumentation was delegated to 'opsie' people. However, developers are, in my
opinion, the right people to instrument the codebase.

This bleeding edge concept is _Observability driven development_. There is
little literature about this topic to this day.

## imposed observability - an organization-wide observability team

Some organization have imposed observability by leveraging organization-wide
observability teams. This team goal is to instrument developers' codebase.

[Splunk](splunk.com) sponsored _State of Observability 2022_ notes that leaders
in observability are organization where code instrumentation and product
monitoring are taken in charge by developers themselves.

> Clay has three requirements for using instrumentation to make microservices and serverless functions observable:
>
>  - Observable systems should emit events: metrics, logs, and traces.
>    - Each one has its uses, so you need a balance of all three.
>  - All components—not just critical services—should be instrumented.
>    - Full coverage of all components is required to tell the entire story.
>  - Instrumentation should not be opt-in, manual, or hard to do.
>    - Instrumentation should be built into everything you build and run.
>    - Dedicated observability teams can help make this a company-wide practice.

## what's next

SocraticDev is seriously digging into distributed systems and observability
these days. 

While this blog post is an humble introduction to observability, a reader can expect to
see more detailed posts to come. Real-world use cases and proof-of-concepts.

Stay tuned!

## sources

Charity Majors and al.(2022), "Observability Engineering", O'Reilly

https://newrelic.com/blog/best-practices/observability-instrumentation

https://www.splunk.com/en_us/form/state-of-observability.html

https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability