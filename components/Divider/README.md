Divider 分割线
---

区隔内容的分割线。

## 基础示例

```jsx
import { View, Text } from 'react-native';
import { Divider } from '@uiw/react-native';

function Demo() {
  return (
    <>
      <Text>分割线</Text>
      <Divider label="OR" />
      <Text>横向分割线</Text>
      <Divider />
      <Text>分割线</Text>
    </>
  );
}
```

## 纵向分割线

```jsx
import { View, Text } from 'react-native';
import { Divider } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ height: 200 }}>
      <Divider type="vertical" label="OR" />
    </View>
  );
}
```

## props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `label` | 分割线标题，文本内容 | String | - |
| `type` | 水平还是垂直类型 | `horizontal`, `vertical` | `horizontal` |