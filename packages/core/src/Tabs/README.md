Tabs 选项卡
---

选项卡组件跨不同屏幕、数据集和其他交互的内容。

<!-- ![](https://user-images.githubusercontent.com/57083007/146733908-4c795dc4-06cf-45cb-974e-cbbccff9732d.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React, { Fragment } from 'react';
import { Tabs } from '@uiw/react-native';
const { Item } = Tabs
function Demo() {
  return (
    <Fragment>
      <Tabs>
        <Item
          title="喜欢"
        />
        <Tabs.Item
          title="关注"
        />
        <Tabs.Item
          title="信息"
        />
        <Tabs.Item
          title="我的"
        />
        <Tabs.Item
          title="偏好"
        />
      </Tabs>
    </Fragment>
  );
}
export default Demo
```
### 使用 Icon

```jsx  mdx:preview
import React, { Fragment } from 'react';
import { Tabs, Icon } from '@uiw/react-native';
function Demo() {
  return (
    <Fragment>
     <Tabs>
      <Tabs.Item
        title="喜欢"
        icon='heart-on'
      />
      <Tabs.Item
        title="关注"
        icon={<Icon name='star-on' color="#fff" size={24} />}
      />
      <Tabs.Item
        title="信息"
        icon='mail'
      />
    </Tabs>
    </Fragment>
  );
}
export default Demo
```
### Tabs Props

继承原生 View 属性 [`ViewProps`](https://reactnative.dev/docs/view) 
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| children | 子元素 | JSX.Element | - |
| style | 容器样式 | ViewStyle | - |

### Tabs.Item Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| title | 显示的文字 | string | - |
| style | 样式集合,具体项见下表 | TabsItemStyle | - |
| onPress | 点击时触发 | (title: string) => void | - |
| icon | 图标 | JSX.Element, React.ReactNode, React.ReactElement, IconsName | - |
| border | 是否显示下边框 | boolean | - |

### TabsItemStyle
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| width | 宽度 | number | - |
| titleColor | 文字颜色 | string | - |
| titleFontWeight | 文字粗细 |`'100','200','300','400','500','600','700','800','900','bold','normal' `| - |
| titleSize | 文字大小 | number | - |
| iconColor | icon 颜色 | string | - |
| iconSize | icon 大小 | number | - |
| borderWidth | border 宽度 | number | - |
| borderColor | border 颜色 | string | - |
| borderBottom | border 底部距离 | number | - |
| borderHeight | border 粗细 | number | - |


