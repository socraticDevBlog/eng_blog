---
title: "The Ebb and Flow of Tech"
date: 2025-10-18
author: "SocraticDev"
image: ../../images/maree.png
tags:
  - ideas
  - career
  - growth
is_archived: false
---

Comparing the software development lifecycle (SDLC) with the tidal cycle illuminates an obscure aspect of the profession. If you live far from the sea, then I suggest comparing it with the cycle of seasons. If you live where there are neither tides nor seasons, then you might be living in a data center!

### life is beautiful on `localhost`

For a developer, the tide is high when facing a new project. Everything moves fast and everything goes well. We don't worry too much about external libraries added to the project, or the long-term operational costs.

And security is of course a detail.

### when clients start using our service

The tide begins to recede as soon as we deploy this new service to production. Developers start to realize that the sea is shallower near the shores. The ship's hull gets scratched a bit when encountering the SRE team and the security team. A standardized and auditable deployment process is required. The sustainability and security of data must be ensured. SRE even demands the ability to easily rollback any new production deployment if an incident caused by a new release is detected.

### scaling and the daily struggle to keep dependencies up to date

The memory of an ultra-fast system on `localhost` is long gone. Today, slowdowns are invading your system. Managing database indexes and profiling API calls become part of your routine. Cloud costs are rising faster than your revenue.

Not only that, but keeping your dependencies up to date becomes a race against time. As soon as you thought you were up to date with the latest version of kubernetes, a new minor version is released. Even worse, you're informed that the OS version used on your servers will no longer be supported in three months.

The tide hits bottom when an open source project beloved by developers ends up in the hands of a conglomerate that transforms it into a monthly subscription.

### a matter of perspective

What is low tide for developers is high tide for others. When small boats get stuck in the mud on the seashore, we see people in tall boots venturing far out on the shore and picking up things that please them: shells, seaweed, and stranded fish. In the tech world, these are the company owners and shareholders celebrating your system becoming more widely used and bringing money to the organization.

It's a cycle we often endure without naming it. Yet recognizing it changes everything.

### lessons

This tidal analogy is rich with lessons. First, our playground in technology is in perpetual motion. A few years ago, developers were in high demand and obtained comfortable salaries while telling themselves they could quit their job if circumstances ever began to displease them. Today developers are experiencing the fear, uncertainty, and doubt induced by the AI bubble; they stay in the same place longer, even if it means getting stuck in the mud of low tide.

It's a matter of perspective. A new IT project is exciting for developers, but stressful for an investor. A mature, successful IT product is exhilarating for the investor, but becomes a headache for developers.

Everything is changing. The main lesson is to stop thinking in absolute terms. The ideals of clean code, total freedom, and perpetual high tide are illusions. We must build while taking the tidal cycle into account: be less ambitious at high tide and less anxious at low tide. And the same goes for managers and executives: your teams' level of performance and productivity will fluctuate. At high tide, you'll be able to present powerful demos during your sprint reviews. But at low tide, when most of your developers' time is spent debugging intermittent problems and updating their libraries, your PowerPoint presentations might be less sexy!

### actions

Your duty is to identify at what stage of the tide your industry currently sits
and at what stage of the tide your team is currently operating. Knowing that
your reality obeys a form of cycle, knowing where you currently stand has every
chance of better informing your decisions today as well as your long-term
strategy.

`translated from french by Sonnet 4.5`
