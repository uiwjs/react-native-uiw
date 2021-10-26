MaskLayer 遮罩层
---

用于模态对话框，中的遮罩层。

### 基础示例

<!--DemoStart--> 
```jsx
import { Fragment } from 'react';
import { Text,  SafeAreaView } from 'react-native';
import { Button, MaskLayer } from '@uiw/react-native';

export default () => {
  const [visible, setVisible] = useState(true);
  return (
    <Fragment>
      <MaskLayer
        visible={visible}
        onDismiss={() => {
          setVisible(false);
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
