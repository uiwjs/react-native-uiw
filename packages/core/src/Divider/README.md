Divider 分割线
---

区隔内容的分割线。

### 基础示例

```jsx  mdx:preview
import React,{Component, Fragment } from "react"
import { View, Text } from 'react-native';
import  { Divider }  from '@uiw/react-native';

class Demo extends Component {
  render() {
  return (
    <Fragment>
      <Text style={{ color: '#555' }}>分割线</Text>
      <Divider label="OR" labelStyle={{ color: '#555' }}/>
      <Text style={{ color: '#555' }}>横向分割线</Text>
      <Divider labelStyle={{ color: '#555' }}/>
      <Text style={{ color: '#555' }}>分割线</Text>
    </Fragment>
  );
  }
}
export default Demo

```

### 分割线间距

根据 `type` 来设置上下或者左右间距，默认为 8

```jsx  mdx:preview
import React,{Component, Fragment } from "react"
import { View, Text } from 'react-native';
import  { Divider }  from '@uiw/react-native';

class Demo extends Component {
  render() {
  return (
    <Fragment>
      <Text style={{ color: '#555' }}>分割线</Text>
      <Divider label="OR" gutter={50} labelStyle={{ color: '#555' }}/>
      <Text style={{ color: '#555' }}>分割线</Text>
      <Divider label="OR" gutter={100} labelStyle={{ color: '#555' }}/>
    </Fragment>
  );
  }
}
export default Demo

```

### 分割线标题位置

```jsx  mdx:preview
import React,{Component, Fragment } from "react"
import { View, Text } from 'react-native';
import  { Divider }  from '@uiw/react-native';

class Demo extends Component {
  render() {
  return (
    <Fragment>
      <Text style={{ color: '#555' }}>分割线</Text>
      <Divider label="left" orientation="left" labelStyle={{ fontWeight: 'bold', color: '#555' }} />
      <Text style={{ color: '#555' }}>分割线</Text>
      <Divider label="center" labelStyle={{ fontWeight: 'bold', color: '#555' }} />
      <Text style={{ color: '#555' }}>分割线</Text>
      <Divider label="right" orientation="right" labelStyle={{ fontWeight: 'bold', color: '#555' }} />
    </Fragment>
  );
  }
}
export default Demo

```

### 纵向分割线

```jsx  mdx:preview
import React,{Component} from "react"
import { View, Text } from 'react-native';
import  { Divider }  from '@uiw/react-native';

class Demo extends Component {
  render() {
  return (
   <View style={{ height: 200 }}>
      <Divider type="vertical" label="OR"  labelStyle={{ color: '#555' }} />
    </View>
  );
  }
}
export default Demo

```

### props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `label` | 分割线标题，文本内容 | String | - |
| `type` | 水平还是垂直类型 | `horizontal`, `vertical` | `horizontal` |
| `gutter` | 间距，根据 `type` 来设置上下或者左右间距 | Number | `8` |
| `orientation` | 分割线标题的位置 |  `left`, `right`,`center`| `center` |
