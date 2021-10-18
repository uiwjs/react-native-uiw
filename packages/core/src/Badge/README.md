Badge 标记
---

<image src='https://user-images.githubusercontent.com/57083007/137631808-f3899eb4-69c1-4dd5-a686-0f8bb38fe4b6.png' alt='Badge' style='zoom:33%;' />

### 基础示例

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

### Props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

```ts
import { ViewProps } from 'react-native';

export interface BadgeProps extends ViewProps {
  children?: React.ReactNode;
  /** 标记颜色 */
  color?: colors.Colors | string;
  /** 文本内容 */
  text?: string | Element;
  /**
   * 设置圆角，默认 `12`
   */
  rounded?: number;
  /** 设置类型 */
  type?: 'dot' | 'text';
  /** 文本样式 */
  textStyles?: StyleProp<TextStyle>;
}
```