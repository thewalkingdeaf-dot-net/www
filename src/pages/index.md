---
permalink: /index.html
title: 'thewalkingdeaf.net'
description: 'Rumblings and occasional bouts of clarity from my fevered imagination.'
layout: 'home'
blog:
  title: 'Blog'
  intro: "I'm showing the last 4 blog posts, but there might be more!"
---
### This is The Walking Deaf Network

Comprising:
- This website including [my blog](https://www.thewalkingdeaf.net/blog) (top right)
- My [Fediverse instances](https://www.thewalkingdeaf.net/services)

---

#### The last few posts from my [pixelfed account](https://pix.thewalkingdeaf.social/users/steve):

<span class="pixelcard">
  Click an image to view the post on pixelfed...
  <span class="pixelitems">
    {%- for item in photo.gallery -%}
       <a class="no-indicator" href="{{ item.link }}">
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