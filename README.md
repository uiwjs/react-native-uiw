React Native UIW
----

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