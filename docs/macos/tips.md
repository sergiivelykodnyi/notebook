# Tips

## Add dock separators

Add one separator.

```shell
defaults write com.apple.dock persistent-apps -array-add '{ "tile-type" = "spacer-tile"; }'
```

Reload Dock.

```shell
killall Dock
```

Reset Dock.

```shell
defaults delete com.apple.dock; killall Dock
```

Reload Finder.

```shell
killAll Finder
```

## Install/reinstall macOS

- [How to create a bootable installer for macOS](https://support.apple.com/en-gb/HT201372)
- [How to reinstall macOS from macOS Recovery](https://youtu.be/HCrl_4k0aqo)
- [How to reinstall macOS](https://support.apple.com/en-us/HT204904)

## Install Xcode toolkit

```shell
xcode-select --install
```

If that doesn’t work, force it to reset.

```shell
xcode-select --reset
```

It can be used when you get following message in a terminal:

```shell
xcrun: error: invalid active developer path, missing xcrun
```

### SSH

```shell
chmod 755 ~/.ssh
chmod 600 ~/.ssh/id_rsa ~/.ssh/id_rsa.pub
chmod 644 ~/.ssh/known_hosts
```

## Uninstall Microsoft Office

[webpage](https://support.microsoft.com/en-us/office/uninstall-office-for-mac-eefa1199-5b58-43af-8a3d-b73dc1a8cae3#ID0EAABAAA=Newer_versions)

## ZSH

### Plugins

- [Antigen](https://github.com/zsh-users/antigen)
- [Powerlevel10k theme](https://github.com/romkatv/powerlevel10k)

### zsh compinit: insecure directories

[stackoverflow.com](https://stackoverflow.com/questions/13762280/zsh-compinit-insecure-directories)

```bash
sudo chmod -R 755 /usr/local/share/zsh; sudo chown -R root:staff /usr/local/share/zsh;
```
