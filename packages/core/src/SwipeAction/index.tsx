import React, { useImperativeHandle, forwardRef, useRef, useCallback } from 'react';
import { Animated, StyleSheet, View, Text, I18nManager, StyleProp, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
  render?: (text: string, record: Column, index: number) => React.ReactNode;
}

export interface SwipeActionProps {
  /** 右边滑动出来的元素 */
  right?: Array<Column>;
  /** 左边滑动出来的元素 */
  left?: Array<Column>;
  swipeWidth?: string | number;
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
  renderLeftActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation,
  ) => React.ReactNode;
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation,
  ) => React.ReactNode;
  useNativeAnimations?: boolean;
  animationOptions?: Record<string, unknown>;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
}

const SwipeAction = (props: SwipeActionProps, ref: any) => {
  const { children, right = [], left = [], swipeWidth = '20%', ...others } = props;
  const swipeableRef: React.MutableRefObject<null> = useRef(null);

  const renderRight = useCallback(() => {
    return renderRightAction;
  }, [right, swipeWidth]);

  const renderLeft = useCallback(() => {
    return renderLeftAction;
  }, [left, swipeWidth]);

  // 右侧滑出
  const renderRightAction = (progress: Animated.AnimatedInterpolation) => {
    return (
      right &&
      right.map(({ x = 1, text, color, onPress, render }, idx) => {
        const trans = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [x, 0],
        });
        return (
          <View key={idx} style={[styles.viewActions, { width: swipeWidth }]}>
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
              <RectButton
                style={[styles.rightAction, { backgroundColor: color }]}
                onPress={() => {
                  onPress && onPress();
                }}
              >
                {render ? render(text, right[idx], idx) : <Text style={styles.actionText}>{text}</Text>}
              </RectButton>
            </Animated.View>
          </View>
        );
      })
    );
  };
  // 左侧滑出
  const renderLeftAction = (progress: Animated.AnimatedInterpolation, dragX: any) => {
    return (
      left &&
      left.map(({ text, color, onPress, render }, idx) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [-20, 0, 0, 1],
          extrapolate: 'clamp',
        });
        return (
          <View style={[styles.viewActions, { width: swipeWidth }]} key={idx}>
            <Animated.View style={[{ flex: 1, transform: [{ translateX: trans }] }]}>
              <RectButton
                style={[styles.rightAction, { backgroundColor: color }]}
                onPress={() => {
                  onPress && onPress();
                }}
              >
                {render ? render(text, left[idx], idx) : <Text style={styles.actionText}>{text}</Text>}
              </RectButton>
            </Animated.View>
          </View>
        );
      })
    );
  };

  // 暴露给父组件调用 Swipeable上的方法
  useImperativeHandle(ref, () => ({
    swipeable: swipeableRef.current,
  }));

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={50}
      leftThreshold={50}
      overshootRight={false}
      renderRightActions={renderRight()}
      renderLeftActions={renderLeft()}
      {...others}
    >
      {children && children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  viewActions: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
});

export default forwardRef(SwipeAction);
