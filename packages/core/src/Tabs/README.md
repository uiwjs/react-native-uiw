Tabs 选项卡
---

选项卡组件跨不同屏幕、数据集和其他交互的内容。

<!-- ![](https://user-images.githubusercontent.com/57083007/146733908-4c795dc4-06cf-45cb-974e-cbbccff9732d.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx
import React, { Fragment,useState } from 'react';
import { View } from 'react-native'
import { Tabs } from '@uiw/react-native';
const { Item } = Tabs
function Demo() {
  const [value,setValue]= useState(0)
  return (
      <Tabs onChange={(value)=>setValue(value)} value={value}>
        <Item title="喜欢" />
        <Tabs.Item title="关注" />
        <Tabs.Item title="信息" />
        <Tabs.Item title="我的" />
        <Tabs.Item title="偏好" />
      </Tabs>
  );
}
export default Demo
```
### 使用 Icon

```jsx
import React, { useState } from 'react';
import { Tabs, Icon } from '@uiw/react-native';
function Demo() {
  const [value,setValue]= useState(0)
  return (
     <Tabs onChange={(value)=>setValue(value)} value={value}>
      <Tabs.Item title="喜欢" icon='heart-on' />
      <Tabs.Item title="关注" icon={<Icon name='star-on' color={value===1?'#035bb6':'red'} size={24} />} />
      <Tabs.Item title="信息" icon='mail' />
    </Tabs>
  );
}
export default Demo
```

### 修改默认色

```jsx
import React, { useState } from 'react';
import { Tabs, Icon } from '@uiw/react-native';
function Demo() {
  const [value,setValue]= useState(0)
  return (
     <Tabs onChange={(value)=>setValue(value)} value={value} defaultColor="red">
      <Tabs.Item title="喜欢" icon='heart-on' />
      <Tabs.Item title="关注" icon={<Icon name='star-on' color={value===1?'#035bb6':'red'} size={24} />} />
      <Tabs.Item title="信息" icon='mail' />
    </Tabs>
  );
}
export default Demo
```

### 选中色更改

```jsx
import React, { useState } from 'react';
import { Tabs, Icon } from '@uiw/react-native';
function Demo() {
  const [value,setValue]= useState(0)
  return (
     <Tabs onChange={(value)=>setValue(value)} value={value} activeColor="red">
      <Tabs.Item title="喜欢" icon='heart-on' />
      <Tabs.Item title="关注" icon={<Icon name='star-on' color={value===1?'#035bb6':'red'} size={24} />} />
      <Tabs.Item title="信息" icon='mail' />
    </Tabs>
  );
}
export default Demo
```
### Tabs Props

继承原生 View 属性 [`ViewProps`](https://reactnative.dev/docs/view) 
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `children` | 子元素 | JSX.Element | - |
| `style` | 容器样式 | `ViewStyle` | - |
| `value` | 值 | `number` | - |
| `onChange` | 点击tab栏变化 | `(value: number) => void` | - |
| `activeColor` | 选中后颜色 | `string` | `#035bb6` |
| `defaultColor` | 组件默认眼色 | `string` | `#035bb6` |

### Tabs.Item Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `title` | 显示的文字 | string | - |
| `style` | 样式集合,具体项见下表 | TabsItemStyle | - |
| `icon` | 图标 | JSX.Element, React.ReactNode, React.ReactElement, IconsName | - |


### TabsItemStyle
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `width` | 宽度 | number | - |
| `titleFontWeight` | 文字粗细 |`'100' \| '200' \| '300' \| '400' \| '500' \| '600' \| '700' \| '800' \| '900' \| 'bold' \| 'normal'`| - |
| `titleSize` | 文字大小 | number | - |
| `iconSize` | icon 大小 | number | - |
| `borderWidth` | border 宽度 | number | - |
| `borderHeight` | border 粗细 | number | - |


