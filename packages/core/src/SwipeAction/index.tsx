import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { Animated, StyleSheet, View, Text, I18nManager, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable, { SwipeableProps } from 'react-native-gesture-handler/Swipeable';

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

export interface SwipeActionProps extends SwipeableProps {
  /** 右边滑动出来的元素 */
  right?: Array<Column>;
  /** 左边滑动出来的元素 */
  left?: Array<Column>;
  /** 按钮宽度 默认60 */
  buttonWidth?: number;
  actionViewStyle?: ViewStyle;
  rectButtonStyle?: ViewStyle;
  children?: React.ReactNode;
}

const SwipeAction = (
  props: SwipeActionProps,
  ref: React.ForwardedRef<Partial<React.LegacyRef<Swipeable>> | undefined | null>,
) => {
  const { right = [], left = [], buttonWidth = 60, children, actionViewStyle, rectButtonStyle, ...others } = props;
  const swipeableRef: React.MutableRefObject<null> = useRef(null);

  useImperativeHandle(ref, () => ({ swipeable: swipeableRef.current }));

  // 滑出
  const renderRightAction = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
    isLeft = true,
  ) => {
    const buttons = isLeft ? left : right;
    if (!buttons) {
      return null;
    }
    const length = buttons.length;
    const width = buttonWidth * length;
    return (
      <View style={[styles.viewActions, { width: width, ...actionViewStyle }]}>
        {buttons &&
          buttons.map(({ text, color, onPress, disabled, render }, idx) => {
            const x = isLeft ? -idx * buttonWidth : (length - idx) * buttonWidth;
            const trans = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [x, 0],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View key={idx} style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                  style={[styles.rightAction, { backgroundColor: color, ...rectButtonStyle }]}
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

  const commonProps: Omit<Partial<SwipeActionProps>, 'right' | 'left' | 'buttonWidth' | 'children'> & {
    ref?: React.LegacyRef<Swipeable>;
  } = {
    ref: swipeableRef,
    friction: 2,
    enableTrackpadTwoFingerGesture: true,
    rightThreshold: 40,
    renderRightActions: (progress, dragX) => renderRightAction(progress, dragX, false),
    renderLeftActions: (progress, dragX) => renderRightAction(progress, dragX, true),
    ...others,
  };
  return <Swipeable {...commonProps}>{children && children}</Swipeable>;
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
