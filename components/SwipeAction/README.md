SwipeAction 滑动操作组件。
---

结合手势操作，从屏幕一侧唤出操作。


## 基础示例

```jsx
import React from 'react';
import { View, SwipeAction } from '@uiw/react-native';

export default class BasicSwipeActionExample extends React.Component {
  render() {
    const right = [
      {
        text: 'More',
        onPress: () => console.log('more'),
        style: { backgroundColor: 'orange', color: 'white' },
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ];
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        style: { backgroundColor: 'blue', color: 'white' },
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        style: { backgroundColor: 'green', color: 'white' },
      },
    ];
    return (
       <SwipeAction
          autoClose
          style={{ backgroundColor: 'transparent' }}
          right={right}
          left={left}
          onOpen={() => console.log('open')}
          onClose={() => console.log('close')}
        >
          <View style={styles.view}>
            <Text>滑动</Text>
          </View>
      </SwipeAction>
    );
  }
}
```


## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| style           | `swipeout` 样式      | Object |             |
| left       | 左侧按钮组      | Array | `null` |
| right       | 右侧按钮组      | Array | `null` |
| autoClose       | 点击按钮后自动隐藏按钮   | Boolean | `function() {}` |
| onOpen       |    打开时回调函数   | (): void | `function() {}` |
| disabled       |   禁用 `swipeout`    | Boolean | `false` |
| onClose  |  关闭时回调函数    | (): void | `function() {}` |