---
title: "Leveraging a CLI tool to expose your team's services is a landslide win"
date: 2024-03-30
author: "socraticDev"
image: ../../images/cli.png
tags:
  - devops
  - productivity
---



### common pitfalls

Starting a CLI project is easy. The barrier to entry is low thanks to most
programming languages offering well-designed and easy to use libraries to create
CLI tools.

> (Python) Click is a Python package for creating beautiful command line interfaces in a composable way with as little code as necessary. It’s the “Command Line Interface Creation Kit”. It’s highly configurable but comes with sensible defaults out of the box.

> (Golang) urfave/cli is a declarative, simple, fast, and fun package for building command line tools in Go

#### your targetted users balks at using your CLI 

Your CLI is _just_ an interface to your system that a human or a non-human
can use in a uniform way. If the interface is a pain to use for a human or
requires a lot of workaround to be used by a machine, you must do better.

A simple metric to ponder upon is: how much requests comes from the CLI vs.
direct API calls; worse, are your human users preferring to use GUI tools that
wraps the API? Even some advanced kubernetes users prefer using GUI tools like
[Lense](https://k8slens.dev/) or [k9s](https://k9scli.io/)... 

It doesn't mean `kubectl` is lacking, in my opinion. It's more a question of
personal preference. A bit like preferring eating at fast food joints rather
than cooking your own tasty meals at home.

#### your CLI is a wrapper over a third-party API

Instead of calling a third-party API directly, you are wrapping it in your own
very cleverly named CLI tool

Fair enough if using your CLI solves more problems to your end-users than what
your work is costing your company. But if you're just wrapping existing public
API endpoints for the sake of building a CLI tool, you are probably doing more
harm to your organization and future colleagues than good:

- by "hiding" the public API, you are probably reducing the the
  functionalities offered by the API. Most likely, you have picked a set of
  functionalities when building your CLI. You needed them at this point in
  time, but it probably won't be enough for your users in the long run
- you are now totally dependant on a third-party API. Your CLI will break
  whenever the third-party API changes its behavior. Your users are in luck if
  you are available to quickly fix your tool. But, let's be honest, you
  probably will be working on another bleeding edge project, won't you?
- congrats! your team is now responsible for maintaining your CLI

Also, until your CLI becomes as ubiquitous as `npm`, `git` or `kubectl`, you
are asking users to learn a new tool. Since they won't be able to query
stackoverflow, chatgpt or watch YouTube tutorials, you must provide first-class
documentation, tutorial and support from the get go.

My advice is to refrain from wrapping a third-party api. Scope your CLI tool to
let user interface with your team's API. It seems like a very small scope, but
it is a sound one. Leveraging a CLI to expose your team's services is a
landslide win.

### sources

[Command Line Interface Guidelines](https://clig.dev/)