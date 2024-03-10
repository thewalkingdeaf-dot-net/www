---
title: Busy day with the servers!
description: Quite a few intentional (and some unintentional) updates on my servers today.
date: 2024-03-09
tags:
    - bazarr
    - debian
    - linux
    - mastodon
    - pixelfed
    - radarr
    - servers
    - squeezebox
    - selfhosted
    - servarr
    - sabnzbd
categories:
    - linuxadmin
slug: busy-day-servers
preview: /src/assets/images/IMG_0326.jpg
---
Things I had planned for today included installing the [_Logitech Media Server_](https://lms-community.github.io/lms-server-repository/) on my dev server, since mysqueezebox.com have now dropped the service. You have to run your own server now if you want to listen to internet radion on a Squeezebox Boom in the kitchen like my better half does. It's not such a problem for me being Deaf, but she likes music playing in the kitchen during the day. 

Not a problem, I've used it loads in the past, and it's an easy install on one of the Debian servers. Before I installed it, I thought I might as well upgrade the Debian from _Bullseye_ to _Bookworm_. So I made the changes in `/etc/apt/sources.list` and did a soft `apt update --no-new-packages` before a final `apt full-upgrade`. I remember thinking a lot of familar-looking packages were being removed but went with it anyway.

My mistake came to light when I was setting up the LMS app and saw it was mis-reporting the server it was installed on; _social_ instead of _dev_. Hmmm. I just carelessly upgraded an important server without meaning to, or planning for it? Ouch!

Checking on the status of _social_, where my Fedi services live, I noticed that my [_Pixelfed_ instance](https://pix.thewalkingdeaf.social) was hosed with at DB connection problem. It took a few minutes of head-scratching before I realised `php8.2-mysql` had been removed. Luckily, all I had to do was reinstall this to get things rolling again. I also took the opportunity to update to the latest _v0.11.13_ whilst I was at it. Thank you, @dansup@pixelfed.social !

Pixelfed sorted, I thought I may as well update my [Mastodon instance](https://thewalkingdeaf.social) to _v4.2.8_ whilst I was at it. No problems here, smooth upgrade. 

I was about to move the _LMS_ setup to the dev server when I remembered that I'd been considering setting up my media server again. I'd decommisioned it months ago as I've fallen into the trap of subscribing to quite a few streaming services and didn't really need it any more. I decided to set up the box, and move the _LMS_ server there; a more appropriate home.

That out of the way, the main thing was to get [_sabnzbd_](https://sabnzbd.org) up and running, using my usenet account. I tried to use my Hetzner storagebox as a storage space at first, but there was far too high a network bottleneck, and I had to abandon that idea. I found a couple of 1TB HDDs in the pile of spares and installed them in the server, removing the connection to the storagebox. I created a LVM group with both drives used. This will suffice until I get a bigger HDD to add to the pool. I created the [folder structure recommended by the servarr team](https://trash-guides.info/Hardlinks/How-to-setup-for/Native/) and amended the folders inside sabnzbd. I then installed [_sonarr_](https://sonarr.tv) and used my nzbgeek account for indexing. 

I rely on subtitles for TV series that I like to watch, and some of the streaming services have been letting me down with either no subtitles at all (Prime TV, Fargo series 4), or really out of sync ones (most things on Paramount). My experience in the past with TV shows and films downloaded from usenet has been really positive, so I’m shifting my focus back to that and saving some money cancelling my subscriptions to the services that don't deliver or arren't interested in _accessibility_.

I have my [_servarr_](https://wiki.servarr.com) apps accessible through a reverse proxy by way of _HAProxy_ package on my [_pfSense_](https://www.pfsense.org/products/#requirements) router. 

I’ll add [_radarr_](https://radarr.video) soon, along with [_bazarr_](https://www.bazarr.media) for subtitles (I have an [opensubtitles](https://www.opensubtitles.com/en) subscription) and a few other apps that I used to use before. 