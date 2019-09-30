Badge 标记
---

## 基础示例

```jsx
import { View, Text } from 'react-native';
import { Badge } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>一文带你搞懂 API 网关</Text>
      <Badge text="标记" color="red" />
    </View>
  );
}
```

## props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `text` | 文本内容 | String | - |
| `color` | 标记颜色 | String | - |
| `rounded` | 设置圆角 | Number | `5` |
| `textStyles` | 文本样式 | String | - |