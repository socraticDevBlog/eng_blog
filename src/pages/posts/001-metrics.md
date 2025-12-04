---
title: dark side of metrics
date: 2019-11-16
author: "SocraticDev"
image: ../../images/demarco.jpg
tags:
  - technology
is_archived: true
---

It would be shortsighted to consider software development a sacred craft that should steer clear of financial pressures or business concerns. As a software developer I dedicate every worktime minute to increase the value of my employer’s services and products. If I stop doing that, he’ll have every right to severe his ties with me. In the same spirit, our clients and employers have to be diligent and assess our value by our contribution to the success of their enterprises. Easier said than done, eh !?

I’ve recently purchased Tom DeMarco’s book Why does software cost so much ? based on Joel Spolsky’s good review on his blog [https://www.joelonsoftware.com/](https://www.joelonsoftware.com/). Reading the second essay, ‘Mad about measurement’, forced me to take off my software developer’s hat for a while and reflect on the struggle of managing our byte-artisans community.

This essay reflects on the negative effects of metrics in software development. As a newcomer in the business, I entertain no opinion for or against software measurements. So, in this post, I will try to depict the author’s position by selecting some parts of his text. The full-length essay covers the subject in an deeper and more nuanced way. If you’re interested in the subject, I strongly suggest to get a copy of Tom DeMarco’s book :

Tom DeMarco, Why does software cost so much : and other puzzles of the information age, New York, Dorset House publishing, 1995, pp. 13-44.

## Bio of the author:

‘Tom DeMarco (born August 20, 1940) is an American software engineer, author, and consultant on software engineering topics. He was an early developer of structured analysis in the 1970s.’
(Wikipedia, ‘Tom DeMarco’, date of last consultation : august 9th 2017)

## The good stuff:

‘Metrics’ means different ways to measure how an organization or a project is doing. The author also talks about ‘software measurement’. Metrics may very well be what turns software development from a craft to a science :

‘Metrics could be defined as the discipline of counting things and observing and profiting from patterns found among the things we count.’ (page 15)

The author is ambivalent about metrics. On one hand, he’s a proponent of metrics notably by having published a book titled ‘Controlling software projects’ and offering his services as a software productivity consultant. On the other hand, he is critical about the multiplication of metrics and their negative influence on software developers and software companies.

“This may seem obvious, but somebody really ought to say it: Metrics cost a ton of money. It costs a lot to collect them badly and a lot more to collect them well” (page 14)

DeMarco’s position is that metrics are useful to learn new things. Hence, most measurements should be ad hoc and never collected permanently :

‘I can only think of one metric that is worth collecting now and forever: defect count […] There are many other metrics that are worth collecting for a while. Each time you introduce and begin collecting a new metric, you need to put in place a mechanism to cease collecting that metric at some time in the future. Many of the most useful metrics should be collected only on a sampling basis.’ (page 15)

The author underlines that a lot of metrics’ usage causes dysfunction. As an example, he evokes a nails factory in communist Russia. First, the metrics used by the government was the number of nails produced in a month. So, the factory switched to producing a lot of very small nails. These nails weren’t in demand, so the government changed the metrics to the tonnage of nails produced every month. As a matter of fact, the factory switched to produce bulky railroad spikes… This example shows that for every metric set, the people subjected to it will more or less quickly learn how to game it.

DeMarco categorizes metrics into a ‘spectrum’ according to its aim :

Behavior modification ———————– Steering —– ————————–Discovery

He maintains that the healthiest way to use metrics is at the far right of the spectrum. And the more we go to the left, the more probabilities that metrics will cause dysfunction.

### Are some tech companies  against measurement ?

‘Apple and Microsoft, to name just two companies that make no systematic use of software measurement […] have done just fine without it. […] The entire small-cap sector is not known for its measurements practices, yet the solid vitality of the American economy since 1980 has come almost entirely from these small companies.’ (page 18)

### Dysfunction at Hitachi Software

The author uses an example of a metric being gamed by software developers to illustrate his point that using metrics as behavior modification :

Hitachi’s then Chief Scientist, Tomoo Matsubara, made the discovery that ‘early detected defects could be a positive indication of as-yet-undetected defects’. This discovery was specifically applied to unit testing: the number of early detected faults would predict the number of faults to expect in a soon to be shipped program. So, ‘consciously or unconsciously’, developers started to hold back on finding faults in unit tests ! ‘Holding back a defect benefits the individual developers in three ways: 1- They look good since their modules appear relatively defect free; 2- They have fewer latent defects ascribed to their code, hence less pressure later; 3- They have one or two defects ready to produce during integration testing when management clamors for more.’ As a conclusion : ‘Holding back on defects benefits the developer, but doesn’t benefit the organization at all. It is a clear example of dysfunction’ (pages 20-21).

**Measurement Dysfunction:** ‘compliance with the letter of a motivational scheme in such a way as to achieve exactly the opposite of that scheme’s underlying goals and intentions’ (page 24)

**Cost/benefits :** how to measure benefits ? do we even measure it ?

‘The cost/benefit study is concerned totally with cost and not at all with benefit. Benefits, if they are mentioned at all, are fuzzy : ‘The benefit is we gotta have it’ or ‘The benefit is better sales reporting’ or ‘The benefit is competitive advantage’. When benefits are not quantified, it seems almost pointless to me to quantify costs’ (pages 40-41)

‘The paradox at work here is that productivity is often at odds with benefit. Benefit is maximized by taking chances and venturing into new territory. Productivity is improved by familiarity and repetition’ (page 41)

‘Just as we have learned to make software projects cost-conscious and cost-accountable over the past decade, we now have to relearn how to make them benefit-conscious and benefit-accountable’ (page 42)

### The author’s Commandments :

    - Measure for benefit or don’t measure anything
    - Measure for Discovery
    - Be suspicious of any findings that confirms your darkest suspicions

(pages 43-44)
