---
title: 'Busy day with the servers!'
description: Quite a few intentional (and some unintentional) updates on my servers today.
date: 2024-03-09
tags: 
    - servers
---
Things I had planned for today included installing the Logitech Media Server on my dev server, since mysqueezebox.com have now dropped the service. You have to run your own server now if you want to listen to internet radion on a Squeezebox Boom in the kitchen like my better half does. It's not such a problem for me bring Deaf, but she likes music playing in the kitchen during the day. 

Not a problem, I've used it loads in the past, and it's an easy install on one of the Debian servers. Before I installed it, I thought I might as well upgrade the Debian from Bullseye to Bookworm. So I made the changes in `/etc/apt/sources.list` and did a soft `apt update --no-new-packages` before a final `apt full-upgrade`. I remember thinking a lot of familar-looking packages were being removed but went with it anyway.

My mistake came to light when I was setting up the LMS app and saw it was mis-reporting the server it was installed on; 'social' instead of 'dev'. Hmmm.

Checking on the status of 'social', where my Fedi services live, I noticed that my Pixelfed instance was hosed with at DB connection problem. It took a few minutes of head-scratching before I realised `php8.2-mysql` had been removed. Luckily, all I had to do was reinstall this to get things rolling again. I also took the opportunity to update to the latest v0.11.13 whilst I was at it. Thank you, @dansup@pixelfed.social !

Pixelfed sorted, I thought I may as well update Mastodon to v4.2.8 whilst I was at it. No problems here, smooth upgrade.

I was abou to move the LMS setup to the dev server when I remembered that I'd been considering setting up my media server again. I'd decommisioned it months ago as I've fallen into the trap of subscribing to quite a few streaming services and didn't really need it any more. I decided to set up the box, and move the LMS server there; a more appropriate home.