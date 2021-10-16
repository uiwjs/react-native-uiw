SwipeAction 滑动操作组件。
---

结合手势操作，从屏幕一侧唤出操作。


### 基础示例

```jsx
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SwipeAction } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;

export interface SwipeActionProps extends ComProps {
}

export default class SwipeActionView extends Component<SwipeActionProps> {
  newRef: any;
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const right = [
      {
        text: '查看备注',
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
    const left = [
      {
        text: '左侧查看',
        color: 'pink',
        onPress: () => {
          this.newRef?.swipeable?.close()
        },
      },
    ];
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="左右滑动，显示按钮" style={styles.card}>
              <SwipeAction
                ref={ref => this.newRef = ref}
                right={right}
                left={left}
                onSwipeableRightOpen={() => console.log('right')}
                onSwipeableLeftOpen={() => () => console.log('left')}
              >
                <View style={[styles.view]}>
                  <Text>滑动</Text>
                </View>
              </SwipeAction>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
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
  /** 滑动距离多少出现 */
  x?: number;
  /** 点击元素触发 */
  onPress?: () => void;
  /** 自定义元素 */
  render?:(text:string,record: Column,index: number)=>React.ReactNode
}

export interface SwipeActionProps {
  /** 右边滑动出来的元素 */
  right?: Array<Column>;
  /** 左边滑动出来的元素 */
  left?: Array<Column>;
  /** 滑动条宽度 默认20% */
  swipeWidth?:string | number
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