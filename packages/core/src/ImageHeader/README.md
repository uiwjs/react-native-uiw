# ImageHeader 图片头部组件

## 效果演示

### 1. 基础示例 ImageHeader

```jsx
import React, { Component } from 'react';
import { ImageHeader,Avatar } from '@uiw/react-native';
import { View, Text } from 'react-native';

function Demo () {
  return (
  <ImageHeader
        safeBgColor='#010101'
        headerHeight={150}
        headerLeft={<></>}
      >
        <View style={{
          backgroundColor: '#010101',
          overflow: 'hidden',
          zIndex: 1,
        }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Avatar style={{ marginRight: 10 }} size={70} shape="circle" src="https://avatars.githubusercontent.com/u/32630937?v=4" />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 17, color: '#fff', fontWeight: '500', lineHeight: 30 }}>
                  胡意(huyi)
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: '500',
                  }}
                >
                  96313241@qq.com
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    width: 240,
                    color: '#fff',
                    fontSize: 12,
                    lineHeight: 25,
                  }}
                >
                  大屏素材库概要，集成一些常见的大屏组件及图表组件，统一样式。
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageHeader>
    );
}
export default Demo
```
## ImageHeader 组件 API

| 属性                  | 必填    | 说明                 | 类型                  | 默认值                      |
| --------------------- | ------- | -------------------- | --------------------- | --------------------------- |
| headerTitle           | `false` | 头部文字             | `ReactNode`           |                             |
| headerRight           | `false` | 头部右侧内容         | `ReactNode`           |                             |
| headerLeft            | `false` | 头部左侧内容         | `ReactNode`           |                             |
| headerLeftColor       | `false` | 左侧返回键和字体颜色 | `string`              | `theme.colors.primaryColor` |
| headerBackgroundColor | `false` | 头部背景颜色         | `string`              | `transparent`               |
| headerBackgroundImg   | `true`  | 头部背景图片         | `ImageSourcePropType` |                             |
| headerHeight          | `false` | 头部高度             | `number`              |                             |
| onPress               | `false` | 左边图标点击事件     | `() => void`          |                             |
| showLeft              | `false` | 是否显示左边图标     | `boolean`             | `true`                      |

## AnimateHeader 组件 API

| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| headerTitle | `true` | 头部文字 | `string` |  |
| headerTitleStyle | `false` | 头部文字样式 | `TextStyle` |  |
| scrollY | `false` | 滚动距离 | `Animated.SharedValue<number>` | `0` |
| scrollHeight | `false` | 纵向滚动到哪个值时显示 `ImageHeader` | `number` | `300` |
| headerHeight | `true` | 头部高度 | `number` |  |
| headerRight | `false` | 头部右侧内容 | `ReactNode` |  |
| headerLeft | `false` | 头部左侧内容 | `ReactNode` |  |
| headerLeftColor | `false` | 左侧返回键和字体颜色 | `string` | `theme.colors.primaryColor` |
| headerBackgroundColor | `false` | 头部背景颜色 | `string` | `transparent` |
| onPress | `false` | 左边按钮点击事件 | `() => void` |  |
| showLeft | `false` | 是否显示左边图标 | `boolean` | `true` |
