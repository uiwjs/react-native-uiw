WingBlank 两翼留白
---

左右两边空出一点距离

### 基础示例

<!--DemoStart--> 
```jsx  mdx:preview
import React,{Component} from 'react';
import { View, Text } from 'react-native';
import { WingBlank, Button } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <WingBlank>
        <Text>两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留两翼留白两翼留白两翼留白两翼留白</Text>
      </WingBlank>
    );
   }
}
export default Demo
```
<!--End-->

### WingBlank

| 参数 | 说明 | 类型 | 默认值|
| ---- | ---- | ---- | ---- |
| size | 两翼留白的间距 | `small`, `default`, `large` | `default` |