---
title: "Is S3 the new MS Access?"
date: 2022-02-05
author: "SocraticDev"
image: ../../images/s3-new-access.png
tags:
  - twitter
  - cloud
is_archived: true
---

Wasting my time on twitter today, I read this tweet from the expert in
cybersecurity Alyssa Miller:

> "Just remember S3 is the new MS Access."

## Microsoft Access

"Microsoft Access is a database management system (DBMS) from Microsoft that combines the relational Access Database Engine (ACE) with a graphical user interface and software-development tools. It is a member of the Microsoft 365 suite of applications, included in the Professional and higher editions or sold separately.

Microsoft Access stores data in its own format based on the Access Database Engine (formerly Jet Database Engine). It can also import or link directly to data stored in other applications and databases"

## AWS S3

"Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network.Amazon S3 can be employed to store any type of object, which allows for uses like storage for Internet applications, backup and recovery, disaster recovery, data archives, data lakes for analytics, and hybrid cloud storage."

## explanation

What similarities does Alysa Miller rely on to say that `S3` would be the new `MS Access`?

The most plausible explanation rests, point-blank, on the simplicity
of use and their potential to appeal to non-technical audiences; from
users who are not professional programmers.

`Access` provides a graphical interface allowing the uninitiated to create and use
a relational database. However, this seductive approach leads to incalculable
problems when more complex needs must be met.

In the `AWS` cloud ecosystem, the `S3` bucket can be used anywhere
the sauces. To contain both small and large files. To contain source files
of a website, etc.

Reading the comments on Twitter, I learned that `AWS` offers
even a `SQL`-like query language for searching content
of an `S3` bucket. So why not use `S3` buckets as database instead of real
proven database management systems?!?🤦

## twitter users comments

|user|tweet|
|----|-----|
|@webguy|"Sort of - many companies and libraries support any provider and all using the same S3 API or have support for it"|
|@michoo_42|"I agree and I would go further: aws is more like the old dying oracle ( closed, need certification, expansive,…). Of course is not the same technology but it’s the same capitalist system. That’s why I enjoy kube (with nuances)… it’s kind agnostic and you can choose your providr"|
|@lispcat|"Prone to spontaneously corrupting its data, and to deceiving laypeople into thinking this database thing is easier than those so-called pros try to tell us?"|
|@dotyousra|"Yeah let's just build our data lake on s3 who needs a datawarehouse anyways *internal screaming*"|

## conclusion

In the context of my work,
I recently switched to using an `S3` bucket as a quick fix and
easy to solve a business need. In light of my investigation here, I do not regret my choice. The
weaknesses of my choice were explained and the choice was made in an informed manner.

Nevertheless, I am happy to have encountered this tweet which prompted me to reflect
a bit more about a central `cloud` resource in any evolving system
in the `AWS` ecosystem.

To be continued.🕴️

`Translated from french by google translate`

##### sources

https://twitter.com/AlyssaM_InfoSec/status/1489775470379999232

https://web.archive.org/web/20220205014301/https://twitter.com/AlyssaM_InfoSec/status/1489775470379999232

https://www.manning.com/books/cyber-security-career-guide?utm_source=alyssa&utm_medium=affiliate&utm_campaign=book_miller3_cyber_5_21_21&a_aid=alyssa&a_bid=c3f2d52f

https://www.wikiwand.com/en/Microsoft_Access

https://www.wikiwand.com/en/Amazon_S3

https://aws.amazon.com/blogs/storage/querying-data-without-servers-or-databases-using-amazon-s3-select/
