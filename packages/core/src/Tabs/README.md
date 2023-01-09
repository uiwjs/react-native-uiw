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

```ts
import { ViewStyle,ViewProps } from 'react-native';

export interface TabsProps extends ViewProps {
  /** 子元素 */
  children?: JSX.Element | Array<JSX.Element>
  /** 容器样式 */
  style?: ViewStyle
}
export default Demo
```


### Tabs.Item Props

```ts
import { IconsName } from '@uiw/react-native';

export type TabsItemIconTypes = IconsName | React.ReactElement | React.ReactNode | JSX.Element

export interface TabsItemProps {
  /** 显示的文字 */
  title: string,
  /** 样式集合 */
  style?: TabsItemStyle,
  /**
   * 点击时触发
   * void
   * @param title type: string title 文字
   */
  onPress?: (title: string) => void,
  /** 图标 */
  icon?: TabsItemIconTypes,
  /** 是否显示下边框 */
  border?: boolean
}

/** 样式集合类型 */
export interface TabsItemStyle {
  /** 宽度 */
  width?: number,
  /** 文字颜色 */
  titleColor?: string,
  /** 文字粗细 */
  titleFontWeight?: '100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'bold'|'normal',
  /** 文字大小 */
  titleSize?: number,
  /** icon 颜色 */
  iconColor?: string,
  /** icon 大小 */
  iconSize?: number,
  /** border 宽度 */
  borderWidth?: number,
  /** border 颜色 */
  borderColor?: string,
  /** border 距离底部距离一般与 Tabs paddingBottom 相等 */
  borderBottom?: number,
  /** border 粗细 */
  borderHeight?: number
}
```
