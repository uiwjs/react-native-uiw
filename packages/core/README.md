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
yarn add @uiw/react-native react-native-svg
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

#### Layout

- [Divider](https://github.com/uiwjs/react-native-uiw/tree/master/components/Divider/README.md)
- [Flex](https://github.com/uiwjs/react-native-uiw/tree/master/components/Flex/README.md)
- [Spacing](https://github.com/uiwjs/react-native-uiw/tree/master/components/Spacing/README.md)
- [WingBlank](https://github.com/uiwjs/react-native-uiw/tree/master/components/WingBlank/README.md)

#### Navigation

- [Drawer](https://github.com/uiwjs/react-native-uiw/tree/master/components/Drawer/README.md)
- [MenuDropdown](https://github.com/uiwjs/react-native-uiw/tree/master/components/MenuDropdown/README.md)
- [SwipeAction](https://github.com/uiwjs/react-native-uiw/tree/master/components/SwipeAction/README.md)

#### Data Entry

- [Button](https://github.com/uiwjs/react-native-uiw/tree/master/components/Button/README.md)
- [ButtonGroup](https://github.com/uiwjs/react-native-uiw/tree/master/components/ButtonGroup/README.md)
- [CheckBox](https://github.com/uiwjs/react-native-uiw/tree/master/components/CheckBox/README.md)
- [Input](https://github.com/uiwjs/react-native-uiw/tree/master/components/Input/README.md)
- [Radio](https://github.com/uiwjs/react-native-uiw/tree/master/components/Radio/README.md)
- [SegmentedControl](https://github.com/uiwjs/react-native-uiw/tree/master/components/SegmentedControl/README.md)
- [Slider](https://github.com/uiwjs/react-native-uiw/tree/master/components/Slider/README.md)
- [Switch](https://github.com/uiwjs/react-native-uiw/tree/master/components/Switch/README.md)
- [SearchBar](https://github.com/uiwjs/react-native-uiw/tree/master/components/SearchBar/README.md)
- [SelectCascader](https://github.com/uiwjs/react-native-uiw/tree/master/components/SelectCascader/README.md)

#### Data Display

- [Avatar](https://github.com/uiwjs/react-native-uiw/tree/master/components/Avatar/README.md)
- [Badge](https://github.com/uiwjs/react-native-uiw/tree/master/components/Badge/README.md)
- [Ellipsis](https://github.com/uiwjs/react-native-uiw/tree/master/components/Ellipsis/README.md)
- [Empty](https://github.com/uiwjs/react-native-uiw/tree/master/components/Empty/README.md)
- [Grid](https://github.com/uiwjs/react-native-uiw/tree/master/components/Grid/README.md)
- [Icon](https://github.com/uiwjs/react-native-uiw/tree/master/components/Icon/README.md)
- [List](https://github.com/uiwjs/react-native-uiw/tree/master/components/List/README.md)
- [Table](https://github.com/uiwjs/react-native-uiw/tree/master/components/Table/README.md)
- [Typography](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md) [`H1~H6`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#标题) · [`<Del>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#删除线) · [`<S>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#删除线) · [`<U>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#下划线) · [`<Strong>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#加粗) · [`<Br />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#换行) · [`<P />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#段落) · [`<Hr />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#水平线) · [`<Div />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#div)

#### Feedback

- [Loader](https://github.com/uiwjs/react-native-uiw/tree/master/components/Loader/README.md)
- [Modal](https://github.com/uiwjs/react-native-uiw/tree/master/components/Modal/README.md)
- [MaskLayer](https://github.com/uiwjs/react-native-uiw/tree/master/components/MaskLayer/README.md)
- [Result](https://github.com/uiwjs/react-native-uiw/tree/master/components/Result/README.md)
- [Toast](https://github.com/uiwjs/react-native-uiw/tree/master/components/Toast/README.md)

## Other

- [@uiw/react-native-alipay](https://github.com/uiwjs/react-native-alipay)
- [@uiw/react-native-amap-geolocation](https://github.com/uiwjs/react-native-amap-geolocation)

## Development

```
yarn install
```

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

⚠️ MacBook Pro with a M1

```bash
# Install ffi
sudo arch -x86_64 gem install ffi
# Re-install dependency
arch -x86_64 pod install
```

```bash
rm -rf ios/build
# https://github.com/react-navigation/react-navigation/issues/6071
cd ios/
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

