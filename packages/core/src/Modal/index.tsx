import React, { useState, useMemo, useRef } from 'react';
import { Animated, StyleSheet, LayoutChangeEvent, View } from 'react-native';
import MaskLayer, { MaskLayerProps } from '../MaskLayer';

export interface ModalProps extends MaskLayerProps {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  onClosed?: () => void;
}

export default (props: ModalProps = {}) => {
  const { onClosed, visible, children, placement = 'bottom', ...otherProps } = props;
  const AnimatedOpacity: Animated.Value = useRef(new Animated.Value(0)).current;
  // const [display] = useState<'none' | 'flex'>('none');
  let [layoutHeight, setLayoutHeight] = useState(0);
  let [layoutWidth, setLayoutWidth] = useState(0);
  const [translateValue] = useState(new Animated.Value(0));
  const isVertical = /^(top|bottom)$/.test(placement);
  const isHorizontal = /^(left|right)$/.test(placement);
  function onDismiss() {
    onClosed && onClosed();
  }
  function measureContainer(event: LayoutChangeEvent) {
    const { height, width } = event.nativeEvent.layout;
    if (!layoutHeight && isVertical) {
      setLayoutHeight(height);
    }
    if (!layoutWidth && isHorizontal) {
      setLayoutWidth(width);
    }
  }

  useMemo(() => {
    function getTransformSize() {
      if (placement === 'top') {
        return -layoutHeight;
      }
      if (placement === 'bottom') {
        return layoutHeight;
      }
      if (placement === 'left') {
        return -layoutWidth;
      }
      if (placement === 'right') {
        return layoutWidth;
      }
      return 0;
    }
    const result = getTransformSize();
    if (!result) return;
    if (visible) {
      translateValue.setValue(result);
      // AnimatedOpacity
      Animated.timing(AnimatedOpacity, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }).start(({ finished }) => {
        Animated.parallel([
          Animated.spring(translateValue, {
            toValue: 0,
            overshootClamping: true,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }
    if (!visible) {
      Animated.parallel([
        Animated.spring(translateValue, {
          toValue: result,
          overshootClamping: true,
          useNativeDriver: true,
        }),
      ]).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, layoutHeight, layoutWidth]);
  const translateStyle = {} as {
    translateY: Animated.Value;
    translateX: Animated.Value;
  };
  if (isVertical) {
    translateStyle.translateY = translateValue;
  }
  if (isHorizontal) {
    translateStyle.translateX = translateValue;
  }
  const child = (
    <Animated.View style={[styles.content, placement && styles[placement], { opacity: AnimatedOpacity }]}>
      <Animated.View
        onLayout={measureContainer}
        style={[
          styles.content,
          placement && styles[placement],
          // !layoutHeight && isVertical ? { display: display } : {},
          // !layoutWidth && isHorizontal ? { display: display } : {},
          // // getTransformStyle(),
          { transform: [translateStyle] },
        ]}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
  return (
    <MaskLayer {...otherProps} visible={visible} onDismiss={onDismiss}>
      {child}
    </MaskLayer>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 9999,
  },
  top: {
    top: 0,
    left: 0,
    right: 0,
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  left: {
    bottom: 0,
    top: 0,
    left: 0,
  },
  right: {
    bottom: 0,
    top: 0,
    right: 0,
  },
});
