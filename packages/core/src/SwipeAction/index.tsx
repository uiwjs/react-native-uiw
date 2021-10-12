import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { Animated, StyleSheet, View, Text, I18nManager, StyleProp, ViewStyle, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export interface SwipeActionProps {
  right?: Array<{
    text: string;
    color: string;
    x?: number;
    onPress?: () => void;
  }>;
  left?: Array<{
    text: string;
    color: string;
    onPress?: () => void;
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
  const { children, right = [], left = [], ...others } = props;
  const swipeableRef: React.MutableRefObject<null> = useRef(null);

  // 右侧滑出
  const renderRightAction = (progress: Animated.AnimatedInterpolation) => {
    return (
      right &&
      right.length > 0 &&
      right.map(({ x = 1, text, color, onPress }, idx) => {
        const trans = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [x, 0],
        });
        return (
          <View
            style={{
              width: '20%',
              flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            }}
          >
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }} key={idx}>
              <RectButton
                style={[styles.rightAction, { backgroundColor: color }]}
                onPress={() => {
                  onPress && onPress();
                }}
              >
                <Text style={styles.actionText}>{text}</Text>
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
      left.length > 0 &&
      left.map(({ text, color, onPress }, idx) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [-20, 0, 0, 1],
          extrapolate: 'clamp',
        });
        return (
          <View
            style={{
              width: '20%',
              flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            }}
          >
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }} key={idx}>
              <RectButton
                style={[styles.rightAction, { backgroundColor: color }]}
                onPress={() => {
                  onPress && onPress();
                }}
              >
                <Text style={styles.actionText}>{text}</Text>
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
      renderRightActions={renderRightAction}
      renderLeftActions={renderLeftAction}
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
});

export default forwardRef(SwipeAction);
