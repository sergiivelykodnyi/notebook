---
title: "Git Tip"
date: "2021-04-16"
tags:
  - git
  - tools
description: "Some useful Git command"
layout: layouts/post.njk
permalink: "/{{ title | slug }}/index.html"
---

## Git log

Detailed log

```shell
git log
```

Hash + subject line

```shell
git log --oneline
```

Group commit subject by username.

```shell
git shortlog
```

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

## Commit Message Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Commit Message Type

Must be one of the following:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feature: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: This reverts commit <hash>
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests
