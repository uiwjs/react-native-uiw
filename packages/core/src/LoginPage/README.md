MaskLayer 遮罩层
---

用于模态对话框，中的遮罩层。

<!-- ![](https://user-images.githubusercontent.com/66067296/139398306-d038225d-0fee-4009-a4f7-a06c7beabf45.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

<!--DemoStart-->
```jsx mdx:preview&background=#bebebe29
import React, { Fragment, useState } from 'react';
import { Text,  SafeAreaView } from 'react-native';
import { Button, MaskLayer,Grid,Icon } from '@uiw/react-native';

const Demo = () => {
  const [visible, setVisible] = useState(false);
    const data = Array.from(new Array(24)).map((_val, i) => {
    return { icon: <Icon name="heart-on" color="red" />, text: `${i}`}
  });
  return (
    <Fragment>
      <MaskLayer
        visible={visible}
        onDismiss={() => {
          setVisible(!visible);
        }}>
        <SafeAreaView style={{alignItems:'center'}}>
            <Grid style={{width:500,heigth:500,}} data={data} columns='6' hasLine={false}/>
        </SafeAreaView>
      </MaskLayer>
      <Button
        onPress={() => {
          setVisible(true);
        }}>
        {visible ? '隐藏模态框' : '显示模态框'}
      </Button>
    </Fragment>
  );
}
export default Demo
```
<!--End-->

### Props

继承原生 Modal 属性 [`ModalProps`](https://facebook.github.io/react-native/docs/modal.html#props)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `maskClosable` | 遮罩层是否禁止点击 | `Boolean` | `true` |
| `visible` | 遮罩层是否隐藏 |`Boolean` | - |
| `opacity` | 遮罩层透明度 | - | 0.6 |
| `onDismiss` | 隐藏消除回调事件 | () => void | - |
| `children` | 子元素 | JSX.Element |  |


