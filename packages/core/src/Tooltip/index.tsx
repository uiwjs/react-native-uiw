import React from 'react';
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

export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
  private fadeAnim: Array<Animated.Value> = [new Animated.Value(0), new Animated.Value(0)];
  private refFollow = React.createRef<View>();
  private refCloud = React.createRef<View>();
  private isDown: boolean = false; // 三角 上下
  private isStart: xLocation = xLocation.start; // 三角 左 中 右
  private triangle: number = 0; // 三角 位置

  constructor(props: TooltipProps) {
    super(props);
    const { width = 100, height = 20 } = props;
    this.state = {
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
    };
  }

  onOpen = () => {
    this.setState({ modalVisible: true }, () => {
      this.refFollow.current &&
        this.refFollow.current.measure((_frameOffsetX, _frameOffsetY, _width, _height, pageOffsetX, pageOffsetY) => {
          this.refCloud.current &&
            this.refCloud.current.measure((_X, _Y, _W, _H, _PX, _PY) => {
              this.setState({
                modalViewStyle: {
                  width: _width,
                  height: _height,
                  position: 'absolute',
                  zIndex: 9999,
                  left: pageOffsetX,
                  top: pageOffsetY,
                },
              });
              const cloudStyle: getLocationReturn = getLocation(_width, _height, pageOffsetX, pageOffsetY, _W, _H);
              this.isDown = cloudStyle.isDown;
              this.isStart = cloudStyle.isStart;
              this.triangle = cloudStyle.triangle;
              this.setState({ cloudStyle: cloudStyle.style });
              Animated.stagger(
                50,
                this.fadeAnim.map((item: Animated.Value, index: number) => {
                  return Animated.timing(item, {
                    toValue: index === 0 ? 0.6 : 1,
                    duration: 300,
                    useNativeDriver: true,
                  });
                }),
              ).start(({ finished }) => {
                this.props.onOpen && this.props.onOpen();
              });
            });
        });
    });
  };

  onClose = () => {
    Animated.stagger(
      50,
      this.fadeAnim
        .map((item) => {
          return Animated.timing(item, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          });
        })
        .reverse(),
    ).start(({ finished }) => {
      this.setState({ modalVisible: false });
      this.props.onClose && this.props.onClose();
    });
  };
  render() {
    const {
      props: { children, title, toggleAction = 'onPress', backgroundColor = '#000', borderRadius = 10, ...other },
      isDown,
    } = this;
    return (
      <View>
        <Modal
          animationType="fade" // slide  none  fade
          transparent={true}
          visible={this.state.modalVisible}
          {...other}
        >
          <TouchableOpacity activeOpacity={1} style={styles.position} onPress={this.onClose}>
            <Animated.View
              style={[
                styles.position,
                styles.backdrop,
                {
                  opacity: this.fadeAnim[0],
                },
              ]}
            ></Animated.View>
          </TouchableOpacity>
          <View style={[styles.followView, { ...this.state.modalViewStyle }]}>{children}</View>
          <Animated.View
            style={[
              styles.containerView,
              {
                opacity: this.fadeAnim[1],
              },
            ]}
          >
            <View style={[styles.containerView, { ...this.state.cloudStyle }]} ref={this.refCloud}>
              <Cloud
                title={title}
                isDown={isDown}
                isStart={this.isStart}
                triangle={this.triangle}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
              />
            </View>
          </Animated.View>
        </Modal>

        <Pressable {...{ [toggleAction]: this.onOpen }} delayLongPress={250}>
          <View style={[styles.followView, { ...this.state.followStyle }]} ref={this.refFollow}>
            {children}
          </View>
        </Pressable>
      </View>
    );
  }
}

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
