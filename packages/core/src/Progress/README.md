Progress 进度条
---

表明某个任务的当前进度。


### 基础示例

<!--DemoStart-->
```jsx mdx:preview
import React from 'react';
import {  SafeAreaView } from 'react-native';
import { Progress } from '@uiw/react-native';
import { motorcycle } from './svg';

function Demo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Progress progress={30} />
    </SafeAreaView>
  )
}
export default Demo
```

### 自定义颜色

<!--DemoStart-->
```jsx mdx:preview
import React from 'react';
import {  SafeAreaView } from 'react-native';
import { Progress } from '@uiw/react-native';

function Demo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <Progress
          progressColor="#5847FF"
          progressShow={false}
          progress={30}
        />
    </SafeAreaView>
  )
}
export default Demo
```
### 自定义百分比,展示进度

<!--DemoStart-->
```jsx mdx:preview
import React from 'react';
import {  SafeAreaView } from 'react-native';
import { Progress } from '@uiw/react-native';

function Demo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <Progress
          progressColor="#5847FF"
          progressShow={true}
          progress={90}
        />
    </SafeAreaView>
  )
}
export default Demo
```
<!--End-->


### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `progress` | 进度百分比（可选） | Number | 0 |
| `progressColor` | 颜色（可选） | String | none |
| `position` | 位置，fixed 将浮出固定在最顶层（可选） | String | none |
| `iconShow` | 是否展示图标 | boolean | false |
| `xml` | 图标源 | String | 默认图标 |
| `size` | 图标尺寸 | number| 25 |
| `progressShow` | 是否展示进度提示字 | boolean| true |
