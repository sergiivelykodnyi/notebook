---
title: "zsh"
date: "2021-06-24"
tags:
  - linux
  - unix
  - shell
description: "zsh source collection"
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

## Sources

- [Antigen](https://github.com/zsh-users/antigen)
- [Powerlevel10k theme](https://github.com/romkatv/powerlevel10k)

## Issues

### zsh compinit: insecure directories

[stackoverflow.com](https://stackoverflow.com/questions/13762280/zsh-compinit-insecure-directories)

```bash
sudo chmod -R 755 /usr/local/share/zsh; sudo chown -R root:staff /usr/local/share/zsh;
```
