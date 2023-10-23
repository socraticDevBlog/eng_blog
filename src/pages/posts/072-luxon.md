---
title: "How socraticDev closed a GitHub issue opened by Harvard most famous Computer Science professor"
date: 2023-10-22
author: "socraticDev"
image: ../../images/malan-banner.png
tags:
  - programming
  - fun
---

David J. Malan is Harvard most famous current computer science professor. I realized
after the fact that I had addressed and closed a bug report he had opened over
open source LuxonJS DateTime JavaScript library.

No wonder the issue's description was clear as spring water and confirmed my
deep rooted belief that the solution to a problem is most often found in the
problem statement...

For a while I was deeply involved with programming about DateTime for different
timezones and locale. An area of tech so filled by edge cases and
surprises that it can become a real pain real fast. 

LuxonJS is a [specialized library to work with
Dates and Times](https://github.com/moment/luxon) that solved all my problems
for my side project.

Since I loved this small open-source Dates and Times library so much, I decided
to contribute to the project. Perusing issues labeled as `bug` that had been
prioritized by the maintainers, I picked one and decided to work on it.

### what seems to be the problem?

<!-- A well stated problem is a problem half solved.

One thing I love about open-source software is that developers are not paid. If
the ticket description is unclear, badly stated, or just inexistant,
contributors will simply not address it. -->

This issue was music to my ears. It clearly stated in one sentence the version
of the library used, the action executed, the arguments passed to the function,
the expected result vs. the actual one (an error!) and a stack trace of the error.

What about throwing more honey to potential contributors? The person who raised
the issue provided a snippet of the problematic function call:

```javascript
luxon.Interval.fromISO('2007-03-01T13:00:00Z/P1Y2M10DT2H30M', {setZone: true}).toString()
```

The issue ends with a "Thank you!" from the person who raised it😁

### solving the problem

Armed with a sound description of the issue and the will to fix it, socraticDev
tried to reproduce the bug. But couldn't!

The function call provided by professor Malan worked perfectly in my developer
console. 

At least a year had passed between the bug report and my attempt to fix it. Recent developments
have probably fixed this issue incidentaly.

### doing nothing is doing something

At first, I got frustrated a bit not to be able to fix the bug... I assumed
wrongly that writing code had to be the way a developer contribute to a
software project.

By helping close an open issue in a popular JavaScript libary, I had
effectively contributed to it.

After all, LuxonJS maintainer thanked me for helping him close this issue while professor
Malan stamp of approval (a ❤️ emoji) encouraged me to keep tackling another
issue.

### contributing to open source projects will make you a better software practioner

Contributing to a software project is all about solving problems. Whether code
gets written or not.

Software is about solving someone's problems. For LuxonJS it's about helping
developers work with Dates, Times, and localizations. If you enjoy the library,
you can help the project and its maintainers. Read the project's `contributing.md` file
to learn the ways existing project's contributors expect help.

In my experience, as a developer, the best way to help project's maintainers is
by tackling open issues; helping maintainers close issues. 

As a non-developer, you will learn to help by communicating clearly with
developers. You will do exactly like professor Malan: explain clearly what is
the problem and how to reproduce the bug. You will refrain from providing
unclear descriptions, asking more than one thing at a time, or from posting
unhelpful screen captures (unless it's a styling bug). 

And, you will write "Thank you!" at the end for extra karma points!


### sources

- [Passing setZone to luxon.Interval.fromISO yields "Invalid unit setZone" when parsing duration](https://github.com/moment/luxon/issues/852)
- [David J. Malan Harvard homepage](https://cs.harvard.edu/malan/)