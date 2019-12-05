UIW Design for React Native
---

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