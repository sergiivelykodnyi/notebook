---
title: "macOS - Settings"
date: "2020-07-27"
tags:
  - macOS
description: "List of tips how to tune macOS"
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

### Add dock separators

Add one separator.

```shell
defaults write com.apple.dock persistent-apps -array-add '{ "tile-type" = "spacer-tile"; }'
```

Reload dock.

```shell
killall Dock
```
