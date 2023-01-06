Spacing 间距
---
组件上下留一点间距
### 基础示例

```jsx  mdx:preview
import React,{ Fragment } from 'react';
import { Spacing, Button } from '@uiw/react-native';

const Demo = () => {
  return (
    <Fragment>
      <Button>按钮之间的间距</Button>
      <Spacing />
      <Button type="primary">按钮之间的间距</Button>
      <Spacing />
      <Button type="danger">按钮之间的间距</Button>
    </Fragment>
  );
}
export default Demo

```

### props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `type` | 水平还是垂直间距类型 | `horizontal`, `vertical` | `vertical` |
| `size` | 按钮大小，可选值或者数字，默认间距 `10` | Enum{`small`, `default`, `large`}, `Number` | `default` |