Modal 模态框
---

模态对话框。

<!-- ![](https://user-images.githubusercontent.com/66067296/139399162-48bcc944-ad6d-424c-bca8-2d4e0fc1a764.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React, { useState, Fragment } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Modal, Button,Grid, Icon } from '@uiw/react-native';

function ButtonGroupView() {
  const [lowerModal,setLowerModal]= useState(false)
  const [topModal,setTopModal]= useState(false)
  const [leftModal,setLeftModal]= useState(false)
  const [rightModal,setRightModal]= useState(false)
  const data = Array.from(new Array(24)).map((_val, i) => {
    return { icon: <Icon name="heart-on" color="red" />, text: `${i}`}
  });
  return (
    <Fragment>
      <Modal visible={lowerModal}>
        <SafeAreaView>
          <View>
            <Button onPress={() => setLowerModal(false)}>
              隐藏下面弹出的模态框
            </Button>
            <Grid data={data} columns='6' hasLine={false}/>
          </View>
        </SafeAreaView>
      </Modal>

      <Modal visible={topModal} placement='top'>
        <SafeAreaView>
          <View>
            <Grid data={data} columns='6' hasLine={false}/>
            <Button onPress={() => setTopModal(false)}>
              隐藏上面弹出的模态框
            </Button>
          </View>
        </SafeAreaView>
      </Modal>

      <Modal visible={leftModal} placement='left' >
        <SafeAreaView style={{width:600}}>
          <View>
            <Grid data={data} columns='6' hasLine={false}/>
            <Button onPress={() => setLeftModal(false)}>
              隐藏左边弹出的模态框
            </Button>
          </View>
        </SafeAreaView>
      </Modal>

      <Modal visible={rightModal} placement='right'>
        <SafeAreaView style={{width:600}}>
          <View>
            <Grid data={data} columns='6' hasLine={false}/>
            <Button onPress={() => setRightModal(false)}>
              隐藏右边弹出的模态框
            </Button>
          </View>
        </SafeAreaView>
      </Modal>
      <Button onPress={() => setLowerModal(true)}>
        下面显示
      </Button>
         <Button onPress={() => setTopModal(true)}>
        上面显示
      </Button>
         <Button onPress={() => setLeftModal(true)}>
        左边显示
      </Button>
         <Button onPress={() => setRightModal(true)}>
        右边显示
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

