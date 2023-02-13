SwipeAction 滑动操作组件。
---
结合手势操作，从屏幕一侧唤出操作。

### 基础示例

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
    {
      text: '不显示',
      color: 'green',
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
| `right` | 右边滑动出来的元素 | Array<Column> | - |
| `left` | 左边滑动出来的元素 | Array<Column> | - |
| `buttonWidth` | 按钮宽度 |  number | 60 |

### ColumnProps
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `text` | 显示文字 | string | - |
| `color` | 背景色 | string | - |
| `onPress` | 点击元素触发 |  () => void | - |
| `disabled` | 是否禁用 | Boolean | - |
| `render` | 自定义元素 | (text: string, record: Column, index: number) => React.ReactNode | - |
