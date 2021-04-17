---
title: "Git"
date: "2021-04-16"
tags:
  - git
  - tools
description: "Git tips"
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

## Git config

Show git config

```bash
git config -l
```

Only local repository

```bash
git config --local -l
```

Set user name and email for local

```bash
git config --local user.name "Your Name Here"
git config --local user.email "your@email.com"
```

Set user name and email global (`~/.gitconfig`):

```bash
git config --global user.name "Your Name Here"
git config --global user.email "your@email.com"
```

Set remote url

```bash
git remote set-url origin git@github.com:username/repo-name.git
```
