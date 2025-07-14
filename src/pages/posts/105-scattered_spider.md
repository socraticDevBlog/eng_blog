---
title: "Scattered Spider: How to Defend Against the New Breed of Cybercriminals"
date: 2025-07-13
author: "SocraticDev"
image: ../../images/scattered_spiders.png
tags:
  - security
---

“Nothing in the world is as soft and fluid as water. Yet for dissolving the hard and inflexible, nothing can surpass it.” — Tao Te Ching

Meet Scattered Spider—aka UNC3944, Scattered Swine, Octo Tempest, and Muddled Libra. This loose collective of young hackers from the UK, US, and Canada is rewriting the playbook for cybercrime. Law enforcement and recent arrests confirm: they’re young, native English speakers, and unlike most hacker crews, they’re spontaneous, agile, and always evolving their tactics.

> MGM Resorts International and Caesars Entertainment are just two of the hundred-plus organizations hit by cyberattacks attributed to Scattered Spider. According to indictments released Wednesday, the accused targeted at least 12 US organizations, stole data, and made off with roughly $11 million in crypto from at least 29 individuals.

These aren’t random attacks. Scattered Spider picks its targets with surgical precision. Their main goal? Money. In 2023, they famously crippled Caesars and MGM casinos. Caesars paid a $15 million ransom; MGM refused.

> Social engineering is psychological manipulation—tricking people into giving up access to systems or sensitive info.

Scattered Spider excels at social engineering. Fluent in English and tuned into local culture, these hackers are masters at impersonating employees and sweet-talking IT helpdesks into resetting passwords or bypassing multi-factor authentication (MFA).

> Vishing is a social engineering technique where attackers use phone or video calls to trick victims into revealing sensitive information.

Some sources say Scattered Spider also uses vishing, posing as IT support. In the casino attacks, they bombarded employees with SMS threats about suspended access, pushing them to call the helpdesk—where the trap was set.

Social engineering gets all the headlines, but these hackers are also sharp strategists and skilled system admins. Their technical chops are real.

> SIM-swapping is a hack where attackers transfer a victim’s phone number to a SIM card they control, intercepting calls, texts, and verification codes.

Scattered Spider’s approach is shaking up the status quo for frontline defenders. Security teams, once jaded by routine attacks, are now facing a new breed. Originally, the group used SIM-swapping to steal large sums of crypto. But they don’t stop at digital tricks—they’ve been known to physically attack phone stores to snatch supervisor tablets, making SIM-swapping even easier.

Today, they’re “big game hunters,” targeting tech giants (Okta, Twilio, Snowflake, LastPass), financial institutions (Visa, Transamerica, Truist Bank), and, most recently, the travel industry (Qantas).

> [Australian airline] Qantas announced [early July 2025] that millions of customer accounts were exposed in a “major” cyberattack.
>
> The airline hasn’t confirmed Scattered Spider was behind it, but experts say the attack has their fingerprints all over it.

Scattered Spider knows modern IT systems inside out—and the usual weak spots in big organizations.

Their entry point? IT staff with privileged access—senior sysadmins and execs. The helpdesk is a favorite target: it’s busy, often isolated, and vulnerable. They also exploit “MFA fatigue,” bombarding staff with authentication requests until someone lets their guard down and approves a login.

> Unlike classic malware attacks, which rely on malicious files, Living Off the Land (LOTL) attacks are fileless—they use tools already present in the environment, like PowerShell, WMI, or Mimikatz.
>
> By using native tools, these attacks are much harder to detect, especially for organizations relying on traditional security solutions focused on known files or scripts. This lets hackers stay invisible for weeks, months, even years.

Once inside, Scattered Spider gets creative. They can spoof login pages to steal credentials and use LOTL tactics—leveraging what’s already on the network.

> A domain controller is a server that manages authentication and permissions for users and computers in a centralized network.

Their exploitation methods are impressive. Security experts have noted their interest in Single Sign-On (SSO) services. By cloning a victim’s Okta service on a “free trial” account, they maintain persistence and dodge detection. Similarly, they’ve been known to set up their own domain controllers, granting themselves the permissions they need.

Their technical skills are amplified by agility. Their philosophy? Amoral. Motivated by profit, they show little concern for collateral damage. These young hackers form virtual communities on Telegram, sharing knowledge and refining techniques. Their punch comes from meticulous prep and ruthless inventiveness. The cultural similarity between attackers and victims is also raising eyebrows.

> A threat profile is a detailed description of potential threats an organization might face, including their capabilities, motivations, and potential impact. It helps organizations prioritize security measures by understanding who might attack, how, and what assets are at risk. Threat profiles are essential for proactive cybersecurity—they help anticipate and mitigate potential attacks.

Is defending against Scattered Spider futile? Not quite—but recent incidents leave no choice for organizations that qualify as “big game.” I’m no security expert, but step one is building a threat profile. This lets you list and qualify the risks your company faces.

> MDR (Managed Detection and Response) is a managed security service where experts continuously monitor systems to detect and respond to threats.
>
> XDR (Extended Detection and Response) aggregates and analyzes data from multiple sources (email, computers, servers, etc.) for better, coordinated attack detection and response.

Some practices need to go, replaced by stronger measures:

- Stop using SMS for MFA tokens.
- Prevent users from ever seeing or sharing their MFA codes:
  - Use Microsoft’s Windows Hello for Business.
  - Use FIDO hardware keys (Yubikeys).
- Require unique passwords and use a password manager.
- Use certificate-based authentication (e.g., Microsoft Intune).
- Invest in helpdesk training—teach best practices for authenticating callers.
- Train all employees—if someone claims to be IT, can you verify their identity?
- Use brand protection services—get alerts when someone registers domains similar to yours.
- Plant “honey tokens” on your web pages to detect asset cloning attempts.
- Use darknet monitoring services.
- Invest in security fundamentals:
  - Managed Detection and Response (MDR)
  - Extended Detection and Response (XDR)
- Have a solid backup strategy and a proven disaster recovery plan.

`translated from french by GPT-4.1`

### Sources

Matt Burgess and Lily Hay Newman (2025-07-02), [Wired - A Group of Young Cybercriminals Poses the ‘Most Imminent Threat’ of Cyberattacks Right Now](https://www.wired.com/story/scattered-spider-most-imminent-threat/)

[What is Brand Protection Software?](https://www.gartner.com/reviews/market/brand-protection-software)

[Scattered Spider: British-American hacker group](https://www.wikiwand.com/en/articles/Scattered_Spider)

[5 defendants linked to ‘Scattered Spider’ hacker group behind 2023 MGM, Caesars cyberattacks](https://www.8newsnow.com/news/local-news/5-defendants-linked-to-scattered-spider-hacker-group-behind-2023-mgm-caesars-cyberattacks/)

[Scattered Spider Targets Tech Companies for Help-Desk Exploitation](https://reliaquest.com/blog/scattered-spider-cyber-attacks-using-phishing-social-engineering-2025/)

[Shaking up the Ransomware Game: Introducing Scattered Spider](https://www.youtube.com/watch?v=cOwUyjXdkZ0)

[What we know about Scattered Spider, the hacker group targeting airlines](https://www.abc.net.au/news/2025-07-02/who-are-scattered-spider-hackers-qantas-data-breach/105485674)
