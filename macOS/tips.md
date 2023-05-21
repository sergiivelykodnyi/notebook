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

## Install the Xcode toolkit

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

## Uninstall Microsoft Office

[webpage](https://support.microsoft.com/en-us/office/uninstall-office-for-mac-eefa1199-5b58-43af-8a3d-b73dc1a8cae3#ID0EAABAAA=Newer_versions)
