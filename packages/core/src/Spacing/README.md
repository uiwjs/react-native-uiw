Spacing 间距
---
组件上下留一点间距
### 基础示例

```jsx mdx:preview&background=#bebebe29
import React,{ Fragment } from 'react';
import { Spacing, Button } from '@uiw/react-native';

const Demo = () => {
  return (
    <Fragment>
      <Button>按钮之间的间距</Button>
      <Spacing type='vertical' />
      <Button type="primary">按钮之间的间距</Button>
      <Spacing  size='small'/>
      <Button type="danger">按钮之间的间距</Button>
    </Fragment>
  );
}
export default Demo

```

间距大小，可选值或者数字，默认间距 `10`

```jsx mdx:preview&background=#bebebe29
import React,{ Fragment } from 'react';
import { Spacing, Button } from '@uiw/react-native';

const Demo = () => {
  return (
    <Fragment>
      <Button >按钮之间的间距</Button>
      <Spacing size='small' />
      <Button type="primary">按钮之间的间距</Button>
      <Spacing  size='default'/>
      <Button type="danger">按钮之间的间距</Button>
      <Spacing  size='large'/>
      <Button >按钮之间的间距</Button>
      <Spacing  size={100}/>
      <Button type="primary">按钮之间的间距</Button>
    </Fragment>
  );
}
export default Demo

```

### props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `type` | 间距类型，水平或者是垂直间距 | `horizontal`, `vertical` | `vertical` |
| `size` | 间距大小，可选值或者数字，默认间距 `10` | Enum{`small`, `default`, `large`}, `Number` | `default` |
