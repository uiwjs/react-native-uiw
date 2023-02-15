Modal 模态框
---

模态对话框。

<!-- ![](https://user-images.githubusercontent.com/66067296/139399162-48bcc944-ad6d-424c-bca8-2d4e0fc1a764.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React, { useState, Fragment } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Modal, Button } from '@uiw/react-native';

function ButtonGroupView() {
  const [modalVisible,setModalVisible]= useState(false)

  return (
    <Fragment>
      <Modal
        visible={modalVisible}
      >
        <SafeAreaView>
          <View>
            <Text>Hello World!</Text>
            <Button onPress={() => setModalVisible(false)}>
              隐藏模态框
            </Button>
          </View>
        </SafeAreaView>
      </Modal>
      <Button onPress={() => setModalVisible(true)}>
        显示模态框
      </Button>
    </Fragment>
  );
}
export default ButtonGroupView
```

### Props

继承原生 Modal 属性 [`ModalProps`](https://facebook.github.io/react-native/docs/modal.html#props)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| placement | 模态框的方向 | `'top' \| 'right' \| 'bottom' \| 'left'` | bottom |
| onClosed | 关闭函数 | `() => void` | - |

