Picker 选择器
---

解决 ios 与 android 和用户交互方式不同问题.
> 🚧测试版本
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!-- ![](https://user-images.githubusercontent.com/66067296/139409471-846bdddb-99cc-4b2d-b2da-278da81b0c22.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Picker } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = React.useState(['5'])
  const arr = [
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Picker
        cols={1}
        value={value}
        displayType="view"
        data={arr}
        onChange={val => setValue(val)}
      />
    </SafeAreaView>
  )
}
export default Demo
```

### modal弹框 & 联动

```jsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Picker,Button } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = React.useState(['2', '22', '221'])
  const [visible, setVisible] = React.useState(false)
  const arr = [
    {
      label: '江苏省',
      value: '1',
      children: [
        {
          label: '南京市', value: '11',
          children: [
            { label: '宣武区', value: '111' },
            { label: '雨花台区', value: '112' }
          ]
        },
        {
          label: '苏州市',
          value: '12',
          children: [
            { label: '苏州区', value: '121' }
          ]
        }
      ]
    },
    { label: '北京市', value: '2', children: [{ label: '北京市', value: '22', children: [{ label: '朝阳区', value: '221' }] }] }
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button onPress={() => setVisible(true)}>打开</Button>
      <Picker
        title="标题"
        displayType="modal"
        value={value}
        onChange={val => setValue(val)}
        visible={visible} 
        cols={3}
        onClosed={() => setVisible(false)}
        data={arr}
      />
    </SafeAreaView>
  )
}
export default Demo
```

### Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data   | 选择项列表   | `CascadePickerItemProps[]` | `Array<CascadePickerItemProps[]>` |  []  |
| cols    | 展示几列  |  `number` | 1 |
| value   | 当前值   | `ItemValue[]` |  []  |
| displayType   | 选择器显示类型。view表示在页面显示；modal表示在弹窗中显示；默认为modal   | `view | modal` |  view  |
| onChange    | 修改事件  | `(value?: ItemValue[]) => void` | -  |
| title | 选中当前项的下标   | number | -  |
| visible | 是否弹窗显示       | boolean | false  |
| onClosed | 弹窗关闭事件  | () => void | -  |
| cancelText | 取消按钮文本  | string | 取消  |
| okText | 确认按钮文本  | string | 确认  |

