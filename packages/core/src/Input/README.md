Input 文本输入
---

单行文本输入

### 基础示例

```jsx

import React from 'react';
import { View, Input } from '@uiw/react-native';
import {View} from 'react-native';

export default class BasicInputExample extends React.Component {
  render() {
    return <View>
      <Input onChange={(value) => {this.setState({value})}} value={this.state.value} />
      <Input extra="小数" />
      <Input error />
    </View>
  }
}

```


### Props

```tsx
import { StyleProp,TextStyle,TextInputProps, NativeSyntheticEvent, TextInputFocusEventData, TextInputChangeEventData, KeyboardTypeOptions,ViewStyle } from 'react-native'

export interface InputProps extends TextInputProps {
  /** 输入框默认值 */
  value?: string;
  /** 限制输入条件 */
  rule?: RegExp | (value: string)=>boolean;
  /** 输入不合法时触发方法 */
  wrongfulHandle?: Function;
  /** 限制文本框中最多的字符数。使用这个属性而不用 JS 逻辑去实现，可以避免闪烁的现象。 */
  maxLength?: number;
  /** 如果没有任何文字输入，会显示此字符串。 */
  placeholder: string;
  /** 输入框样式 */
  style?: StyleProp<TextStyle>;
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 显示错误 */
  error?: boolean;
  /** 自定义错误提示 */
  renderError?: React.ReactNode;
  /** 边框 */
  border?: 'bottom'|'top'|'left'|'right'|null|'always';
  /** 边框颜色 */
  borderColor?: string;
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


> 更多 react-native Input 属性请参考 react-native TextInput (https://www.react-native.cn/docs/textinput)