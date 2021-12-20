WingBlank 两翼留白
---

布局控件

![](https://user-images.githubusercontent.com/57083007/146734301-dd0b7af2-c823-463c-ab8a-075ef0ffdc48.png)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

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