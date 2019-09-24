Spacing 间距
---

## 基础示例

```jsx
import { Spacing, Button } from '@uiw/react-native';

function Demo() {
  return (
    <>
      <Button>按钮之间的间距</Button>
      <Spacing />
      <Button type="primary">按钮之间的间距</Button>
      <Spacing />
      <Button type="danger">按钮之间的间距</Button>
    </>
  );
}
```

## props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `type` | 水平还是垂直间距类型 | `horizontal`, `vertical` | `vertical` |
| `size` | 按钮大小 | Enum{`small`, `default`, `large`} | `default` |
| `gutter` | 间距值 | number | `10` |