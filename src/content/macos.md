---
title: "macOS"
date: "2020-07-27"
tags:
  - macOS
description: 'List of tips "how to" macOS'
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

## Table of content

- Install/reinstall macOS
- Settings
- Troubleshooting
- Uninstall Apps

## Install/reinstall macOS

- [How to create a bootable installer for macOS](https://support.apple.com/en-gb/HT201372)
- [How to reinstall macOS](https://support.apple.com/en-us/HT204904)

## Settings

### Add dock separators

Add one separator.

```shell
defaults write com.apple.dock persistent-apps -array-add '{ "tile-type" = "spacer-tile"; }'
```

Reload dock.

```shell
killall Dock
```

## Troubleshooting

### xcrun: error: invalid active developer path, missing xcrun

Install the Xcode toolkit.

```shell
xcode-select --install
```

If that doesn’t work, force it to reset.

```shell
xcode-select --reset
```

## Uninstall Apps

- [Uninstall Microsoft Office](https://support.microsoft.com/en-us/office/uninstall-office-for-mac-eefa1199-5b58-43af-8a3d-b73dc1a8cae3#ID0EAABAAA=Newer_versions)
