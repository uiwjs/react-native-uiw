Button 按钮
---

按钮用于开始一个即时操作。

<image src='https://user-images.githubusercontent.com/57083007/137631908-57393986-82b8-4e2e-b753-aa77dac58672.png' alt='Button' style='zoom:33%;' />
<image src='https://user-images.githubusercontent.com/57083007/137631915-8281cbac-ba0d-4795-8f8b-8274bcecc172.png' alt='Button' style='zoom:33%;' />

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


### 显示边框

```jsx
import { Button } from '@uiw/react-native';

function Demo() {
  return (
    <Button bordered={false} color="#f6f8fa">不显示边框{`bordered={false}`}</Button>
  );
}
```

### 自定义圆角

```jsx
import { Fragment } from 'react';
import { Button } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <Button rounded={false} color="#333">设置圆角</Button>
      <Spacing />
      <Button rounded={23} color="#393E48">自定义圆角</Button>
      <Spacing />
      <Button rounded={10} color="#f6f8fa">自定义圆角</Button>
      <Spacing />
      <Button rounded={16} color="#ffc107">自定义圆角</Button>
    </Fragment>
  );
}
```

### Props

组件继承 [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity#docsNav)

```ts
import { TextProps, TouchableOpacityProps } from 'react-native';
export interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  /**
   * 如果子节点是文本，修改文本样式
   */
  textStyle?: TextProps['style'];
  /**
   * 设置禁用
   */
  disabled?: boolean;
  /**
   * 加载状态
   */
  loading?: boolean;
  /**
   * 按钮类型，可选值为
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
  /**
   * 按钮尺寸
   */
  size?: 'small' | 'default' | 'large';
  /**
   * 设置按钮圆角
   */
  rounded?: boolean | number;
  /**
   * 设置是否显示边框
   */
  bordered?: boolean;
}
```