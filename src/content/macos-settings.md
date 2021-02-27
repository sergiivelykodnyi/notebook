---
title: "macOS - Settings"
date: "2020-07-27"
keywords:
  - macOS
description: "List of tips how to tune macOS"
layout: layouts/base.njk
permalink: "/{{ title | slug }}/index.html"
---

# macOS - Settings

## Add dock separators

```shell
# add one separator.
$ defaults write com.apple.dock persistent-apps -array-add '{ "tile-type" = "spacer-tile"; }'
# reload dock.
$ killall Dock
```

