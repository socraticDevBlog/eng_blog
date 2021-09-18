---
title: "consuming modules from  private GitLab repositories"
date: 2021-09-05
author: "SocraticDev"
image: ../../images/gitlabSSH.png
tags:
  - gitlab
  - terraform
  - foss
---
`UPDATE (2021-09-18): publishing projects as 'Packages' via GitLab's Registry is a more viable option than using ssh to access foreign repository` 


Open source projects dedicate extra care to make their product easy to be consumed by other projects. Using external frameworks and libraries enables small teams to focus on adding value to products instead of spending time on the piping.

A new trend among organizations is adopting Open source philosophy for their closed source codebase : 
- flexibility & agility;
- speed of iteration;
- cost-effectiveness.

A good way to mimic `foss` in closed source ecosystem is to encourage code modularity and code reuse. For example, in tooling and infrastructure, it is very likely that more than one team will need web hosting resources deployed to a cloud provider. There are various ways this need can be fullfilled : 
- giving the Operations team the monopoly over infrastructure resources. Every team needing cloud resources must open a ticket to Ops and wait for their resources to be spawned to cloud;
- giving every team the freedom to code and deploy their own resources to the cloud as they see fit;
- centralizing infrastructure resources to the Ops repo (IaC), wrapping them as consumable modules, and letting every team pick and choose modules they need.

Last option is a middle ground. It frees development teams from the shackles imposed by Ops team. They still need to interact with Ops but they are free to chose which modules fit their needs. They can even improve current modules by submitting a pull request to Ops' repository.

Last option is also interesting because it reduces code duplication and favors code reuse. Less code means less maintenance, less bugs, and less bad surprises. Hopefully, centralized modules will also be well groomed : optimum test coverage, daily security scans and thorough documentation.

## efficient inter private repositories communication in GitLab
Importing public packages is easy peasy in any modern programming language. But importing private packages in GitLab is more convoluted. At least, it was in my recent experience.

In an organization GitLab account, you may have dozens of private repos. You may be able to access them with your credentials. But how about glueing them together via a CI/CD pipeline?

My use case is having a project consuming a centralized Terraform module in order to create web hosting resources to a cloud provider. It is linked to infrastructure-as-code, but you will find similar conundrum in many situations.

My first working solution to consume external modules from a private repo on GitLab from a CI/CD pipeline was using `ssh` to access modules' private repository.

#### setting up SSH key pair in GitLab
We face a first weakness of this setup right away: we have to step out of GitLab and create a new `ssh` key pair on our local machine. We need to make sure not to mix up this new certificate with our principal ssh keys located in `~/.ssh/`.

```
ssh-keygen -t rsa
```

```
Enter file in which to save the key (/Users/max/gitlab-keys/RUNNER_SSH_KEY):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/max/gitlab-keys/RUNNER_SSH_KEY.
Your public key has been saved in /Users/max/gitlab-keys/RUNNER_SSH_KEY.pub.
```

##### creating a new Deploy key in private modules repository
We will copy the public key (`RUNNER_SSH_KEY.pub`) to our modules repository in GitLab. In GitLab web interface, we will go to `Settings>Repository>Deploy keys`. Then we add newly created ssh public key as a new `Deploy key`. 

By default, this will only allow a client read access by using the private key. Which is exactly what we want.

##### setting up client repository
Client repository needs access to private modules repository. This access will happen the CI/CD pipeline job's process. Hence, we will add the newly created private key to the pipeline `ssh-agent`. 

Since the public key had been added to the private repo, the pipeline will be able to access the private repo via a `ssh` connection.

1. As a secret variable, add newly created private ssh key to client repository. Name this variable `SSH_PRIVATE_KEY` and make sure it is masked;
2. In the pipeline manifest, make sure to add the mandatory voodoo to make that ssh connection possible. Code below will install `ssh-agent` if none found. It will add the secret key. It will disable 'Host key validation' (an acceptable security risk for us, for now). Then, it will run Terraform code. Terraform code is a simple root module that will invoke the modules and provide it with the required variables.

`CI job manifest`
```
stages:          
  - build

build-job:       
  stage: build
  image:
    name: hashicorp/terraform:light
  variables:
    AWS_ACCESS_KEY_ID: $AWS_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY: $AWS_SECRET_ACCESS_KEY
    AWS_DEFAULT_REGION: $AWS_DEFAULT_REGION
  before_script:
    # install ssh-agent
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'

    # run ssh-agent
    - eval $(ssh-agent)

    # add ssh key stored in SSH_PRIVATE_KEY variable to the agent store
    - echo "$SSH_PRIVATE_KEY" | ssh-add -

    # disable host key checking (NOTE: makes you susceptible to man-in-the-middle attacks)
    # WARNING: use only in docker container
    - mkdir -p ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
  script:
    - terraform init
    - terraform plan
```

`Client root module consuming third-party internal Terraform module`
```
module "simples3" {
  source = "git@gitlab.com:socraticdev/tf-modules-vendingmachine.git?ref=v0.0.0"
  bucket_name = "myCustomS3BucketUniqueName"
  region = "ca-central-1"
}
```

## conclusion
This way of allowing inter private repositories communication is cumbersome. I don't think it's the most viable option. But it works 😇