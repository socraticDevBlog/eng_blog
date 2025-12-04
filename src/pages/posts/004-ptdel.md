---
title: Q & A with a devops professional
date: 2019-12-28
author: "SocraticDev"
image: ../../images/ptdel.png
tags:
  - interview
  - technology
is_archived: true
---

Patrick Thomas Delaney is an experienced full-stack developer with a focus on building cloud-native applications. His skills range from Python to C# ; from solution architecture to application design. He currently works with _Ahead_ : a Chicago headquartered tech company dedicated to helping other companies build their digital business infrastructure.

##### Can you tell us about yourself : your academic background, your passions. Basically anything relevant to your current position/career. What led you to the cloud ?

(_Patrick Thomas Delaney_) I'll spare you a boring origin story but I will mention that _The Matrix_ came out when I was an eleven year-old boy. That movie imparted into me the idea that computers are constant excitement, and that girls love hackers. This panned out to be entirely true, and my career has not been some kind of rude awakening to the contrary.

##### All devs have a story of failure. A meaningful event where they screwed up or missed on an opportunity. Usually, we learn from it and grow from it. Do you have a failure story you want to share ? How much did you learn from it ?

(_Ptdel_) While failures are endemic to development, I do have one instance I find myself laughing at in retrospect.  One of my first ever billable tasks for a client resulted in me bringing down their entire website for fifteen hours over the weekend (their peak hours). The root cause was one single misplaced character in a _yaml_ configuration file for salt. As chance had it, the client's monitoring provider also went down, and thus they were under the impression they were only ever down for one hour (a coincidence I was grateful for). While initially embarrassing, it was really just an affirmation that human error is always a factor, but one that can be mitigated with _process_ and _automation_.

##### We hear ‘devops’ and ‘Agile’ are the solution to all problems in software development. At the same time, what I see around me in the organization of work are deeply segregated roles and ‘top to bottom’ (waterfall) requirements. Roles are divided between the programmer, a functional/business analyst, a QA/acceptance tester and the client. Databases and ops are the fiefdom of DBAs, data modelers, security analysts, sysadmins, etc. I’m asking a lot from you here, but how do you think devops and genuine Agile methodology can help the business ready to transition to a cloud infrastructure ?

(_Ptdel_) Developer hours are extremely inefficient in most large-scale traditional industry settings. A developer can write a single line of code, something which may only be part of some series, and find themselves needing to subject it to the entire "system" you describe in order to make progress. It could easily be the case that they are stuck in limbo waiting for a result for an entire week. While I'd like to say that's really bad I've actually seen far worse, like needing to schedule builds a month in advance. 

I think I can best express the benefits of switching to agile methodology by referencing one of my former client : a financial company. They were on a semi-annual release schedule for major updates.  These major updates didn't necessarily contain any new features, but were often just attempts to recover from technical debt. They took six months off in order to fully implement a comprehensive environment geared for agile development. Due to the fact that they chose to sacrifice a release cycle to change course, they now routinely publish more features and fixes in a single week, than they had for all years prior cumulatively.

##### What are the pitfalls you’ve witnessed about traditional businesses wanting to move to the cloud and devops. What are the usual issues they face ?

 (_Ptdel_) For the benefit of everyone, business owners must be able to recognize when there is a genuine impetus to move to a hosted provider. It is extremely hard to justify moving to "the cloud" if a company retains all of its traditional practices centered around on-premise infrastructure. 
 
 I'm going to cop-out and not provide any specific technical pitfalls. Instead, I'll describe an encounter I frequently had during my time as a consultant. We would show up to a company, and there would be a single department in the company that was going to be the guinea pig. They didn't really have any clear-cut requirements, and many of the staff were still beholden to trivial day-to-day routine manual tasks. They would often see the appeal of moving to an agile methodology, only to come to the realization that their finance or security departments made any real attempts at change impossible. Half-way through the project another department would become aware of the endeavor, and seek to take the reigns in some fashion or to expand the scope of the project. By the time the contract had been used up, the scope of the engagement was completely unrecognizable from the original, and nothing had been completed to any satisfactory level. 
 
 This is all a roundabout way of saying there must be buy-in from everyone, and leadership must be the ones communicating this to everyone. If it's a pet project left all to its own, hopefully the funds behind it are fungible or the loss justifiable.

 ##### A lot of devs are mostly concerned with code and having features working in their dev environment. We don’t really know or care to know about delivery pipelines, automation, database security and performance, etc. Do you have suggestions to younger devs who wants to be relevant in 15 to 20 years from now ?

  (_Ptdel_) Honestly with the state of things now I really have no idea what being relevant in fifteen or twenty years would even look like. 
  
  For those coming into the profession now, or maybe trying to progress themselves I would just say this: you're not special. For a long time developers have maintained some mystique around their profession, putting on the airs that what they do is uniquely challenging. While that might have been true at some point it's not the case anymore. If you don't learn about the environment your code lives in, and how to control all of it, I can assure you that somebody else with more motivation will, and their advantage will be significant. 
  
  Have a willingness to gain competency in new things with an understanding that it's for your own good. Last of all, drop any dogmatism or pretension you have around the way things ought to be in the real world and focus on delivering reliable results.

  ```I would like to thank Patrick for taking time out of his busy schedule to answer my questions. Hopefully, I will post more Q and A in the future !```
