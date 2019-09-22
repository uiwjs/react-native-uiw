ButtonGroup 按钮组
---

用于一组按钮的排版展示。

### 基础示例

<!--DemoStart--> 
```jsx
import { Loader, Button, ButtonGroup } from '@uiw/react-native';

function Demo() {
  return (
    <Loader>
      <ButtonGroup>
        <Button type="warning">警告</Button>
        <Button type="warning">警告</Button>
      </ButtonGroup>
    </Loader>
  );
}
```
<!--End-->

### 设置颜色

<!--DemoStart--> 
```jsx
import { Button，Loader } from '@uiw/react-native';

function Demo() {
  return (
    <Loader color="red">
      <Button>默认按钮</Button>
    </Loader>
  );
}
```
<!--End-->

### 设置遮罩层颜色

<!--DemoStart--> 
```jsx
import { Button，Loader } from '@uiw/react-native';

function Demo() {
  return (
    <Loader color="red">
      <Button>默认按钮</Button>
    </Loader>
  );
}
```
<!--End-->

### 设置遮罩层颜色

<!--DemoStart--> 
```jsx
import { Button，Loader } from '@uiw/react-native';

function Demo() {
  return (
    <Loader color="red" tip="加载中...">
      <Button>默认按钮</Button>
    </Loader>
  );
}
```
<!--End-->


## Props

集成继承 `Button` 组件自定义属性，外层包裹内容样式集成 [`ViewProps`](https://facebook.github.io/react-native/docs/view#props) 。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| color | 微调器的前景色 | `String` | `gray` |
| maskColor | 遮罩层颜色 | `String` | `rgba(255, 255, 255, 0.85)` |
| size | Loader 图标的大小（默认为 `small`） | `large`, `small` | - |
| loading | 是显示`Indicator`（true）还是隐藏`Indicator`（false） | `Boolean` | `true` |
| rounded | 是显示`Indicator`（true）还是隐藏`Indicator`（false） | `Number` | - |
| tip | 当作为包裹元素时，可以自定义描述文案 | `String`, `ReactNode` | - |
