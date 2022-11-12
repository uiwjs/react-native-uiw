Picker 选择器
---

解决 ios 与 android 和用户交互方式不同问题.
> 🚧测试版本
> 避免出现样式错乱问题, 请尽量使用统一整数数字高度。 
> 激活状态尽量不要改变高度, 只是修改颜色作为标记。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

![](https://user-images.githubusercontent.com/66067296/139409471-846bdddb-99cc-4b2d-b2da-278da81b0c22.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例
 
```jsx
import { View } from 'react-native';
import { Picker } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flex: 1 }}>
      <Picker 
        data={[
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
        data={[
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

export interface PickerData {
  label?: string,
  render?: (key: string, record: PickerData, index: number)=>React.ReactNode,
  [key: string]: any
}

export interface PickerProps {
  /** 显示几行, 默认 3 */
  lines?: number,
  /** 指定需要显示的 key, 默认使用 data 的 label 属性 */
  rowKey?: string,
  /** 需要渲染的数据 */
  data?: Array<PickerData>,
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
  /** 是否只读 不能点击不能滑动但可以通过value控制 */
  readonly?: boolean
}
```
