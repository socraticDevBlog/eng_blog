---
title: "making pod security flaws visible to developers"
date: 2024-07-28
author: "socraticDev"
image: ../../images/k8s-pod-security.png
tags:
  - security
  - devops
---

_Shifting left on security_ means to start integrating security practices
earlier in the Software Development LifeCycle(SDLC). Traditionally, security tests
and assesments would be performed once software is ready to be shipped. Of
course we don't want to go _legacy style_ on our modern projects, but we kind
of do...

Most new software systems are developed to run on Kubernetes. It adds more
complexity from the get go. Since developers and product owners are eager to push their new features to
production, "it works" and "it's good enough" are expressions certainly more
attractive than "shifting left on security"

### start by making security policies visible to developers

What about starting by bringing visibility to pod security during the
deployment process?

Without blocking or breaking the app, you leverage Kubernetes' built-in Pod
Security Standards capability simply by adding labels to application-space's
namespaces

Start by making pod security flaws visible by logging explicit warnings

Before creating the pod, a detailed warning will get printed and logged in
cluster's audit logs

```bash
Warning: would violate PodSecurity "restricted:v1.30": allowPrivilegeEscalation != false (container "nginx" must set securityContext.allowPrivilegeEscalation=false), unrestricted capabilities (container "nginx" must set securityContext.capabilities.drop=["ALL"]), runAsNonRoot != true (pod or container "nginx" must set securityContext.runAsNonRoot=true), runAsUser=0 (pod must not set runAsUser=0), seccompProfile (pod or container "nginx" must set securityContext.seccompProfile.type to "RuntimeDefault" or "Localhost")
pod/nginx created
```

### try it out in a sandbox lab

I recommend you try out what I'm suggesting here on `killercoda`'s free web-based ephemeral k8s cluster

log in to https://killercoda.com/playgrounds/scenario/kubernetes using your
github account

#### provision a secured namespace

create a new namespace with pod-security labels that would warn when deploying
an unsecure pod, but letting you do it anyways:

```bash
cat <<EOF > ns.yml
apiVersion: v1
kind: Namespace
metadata:
  name: my-baseline-namespace
  labels:
    pod-security.kubernetes.io/enforce: baseline
    pod-security.kubernetes.io/enforce-version: v1.30
    pod-security.kubernetes.io/audit: baseline
    pod-security.kubernetes.io/audit-version: v1.30
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/warn-version: v1.30
EOF
```

```bash
kubectl apply -f ns.yml
```

#### deploy an non-compliant pod to this namespace

deploy an nginx pod to this namespace (nginx container are known to allow
privilege escalation)

```bash
kubectl run nginx --image=nginx --namespace=my-baseline-namespace --overrides='{
    "spec": {
        "securityContext": {
            "runAsUser": 0
        }
    }
}'
```

notice you are getting a __warning__ message before your pod gets provisionned

```bash
Warning: would violate PodSecurity "restricted:v1.30": allowPrivilegeEscalation != false 
(container "nginx" must set securityContext.allowPrivilegeEscalation=false), unrestricted capabilities (container "nginx" must set securityContext.capabilities.drop=["ALL"]), 
runAsNonRoot != true (pod or container "nginx" must set securityContext.runAsNonRoot=true),
 runAsUser=0 (pod must not set runAsUser=0),
  seccompProfile (pod or container "nginx" must set securityContext.seccompProfile.type to "RuntimeDefault" or "Localhost")
pod/nginx created
```

### conclusion

As an effective _devSecOps_, you don't want to slow down developers to achieve
best practices

Making security problems visible to developers without blocking them is a great
first step to improve security practices earlier in the SDLC.

### sources

[B. Ibryam and R. Hoss, "Kubernetes Patterns", chap. 23 - Process containment](https://developers.redhat.com/e-books/kubernetes-patterns)

[Enforce Pod Security Standards with Namespace Labels](https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-namespace-labels/)
