---
title: "Annual Report filing for SocraticDev's blog"
date: 2020-09-04
author: "SocraticDev"
image: ../../images/board-meeting.jpg
tags:
- blogging
is_archived: true
---

Current SocraticDev blog's website went live a little less than a year ago: on ``October 17, 2019``. The blog previously benefited from free hosting on the ``wordpress.com``  platform. Despite the ease of putting a site online and adding content to it, I wanted absolute control over my content. As a programmer, you just have to take care of building and putting your personal blog online. Fun fact : the creation of a personal blog site is non-ironically the basic project for all JavaScript frameworks available on the market 😉

> “If you love writing or making music or blogging or any sort of performing art, then do it. Do it with everything you’ve got. Just don’t plan on using it as a shortcut to making a living."
>
> <cite>-- Seth Godin</cite>

#### Benefits of taking control of your personal blog:

- be the owner of your content;
- do not bore your readers with ads;
- master a new way of programming
    - a static website open to the general public is very different from a web application connected to a database
    - learn to submit with humility to a JavaScript framework, use its modules, write ``MarkDown`` files, read the documentation and ... ``Everything will be allright``
- better understand how the web works:
    - purchase and management of domain names and `DNS`;
    - use of a ``TLS`` security certificate
    - use of a continuous deployment pipeline (``CI/CD``)
    - choose to host your site on a `` CDN '' because it's really better 🌎
    - use of metrics to determine how to add value to your website:
        - [Google Analytics](https://analytics.google.com) to know the origin of its readers, the time spent on each page, if they return to visit the site, etc.
        - [PageSpeed ​​Insights](https://developers.google.com/speed/pagespeed/insights/?hl=fr) to measure the performance of websites as well as follow the suggestions offered to improve the loading speed and the user experience

#### Some features implemented and bugs fixed

The SocraticDev blog website is powered by the [GatsbyJS framework](https://www.gatsbyjs.com/). As a proud programmer, I did not use the included boilerplate project for the blog's creation. Instead, I followed an online tutorial where a seasoned developer guides us to making a high-performance and well-designed site.

This developer-educator had the good idea to suggest the using tags containing posts' topics. This makes it possible to list, in an independent page, the different subjects treated. Then, the user can click on a topic of interest and view a list of posts related to that topic. The only catch was that I wanted to see the list of topics in descending order of incidence. For example, I wanted to see the "Technology" badge at the top because most of the posts are about tech, while the subject "Interview" should stay at the bottom because I have only conducted one interview to date. To do this, I had to create a small custom sort function ... which uses the ``BubbleSort`` algorithm 😎 Because it works!

This summer, by updating my dependencies with ``npm``, the internal hyperlinks to the site simply stopped working. With the help of [Bernie](http://vezquex.com/) and Google I quickly found the solution to the problem. The moral of the story: when using lots of external libraries, by keeping them up to date, it is easy to quickly remedy ``breaking changes``.

#### What does the future hold for us?

 On the GitHub kanban, ``issues`` were created for the future: a toggleable ``dark mode`` allowing my insomniac readers to pamper their precious eyes. I anticipate the need to rework the pagination of the tickets because the visual is not pretty on mobile ... On the technical side, it is possible that I completely redesign the site in order to have fun with another technology.

 I would like to conduct more interviews. I believe that talking to people with different experiences in the trade helps us better understand our field as well as make connections with our own experiences. The interview with [ptdel](https://en.socratic.dev/q-a-with-a-devops-professional) allowed me to get to know this American developer better. We still keep in touch to this day.

Regarding projects, the acquisition of a [vps server](https://www.linode.com/) motivates me to develop new projects and experiment at will. From this server I use the domain [dailybuild.org](https://dailybuild.org/) as a showcase for the ``#dailybuild`` programming community. I play a lot with small projects such as daily cron jobs running to visit job sites and save relevant offers to me.

Otherwise here is a list of topics I would like to cover:

- [Lexicon](https://www.lexiconbranding.com/): an influential branding firm that comes up with cool names for your products;
- is ``jQuery`` really dead ?;
- the concept of ``geo fencing``;
- ``Concurrency, threading and parallelism``;
- ``Domain Specific Languages``;
- ``Graph API``;
- Is there really a 'FullStack' developer ?;
- ``Digital Forensics``.

#### Thanks

I first want to thank [snipcart](https://snipcart.com) for setting up monthly meetups to talk about the ``JamStack`` and help Quebec City's devs to tame this technology.

[MrRoach](https://twitter.com/eggbertx) did a great job improving the original logo that I had produced through [Fiverr](https://www.fiverr.com/). I love working with ``SVG`` files 🎉

I also thank the readers. Especially those who take the time to write me a note. You have no idea how much more it is appreciated than figures from the ``Google Analytics`` app!

``Translated from french by Google Translate``
