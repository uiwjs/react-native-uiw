Input 文本输入
---

单行文本输入

### 基础示例

```jsx mdx:preview
import React,{ Component } from "react"
import { View, Text } from 'react-native';
import  { Input  }  from '@uiw/react-native';

const Demo = () => {
  const [value, setValue] = React.useState(666)
  return <View>
    <Text>受控组件</Text>
    <Input  value={value} onChange={(e) => setValue(e.target.value)} containerStyle={{marginBottom: 10}} />
    <Text>前缀</Text>
    <Input extraStart="你是？" placeholder="请输入" containerStyle={{marginBottom: 10}} />
    <Text>后缀</Text>
    <Input extraEnd="小数" placeholder="请输入" containerStyle={{marginBottom: 10}} />
    <Text>错误错误</Text>
    <Input error containerStyle={{marginBottom: 10}} />
  </View>
}
export default Demo
```

### 设置边框

```jsx mdx:preview
import React,{ Component } from "react"
import { View, Text } from 'react-native';
import  { Input }  from '@uiw/react-native';

 class BasicInputExample extends Component {
  render() {
    return <View>
      <Text>下边框</Text>
      <Input border="bottom" containerStyle={{marginBottom: 10}}  />
      <Text>左边框</Text>
      <Input border="left" borderColor="red"  />
    </View>
  }
}
export default BasicInputExample
```

### 禁用输入框

```jsx mdx:preview
import React,{ Component } from "react"
import { View, Text } from 'react-native';
import  { Input }  from '@uiw/react-native';

 class BasicInputExample extends Component {
  render() {
    return <View>
      <Text>禁用输入框</Text>
      <Input  disabled/>
    </View>
  }
}
export default BasicInputExample
```

### 限制文本框中最多的字符数
```jsx mdx:preview
import React,{ Component } from "react"
import { View, Text } from 'react-native';
import  { Input }  from '@uiw/react-native';

 class BasicInputExample extends Component {
  render() {
    return <View>
      <Text>禁用输入框</Text>
      <Input  maxLength='5'/>
    </View>
  }
}
export default BasicInputExample
```

### 清除按钮

```jsx mdx:preview
import React,{ Component } from "react"
import { View, Text } from 'react-native';
import  { Input  }  from '@uiw/react-native';

const Demo = () => {
  return <View>
    <Text>清除按钮</Text>
    <Input clear  />
  </View>
}
export default Demo
```


### 每次输入清除内容

```jsx mdx:preview
import React,{ Component } from "react"
import { View, Text } from 'react-native';
import  { Input  }  from '@uiw/react-native';

const Demo = () => {
  return <View>
    <Text>每次输入清除内容</Text>
    <Input clearText={true}  />
  </View>
}
export default Demo
```

### 校验输入内容

```jsx mdx:preview
import React,{ Component } from "react"
import { View, Text } from 'react-native';
import  { Input }  from '@uiw/react-native';

const Demo = () => {
  const [value, setValue] = React.useState()
  return <Input
      value={value}
      border="bottom"
      rule={/^[\d]+$/}
      wrongfulHandle={() => {alert('请输入数字')}}
      placeholder="请输入数字"
    />
}
export default Demo
```


### Props

> 更多 react-native Input 属性请参考 react-native TextInput (https://www.react-native.cn/docs/textinput)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `value` | 输入框默认值 | string | - |
| `rule` | 限制输入条件 | RegExp  | - |
| `wrongfulHandle` | 输入不合法时触发方法 | Function | - |
| `disabled` | 文本框是否可编辑 | boolean  | - |
| `clearText` | 如果为 true，每次开始输入的时候都会清除文本框的内容。 | boolean  | - |
| `error` | 显示错误 | boolean | - |
| `renderError` | 自定义错误提示 | React.ReactNode | - |
| `border` | 边框 | `'bottom'|'top'|'left'|'right'|null|'always'` | - |
| `borderColor` | 边框颜色 | string | - |
| `clear` | 是否显示清除按钮 | boolean | - |
| `clearStyle` | 清除按钮样式 | StyleProp<`TextStyle`> | - |
| `renderClear` | 自定义清除元素 | React.ReactNode | - |
| `extraStart` | 输入框前缀的额外的信息 | string \| React.ReactNode | - |
| `extraEnd` | 输入框末尾额外的信息 | string \| React.ReactNode | - |
| `inputRef` | 输入框ref | React.RefObject<`TextInput`> | - |
| `maxLength` | 限制文本框中最多的字符数 | number | - |
| `placeholder` | 如果没有任何文字输入，会显示此字符串 | string | - |
| `style` | 输入框样式 | `StyleProp<TextStyle>` | - |
| `containerStyle` | 容器样式 | `StyleProp<ViewStyle>` | - |


> 更多 react-native Input 属性请参考 react-native TextInput (https://www.react-native.cn/docs/textinput)
