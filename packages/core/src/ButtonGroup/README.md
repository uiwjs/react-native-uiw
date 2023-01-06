ButtonGroup 按钮组
---

用于一组按钮的排版展示。

### 基础示例

<!--DemoStart--> 
```jsx  mdx:preview
import React,{ Component } from "react"
import  {Button,ButtonGroup}  from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button type="warning">警告</Button>
        <Button type="warning">警告</Button>
        <Button type="warning">主要</Button>
        <Button type="warning">警告</Button>
      </ButtonGroup>
    )
  }
}

export default Demo
```

### 设置边框

<!--DemoStart--> 
```jsx  mdx:preview
import React,{ Component } from "react"
import { View } from 'react-native';
import  {Button,ButtonGroup,Spacing}  from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <ButtonGroup bordered={false}>
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
        <Spacing />
        <ButtonGroup bordered={false} color="#ffc107">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
      </View>
    )
  }
}

export default Demo
```
<!--End-->


### 设置按钮组尺寸

<!--DemoStart--> 
```jsx  mdx:preview
import React,{ Component } from "react"
import { View } from 'react-native';
import  {Button,ButtonGroup,Spacing}  from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <ButtonGroup size="small">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
        <Spacing />
        <ButtonGroup color="#ffc107" size="default">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
        <Spacing />
        <ButtonGroup type="warning" size="large">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
        <Spacing />
        <ButtonGroup color="#008EF0" size="small">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
        <Spacing />
        <ButtonGroup color="#28a745" size="small">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
        <Spacing />
        <ButtonGroup color="#F95C2B" size="small">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
      </View>
    )
  }
}

export default Demo
```
<!--End-->

### Props

集成继承 `Button` 组件自定义属性，外层包裹继承 [`Flex`] 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `gutter` | 按钮间隔间距 | Number | - |
| `inline` | 设置 `inline={true}`，子节点 `Button` 属性将被设置为 `direction = 'row';` `wrap = 'wrap';` | Boolean | `false` |
