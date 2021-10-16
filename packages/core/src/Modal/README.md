Modal 模态框
---

模态对话框。

### 基础示例

<!--DemoStart--> 
```jsx
import { Component, Fragment } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Modal, Button } from '@uiw/react-native';

export default class ButtonGroupView extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Fragment>
        <Modal
          visible={this.state.modalVisible}
        >
          <SafeAreaView>
            <View>
              <Text>Hello World!</Text>
              <Button onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                隐藏模态框
              </Button>
              <Icon name="apple" />
            </View>
          </SafeAreaView>
        </Modal>
        <Button onPress={() => this.setModalVisible(true)}>
          显示模态框
        </Button>
      </Fragment>
    );
  }
}
```
<!--End-->

### Props

继承原生 Modal 属性 [`ModalProps`](https://facebook.github.io/react-native/docs/modal.html#props)

```ts
export interface ModalProps extends MaskLayerProps {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  onClosed?: () => void;
}
```