import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { Animated, StyleSheet, View, Text, I18nManager, StyleProp, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
  buttonWidth?: number;
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
  const { children, right = [], left = [], buttonWidth = 60, ...others } = props;
  const swipeableRef: React.MutableRefObject<null> = useRef(null);

  // 滑出
  const renderRightAction = (progress: Animated.AnimatedInterpolation, dragX: any, isLeft = true) => {
    const buttons = isLeft ? left : right;
    if (!buttons) {
      return null;
    }
    const length = buttons.length;
    const width = buttonWidth * length;
    return (
      <View style={[styles.viewActions, { width: width }]}>
        {buttons &&
          buttons.map(({ text, color, onPress, disabled, render }, idx) => {
            const x = isLeft ? -idx * buttonWidth : (length - idx) * buttonWidth;
            const trans = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [x, 0],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                  style={[styles.rightAction, { backgroundColor: color }]}
                  onPress={() => {
                    if (disabled && disabled) {
                      return;
                    } else {
                      onPress && onPress();
                    }
                  }}
                >
                  {React.isValidElement(render) ? (
                    render(text, right[idx], idx)
                  ) : (
                    <Text style={[styles.actionText]}>{text}</Text>
                  )}
                </RectButton>
              </Animated.View>
            );
          })}
      </View>
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
      leftThreshold={30}
      rightThreshold={40}
      renderRightActions={(progress, dragX) => renderRightAction(progress, dragX, false)}
      renderLeftActions={(progress, dragX) => renderRightAction(progress, dragX, true)}
      {...others}
    >
      {children && children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 16,
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
