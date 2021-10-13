import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Modal,
  ModalProps,
  Animated,
} from 'react-native';
export { default as ActionSheetItem } from './item';
import ActionSheetItem from './item';

let MainWidth = Dimensions.get('window').width;
let MainHeight = Dimensions.get('window').height;

export interface DividerStyle {
  itemDivider?: StyleProp<ViewStyle>;
  actionDivider?: StyleProp<ViewStyle>;
}

export interface ActionSheetProps extends ModalProps {
  /** 点击蒙层是否关闭 */
  onCancel?: Boolean;
  /** 分割线样式 */
  dividerStyle?: DividerStyle;
  /** 取消的容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 取消的文本样式 */
  textStyle?: StyleProp<TextStyle>;
  /** 动作在被触摸操作激活时以多少不透明度显示 默认 1 */
  activeOpacity?: number;
  /** 动作有触摸操作时显示出来的底层的颜色 */
  underlayColor?: string;
  /** 取消的文本 */
  cancelText?: React.ReactNode;
}

interface ActionSheetState {
  animatedHeight: number;
  stateVisible: boolean;
}

export default class ActionSheet extends React.Component<ActionSheetProps, ActionSheetState> {
  private fadeAnim: Animated.Value = new Animated.Value(0);
  private animatedRef: React.RefObject<View> = React.createRef();
  constructor(props: ActionSheetProps) {
    super(props);
    this.state = {
      animatedHeight: 0,
      stateVisible: !!props.visible,
    };
  }

  onClose = () => {
    Animated.timing(this.fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(({ finished }) => {
      this.setState({ stateVisible: false });
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps: ActionSheetProps) {
    if (nextProps.visible) {
      this.setState({ stateVisible: true });
      Animated.timing(this.fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start(({ finished }) => {
        this.animatedRef.current &&
          this.animatedRef.current.measure(
            (_frameOffsetX, _frameOffsetY, _width, _height, pageOffsetX, pageOffsetY) => {
              this.setState({ animatedHeight: _height }, () => {
                Animated.timing(this.fadeAnim, {
                  toValue: -_height,
                  duration: 150,
                  useNativeDriver: true,
                }).start();
              });
            },
          );
      });
    } else {
      this.onClose();
    }
  }
  render() {
    const {
      children,
      visible,
      activeOpacity,
      underlayColor,
      cancelText = '取消',
      dividerStyle,
      onCancel,
      containerStyle,
      textStyle,
      ...other
    } = this.props;
    const { stateVisible } = this.state;
    return (
      <Modal
        animationType="fade" // slide  none  fade
        transparent={true}
        visible={stateVisible}
        onRequestClose={this.onClose}
        {...other}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.position, styles.spread]}
          onPress={() => onCancel && this.onClose()}
        >
          <Animated.View style={[styles.spread, styles.backdrop]}></Animated.View>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.actionSheet,
            { bottom: -this.state.animatedHeight, transform: [{ translateY: this.fadeAnim }] },
          ]}
          ref={this.animatedRef}
        >
          {React.Children.toArray(children).map((item, index) => (
            <View key={index}>
              {index !== 0 && <View style={StyleSheet.flatten([styles.itemDivider, dividerStyle?.itemDivider])} />}
              {React.cloneElement(item as React.DetailedReactHTMLElement<any, HTMLElement>, {
                activeOpacity: activeOpacity,
                underlayColor: underlayColor,
              })}
            </View>
          ))}
          <View style={StyleSheet.flatten([styles.actionDivider, dividerStyle?.actionDivider])} />
          <ActionSheetItem
            activeOpacity={activeOpacity}
            underlayColor={underlayColor}
            onPress={this.onClose}
            children={cancelText}
            containerStyle={containerStyle}
            textStyle={textStyle}
          />
        </Animated.View>
      </Modal>
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
    backgroundColor: '#000',
    opacity: 0.2,
  },
  spread: {
    width: MainWidth,
    height: MainHeight,
  },
  actionSheet: {
    width: MainWidth,
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 9999,
  },
  actionDivider: {
    backgroundColor: 'rgba(197,217,232,.3)',
    width: MainWidth,
    height: 6,
  },
  itemDivider: {
    backgroundColor: 'rgba(197,217,232,.3)',
    height: 2,
    width: MainWidth,
  },
});
