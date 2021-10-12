SwipeAction 滑动操作组件。
---

结合手势操作，从屏幕一侧唤出操作。


## 基础示例

```jsx
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SwipeAction } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;

export interface SwipeActionProps extends ComProps { }

export default class SwipeActionView extends Component<SwipeActionProps> {
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const right = [
      {
        text: 'More',
        color: "orange",
        x: 250,
        onPress: () => { },
      },
      {
        text: 'Delete',
        color: "red",
        x: 400,
        onPress: () => { },
      }
    ];
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="左右滑动，显示按钮" style={styles.card}>
              <SwipeAction
                right={right}
              >
                <View style={styles.view}>
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
    height: 30,
  },
});

```


## Props
组件继承react-native-gesture-handler[`Swipeable`](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable)
```tsx
export interface SwipeActionProps {
  right: Array<{
    text: string;
    color: string;
    x?: number;
    onPress?: () => void
  }>;
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