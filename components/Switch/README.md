Switch 开关
---

表示两种相互对立的状态间的切换，多用于触发「开/关」，这是 `React Naitve` 自带的组件重新封装，目的是为了保持 iOS/Android 一致的效果。

> 自带组件 Switch 已过时，将很快删除。

## 基础示例

这是一个受控组件，需要一个 `onValueChange` 回调来更新值属性，以使该组件反映用户操作。

```jsx
import { Fragment } from 'react';
import { Spacing, Switch } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(true);
  return (
    <Fragment>
      <Switch
        value={value}
        onValueChange={(cValue) => setValue(cValue)}
      />
      <Text>值：{value.toFixed(1)}</Text>
    </Fragment>
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