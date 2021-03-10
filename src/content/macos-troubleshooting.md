---
title: "macOS - Troubleshooting"
date: "2020-07-27"
tags:
  - macOS
description: "List of tips how to fix macOS"
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

### xcrun: error: invalid active developer path, missing xcrun

```shell
# Install the Xcode toolkit.
$ xcode-select --install
# If that doesn’t work, force it to reset.
$ xcode-select --reset
```
