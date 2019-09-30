Button 图标
---

按钮用于开始一个即时操作。

### 基础示例

<!--DemoStart--> 
```jsx
import { View } from 'react-native';
import { Button } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap-reverse'
        }}
      >
        <Button>默认按钮</Button>
        <Button>默认按钮</Button>
        <Button>按钮</Button>
      </View>
    )
  }
}
```
<!--End-->

### 不同颜色

<!--DemoStart--> 
```jsx
import { View } from 'react-native';
import { Button } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <Button>默认按钮</Button>
        <Button disabled>默认禁用按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="primary" disabled>主要禁用</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="warning" disabled>警告禁用按钮</Button>
        <Button type="warning" loading>警告</Button>
        <Button type="warning" loading disabled>警告按钮</Button>
      </View>
    )
  }
}
```
<!--End-->

### 加载中

<!--DemoStart--> 
```jsx
import { View } from 'react-native';
import { Button } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <Button loading>默认按钮</Button>
        <Button loading disabled>默认按钮 禁用</Button>
      </View>
    )
  }
}
```
<!--End-->


### 自定义颜色

<!--DemoStart--> 
```jsx
import { View } from 'react-native';
import { Button } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <Button color="#333">自定义颜色按钮</Button>
        <Button color="#393E48">自定义颜色按钮</Button>
        <Button color="#f6f8fa">自定义颜色按钮</Button>
        <Button color="#ffc107">自定义颜色按钮</Button>
      </View>
    )
  }
}
```
<!--End-->


## 显示边框

```jsx
import { Button } from '@uiw/react-native';

function Demo() {
  return (
    <Button bordered={false} color="#f6f8fa">不显示边框{`bordered={false}`}</Button>
  );
}
```

## 自定义圆角

```jsx
import { Button } from '@uiw/react-native';

function Demo() {
  return (
    <>
      <Button rounded={false} color="#333">设置圆角</Button>
      <Spacing />
      <Button rounded={23} color="#393E48">自定义圆角</Button>
      <Spacing />
      <Button rounded={10} color="#f6f8fa">自定义圆角</Button>
      <Spacing />
      <Button rounded={16} color="#ffc107">自定义圆角</Button>
    </>
  );
}
```

## Props

组件继承 [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity#docsNav)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `color` | 设置按钮颜色 | String | - |
| `textStyle` | 如果按钮内是文本，此样式可以设置文本样式 | `TextProps.Style` | - |
| `disabled` | 设置禁用 | Boolean | - |
| `loading` | 加载状态 | Boolean | - |
| `rounded` | 设置圆角 | Boolean/Number | `5` |
| `bordered` | 是否有边框 | Boolean | `true` |
| `size` | 按钮尺寸 | `small`, `default`, `large` | `default` |
| `type` | 按钮类型，可选值为 | `primary`, `success`, `warning`, `danger`, `light`, `dark` | - |

