---
title: "Platform engineering should be seen as a form of internal institution to your
organization"
date: 2023-08-21
author: "socraticDev"
image: ../../images/platform-engineering-dalle.png
tags:
  - ideas
  - devops  
---

A new concept is getting traction in the software realm: platform
engineering. A seductive idea that is getting (mis-)interpreted in
various ways. Probably due to my background in Philosophy, I am keen to examine
it with an open mind to assess its value. Is it hype? Is it really the solution
to all problems in software development?

> "Platform engineering is the discipline of designing and building toolchains
> and workflows that enable self-service capabilities for software engineering
> organizations in the cloud-native era. Platform engineers provide an
> integrated product most often referred to as an “Internal Developer Platform”
> covering the operational necessities of the entire lifecycle of an
> application."
>
> <cite>Luca Galante, "What is platform engineering"</cite>

## what makes a great platform engineer?

Camille Fournier, a platform team manager, stresses that the main qualities of
a great platform engineer are not technical. Patience, empathy, and
communication skills are traits she is looking for when hiring new teammates.

Platform teams often attract developers wanting to play with the latest tech
and hungry to build bleeding edge systems. However, according to Camille
Fournier, building such systems are not how a platform engineer delivers value.

First of all, platform engineers must understand "stream-aligned developers";
i.e. developers who build features for which customers pay for. With
patience and empathy a great platform engineer caters to developers.
Understanding what is slowing them, how their current systems work, and how to
help them migrate their stuff to the platform; often doing the migration for
them.

Basically, a great platform engineer priority is offering a great "customer
experience" to development teams. Building next-generation systems is but only one
way to do so.

## platform engineering is not a silver bullet

Dave Farley, an Independent Software Developer and Consultant, Founder and
Director of Continuous Delivery Ltd., has lately expressed reluctance toward
the concept of platform engineering. According to him building platforms useful for
non-trivial distributed systems is not possible. First and foremost it is not
possible to build highly generic systems right the first time. It must be an
iterative process.

Being an experienced software engineer, he puts forward a probable scenario that
proves "platforming" to be a vain enterprise. Let's say a large organization
platform team decides to build a "generic Account module" that could be consumed
by different teams whose systems use the concept of _Account_. According to
Dave Farley, it won't be too long before a single team needs some special
feature to their _Account_ entity. Perhaps the finance team will need to comply
with "know your customer" (kyc) regulations to avoid money laundering. What
follows? They ask platform team to add a _kyc_ feature to their generic
_Account_ entity; thus potentially breaking other teams _Account_ module. Or,
the finance team would stop using the generic module to build their own
instead; thus losing useful capabilities such as single-sign-on (sso).

Platform engineering sounds like a great idea: removing all complex and
difficult challenges from stream-aligned development teams and let a siloed
team of experts solve it for them.

But that will never work!

Thinking that platform engineering will enable businesses to outsource features
development to low-skilled code monkeys is a vain dream.

Instead, I agree with Dave Farley, to insist that software engineers are
skilled professionals. They must be supported in managing complexity via proven strategies such
as:

- abstraction and information hiding;
- good separation of concerns;
- sound use of modularity;
- high cohesion and low coupling designs.

## an institution

Platform engineering teams should be seen as a form of internal institution to an
organization.

> "Institutions (singular: institution) are humanly devised structures of rules
> and norms that shape and constrain individual behavior.All definitions of
> institutions generally entail that there is a level of persistence and
> continuity. Laws, rules, social conventions and norms are all examples of
> institutions.Institutions vary in their level of formality and
> informality"
>
> <cite>"Institutions", _Wikipedia.org_, 2023-08-21</cite>

As an institution, a platform engineering team ensures the continuity of an
organization's software products. It is conscious of its past, mindful of its
present, and prepares its future. As much as it constrains stream-aligned
development teams, it helps them achieve desired outcomes:

- easier to maintain systems;
- safer systems;
- faster development cycles;
- etc.

## sources

[Continuous Delivery YouTube channel - Platform Engineering Is The New Kid On
The Block](https://youtu.be/wXyNHngEN-s)

[HashiCorp YouTube channel - What is a Platform
Engineer?](https://youtu.be/q6vbxk3hq-o)

[LevelUp engineering podcast with Camille Fournier - Managing Platform Teams:
How to Build and Structure Platform Engineering?](https://youtu.be/jjwrIra7Dx4)

[Luca Galante - What is platform engineering?](https://platformengineering.org/blog/what-is-platform-engineering)
