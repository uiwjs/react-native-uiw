Button 按钮
---

按钮用于开始一个即时操作。

### 何时使用

标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。


### 基础实例

```jsx mdx:preview&background=#bebebe29
import React,{ Component } from "react"
import  { Button, Spacing, Icon } from '@uiw/react-native';
import { Text} from 'react-native';

function Demo() {
  return (
    <>
      <Button>default</Button>
      <Spacing/>
      <Button disabled>disabled</Button>
      <Spacing/>
      <Button type="primary" onPress={()=>console.log("The Button")}>primary</Button>
      <Spacing/>
      <Button type="warning">warning</Button>
      <Spacing/>
      <Button bordered={false} type="danger">
        <Icon name="warning" fill="#fff" size={17} />
        <Text> warning</Text>
      </Button>
      <Spacing/>
      <Button  loading>loading</Button>
    </>
  )
}
export default Demo
```

### 按钮圆角设置

```jsx mdx:preview&background=#bebebe29
import React,{ Component } from "react"
import  { Button, Spacing } from '@uiw/react-native';


function Demo() {
  return (
    <>
      <Spacing />
      <Button rounded={23} type="primary">
        自定义rounded
      </Button>
    </>
  )
}
export default Demo
```

### 不同颜色

```jsx mdx:preview&background=#bebebe29
import React,{ Component } from "react"
import  { Button, Spacing } from '@uiw/react-native';


function Demo() {
  return (
    <>
      <Button>default</Button>
      <Spacing/>
      <Button type="primary">primary</Button>
      <Spacing/>
      <Button type="warning">warning</Button>
      <Spacing/>
      <Button type="success">success</Button>
      <Spacing/>
      <Button type="danger" >danger</Button>
      <Spacing/>
      <Button type="light" >light</Button>
      <Spacing/>
      <Button type="dark" >dark</Button>
    </>
  )
}
export default Demo
```

### 自定义颜色

```jsx mdx:preview&background=#bebebe29
import React,{ Component } from "react"
import  { Button, Spacing } from '@uiw/react-native';


function Demo() {
  return (
    <>
      <Button color="#333">#333</Button>
      <Spacing />
      <Button color="#28a745">#28a745</Button>
      <Spacing />
      <Button color="#008EF0">#008EF0</Button>
    </>
  )
}
export default Demo
```

### 加载中


```jsx mdx:preview&background=#bebebe29
import React,{ Component } from "react"
import  { Button, Spacing } from '@uiw/react-native';

function Demo() {
  return (
    <>
      <Button loading>loading</Button>
      <Spacing />
      <Button loading disabled>loading disabled</Button>
    </>
  )
}
export default Demo
```

### 显示边框

```jsx mdx:preview&background=#bebebe29

import React,{ Component } from "react"
import  { Button, Spacing } from '@uiw/react-native';

function Demo() {
  return (
    <>
    <Button >显示边框</Button>
    <Spacing />
    <Button bordered={false} >不显示边框{`bordered={false}`}</Button>
    </>
  );
}

export default Demo

```
### 按钮尺寸

```jsx mdx:preview&background=#bebebe29

import React,{ Component } from "react"
import  { Button, Spacing } from '@uiw/react-native';

function Demo() {
  return (
    <>
    <Button >default</Button>
    <Spacing />
    <Button size="small">small</Button>
    <Spacing />
    <Button size="large">large</Button>
    <Spacing />
    </>
  );
}

export default Demo

```

### 自定义图标

```jsx mdx:preview&background=#bebebe29

import React,{ Component } from "react"
import  { Button, Spacing, Icon } from '@uiw/react-native';
import {View, Text} from 'react-native';

function Demo() {
  return (
    <>
      <Button bordered={false} color="#fff">
        <Icon name="apple" size={17} />
        <Text> apple</Text>
      </Button>
      <Spacing  />
      <Button bordered={false} color="#fff">
        <Icon name="menu-fold" size={17} />
        <Text> menu-fold</Text>
      </Button>
      <Spacing />
      <Button bordered={false} color="#ffc107">
        <Icon name="warning" size={17} />
        <Text> warning</Text>
      </Button>
      <Spacing />
      <Button bordered={false} type="danger">
        <Icon name="warning" fill="#fff" size={17} />
        <Text> warning</Text>
      </Button>
    </>
  );
}

export default Demo
```

### Button

#### 属性

组件继承 [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity#docsNav)

注：当你设置按钮颜色时如果使用`color`或者`backgroundColor`时，设置的颜色是`黑色`或者`白色`时，文本颜色会和你设置的按钮背景色是一样的哦！！

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 自定义颜色 | `string` | -｜
| disabled | 是否禁用 | `boolean` | `false` |
| bordered | 设置是否显示边框 | `boolean` | `true` |
| loading | 加载状态 | `boolean` | `false` |
| rounded | 设置按钮圆角 | `boolean \| number` | `5` |
| textStyle | 如果子节点是文本，修改文本样式 | - | - |
| type | 按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'dark'` | - |
| size | 按钮尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |

