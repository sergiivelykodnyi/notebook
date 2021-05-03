---
title: "HTML"
date: "2021-04-18"
tags:
  - html
  - web
description: "HTML source collection"
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

## Boilerplate

```shell
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />

    <title>Unique page title - My Site</title>

    <link rel="stylesheet" href="/css/styles.css" />

    <meta name="description" content="Page description" />
    <meta property="og:title" content="Unique page title - My Site" />
    <meta property="og:description" content="Page description" />
    <meta property="og:image" content="https://www.mywebsite.com/image.jpg" />
    <meta property="og:image:alt" content="Image description" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:url" content="https://www.mywebsite.com/page" />
    <link rel="canonical" href="https://www.mywebsite.com/page" />

    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/my.webmanifest" />
    <meta name="theme-color" content="#FF00FF" />
  </head>

  <body>
    <!-- Content -->
    <script src="/js/script.js" type="module"></script>
  </body>
</html>
```

## Sources

- [My current HTML boilerplate](https://www.matuzo.at/blog/html-boilerplate/)
