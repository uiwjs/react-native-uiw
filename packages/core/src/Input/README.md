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

```tsx
import { StyleProp,TextStyle,TextInputProps, NativeSyntheticEvent, TextInputFocusEventData, TextInputChangeEventData, KeyboardTypeOptions,ViewStyle } from 'react-native'

export interface InputProps extends TextInputProps {

  /** 唤起键盘类型 详情 https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/ */
  keyboardType?: KeyboardTypeOptions;
  /** 如果为 true，文本框是不可编辑的。默认值为 false */
  disabled?: boolean;
  /** 如果为 true，在componentDidMount后会获得焦点。默认值为 false。 */
  autoFocus?: boolean;
  /** 设置输入框高亮时的颜色（还包括光标）。 */
  selectionColor?: string;
  /** 如果为 true，则隐藏光标。默认值为 false。 */
  caretHidden?: boolean;
  /** 是否显示清除按钮 */
  clear?: boolean;
  /** 清除按钮样式 */
  clearStyle?: StyleProp<TextStyle>;
  /** 自定义清除元素 */
  renderClear?: React.ReactNode;
  /** 如果为 true，每次开始输入的时候都会清除文本框的内容。 */
  clearText?: boolean;
  /** 输入框前缀的额外的信息 */
  extraStart?: string|React.ReactNode
  /** 输入框末尾额外的信息 */
  extraEnd?: string|React.ReactNode
  /** 当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递 */
  onChangeText?: ((text: string) => void);
  /** 当文本框失去焦点的时候调用此回调函数。 */
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
  /** 当文本框内容变化时调用此回调函数。回调参数为{ nativeEvent: { eventCount, target, text} }。 */
  onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void);
  /** 输入框 ref */
  inputRef?: React.RefObject<TextInput>
}

```

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `value` | 输入框默认值 | string | - |
| `rule` | 限制输入条件 | RegExp  | - |
| `wrongfulHandle` | 输入不合法时触发方法 | Function | - |
| `maxLength` | 限制文本框中最多的字符数 | number | - |
| `placeholder` | 如果没有任何文字输入，会显示此字符串 | string | - |
| `style` | 输入框样式 | `StyleProp<TextStyle>` | - |
| `containerStyle` | 容器样式 | `StyleProp<ViewStyle>` | - |
| `error` | 显示错误 | boolean | - |
| `renderError` | 自定义错误提示 | React.ReactNode | - |
| `border` | 边框 | `'bottom'|'top'|'left'|'right'|null|'always'` | - |
| `borderColor` | 边框颜色 | string | - |
| `keyboardType` | 唤起键盘类型 | KeyboardTypeOptions | - |


> 更多 react-native Input 属性请参考 react-native TextInput (https://www.react-native.cn/docs/textinput)