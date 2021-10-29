MenuDropdown
---

菜单下拉按钮

<image src='https://user-images.githubusercontent.com/66067296/139398975-4c6e1e06-385d-4729-a467-5799cfa0bb9c.gif' alt='MenuDropdown' style='zoom:33%;' />

### 基础示例

<!--DemoStart-->
```jsx
import React, { Component } from 'react';
import { Text  } from 'react-native';

export default class MenuDropdownView extends Component{

  render() {
    return (
    <MenuDropdown title="菜单">
      <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
    </MenuDropdown>
    );
  }
}


```
<!--End-->


### props

组件继承 [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity#docsNav)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `color` | 设置按钮颜色 | String | - |
| `title` | 按钮标题 | String | - |
| `textStyle` | 如果按钮内是文本，此样式可以设置文本样式 | `TextProps.Style` | - |
| `disabled` | 设置禁用 | Boolean | - |
| `loading` | 加载状态 | Boolean | - |
| `rounded` | 设置圆角 | Boolean/Number | `5` |
| `bordered` | 是否有边框 | Boolean | `true` |
| `size` | 按钮尺寸 | `small`, `default`, `large` | `default` |
| `type` | 按钮类型，可选值为 | `primary`, `success`, `warning`, `danger`, `light`, `dark` | - |
