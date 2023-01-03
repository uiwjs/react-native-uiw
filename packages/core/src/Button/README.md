Button 按钮
---

按钮用于开始一个即时操作。

### 基础示例

```tsx  mdx:preview&disableCheckered=false
import React,{ Component } from "react"
// import Button from 'lib/Button';
import Button from '@uiw/react-native/lib/Button';
import Spacing from '@uiw/react-native/lib/Spacing';
import Icon from '@uiw/react-native/lib/Icon';
import Flex from '@uiw/react-native/lib/Flex';
import Layout,{Container} from '@uiw/react-native/lib/Layout';
import {View, Text} from 'react-native';
const {Header, Body, Card, Footer} = Layout;

class ButtonView extends React.Component{
  render() {
    return (
      <Container>
          <Header title="" description="" />
          <Body>
            <Card title="基础实例">
              <Flex>
                <Button>默认按钮</Button>
                <Spacing type="horizontal" />
                <Button>默认按钮</Button>
                <Spacing type="horizontal" />
                <Button>按钮</Button>
              </Flex>
              <Spacing />
              <Button>默认按钮</Button>
              <Spacing />
              <Button disabled>默认禁用按钮</Button>
              <Spacing />
              <Button type="primary">主要按钮 primary </Button>
              <Spacing />
              <Button type="danger" disabled>
                错误按钮 danger
              </Button>
              <Spacing />
              <Button type="success">成功按钮 success</Button>
              <Spacing />
              <Button type="warning" disabled>
                警告禁用按钮 warning
              </Button>
              <Spacing />
              <Button color="#1EABCD" loading>
                加载中 loading
              </Button>
              <Spacing />
              <Button type="light" loading>
                亮按钮 light
              </Button>
              <Spacing />
              <Button type="dark" loading disabled>
                暗按钮 dark
              </Button>
              <Spacing />
              <Button loading>默认按钮</Button>
              <Spacing />
              <Button loading disabled>
                默认按钮 禁用
              </Button>
            </Card>
            <Card title="按钮圆角设置">
              <Button rounded={false} color="#333">
                设置圆角 {'rounded={false}'}
              </Button>
              <Spacing />
              <Button rounded={23} color="#393E48">
                自定义圆角 {'rounded={23}'}
              </Button>
              <Spacing />
              <Button rounded={10} color="#f6f8fa">
                自定义圆角 {'rounded={10}'}
              </Button>
              <Spacing />
              <Button rounded={16} color="#ffc107">
                自定义圆角 {'rounded={16}'}
              </Button>
            </Card>
            <Card title="按钮尺寸 size={'small', 'default', 'large'}">
              <Button size="small" color="#333">
                按钮尺寸 {'size="small"'}
              </Button>
              <Spacing />
              <Button color="#393E48">按钮尺寸 {'rounded={23}'}</Button>
              <Spacing />
              <Button size="large" color="#f6f8fa">
                自定义圆角 {'size="large"'}
              </Button>
            </Card>
            <Card title="自定义颜色">
              <Button color="#333">自定义颜色{'color="#333"'}</Button>
              <Spacing />
              <Button color="#28a745">自定义颜色{'color="#28a745"'}</Button>
              <Spacing />
              <Button color="#008EF0">自定义颜色{'color="#008EF0"'}</Button>
              <Spacing />
              <Button color="#1EABCD">自定义颜色{'color="#1EABCD"'}</Button>
              <Spacing />
              <Button color="#393E48">自定义颜色{'color="#393E48"'}</Button>
              <Spacing />
              <Button color="#ffc107">自定义颜色{'color="#ffc107"'}</Button>
              <Spacing />
              <Button color="#F95C2B">自定义颜色{'color="#F95C2B"'}</Button>
              <Spacing />
              <Button color="#dc3545">自定义颜色{'color="#dc3545"'}</Button>
              <Spacing />
              <Button color="#f6f8fa">自定义颜色{'color="#f6f8fa"'}</Button>
            </Card>
            <Card title="文本样式">
              <Button textStyle={{fontSize: 20}} color="yellow">
                字号调整{'textStyle = {{fontSize:20}}'}
              </Button>
              <Spacing />
              <Button textStyle={{color: 'blue'}}>
                文本颜色{'textStyle={{color:"blue"}}'}
              </Button>
              <Spacing />
              <Button color="#f6f8fa" textStyle={{letterSpacing: 2}}>
                文本间距{'textStyle={{letterSpacing:3}}'}
              </Button>
            </Card>
            <Card title="设置边框">
              <Button bordered={false} color="#f6f8fa">
                不显示边框{'bordered={false}'}
              </Button>
              <Spacing />
              <Button bordered={false} color="#28a745">
                不显示边框{'bordered={false}'}
              </Button>
            </Card>
            <Card title="显示图标">
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                }}>
                <Button bordered={false} color="#fff">
                  <Icon name="apple" size={17} />
                  <Text> 首页</Text>
                </Button>
                <Spacing type="horizontal" />
                <Button bordered={false} color="#fff">
                  <Icon name="menu-fold" size={17} />
                  <Text> 菜单</Text>
                </Button>
              </View>
              <Spacing />
              <Button bordered={false} color="#ffc107">
                <Icon name="warning" size={17} />
                <Text> 菜单</Text>
              </Button>
              <Spacing />
              <Button bordered={false} type="danger">
                <Icon name="warning" fill="#fff" size={17} />
                <Text> 菜单</Text>
              </Button>
            </Card>
          </Body>
          <Footer />
      </Container>
    );
  }
}

export default ButtonView
```

### 不同颜色

```jsx  mdx:preview
import React,{ Component } from "react"
import { View } from 'react-native';
import Button from '@uiw/react-native/lib/Button';

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
export default Demo
```

### 加载中

<!--DemoStart--> 
```jsx  mdx:preview
import React,{ Component } from "react"
import { View } from 'react-native';
import Button from './';
import Buttons from '@uiw/react-native/lib/Button';

class Demo extends Component {
  render() {
    return (
      <View>
        <Buttons loading>默认按钮</Buttons>
        <Button loading disabled>默认按钮 禁用</Button>
      </View>
    )
  }
}
export default Demo
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