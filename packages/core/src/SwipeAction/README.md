SwipeAction 滑动操作组件。
---
结合手势操作，从屏幕一侧唤出操作。

![](https://user-images.githubusercontent.com/57083007/146733663-6c83fca4-72df-424d-8364-47533f57ece6.gif)

### 基础示例

```jsx
import React from 'react';
import {SwipeAction} from '@uiw/react-native';
import { View,Text } from 'react-native'

function Demo() {
  const right = [
    {
      text: '查看',
      color: 'orange',
      x: 250,
      onPress: () => ref?.current?.swipeable.close()
    },
    {
      text: '删除',
      color: 'red',
      x: 250,
    },
  ];
  return (
    <SwipeAction ref={ref} buttonWidth={60} right={right}>
      <View><Text>滑动</Text></View>
    </SwipeAction>
  );
}
export default Demo;
```

### 从左侧滑出

```jsx
import React from 'react';
import {SwipeAction} from '@uiw/react-native';
import { View,Text } from 'react-native'

function Demo() {
  const left = [
    {
      text: '查看',
      color: 'orange',
      x: 250,
      onPress: () => ref?.current?.swipeable.close()
    },
    {
      text: '删除',
      color: 'red',
      x: 250,
    },
  ];
  return (
    <SwipeAction ref={ref} buttonWidth={60} left={left}>
      <View><Text>滑动</Text></View>
    </SwipeAction>
  );
}
export default Demo;
```

### 禁用

```jsx
import React,{ useRef } from 'react';
import {SwipeAction} from '@uiw/react-native';
import { View,Text } from 'react-native'

function Demo() {
  const ref = useRef()
  const right = [
    {
      text: '查看',
      color: 'orange',
      x: 250,
    },
    {
      text: '删除',
      color: 'red',
      x: 250,
      disabled:true
    },
  ];
  return (
    <SwipeAction ref={ref} buttonWidth={60} right={right}>
      <View><Text>滑动</Text></View>
    </SwipeAction>
  );
}
export default Demo;
```

### 主动关闭

```jsx
import React,{ useRef } from 'react';
import {SwipeAction} from '@uiw/react-native';
import { View,Text } from 'react-native'

function Demo() {
  const ref = useRef()
  const right = [
    {
      text: '查看',
      color: 'orange',
      x: 250,
      onPress: () => ref?.current?.swipeable.close()
    },
    {
      text: '删除',
      color: 'red',
      x: 400,
    },
  ];
  return (
    <SwipeAction ref={ref} buttonWidth={60} right={right}>
      <View><Text>滑动</Text></View>
    </SwipeAction>
  );
}
export default Demo;
```

组件继承react-native-gesture-handler[`Swipeable`](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable)
### Props
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `right` | 右边滑动出来的元素 | Array<`ColumnProps`> | - |
| `left` | 左边滑动出来的元素 | Array<`ColumnProps`> | - |
| `buttonWidth` | 按钮宽度 |  number | 60 |
| `actionViewStyle` | 弹出框样式 |  ViewStyle | - |
| `rectButtonStyle` | 弹出button样式 |  ViewStyle | - |


### ColumnProps
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `text` | 显示文字 | string | - |
| `color` | 背景色 | string | - |
| `onPress` | 点击元素触发 |  () => void | - |
| `disabled` | 是否禁用 | Boolean | - |
| `render` | 自定义元素 | (text: string, record: Column, index: number) => React.ReactNode | - |
