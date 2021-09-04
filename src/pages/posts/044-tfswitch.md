---
title: "switch Terraform version on-demand"
date: 2021-09-03
author: "SocraticDev"
image: ../../images/tfswitch.png
tags:
  - technology
  - productivity
---

Either on your local machine or on the CI/CD pipeline, warrensbox's `tfswitch` lets you change Terraform's version on the fly.

## what is Terraform?
>Terraform is an infrastructure as code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently. This includes low-level components such as compute instances, storage, and networking, as well as high-level components such as DNS entries, SaaS features, etc. Terraform can manage both existing service providers and custom in-house solutions. [https://www.terraform.io/intro/index.html](https://www.terraform.io/intro/index.html)

Basically, when choosing to use cloud providers resources such as Amazon `aws` and Microsoft `Azure`, the most efficient way to provision resources is by writing and executing code. Terraform is high-level declarative language specifically designed to do this.

## any production codebase will contain code written in more or less deprecated versions of Terraform

Terraform release cadence is blazing fast. Most likely, code you wrote couple of months ago is many version outdated from today's current one. Even worse, since most Terraform code is set and forget, it's not like you have the opportunity to regularly update your dependencies in order to keep up. Usually, you find out about breaking change only once you have to get back into the code to change something.

How about a tool that will let you work around this by being able to switch Terraform version on the fly?

> `tfswitch` command line tool lets you switch between different versions of Terraform. `tfswitch` archives versions you had already used and downloads any version required if missing. The installation process is minimal and easy. Once installed, simply select the version you require from the dropdown and start using Terraform.

In the Unix philosophy of tooling, `tfswitch` does one job and does it well. 

On any machine that doesn't have Terraform installed, I don't even think about installing a current version Terraform from HashiCorp's website. I just install `tfswitch` which mean I install all past, current, and future versions of Terraform.

do it!


## sources

[https://tfswitch.warrensbox.com](https://tfswitch.warrensbox.com)