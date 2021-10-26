import React, { useState, useMemo } from 'react';
import { Modal, ModalProps as RNModalProps, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { usePrevious } from '../utils';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9998,
  },
  backdrop: {
    backgroundColor: '#000',
  },
  content: {
    backgroundColor: '#fff',
    position: 'absolute',
  },
});

export interface MaskLayerProps extends RNModalProps {
  /**
   * 遮罩层是否禁止点击
   * defult: `true`
   */
  maskClosable?: boolean;
  /**
   * 是否隐藏
   */
  visible?: boolean;
  /**
   * 遮罩层透明度
   * defult: `0.6`
   */
  opacity?: number;
  /**
   * 隐藏消除回调事件
   */
  onDismiss?: () => void;
  animatedParallelShow?: Animated.CompositeAnimation[];
  animatedParallelHide?: Animated.CompositeAnimation[];
  children?: Array<JSX.Element> | JSX.Element;
}

export default (props: MaskLayerProps = {}) => {
  const {
    maskClosable = true,
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible: _vis,
    opacity = 0.6,
    onDismiss,
    animatedParallelShow = [],
    animatedParallelHide = [],
    ...otherProps
  } = props;
  const [visible, setVisible] = useState(!!props.visible);
  const preVisible = usePrevious<boolean | undefined>(props.visible);
  const [visibleModal, setVisibleModal] = useState(false);
  const [bgOpacity] = useState(new Animated.Value(0));
  useMemo(() => {
    if (preVisible !== props.visible && props.visible) {
      setVisible(!!props.visible);
      setVisibleModal(false);
      Animated.parallel([
        Animated.spring(bgOpacity, {
          toValue: opacity,
          overshootClamping: true,
          useNativeDriver: true,
        }),
        ...animatedParallelShow,
      ]).start();
    } else if (preVisible !== props.visible && !props.visible) {
      Animated.parallel([
        Animated.spring(bgOpacity, {
          toValue: 0,
          overshootClamping: true,
          useNativeDriver: true,
        }),
        ...animatedParallelHide,
      ]).start(() => {
        setVisible(!!props.visible);
        setVisibleModal(true);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);
  const backdropContent = <Animated.View style={[styles.position, styles.backdrop, { opacity: bgOpacity }]} />;
  let backdrop = (
    <TouchableOpacity activeOpacity={1} style={[styles.position]} onPress={() => onDismiss && onDismiss()}>
      {backdropContent}
    </TouchableOpacity>
  );
  let isTrue = visible || false;
  if (!visible && visibleModal) {
    isTrue = false;
  }
  return (
    <Modal transparent={true} animationType="none" {...otherProps} visible={isTrue}>
      {maskClosable ? backdrop : backdropContent}
      {children &&
        React.Children.toArray(children).map((child) => {
          if (!React.isValidElement(child)) {
            return;
          }
          return React.cloneElement(child, {
            ...child.props,
            ...{ style: [{ zIndex: 9999 }, child.props.style] },
          });
        })}
    </Modal>
  );
};
