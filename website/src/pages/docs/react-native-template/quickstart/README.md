# React Native UIW Template

一个基于 [uiw/react-native](https://github.com/uiwjs/react-native-uiw) 的 React Native 模板。


## 特性

该模板包括以下内容：

1. 直接优雅地使用 [React Native CLI](https://github.com/react-native-community/cli)
1. 支持 [React Native](https://github.com/facebook/react-native) 0.60 (现在有了 Hooks 🙌)
1. 易于使用和理解的文件夹结构，让您尽快启动和运行
1. [@uiw/react-native](https://github.com/uiwjs/react-native-uiw) 组件框架和主题
1. 使用 [react-navigation](https://github.com/react-navigation/react-navigation) 来路由和导航您的 React Native 应用程序
1. 支持 [Redux](https://github.com/reduxjs/redux) (以 [@rematch](https://github.com/rematch/rematch) 为例)
1. [ESLint](https://github.com/eslint/eslint), 和 [Prettier](https://github.com/prettier/prettier) 开箱即用
1. 使用 [mocker-api](https://github.com/jaywcjlove/mocker-api) 创建模拟的 REST API

## 安装与使用

🚧 此模板仅适用于新的 CLI。 此模板适用于 >= 0.61 的 React Native 版本。 它没有用以前的版本进行测试。

**关于遗留 CLI 的注意事项**

🚧 遗留的 CLI 似乎有些混乱。 此模板仅适用于新的 CLI。 确保您首先卸载了旧版 `react-native-cli (npm uninstall -g react-native-cli)`，以便下面的命令正常工作。

```bash
npm uninstall -g react-native-cli
```
更多信息可以在这里找到：[react-native-community/cli](https://github.com/react-native-community/cli#about)

**🚧🚧 如果你不想使用 `react-native@0.70.0`或更高版本的[帮助](https://github.com/facebook/react-native/issues/34608#)**

```bash
Check whether your ruby version is higher than 2.7.5
```
```bash
bundle install
cd ios && bundle exec pod install

```

**🚧🚧 配备 M1 的 MacBook Pro 🚧🚧**

```bash
# Install ffi
sudo arch -x86_64 gem install ffi
rm -rf Pods Podfile.lock
# Clear pods.
pod deintegrate
# pod rm Podfile.lock
arch -x86_64 pod install
# Re-install pods
arch -x86_64 pod install --repo-update --verbose
yarn run ios # Run instructions for iOS
yarn run api
```

**`react-native@0.61.0` 或更高版本**

```sh
npx react-native init MyApp --template @uiw/react-native-template
# npx react-native init MyApp --template @uiw/react-native-template@v1.0.0
```

**如果你不想使用 `npx`**

您还可以全局安装新的 CLI（`npm i -g @react-native-community/cli` 或 `yarn global add @react-native-community/cli`）

```bash
npx react-native init MyApp --template @uiw/react-native-template
cd MyApp/ios
# Installing CocoaPods dependencies
pod install 
```

```bash
# This will initialize new project using template from TEMPLATE_NAME package
npx react-native init ProjectName --template ${TEMPLATE_NAME}
# This will initialize new project using init command from react-native@VERSION
# but will use TEMPLATE_NAME custom template
npx react-native@${VERSION} init ProjectName --template ${TEMPLATE_NAME}
```

## 快速开始
```bash
npx react-native init MyApp --template @uiw/react-native-template
```
## 开发启动
```bash
cd ios/ && pod install && cd ../

# Mocker API
npm run api

# Run the app with iOS.
npm run ios
```

## 默认账号密码

账号: admin
密码: admin!

## 目录结构

```

├── mocker                            # mocker data
├── android                           # native android code
├── ios                               # native ios code
├── src                               # code directory
│   ├── components                    # react components
│   ├── models                        # The models brings together state, reducers, async actions & action creators in one place
│   ├── pages                         # route pages
│   ├── routes                        # route configuration
│   ├── services                      # api request
│   ├── utils                         # public method
│   ├── App.js                        # route entery page
│   ├── config.js                     # app configuration
│   └── global.js                     # Store some global objects for easy calling
├── .eslintrc                         # eslint configuration
├── index.js                          # app entry file
└── package.json                      # This document is all you need to know about what’s required in your package.json file.
```