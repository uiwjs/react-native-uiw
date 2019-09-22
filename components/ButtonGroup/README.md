Button 图标
---

按钮用于开始一个即时操作。

### 基础示例

<!--DemoStart--> 
```jsx
import { Button, ButtonGroup } from '@uiw/react-native';

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
```
<!--End-->

### 设置边框

<!--DemoStart--> 
```jsx
import { View } from 'react-native';
import { Button, ButtonGroup } from '@uiw/react-native';

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
        <Spacing />
        <ButtonGroup bordered={false} type="warning">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
        </ButtonGroup>
      </View>
    )
  }
}
```
<!--End-->

### 设置按钮组尺寸

<!--DemoStart--> 
```jsx
import { View } from 'react-native';
import { Button, ButtonGroup } from '@uiw/react-native';

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
```
<!--End-->


## Props

集成继承 `Button` 组件自定义属性，外层包裹内容样式集成 [`ViewProps`](https://facebook.github.io/react-native/docs/view#props) 。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| gutter | 按钮间隔间距 | Number | - |
