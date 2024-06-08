---
title: "comprehensive overview of setting up an Odroid HC4 single-board computer to be used as a NAS and media server"
date: 2024-06-08
author: "socraticDev"
image: ../../images/odroid.png
tags:
  - linux
  - foss
  - productivity
  - fun
---

Odroid HC4 is a single board computer (SBC) enclosed by a plastic shell featuring two SATA slots.  Two hard-drives (HDD or SSD) can be dedicated to
storage since the OS (Debian recommended) can be installed on a micro-SD card
that plugs at the back of the device

This is my second HC4 and I love the simplicity of the thing. It let me share
drives as SMB network drives (NAS) and runs a Media server that can be consumed
by any authenticated client living in my local area network (LAN)

### my use case

I use Odroid HC4 as 1) a non-RAID NAS to federate important files at home and
2) a media server that classifies and serves movies, documentaries, and TV
   series to my TV

### stack

#### hardware

You will have to purchase various items from Korea-based Odroid store 🇰🇷.
The prices quoted are in USD 🇺🇸, you will have to pay for shipping, and prepare to
have to pay for import duties (a bit less than $30 CAD for me). They used FedEx this time around and it took
about 5 days to get delivered to Canada 🇨🇦

- [HC4 single board computer itself](https://www.hardkernel.com/shop/odroid-hc4/)
- [15V/4A power supply - pick your region](https://www.hardkernel.com/shop/12v-2a-power-supply-eu-plug/)
- [8gig industrial grade micro SD card](https://www.hardkernel.com/shop/8gb-industrial-microsd-uhs-1-c4-linux/)

I recommend against relying on Wifi (requires wifi USB dongle) to run an HC4 on
local-area network. Make sure you can plug it straight into your routeur via
Ethernet

About dedicated storage hard drives (2x), any SATA drive is fine. I recommend using a SSD for
performance, energy consumption, and noise reasons

#### software

Stay in the paved path to success if you're not an advanced SMB hobbyist!

Install latest gnu/linux Debian distro via net_boot (requires Internet
connection)

Plan on using [OpenMediaVault](https://www.openmediavault.org/) to manage your
device. It has a nice web UI and uses the ever reliable
[Saltstack](https://saltproject.io/index.html) to keep your infrastructure
reliable

(optionnal) I've chose to NOT be using Emby media server as Docker container
managed by OpenMediaVault. I basically just install Emby server onto Debian
(not recommended, but it just works!). Go to [Emby Server for
Linux](https://emby.media/linux-server.html) and pick installation for "Debian
Arm64 (aarch64)". You'll complete the configuration via Emby web ui:
http://192.168.1.171:8096 (update this URL with your device's IP address)

### guides and tutorials

There are a few guides on how to setup the HC4 for OpenMediaVault. Due to
changes over time and differences in use cases, there is no authorative guide
that will take you from zero to one. Expect to run into issues and keep calm;
you might have to spend a few moments to perform more google searches and system debugging

#### wiki Odroid

Start with confidence with this guide: https://wiki.odroid.com/odroid-hc4/software/install_omv_nas

__note__: before executing `netboot_default` command, make sure you have
already inserted the micro SD card in your HC4 device. After having executed
this command, you want to perform the `exit` command in your terminal. It will
bring you back to main menu. But this time, you'll have an extra item menu to pick
Debian OS you want to dowload and install from the Internet

#### figuring out your device IP address on local-area network

In case you havent noticed it when posted to the terminal MOTD landing screen,
simply use native linux command `ip addr` to locate your `eth0` IP address

```bash
Linux odroid 6.1.0-odroid-arm64 #1 SMP PREEMPT Wed, 21 Feb 2024 05:39:46 +0000 aarch64
 _   _               _ _                        _ 
| | | | __ _ _ __ __| | | _____ _ __ _ __   ___| |
| |_| |/ _` | '__/ _` | |/ / _ \ '__| '_ \ / _ \ |
|  _  | (_| | | | (_| |   <  __/ |  | | | |  __/ |
|_| |_|\__,_|_|  \__,_|_|\_\___|_|  |_| |_|\___|_|
                                                  
  ___  ____  ____   ___ ___ ____        _   _  ____ _  _   
 / _ \|  _ \|  _ \ / _ \_ _|  _ \      | | | |/ ___| || |  
| | | | | | | |_) | | | | || | | |_____| |_| | |   | || |_ 
| |_| | |_| |  _ <| |_| | || |_| |_____|  _  | |___|__   _|
 \___/|____/|_| \_\\___/___|____/      |_| |_|\____|  |_|  
                                                           

Welcome to Debian GNU/Linux 12 (bookworm)
Saturday,  8 June 2024, 12:23:46 PM
Up time:     0 days, 18:18:51
Free memory: 84104 / 3757248 kB
IP:          192.168.1.171

[!] Please visit 'https://launchpad.net/odroid-image' to report a bug

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Fri Jan 26 16:49:29 2024 from 192.168.1.191
```

#### ssh into your device

Sure it's nice to be able to ssh into your device, but you won't be doing this
much

If you have a computer monitor (HDMI cable) and a keyboard (USB cable) you can
plug into device, it's good enough

#### OpenMediaVault

Follow the instructions from `Odroid Wiki` to install OpenMediaVault

__note__: default username is "admin" (not "root" as documented in the guide)

#### configuring SMB network drives

The process to configure network drives along with their permissions should be
easy to figure out if you've touched system administration

Otherwise, I recommend this YouTube video: [How To Setup An SMB File Share
OpenMediaVault](https://www.youtube.com/watch?v=hFghdtQig1Q)

You can either use OMV to format your hard drives in EXT4 filesystems, or use
already formatted drives

I recommend creating a specific User on OMV to secure the access to your
network drives. If you live with other people, you might want to setup groups
to administrate the permissions

#### network stuff

Since your HC4 won't be moving around at all. I recommended you configure your
home router to assign it a fixed IP address. When the HC4 reboots, it will not
receive a random IP address from DHCP, but reclaims the same one it used to
have

If you do this, i would take extra time to add an entry in your computers host
files with an alias pointing to this local IP address

|os|host file location|
|-|-|
|mac OS, gnu/linux|/etc/hosts|
|windows|c:\Windows\System32\Drivers\etc\hosts|

it will look something like this (if you have more configurations in there,
don't delete it!)

```ini
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost

192.168.1.171 nas.local
```

### donate to OpenMediaVault 

If you like using OpenMediaVault, make sure to send its maintainers regular
donation via their paypal account

that's just fair and good karma ⚖️

### sources

https://www.openmediavault.org/

https://wiki.odroid.com/odroid-hc4/odroid-hc4

https://emby.media/