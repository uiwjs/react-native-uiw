import React from 'react';
import { View, Dimensions, StyleSheet, TextStyle, StyleProp, ViewStyle } from 'react-native';
import Modal, { ModalProps } from '../Modal';
export { default as ActionSheetItem } from './item';
import ActionSheetItem from './item';

let MainWidth = Dimensions.get('window').width;

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
  stateVisible: boolean;
  control: 'props' | 'state';
}

export default class ActionSheet extends React.Component<ActionSheetProps, ActionSheetState> {
  constructor(props: ActionSheetProps) {
    super(props);
    this.state = {
      stateVisible: !!props.visible,
      control: 'props',
    };
  }
  static getDerivedStateFromProps(props: ActionSheetProps, state: ActionSheetState) {
    if (props.visible === state.stateVisible && state.control === 'state') {
      return {
        control: 'props',
        stateVisible: props.visible,
      };
    }
    if (props.visible !== state.stateVisible) {
      if (state.control === 'state') {
        return {
          control: 'props',
        };
      }
      return {
        control: 'props',
        stateVisible: props.visible,
      };
    }
    return null;
  }
  onClose = () => {
    this.setState({ stateVisible: false, control: 'state' });
  };

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
        placement="bottom"
        animationType="fade" // slide  none  fade
        transparent={true}
        {...other}
        visible={stateVisible}
        onClosed={this.onClose}
      >
        <>
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
        </>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
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
