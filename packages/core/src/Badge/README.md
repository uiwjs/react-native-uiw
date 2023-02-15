Badge 标记
---


### 基础示例


```jsx  mdx:preview
import React from "react"
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

export default Demo;

```
### 设置类型


```jsx  mdx:preview
import React from "react"
import { View, Text } from 'react-native';
import { Badge } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>一文带你搞懂 API 网关</Text>
      <Badge text="标记" type="dot" color="skyblue" />
    </View>
  );
}

export default Demo;

```

### Props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 标记颜色 | `colors.Colors \| string` | - |
| text | 文本内容 | `string \| Element` | - |
| rounded | 设置圆角 | `boolean \| number` | `12` |
| textStyles | 文本样式 | `StyleProp<TextStyle>` | - |
| type | 设置类型 | `'dot' \| 'text'` | - |
| children | 更多内容 | `React.ReactNode` | - |
