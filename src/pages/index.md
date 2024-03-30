---
permalink: /index.html
title: 'thewalkingdeaf.net'
description: 'Rumblings and occasional bouts of clarity from my fevered imagination.'
layout: 'home'
blog:
  title: 'Blog'
  intro: "I'm showing the last 4 blog posts, but there might be more!"
---
#### This is The Walking Deaf Network

Comprising:
- This website including my blog (top right)
- My Fediverse instances
<img src="pages/img/mastodon.png" width="3%"/> Mastodon - I'm steve@thewalkingdeaf.social on <a href="https://thewalkingdeaf.social">thewalkingdeaf.social</a>
<img src="pages/img/pixelfed.png" width="3%"/> Pixelfed - I'm @steve@pix.thewalkingdeaf.social on <a href="https://pix.thewalkingdeaf.social">pix.thewalkingdeaf.social</a>
<img src="pages/img/peertube.png" width="3%"/> Peertube - I'm @steve@flix.thewalkingdeaf.social on <a href="https://flix.thewalkingdeaf.social">flix.thewalkingdeaf.social</a>

#### The last few posts from my Pixelfed:

<span class="pixelcard">
  <span class="pixelitems">
    {%- for item in photo.gallery -%}
       <a href="{{ item.link }}">
       <img src="{{ item.image }}"/>
       </a>
    {%- endfor -%}
  </span>
</span>


<!-- <div>
    {% eleventyImage "./src/pages/img/mastodon.png" %}
    <span>Mastodon</span>
</div> -->

<!-- {% eleventyImage "./src/pages/img/IMG_0326.jpg" %}  -->