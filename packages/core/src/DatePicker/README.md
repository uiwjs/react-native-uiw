DatePicker 
---
时间选择器
> 🚧测试版本
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基础示例
 
```jsx
import { useState } from 'react'
import { View,Text } from 'react-native';
import { DatePicker } from '@uiw/react-native';
function Demo() {
  const [visible,setVisible] = useState(false)
  const [formatDate,setFormatDate] = useState('')
  const [value,setValue] = useState(undefined)
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() =>setVisible(true)}>打开</Button>
      <View><Text>{formatDate}</Text></View>
      <DatePicker
        title="请选择日期"
        mode="datetime"
        format='YYYY-MM-DD HH:mm:ss'
        visible={visible}
        onClosed={() => setVisible(false)}
        value={value}
        onChange={(value,formatDate) => {
          setValue(value)
          setFormatDate(formatDate)
        }}
      />
    </View>
  )
}
export default Demo
```

### props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| displayType   | 选择器显示类型。view表示在页面显示；modal表示在弹窗中显示；默认为modal   | `view | modal` |  view  |
| onChange    | 修改事件  | `(value?: ItemValue[]) => void` | -  |
| title | 选中当前项的下标   | number | -  |
| visible | 是否弹窗显示       | boolean | false  |
| onClosed | 弹窗关闭事件  | () => void | -  |
| cancelText | 取消按钮文本  | string | 取消  |
| okText | 确认按钮文本  | string | 确认  |
| mode | 显示模式  | `datetime | date | time| month | year` | datetime  |
| labelUnit | 单位文字  |  { year: string; month: string; day: string; hour: string; minute: string } | { year: '年', month: '月', day: '日', hour: '时', minute: '分' }  |
| format | 日期格式化  | string | YYYY-MM-DD HH:mm  |
| value | 当前日期  | Date | - |
| onChange | 日期修改事件  | (date?: Date, formatDate?: string) => void | - |
| minDate | 最小日期  | string | - |
| maxDate | 最大日期  | string | - |


DatePeriodInput 
---
时间区间选择器

### 基础示例
 
```jsx
import { useState } from 'react'
import { View,Text } from 'react-native';
import { DatePeriodInput } from '@uiw/react-native';
function Demo() {
  const [value,setValue] = useState(undefined)
  return (
    <View style={{ flex: 1 }}>
      <DatePeriodInput
        title="请选择日期"
        mode="datetime"
        format='YYYY-MM-DD HH:mm:ss'
        value={value}
        onChange={(value) => setValue(value)}
      />
    </View>
  )
}
export default Demo
```

### props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| mode | 显示模式  | `datetime | date | time| month | year` | datetime  |
| labelUnit | 单位文字  |  { year: string; month: string; day: string; hour: string; minute: string } | { year: '年', month: '月', day: '日', hour: '时', minute: '分' }  |
| format | 日期格式化  | string | YYYY-MM-DD HH:mm  |
| value | 当前日期  | [Date | undefined, Date | undefined] | - |
| onChange | 日期修改事件  | (date?:[Date | undefined, Date | undefined]) => void | - |
| cancelText | 取消按钮文本  | string | 取消  |
| okText | 确认按钮文本  | string | 确认  |
| placeholder | 默认提示语  | [string, string] | ['请选择', '请选择']  |
| allowClear | 是否允许清除  | boolean | true  |
| disabled | 是否禁用  | boolean | false  |
