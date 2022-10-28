---
title: "Software Bill of Materials: document your software supply chain"
date: 2022-10-27
author: "SocraticDev"
image: ../../images/sbom.png
tags:
  - ideas
  - security
---

Un SBOM est le graphe des dépendances d'un logiciel de façon à pouvoir
identifier ce qui se trouve dans sa chaîne d'approvisionnement.

I have already opened the door to the idea that software developers
draw inspiration from the physical product development process in a post
published in December 2021: [Take inspiration from the physical product development process](https://en.socratic.dev/take-inspiration-from-the-physical-product-development-process).

Since then, I have been on the lookout for any publication that supports this opinion.

The concept of "bill of materials" or "BOM" is fundamental in the industry
manufacturing. This is the list of materials required for crafting
of a physical product. This list of ingredients is useful in different aspects
design, production and service associated with the product during its
useful life.

The idea of ​​a "Software BOM" or "SBOM" is gaining traction in
the software sphere. That is to say an exhaustive list of all
components (libraries, binaries, etc.) necessary for a software product.

## what is a BOM

"BOM" is the acronym for "bill of materials".

>A bill of materials or product structure (sometimes bill of material, BOM or associated list) is a list of the raw materials, >sub-assemblies, intermediate assemblies, sub-components, parts, and the quantities of each needed to manufacture an end product. A BOM >may be used for communication between manufacturing partners or confined to a single manufacturing plant. A bill of materials is often >tied to a production order whose issuance may generate reservations for components in the bill of materials that are in stock and >requisitions for components that are not in stock.
> <cite>https://www.wikiwand.com/en/Bill_of_materials)(2022-10-27), "Bill of materials"</cite>

## Software Bill of Materials

The form and content of an SBOM is analogous to the traditional industry BOM
manufacturer. It is a list or inventory of all the dependencies of a
software system deployed in production:

Open-source libraries and subsystems from a third-party source.
Their versions. The application status of the patches. And their license to use.

## US government leading the pack

Solarwinds attack discovered in December 2020 targeted multiple agencies
American public authorities, several private organizations as well as
foreign institutions.

>In early 2020, hackers secretly broke into Texas-based SolarWind's systems and added malicious code into the company's software system. The system, called "Orion," is widely used by companies to manage IT resources. Solarwinds has 33,000 customers that use Orion, according to SEC documents. 
>
>Most software providers regularly send out updates to their systems, whether it's fixing a bug or adding new features. SolarWinds is no >exception. Beginning as early as March of 2020, SolarWinds unwittingly sent out software updates to its customers that included the >hacked code. .
><cite>Business Insider.com, "Solarwinds hack explained"</cite>

The U.S. government recently introduced an executive order requiring the
production of "SBOM" for any software product developed by a
sub-contractor.

## December 2021 - log4j

Less than 1% of organizations document their supply chains
software.

Shortly before the start of the holidays last year, most operators of
computerized systems have
had to work extra hard to address a critical vulnerability
discovered in the popular logging bookstore
[log4j](https://theconversation.com/what-is-log4j-a-cybersecurity-expert-explains-the-latest-internet-vulnerability-how-bad-it-is-and-whats-at-stake-173896).

This is the world of IT without SBOM. Lots of stress and lots of work
manual.

The few players with sound management of their supply chain
handled the situation calmly and rigorously. They knew exactly on which systems
they used the log4j library. While their colleagues were scanning
dozens of servers, they had already patched their systems!

## basic steps

The development and adoption of a common standard for the "Software Bill Of
Materials" is fundamental to make the software supply chain more transparent. A standard format to facilitate
the exchange of information would be a great first step.

Then, we must automate the generation of the SBOM. At each deployment we
must generate a new SBOM. More and more organizations are deploying
production several times a day. So it goes without saying that the generation of
SBOM takes place in the Continuous Deployment and Continuous delivery (CI/CD) processes.

## arguments against SBOM?

"Why wouldn't you want to know what your software systems are
compounds? What are the advantages of not being able to inform your customers about
what does the software you sell them contain?

We quickly fall into the absurd.

Having an up-to-date SBOM on hand will save you hundreds of hours of
work. Will allow you to have safer products and
easy to evolve.

In addition to reducing your operating costs, keep employee retention in mind,
reducing their stress; the reduction of the feeling of powerlessness of your IT employees towards
systems that they do not understand and are unable to change.

## sources

https://malicious.life/episode/episode-183/

https://www.cisa.gov/sbom

https://www.wikiwand.com/en/Bill_of_materials

https://www.businessinsider.com/solarwinds-hack-explained-government-agencies-cyber-security-2020-12
