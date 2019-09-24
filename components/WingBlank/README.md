WingBlank 两翼留白
---

布局控件


### 基础示例

<!--DemoStart--> 
```jsx
import { View, Text } from 'react-native';
import { WingBlank, Button } from '@uiw/react-native';

export default function Demo() {
  return (
    <WingBlank>
    </WingBlank>
  );
}
```
<!--End-->

### WingBlank

| 参数 | 说明 | 类型 | 默认值|
| ---- | ---- | ---- | ---- |
| size | 两翼留白的间距 | `small`, `default`, `large` | `default` |