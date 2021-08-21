---
title: "gemini an alternative protocol to http"
date: 2021-08-20
author: "SocraticDev"
image: ../../images/gemini.png
tags:
  - technology
  - web
---

How about reading the news on your terminal? And let it be a pleasant experience. The `Gemini` protocol offers an alternative to the` http` web protocol to serve semantically rich content according to client / server dynamics.

Most hackers find the web bloated. A regular website makes several calls to different servers to download the files necessary for its operation. In addition to the advertising that no one wants to see, the average site offers a lot of features that don't add value to the user. The ``JavaScript`` frameworks are true cathedrals; pyramids of dependencies that no one wants to maintain. It is absolutely not the ``web`` that Sir Berners-Lee had dreamed of.

Is our daily experience with the ``web`` inevitable? Can we escape this circus and come back to a simple, uncluttered ``web`` that delivers exactly what the reader is looking for. A super light, fast ``web`` _lean_ that meets the needs of the majority of users: to access information.

##### what is the `Gemini` protocol
Gemini is a new internet protocol that:

- Is heavier than `gopher`
- Is lighter than the `web`
- Will not replace the `web` either
- Aim for a maximum weight / power ratio
- Takes user privacy very seriously

The protocol was established by hacker [`Solderpunk`] (https://tilde.zone/@solderpunk) in June 2019. An open community has helped him.

> "Gemini is designed as part of the Internet protocol suite. Like HTTP (S), Gemini functions as a request-response protocol in the client-server computer model. A Gemini browser (analogous to a web browser), for example , can be the client and an application running on a computer hosting a Gemini site can be the server. The client sends a Gemini request message to the server, and the server returns a response message. Gemini uses a separate connection to the same server for each resource request. "
>
><cite>-- Wikipedia, "Gemini(protocol)"</cite>

##### concretely
Instead of a web page, we talk about _capsule gemini_. These _capsules_ are composed in a light formatting language called `gemtext` which looks a lot like` markdown`. The best practice is to compose the capsules from 'long lines' and not worry about the layout. The layout is entrusted to the client `Gemini` who optimizes the available space to promote the reading experience.

Personally, I have tried and adopted the `amfora` (`Go`) client which installs quickly through the` Homebrew` package manager:
```
brew install amfora
```

##### server side
On the server side, there are a multitude of `gemini` server implementations in most programming languages:` python`, `c`,` Haskell`, etc.

Personally, I adopted Bruno Bord's server [https://github.com/brunobord/gemeaux Danemark(https://github.com/brunobord/gemeaux). Why? It is written in `python` and does not require many dependencies. The `readme.md` is complete and I quickly managed to get it running on my personal server open on the Internet.

I then sketched out a small _capsule_ for my online community. You just have to create a main file `index.gmi` and indicate to the server the directory from which to serve the files.

```
gemini://dailybuild.org
```

##### do I use Gemini every day?
I visit various current affairs _capsules_ on a daily basis like `npr`,` CNN` and the `Christian Science Monitor`. The _capsules_ load instantly, there are no ads, no videos, and the articles are laid out for efficient reading: 

```
gemini://rawtext.club/~sloum/geminews/
```

##### sources
[https://gemini.circumlunar.space/](https://gemini.circumlunar.space/)

[https://www.wikiwand.com/en/Gemini_(protocol)](https://www.wikiwand.com/en/Gemini_(protocol))