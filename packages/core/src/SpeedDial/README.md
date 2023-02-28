SpeedDial 悬浮标记
---

SpeedDial 悬浮标记组件按下时，浮动动作按钮可以以快速显示标记的形式显示指定相关动作。

> 🚧 注意：测试版本谨慎使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!-- ![](https://user-images.githubusercontent.com/57083007/146733457-f6cb4866-2f5c-4757-bb16-007881c5ef25.gif) -->

### 基础示例

```jsx  mdx:preview
import React, { Fragment } from 'react';
import { SpeedDial, Icon } from '@uiw/react-native';
import { View, Text, Dimensions } from 'react-native';

function Demo() {
  return (
    <View style={{ height: 180, background: '#ddd' }}>
      <SpeedDial
        onOpen={()=>console.log('onOpen2')}
        onClose={()=>console.log('onClose')}
        bottom={750}
        children={[
          {
            icon: 'plus',
            title: <Text>Add</Text>,
            onPress:()=>console.log('Add')
          },
          {
            icon: <Icon name='star-on' color="#fff" size={18} />,
            title: 'Star'
          },
          {
            icon: <Icon name='mail' color="#fff" size={18} />,
            title: 'Mail'
          },
          {
            icon: <Icon name='share' color="#fff" size={18} />,
            title: 'Share'
          }
        ]}
      />
    </View>
  );
}
export default Demo
```

### 设置动画时间

```jsx  mdx:preview
import React, { Fragment } from 'react';
import { SpeedDial, Icon } from '@uiw/react-native';
import { View, Text, Dimensions } from 'react-native';

function Demo() {
  return (
    <View style={{ height: 180, background: '#ddd' }}>
      <SpeedDial
       transitionDuration={2000}
        onOpen={()=>console.log('onOpen')}
        onClose={()=>console.log('onClose')}
        bottom={750}
        children={[
          {
            icon: 'plus',
            title: <Text>Add</Text>,
            onPress:()=>console.log('Add')
          },
          {
            icon: <Icon name='star-on' color="#fff" size={18} />,
            title: 'Star'
          },
          {
            icon: <Icon name='mail' color="#fff" size={18} />,
            title: 'Mail'
          },
          {
            icon: <Icon name='share' color="#fff" size={18} />,
            title: 'Share'
          }
        ]}
      />
    </View>
  );
}
export default Demo
```
### Props

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `icon` | 显示的图标 | `string` | `plus` \| `close` |
| `style` | 盒子样式  | `string` | - |
| `bottom` | 初始距离下边位置 | `number` | 350 |
| `right` | 初始距离右边位置 | `number`  | 40 |
| `children` | 展开显示的标记 | Array<`SpeedDialItemProps`> | - |
| `isDrag` | 是否支持拖拽 | `boolean` | `false` |
| `transitionDuration` | 动画时间 | `number` | 200 |
| `onOpen` | 打开时触发  | Function | - |
| `onClose` | 关闭时触发 | Function | - |


### SpeedDialItemProps

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `icon` | 右边显示的图标 | `string` | - |
| `title` | 左边文字  | `JSX.Element` \| `string` \| `number` | - |
| `titleStyle` | 左边文字盒子样式 | ViewStyle | - |
| `iconStyle` | 右边图标盒子样式 | ViewStyle  | - |
| `onPress` | 点击右边时触发 | Function | - |

