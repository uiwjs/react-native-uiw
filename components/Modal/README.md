Modal 模态框
---

模态对话框。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { Component } from 'react';
import { View, Text, Alert, SafeAreaView } from 'react-native';
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
      <>
        <Modal
          animationType="none"
          transparent={false}
          // transparent={true}
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
      </>
    );
  }
}
```
<!--End-->

## Props

继承 `ActivityIndicator` 组件属性 [`ActivityIndicatorProps`](https://facebook.github.io/react-native/docs/activityindicator#props)，比原生组件 `ActivityIndicator` 多出更多丰富功能。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| color | 微调器的前景色 | `String` | `gray` |
| maskColor | 遮罩层颜色 | `String` | `rgba(255, 255, 255, 0.85)` |
| size | Loader 图标的大小（默认为 `small`） | `large`, `small` | - |
| loading | 是显示`Indicator`（true）还是隐藏`Indicator`（false） | `Boolean` | `true` |
| vertical | 动画图标与文字垂直显示 | `Boolean` | - |
| rounded | 设置按钮圆角，用于加载内容为圆角的情况） | `Number` | - |
| tip | 当作为包裹元素时，可以自定义描述文案 | `String`, `ReactNode` | - |
