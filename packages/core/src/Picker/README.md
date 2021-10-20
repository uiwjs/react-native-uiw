Picker 选择器
---

解决 ios 与 android 和用户交互方式不同问题.

### 基础示例
 
```jsx
import { View } from 'react-native';
import { Picker } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flex: 1 }}>
      <Picker 
        date={[
          {label: '1'},
          {label: '2'},
          {label: '3'},
          {label: '4'},
          {label: '5'},
        ]}
      />
    </View>
  )
}
```

### 使用自定义元素

```jsx
import { View, Text } from 'react-native';
import { Picker } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flex: 1 }}>
      <Picker 
        date={[
          {label: '1'},
          {label: '2'},
          {label: '3'},
          {label: '4'},
          {label: '5'},
          {label: '5',render: (label, record, index)=><Text>123</Text>},
        ]}
      />
    </View>
  )
}
```



### Props

```ts
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface PickerDate {
  label?: string,
  render?: (key: string, record: PickerDate, index: number)=>React.ReactNode,
  [key: string]: any
}

export interface PickerProps {
  /** 显示几行, 默认 3 */
  lines?: number,
  /** 指定需要显示的 key, 默认使用 data 的 label 属性 */
  key?: string,
  /** 需要渲染的数据 */
  date?: Array<PickerDate>,
  /** item 容器样式 */
  containerStyle?: {
    /** 激活的容器样式 */
    actived?: StyleProp<ViewStyle>,
    /** 未激活的容器样式 */
    unactived?: StyleProp<ViewStyle>,
  },
  /** 容器的文本样式 */
  textStyle?: {
    /** 激活的文本样式 */
    actived?: StyleProp<TextStyle>,
    /** 未激活的文本样式 */
    unactived?: StyleProp<TextStyle>,
  },
  /** 选中当前项的下标 */
  value?: number,
  /** value 改变时触发 */
  onChange?: (value: number)=>unknown,
}
```
