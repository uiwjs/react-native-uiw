MaskLayer 遮罩层
---

用于模态对话框，中的遮罩层。

<!-- ![](https://user-images.githubusercontent.com/66067296/139398306-d038225d-0fee-4009-a4f7-a06c7beabf45.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

<!--DemoStart-->
```jsx  mdx:preview
import React, { Fragment, useState } from 'react';
import { Text,  SafeAreaView } from 'react-native';
import { Button, MaskLayer } from '@uiw/react-native';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <MaskLayer
        visible={visible}
        onDismiss={() => {
          setVisible(!visible);
        }}>
        <SafeAreaView>
          <Text style={{color: '#fff'}}>展示内容</Text>
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

```typescript
interface MaskLayerProps extends RNModalProps {
  /**
   * 遮罩层是否禁止点击
   * defult: `true`
   */
  maskClosable?: boolean;
  /**
   * 是否隐藏
   */
  visible?: boolean;
  /**
   * 遮罩层透明度
   * defult: `0.6`
   */
  opacity?: number;
  /**
   * 隐藏消除回调事件
   */
  onDismiss?: () => void;
  children?: JSX.Element;
}
```
