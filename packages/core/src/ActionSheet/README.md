ActionSheet 动作面板
---

该组件提供了一种动作面板, 底部缓缓出现

<image src='https://user-images.githubusercontent.com/57083007/137631382-70df5dd3-0200-4ddb-bd11-3578ee99d032.gif' alt='ActionSheet' style='zoom:33%;' />

### 基础示例

```jsx
import { Fragment, useState } from 'react';
import { ActionSheet, Button,ActionSheetItem } from '@uiw/react-native';
function Demo() {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
     <Button onPress={()=>setVisible(true)}>打开 ActionSheet</Button>
      <ActionSheet
        visible={visible}
      >
        <ActionSheetItem onPress={()=>console.log('按钮一')}>按钮一</ActionSheetItem>
        <ActionSheetItem onPress={()=>console.log('按钮二')}>按钮二</ActionSheetItem>
      </ActionSheet>
    </Fragment>
  );
}
```

### 弹层关闭 && 自定义取消文本

```jsx
import { Fragment, useState } from 'react';
import { ActionSheet, Button,ActionSheetItem } from '@uiw/react-native';
function Demo() {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
     <Button onPress={()=>setVisible(true)}>打开 ActionSheet</Button>
      <ActionSheet
        visible={visible}
        onCancel={true}
        cancelText='取消'
      >
        <ActionSheetItem onPress={()=>console.log('按钮一')}>按钮一</ActionSheetItem>
        <ActionSheetItem onPress={()=>console.log('按钮二')}>按钮二</ActionSheetItem>
      </ActionSheet>
    </Fragment>
  );
}
```

### Props

```ts
import { StyleProp, ViewStyle } from 'react-native';
import { ModalProps } from '@uiw/react-native';

export interface DividerStyle {
  itemDivider?: StyleProp<ViewStyle>,
  actionDivider?: StyleProp<ViewStyle>,
}

export interface ActionSheetProps extends ModalProps {
  /** 点击蒙层是否关闭 */
  onCancel?: Boolean;
  /** 分割线样式 */
  dividerStyle?: DividerStyle;
  /** 取消的容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 动作在被触摸操作激活时以多少不透明度显示 默认 1 */
  activeOpacity?: number;
  /** 动作有触摸操作时显示出来的底层的颜色 默认 #f1f1f1 */
  underlayColor?: string;
  /** 取消的文本样式 */
  textStyle?: StyleProp<TextStyle>;
  /** 取消的文本 */
  cancelText?: React.ReactNode;
}
```

### ActionSheetItem Props

```ts
import { TextStyle, StyleProp, ViewStyle } from 'react-native';

export interface ActionSheetItemProps {
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 文本样式 */
  textStyle?: StyleProp<TextStyle>;
  /** 点击 ActionSheetItem 触发的事件 */
  onPress?: ((event: GestureResponderEvent) => void),
}
```