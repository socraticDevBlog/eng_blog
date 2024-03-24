---
title: "DevOps is the new ketchup"
date: 2024-03-24
author: "socraticDev"
image: ../../images/3-ci.png
tags:
  - fun
  - devops
---

Burning hot clickbait title☑️ 🔥🪤

__trigger warning:__ if you are unable to distinguish between a funky satire
and a personal attack, close this browser tab and go on with your day

Software is everywhere and software is more often than not built, deployed and maintained
in shitty ways.

"DevOps is the new ketchup" means that when your food sucks, you can cover up
its bad taste with ketchup. 

This post's title could easily have been "DevOps is the new
Febreeze". If your software stinks...

### axioms

def.: _an axiom is a statement or proposition which is regarded as being established, accepted, or self-evidently true_

Delivering value to customers is the main goal of any business investing in
software development teams

Making software is hard

Running software is expensive

Adopting cargo cults, hiring more developers, creating specialized silos, and
lots of other miracle cures are fallacies used by management to buy time to mitigate their
failure to deliver value to stakeholders

### my wishes for the industry

By firing most of Twitter's staff, Elon Musk showed the industry that most
people in tech are dead weight. Renamed "X", Twitter is still running, ain't it??

My wishes for the industry are similar to the axioms stated above.

I wish for the industry to focus on delivering value: building things people
want and delivering them at a predictable pace. How?  By running the business
on data! By making decisions based on sound data analytics. By measuring
Software Development Lifecycle (SDLC) with few but relevant metrics such as
DORA.

Being an optimist, I'm pretty sure it would be the "less worse way" to be running a
tight ship. Unless your organization hemorrages money, please just fire the
bozos who won't contribute to the bottom line. 

### automated CI

If your DevOps team is not letting developers continously push to the trunk
branch like there's no tomorrow, you might want to have a serious talk with
them.

Continuous Integration(CI) has evolved from fringe practice to the normal way
of creating software systems. CI is the first step of a sound SDLC. It is the staple of
modern software and lean process by:

- having deliverable software in the trunk branch at all time
- improving collaboration by having one source of truth available to all
  stakeholders
- improving software quality by integrating various automated checks before
  letting developers push into trunk branch for:
  - coding style
  - business logic validation (unit testing)
  - security (vulnerability scans, SBOM)
  - compliance
  - regression (performance testing)
  
Dang! even this blog uses a trunk based approach with some clever ephemeral
testing environments. Honestly, this blog has so few
readers that I would let myself push to main branch like there's no tomorrow. But
sometimes, I might want to test out some changes in a Pull Request(PR): a pipeline would run
checks and deploy a production-like version of the website to an ephemeral
environment. This sort of tooling is usually built-in modern DevOps platform;
for free if you're a little guy like me, or for a few dollars when you're an enterprise.

### DevOps engineers are software professionals

"Our customers are the developers" is a feel good white lie we tell ourselves
as DevOps engineers.

DevOps engineers are software professionals and should not bend over backward to all developers'
requests.  But don't feel bad for them: DevOps engineers are known to lighten
up their burden by poking fun at various developer requests on a regular basis.

A DevOps engineer christening often goes like this: 

> _a developer
> frantically messages them asking to "delete my last commit pushed to production because it
> contains some secret value"._ 
> 
> _DevOps engineers all remember that first time they
> witnessed a developer blank stare when they suggested that he should change the value of his secret
> because it already touched the Internet. A stare so blank that it feels bad;
> a little like you've had asked them to hand over their first born._

Do you expect a brain surgeon to agree to perform surgery without anesthesia
because you are in a rush to go back to work? Do you expect your car dealership to add a second
steering wheel on your new car because you want your wife to be able to drive
it too?

__Our customer is the business__: that cold blooded leviathan who is craving for
market shares and making their customers happy.

### healthy adults should not wear diapers

What if you had to work with healthy adults wearing diapers? It would stink,
wouldn't it?

That's why I say tongue in cheek that "DevOps is the new febreeze". Gullable
non-technical people swallow this lie that we should remove distractions from
developers to make them deliver more.

Going to the bathroom takes time!  It takes even more time if you wash
your hands properly!! Doesn't it?

Sadly, many organizations structure teams around this fallacy and instead of
leveraging their DevOps engineers to improve the Software Development
Lifecycle, they use them to change diapers...

### conclusion

I'm writing this to poke fun at funky DevOps practices. Too many technical people suffer from
unsound development cultures and I believe the first step to improve their
condition is by laughing a little at ourselves.

I don't think that ill motivated people deliberately organize work in a way
that is not viable and insanely frustrating to most technical stakeholders.

But I believe there are a lot of waste in the tech industry. Maybe some
non-technical stakeholders are trying to save their position by refusing to
implement industry-standard practices such as gathering meaningful metrics,
making decisions based on sound data, and steering clear of cringe cargo culting.
