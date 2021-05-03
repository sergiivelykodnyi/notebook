---
title: "Git Tip"
date: "2021-04-16"
tags:
  - git
  - tools
description: ""
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

## Git config

Show git config

```shell
git config -l
```

Only local repository

```shell
git config --local -l
```

Set user name and email for local

```shell
git config --local user.name "Your Name Here"
git config --local user.email "your@email.com"
```

Set user name and email to global `~/.gitconfig`:

```shell
git config --global user.name "Your Name Here"
git config --global user.email "your@email.com"
```

Set remote url

```shell
git remote set-url origin git@github.com:username/repo-name.git
```

## Git branches

If mater branch was renamed on GitHub

```shell
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```
