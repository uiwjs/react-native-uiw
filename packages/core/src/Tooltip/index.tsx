import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ViewProps, TouchableOpacity, Modal, Pressable, ModalProps, Animated } from 'react-native';
import Cloud from './Cloud';
import { getLocation, xLocation, getLocationReturn, MainWidth } from './utils';

export interface TooltipProps extends ModalProps {
  /** cloud 元素 */
  title: React.ReactNode;
  /** 子元素 */
  children: JSX.Element;
  /** 点击类型 */
  toggleAction?: 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut';
  /** 高度 这个是必须的 */
  height?: number | 'auto';
  /** 宽度 这个是必须的 */
  width?: number | 'auto';
  /** 背景色 */
  backgroundColor?: string;
  /** 圆角大小 */
  borderRadius?: number;
  /**
   * 打开时触发
   */
  onOpen?: Function;
  /**
   * 关闭时触发
   */
  onClose?: Function;

  isDown?: boolean;
  triangle?: number;
  fadeAnim?: any;
  isStart?: any;
  refCloud?: any;
}

export interface style extends ViewProps {
  width?: number | 'auto';
  height?: number | 'auto';
  left?: number;
  top?: number;
  position?: 'absolute' | 'relative';
  zIndex?: number;
}

interface TooltipState {
  modalVisible: boolean;
  /** 云 */
  cloudStyle: style;
  /** 根盒子 */
  followStyle: style;
  /** modal 根盒子 */
  modalViewStyle: style;
}

export default function Tooltip(props: TooltipProps) {
  const {
    width = 100,
    height = 20,
    children,
    title,
    toggleAction = 'onPress',
    backgroundColor = '#000000',
    borderRadius = 10,
    fadeAnim = [new Animated.Value(0), new Animated.Value(0)],
    refCloud = React.createRef<View>(),
    triangle = 0,
    isStart = 'flex-start',
    isDown = false,
    ...other
  } = props;
  const refFollow: any = useRef<View>();
  const [state, setState] = useState<any>({
    modalVisible: false,
    cloudStyle: {
      left: 0,
      top: 0,
    },
    followStyle: {
      width,
      height,
    },
    modalViewStyle: {},
  });

  useEffect(() => {
    Animated.stagger(
      50,
      fadeAnim.map((item: Animated.Value, index: number) =>
        Animated.timing(item, {
          toValue: index === 0 ? 0.6 : 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ),
    ).start(({ finished }) => {
      props.onOpen && props.onOpen();
    });
  }, [props.onOpen]);

  const onOpen = () => {
    const { fadeAnim } = props;
    setState({ modalVisible: true });
    refFollow.current &&
      refFollow.current.measure(
        (
          _frameOffsetX: number,
          _frameOffsetY: number,
          _width: number,
          _height: number,
          pageOffsetX: number,
          pageOffsetY: number,
        ) => {
          refCloud.current &&
            refCloud.current.measure((_X: number, _Y: number, _W: number, _H: number, _PX: number, _PY: number) => {
              const cloudStyle: getLocationReturn = getLocation(_width, _height, pageOffsetX, pageOffsetY, _W, _H);
              let isDown = cloudStyle.isDown;
              let isStart = cloudStyle.isStart;
              let triangle = cloudStyle.triangle;

              setState({
                modalViewStyle: {
                  width: _width,
                  height: _height,
                  position: 'absolute',
                  zIndex: 9999,
                  left: pageOffsetX,
                  top: pageOffsetY,
                },
                cloudStyle: cloudStyle.style,
              });
            });
        },
      );
  };

  const onClose = () => {
    Animated.stagger(
      50,
      fadeAnim
        .map((item: Animated.Value, index: number) =>
          Animated.timing(item, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        )
        .reverse(),
    ).start(({ finished }) => {
      props.onClose && props.onClose();
    });
    setState({ ...state, modalVisible: false });
  };
  return (
    <View>
      <Modal
        testID="RNE__Tooltip__wrap"
        animationType="fade" // slide  none  fade
        transparent={true}
        visible={state.modalVisible}
        {...other}
      >
        <TouchableOpacity activeOpacity={1} style={styles.position} onPress={onClose}>
          <Animated.View
            style={[
              styles.position,
              styles.backdrop,
              {
                opacity: fadeAnim[0],
              },
            ]}
          ></Animated.View>
        </TouchableOpacity>
        <View style={[styles.followView, { ...state.modalViewStyle }]}>{children}</View>
        <Animated.View
          style={[
            styles.containerView,
            {
              opacity: fadeAnim[1],
            },
          ]}
        >
          <View style={[styles.containerView, { ...state.cloudStyle }]} ref={refCloud}>
            <Cloud
              title={title}
              isDown={isDown}
              isStart={isStart}
              triangle={triangle}
              backgroundColor={backgroundColor}
              borderRadius={borderRadius}
            />
          </View>
        </Animated.View>
      </Modal>

      <Pressable testID="RNE__Tooltip__pressable" {...{ [toggleAction]: onOpen }} delayLongPress={250}>
        <View style={[styles.followView, { ...state.followStyle }]} ref={refFollow}>
          {children}
        </View>
      </Pressable>
    </View>
  );
}
Tooltip.defaultProps = {
  fadeAnim: [new Animated.Value(0), new Animated.Value(0)],
  refFollow: React.createRef<View>(),
  refCloud: React.createRef<View>(),
  isDown: false, // 三角 上下
  isStart: xLocation.start, // 三角 左 中 右
  triangle: 0, // 三角 位置
};

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
    backgroundColor: '#fff',
  },
  containerView: {
    position: 'absolute',
    zIndex: 9999,
  },
  followView: {
    overflow: 'hidden',
  },
});
