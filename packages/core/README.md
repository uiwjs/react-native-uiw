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

React Native UIW
---

A UI component library based on React Native (Android & iOS).

[快速上手](https://uimjs.github.io/#/docs/getting-started) | [参与组件开发](https://uimjs.github.io/#/docs/development/components) | [参与文档/网站编辑开发](https://uimjs.github.io/#/docs/development/document) | [组件库](https://uimjs.github.io/#/components/about)

您可以使用我们制定的模版([`@uiw/react-native-template`](https://github.com/uiwjs/react-native-template))创建一个新项目：

<!--rehype:style=background-color: rgb(118 247 149);-->
```shell
# 此模板默认集成了一些必用的依赖，如路由，组件库等
npx react-native init AwesomeProject --template @uiw/react-native-template
```

## Install
```bash
yarn add @uiw/react-native react-native-svg@12.1.1 react-native-root-siblings@4.1.1  react-native-gesture-handler@2.8.0
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

## Other

- [@uiw/react-native-alipay](https://github.com/uiwjs/react-native-alipay)
- [@uiw/react-native-amap-geolocation](https://github.com/uiwjs/react-native-amap-geolocation)

## Development

```bash
# Install current dependencies, and dependencies in sub-packages
yarn install
yarn run build # Compile package
```

Real-time monitoring of package and document website local preview

```bash
# Step 1
yarn run lib:watch      # Compile and output JS file
# Step 2
yarn run lib:watch:type # Output type file d.ts
# Step 3
yarn run start          # Run the preview document website locally
```

## 文档本地预览

**第一步安装文档包和预览工具**

```bash
 npm install @uiw/react-native-doc @kkt/doc -D # yarn add @uiw/react-native-doc @kkt/doc -D
```

**第二步配置命令**

在`package.json`文件中配置命令

```json
  // ... 
  "scripts":{
    "doc":"kktd @uiw/react-native-doc/doc/build"
  }
```


### License

Licensed under the MIT License.
