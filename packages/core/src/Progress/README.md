Progress 进度条
---

表明某个任务的当前进度。

### 基础示例

<!--DemoStart--> 
```jsx
import {  SafeAreaView, View, Image  } from 'react-native';
import { Progress } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <Progress/>
    </SafeAreaView>
    )
  }
}
```
<!--End-->


## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `progress` | 进度百分比（可选） | Number | 0 |
| `progressColor` | 颜色（可选） | String | none |
| `position` | 位置，fixed 将浮出固定在最顶层（可选） | String | none |
