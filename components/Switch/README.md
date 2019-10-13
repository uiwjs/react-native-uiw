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

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `value` | 开关的值。 如果为`true`，则开关将打开。 默认值为`false`。 | Boolean | `false` |
| `disabled` | 如果为`true`，则用户将无法切换开关。 | Boolean | `false` |
| `trackStyle` | 设置背景样式。 | ViewStyle | - |
| `thumbStyle` | 前景开关手柄的颜色。 | ViewStyle | - |
| `onValueChange` | 当用户尝试更改开关的值时调用。 接收新值作为参数。 | (value: Boolean) => void | `false` |