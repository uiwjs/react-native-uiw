import React, {useState, useMemo} from 'react';
import {Animated, StyleSheet, LayoutChangeEvent} from 'react-native';
import MaskLayer, {MaskLayerProps} from '../MaskLayer';

export interface ModalProps extends MaskLayerProps {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  onClosed?: () => void;
}

export default (props: ModalProps = {}) => {
  const {
    onClosed,
    visible,
    children,
    placement = 'bottom',
    ...otherProps
  } = props;
  const [display] = useState('none');
  let [layoutHeight, setLayoutHeight] = useState(0);
  let [layoutWidth, setLayoutWidth] = useState(0);
  const [translateValue] = useState(new Animated.Value(0));
  const isVertical = /^(top|bottom)$/.test(placement);
  const isHorizontal = /^(left|right)$/.test(placement);
  function onDismiss() {
    onClosed && onClosed();
  }
  function measureContainer(event: LayoutChangeEvent) {
    const {height, width} = event.nativeEvent.layout;
    if (!layoutHeight && isVertical) {
      setLayoutHeight(height);
    }
    if (!layoutWidth && isHorizontal) {
      setLayoutWidth(width);
    }
  }
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
  useMemo(() => {
    if (visible && (layoutHeight !== 0 || layoutWidth !== 0)) {
      translateValue.setValue(getTransformSize());
      Animated.parallel([
        Animated.spring(translateValue, {
          toValue: 0,
          overshootClamping: true,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (layoutHeight !== 0 || layoutWidth !== 0) {
      Animated.parallel([
        Animated.spring(translateValue, {
          toValue: getTransformSize(),
          overshootClamping: true,
          useNativeDriver: true,
        }),
      ]).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, layoutHeight]);
  const translateStyle = {} as {
    translateY: Animated.Value;
    translateX: Animated.Value;
  };
  if (isVertical) {
    translateStyle.translateY = translateValue;
  }
  if (isHorizontal) {
    console.log('left', placement, getTransformSize());
    translateStyle.translateX = translateValue;
  }
  const child = (
    <Animated.View
      onLayout={measureContainer}
      style={[
        styles.content,
        placement && styles[placement],
        !layoutHeight && isVertical ? {display: display} : {},
        !layoutWidth && isHorizontal ? {display: display} : {},
        // // getTransformStyle(),
        {transform: [translateStyle]},
      ]}>
      {children}
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
