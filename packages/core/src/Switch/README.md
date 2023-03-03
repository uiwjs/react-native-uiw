Switch 开关
---

表示两种相互对立的状态间的切换，多用于触发「开/关」，这是 `React Naitve` 自带的组件重新封装，目的是为了保持 iOS/Android 一致的效果。

> 自带组件 Switch 已过时，将很快删除。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->


### 禁用

```jsx mdx:preview&background=#bebebe29
import { Switch } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <Switch disabled />
  );
}
export default Demo
```

### 基础示例

```jsx mdx:preview&background=#bebebe29
import { Switch } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <Switch />
  );
}
export default Demo
```

### 自定义颜色

```jsx mdx:preview&background=#bebebe29
import { Switch } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <Switch
      color="#008ef055"
      thumbStyle={{backgroundColor: '#333a'}}
      trackStyle={{backgroundColor: '#008ef0'}}
    />
  );
}
export default Demo
```

### 尺寸大小


```jsx mdx:preview&background=#bebebe29
import { Spacing, Flex, Switch } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <Flex direction="row">
      <Switch size="small" />
      <Spacing type="horizontal" />
      <Switch />
      <Spacing type="horizontal" />
      <Switch size="large" />
    </Flex>
  );
}

export default Demo
```

### 受控组件

这是一个受控组件，需要一个 `onValueChange` 回调来更新值属性，以使该组件反映用户操作。

```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import { Switch } from '@uiw/react-native';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch  checked={checked} onValueChange={() => setChecked(!checked)} />
  );
}

export default Demo
```

### props

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `checked` | 是否被选中 | Boolean | `false` |
| `color` | 颜色 | String | - |
| `size` | 尺寸大小 | `small`, `default`, `large` | `default` |
| `disabled` | 如果为`true`，则用户将无法切换开关。 | Boolean | `false` |
| `trackStyle` | 设置背景样式。 | ViewStyle | - |
| `thumbStyle` | 前景开关手柄的颜色。 | ViewStyle | - |
| `onValueChange` | 当用户尝试更改开关的值时调用。 接收新值作为参数。 | (value: Boolean) => void | `false` |
