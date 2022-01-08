SwipeAction 滑动操作组件。
---

结合手势操作，从屏幕一侧唤出操作。

![](https://user-images.githubusercontent.com/57083007/146733663-6c83fca4-72df-424d-8364-47533f57ece6.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```tsx
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SwipeAction } from '@uiw/react-native';

export interface SwipeActionProps {
}

export default class SwipeActionView extends Component<SwipeActionProps> {
  newRef: any;
  render() {
    const right = [
      {
        text: '查看',
        color: 'orange',
        x: 250,
        onPress: () => {
          this.newRef?.swipeable?.close()
        },
      },
      {
        text: '删除',
        color: 'red',
        x: 400,
        onPress: () => {
          this.newRef?.swipeable?.close()
        },
      },
      {
        text: '不显示',
        color: 'green',
        x: 400,
        onPress: () => {
          this.newRef?.swipeable?.close()
        },
      },
    ];
    return (
          <SwipeAction
            buttonWidth={60}
            ref={ref => this.newRef = ref}
            right={right}
            onSwipeableRightOpen={() => console.log('right')}
            onSwipeableLeftOpen={() => () => console.log('left')}
          >
            <View style={[styles.view]}>
              <Text>滑动</Text>
            </View>
          </SwipeAction>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  view: {
    height: 30
  },
});

```


### Props
组件继承react-native-gesture-handler[`Swipeable`](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable)
```tsx
export interface Column {
  /** 显示文字 */
  text: string;
  /** 背景色 */
  color: string;
  /** 点击元素触发 */
  onPress?: () => void;
  /** 是否禁用 */ 
  disabled?: boolean;
  /** 自定义元素 */
  render?: (text: string, record: Column, index: number) => React.ReactNode;
}

export interface SwipeActionProps {
  /** 右边滑动出来的元素 */
  right?: Array<Column>;
  /** 左边滑动出来的元素 */
  left?: Array<Column>;
  /** 按钮宽度 默认60 */
  buttonWidth?:string | number
  /** 其余api参考文档 react-native-gesture-handler/Swipeable */
  enableTrackpadTwoFingerGesture?: boolean;
  friction?: number;
  leftThreshold?: number;
  rightThreshold?: number;
  overshootLeft?: boolean;
  overshootRight?: boolean;
  overshootFriction?: number;
  onSwipeableLeftOpen?: () => void;
  onSwipeableRightOpen?: () => void;
  onSwipeableOpen?: () => void;
  onSwipeableClose?: () => void;
  onSwipeableLeftWillOpen?: () => void;
  onSwipeableRightWillOpen?: () => void;
  onSwipeableWillOpen?: () => void;
  onSwipeableWillClose?: () => void;
  children?: React.ReactNode;
  renderLeftActions?: (progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => React.ReactNode;
  renderRightActions?: (progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => React.ReactNode;
  useNativeAnimations?: boolean;
  animationOptions?: Record<string, unknown>;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
}
```