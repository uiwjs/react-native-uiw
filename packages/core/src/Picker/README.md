Picker 选择器
---

解决 ios 与 android 和用户交互方式不同问题.
> 🚧测试版本
> 避免出现样式错乱问题, 请尽量使用统一整数数字高度。
> 激活状态尽量不要改变高度, 只是修改颜色作为标记。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!-- ![](https://user-images.githubusercontent.com/66067296/139409471-846bdddb-99cc-4b2d-b2da-278da81b0c22.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React from 'react';
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
export default Demo
```

### 使用自定义元素

```jsx  mdx:preview
import React from 'react';
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
          {label: '5',render: (label, record, index)=><Text>end</Text>},
        ]}
      />
    </View>
  )
}
export default Demo
```

### Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| lines   | 显示行数   | number |  3  |
| rowKey    | 在开始位置设置图标  |  string | - |
| data   | 需要渲染的数据   | Array |  -  |
| containerStyle   | item 容器样式   | obj |  -  |
| textStyle    | 容器的文本样式  | TextStyle | -  |
| value | 选中当前项的下标   | number | -  |
| onChange | value 改变时触发       | fn | -  |
| readonly | 是否只读  | fn | -  |

