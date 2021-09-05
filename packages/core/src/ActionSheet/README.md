ActionSheet 动作面板
---

该组件提供了一种动作面板, 底部缓缓出现

## 基础示例

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

## 弹层关闭 && 自定义取消文本

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

## Props

```ts
import { ModalProps } from 'react-native';

export interface ActionSheetProps extends ModalProps {
  /** 点击蒙层是否关闭 */
  onCancel?: Boolean,
  /** 是否展示元素 */
  visible: Boolean,
  /** 取消的文本 */
  cancelText?: React.ReactNode
}
```

## ActionSheetItem Props

```ts
export interface ActionSheetProps extends ModalProps {
  /** 点击 Item 触发的事件 */
  onPress?: ((event: GestureResponderEvent) => void),
}
```