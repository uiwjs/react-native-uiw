<p align="center">
  <a href="https://uiwjs.github.io">
    <img width="150" src="https://raw.githubusercontent.com/uiwjs/uiw/92f189f53312f1177466f48991736f95f86da0a6/src/assets/logo-README.svg?sanitize=true">
  </a>
</p>
<p align="center">
  <a href="https://github.com/uiwjs/react-native-uiw/issues">
    <img src="https://img.shields.io/github/issues/uiwjs/react-native-uiw.svg">
  </a>
  <a href="https://github.com/uiwjs/react-native-uiw/network">
    <img src="https://img.shields.io/github/forks/uiwjs/react-native-uiw.svg">
  </a>
  <a href="https://github.com/uiwjs/react-native-uiw/stargazers">
    <img src="https://img.shields.io/github/stars/uiwjs/react-native-uiw.svg">
  </a>
  <br>
  <a href="https://github.com/uiwjs/react-native-uiw/releases">
    <img src="https://img.shields.io/github/release/uiwjs/react-native-uiw.svg">
  </a>
  <a href="https://github.com/uiwjs/react-native-uiw">
    <img src="https://img.shields.io/dub/l/vibe-d.svg">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-native">
    <img src="https://img.shields.io/npm/v/@uiw/react-native.svg">
  </a>
</p>

UIW Design for React Native
---

(Android & iOS)

## Install

```bash
npm i @uiw/react-native
```

## Basic Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import { Icon } from '@uiw/react-native'

export default class Demo extends React.Component {
  render() {
    return (
      <View>
        <Icon name='apple' size={46} color='#50CB42' />
      </View>
    )
  }
}
```

## Components

- [Badge](components/Badge/README.md)
- [Button](components/Button/README.md)
- [ButtonGroup](components/ButtonGroup/README.md)
- [Icon](components/Icon/README.md)
- [Divider](components/Divider/README.md)
- [Drawer](components/Drawer/README.md)
- [Flex](components/Flex/README.md)
- [List](components/List/README.md)
- [Loader](components/Loader/README.md)
- [Spacing](components/Spacing/README.md)
- [Typography](components/Typography/README.md) [`H1~H6`](components/Typography/README.md#标题) · [`<Del>`](components/Typography/README.md#删除线) · [`<S>`](components/Typography/README.md#删除线) · [`<U>`](components/Typography/README.md#下划线) · [`<Strong>`](components/Typography/README.md#加粗) · [`<Br />`](components/Typography/README.md#换行) · [`<P />`](components/Typography/README.md#段落) · [`<Hr />`](components/Typography/README.md#水平线)
- [WingBlank](components/WingBlank/README.md)

## Development

```bash
Run instructions for iOS:
  • cd react-native-uiw && react-native run-ios
  - or -
  • Open ReactNativeUIW/ios/ReactNativeUIW.xcworkspace in Xcode or run "xed -b ios"
  • Hit the Run button
Run instructions for Android:
  • Have an Android emulator running (quickest way to get started), or a device connected.
  • cd react-native-uiw && react-native run-android
```


```bash
rm -rf ios/build
# https://github.com/react-navigation/react-navigation/issues/6071
pod install
# Clear pods.
pod deintegrate
# pod rm Podfile.lock
pod install
# Reinstall pods
pod install --repo-update --verbose

# Run Project
yarn run ios
```

- [React Native upgrade helper](https://react-native-community.github.io/upgrade-helper/)

