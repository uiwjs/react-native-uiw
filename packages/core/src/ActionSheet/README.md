ActionSheet 动作面板
---

该组件提供了一种动作面板, 底部缓缓出现

<!-- ![](https://user-images.githubusercontent.com/57083007/137631382-70df5dd3-0200-4ddb-bd11-3578ee99d032.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例
```jsx  mdx:preview
import React, { Fragment, useState } from 'react';
import { Button, ActionSheet }  from '@uiw/react-native';
import { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'

function Demo() {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
     <Button onPress={()=>setVisible(true)}>打开 ActionSheet</Button>
      <ActionSheet visible={visible}>
        <ActionSheetItem onPress={()=>console.log('按钮一')}>按钮一</ActionSheetItem>
        <ActionSheetItem onPress={()=>console.log('按钮二')}>按钮二</ActionSheetItem>
      </ActionSheet>
    </Fragment>
  );
}
export default Demo
```

### 自定义按钮文字
```jsx  mdx:preview
import React, { Fragment, useState } from 'react';
import { Button, ActionSheet }  from '@uiw/react-native';
import { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'

function Demo() {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
     <Button onPress={()=>setVisible(true)}>打开 ActionSheet</Button>
      <ActionSheet
        visible={visible}
        onCancel={true}
        cancelText='关闭弹层'
      >
        <ActionSheetItem onPress={()=>console.log('按钮一')}>按钮一</ActionSheetItem>
        <ActionSheetItem onPress={()=>console.log('按钮二')}>按钮二</ActionSheetItem>
      </ActionSheet>
    </Fragment>
  );
}
export default Demo
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| onCancel | 点击蒙层是否关闭 | Boolean | `false` |
| dividerStyle | 分割线样式 | DividerStyleProps | - |
| containerStyle | 取消的容器样式 | StyleProp<`ViewStyle`> | - |
| activeOpacity | 动作在被触摸操作激活时以多少不透明度显示 | number | `#f1f1f1` |
| underlayColor | 动作有触摸操作时显示出来的底层的颜色 | string | `#f1f1f1` |
| cancelText | 取消的文本 | `React.ReactNode` | - |
| textStyle | 取消的文本样式 | `StyleProp<TextStyle>` | - |

### DividerStyleProps
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| itemDivider | - | StyleProp<`ViewStyle`> | `false` |
| actionDivider | - | StyleProp<`ViewStyle`> | - |

### ActionSheetItemProps
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| containerStyle | 容器样式 | `StyleProp<ViewStyle>` | - |
| textStyle | 文本样式 | `StyleProp<ViewStyle>` | - |
| onPress | 点击 ActionSheetItem 触发的事件 | `(event: GestureResponderEvent) => void` | - |

