---
title: "Simplifying and Safeguarding Terraform and Provider Upgrades"
date: 2024-10-12
author: "socraticDev"
image: ../../images/terraform-upgrade.png
tags:
  - terraform
  - devops
---

> "Terraform is an open-source tool used for automating and managing infrastructure in the cloud. It allows you to define your infrastructure (such as servers, databases, and networks) using a high-level configuration language (called HCL – HashiCorp Configuration Language) in a way that is declarative—you describe the end state of your resources, and Terraform figures out how to achieve that."

As a DevOps professional, I recommend upgrading to the latest [Terraform
version](https://developer.hashicorp.com/terraform/install) every few months,
while also updating all the `terraform providers` you're using to their latest
versions:

- to avoid breaking change when you'll have no choice but to upgrade Terraform
  and its providers;
- to stay safe and compliant;
- to take advantage of new features.

### 0. Ensure Terraform is Working Properly Before Making Changes

Before proceeding with any upgrades, make sure your current Terraform setup is functioning properly by running the following commands:

```bash
terraform init

terraform plan
```

### 1. Back Up Your Terraform State File

Losing or corrupting your `tfstate` file is not ideal, but it's not catastrophic either. If you've never had to rebuild a `tfstate` file from scratch, trust me—it can be a tedious process. To avoid avoidable issues, I recommend backing up your `tfstate` locally before making changes:

```bash
terraform state pull > backup.tfstate
```

### 2. Update Your `terraform {}` Configuration Block

Identify the latest Terraform version and update the `required_version` in your configuration file. Also, update the version of each provider to the latest available.

You can find the provider configurations conveniently located at the top of your main Terraform file:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.71.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "3.6.3"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "2.6.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "2.5.2"
    }
  }

  required_version = "1.9.7"
}
```

### 3. Install the Latest Terraform Version

I highly recommend using [tfswitch](https://tfswitch.warrensbox.com/), a command-line tool that helps you switch between different versions of Terraform easily. Once you've pinned the Terraform version in your `terraform {}` block, simply run the `tfswitch` command to install and switch to the required version.

### 4. Temporarily Unpin the Required Terraform Version

If your current resources were deployed using Terraform `1.7.5` and you want to upgrade to `1.9.7`, you can't pin version `1.9.7` right away. Terraform will raise an error, indicating you must use the version recorded in the `tfstate` file.

Until the `tfstate` is updated, temporarily adjust the required version to allow flexibility:

```hcl
terraform {
  required_version = ">= 1.7.5"
}
```

### 5. Reconfigure Your `tfstate` File

After unpinning, reconfigure the state file to work with the new version:

```bash
terraform init -reconfigure
```

### 6. Plan and Apply Changes

Once everything is set, run a plan and apply the changes if necessary:

```bash
terraform plan
terraform apply
```

### 7. Pin the Terraform Version to the Latest Version

After ensuring the `tfstate` is running under the latest Terraform version, pin the version to avoid surprises for you and your team in the future:

```hcl
required_version = "1.9.7"
```

### Conclusion

With these steps, you should be able to perform routine maintenance and safely upgrade your infrastructure-as-code tooling.

If you're using Terraform in an automated pipeline, don't forget to update the
Terraform version in your pipeline's manifest as well ⚙️🤖
