Loader 加载
---

表明某个任务正在进行中。

<!-- ![](https://user-images.githubusercontent.com/66067296/139398047-e59f2b9d-ced1-46d2-b45c-b9e35d04b825.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
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
export default Demo
```
<!--End-->

### 设置颜色

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Button,Loader } from '@uiw/react-native';

function Demo() {
  return (
    <Loader color="red" />
  );
}
export default Demo
```
<!--End-->

### 设置遮罩层颜色

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Button,Loader } from '@uiw/react-native';

function Demo() {
  return (
    <Loader color="red">
      <Button>默认按钮</Button>
    </Loader>
  );
}
export default Demo
```
<!--End-->

### 自定义提示文本

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Button, Loader } from '@uiw/react-native';

function Demo() {
  return (
    <Loader color="red" tip="加载中...">
      <Button>默认按钮</Button>
    </Loader>
  );
}
export default Demo
```
<!--End-->


### Props

继承 `ActivityIndicator` 组件属性 [`ActivityIndicatorProps`](https://facebook.github.io/react-native/docs/activityindicator#props),比原生组件 `ActivityIndicator` 多出更多丰富功能。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| color | 微调器的前景色 | `String` | `gray` |
| maskColor | 遮罩层颜色 | `String` | `rgba(255, 255, 255, 0.85)` |
| size | Loader 图标的大小（默认为 `small`） | `large`, `small` | - |
| loading | 是显示`Indicator`（true）还是隐藏`Indicator`（false） | `Boolean` | `true` |
| vertical | 动画图标与文字垂直显示 | `Boolean` | - |
| rounded | 设置按钮圆角,用于加载内容为圆角的情况） | `Number` | - |
| tip | 当作为包裹元素时,可以自定义描述文案 | `String`, `ReactNode` | - |
