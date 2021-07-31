Input 文本输入
---

单行文本输入

### 基础示例

```jsx

import React from 'react';
import { View, Input } from '@uiw/react-native';

export default class BasicInputExample extends React.Component {
  render() {
    return <View>
      <Input style={styles.input} onChange={(value) => {this.setState({value})}} value={this.state.value} />
       <Input style={styles.input} extra="小数" />
        <Input style={styles.input} error />
         <Input style={styles.input} type="phone" />
    </View>
  }
}

```


## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `clear` | 是否显示清除按钮 | boolean | false |
| `extra` | 额外的文字 | ReactNode \| string | - |
| `error` | 是否显示错误 | boolean | false |
| `onExtraClick` | `extra` 点击事件触发的回调函数	 | (e: Object): void | - |
| `onErrorClick` | 点击报错 `icon` 触发的回调函数	 | (e: Object): void | - |


> 更多 react-native InputItem 属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)