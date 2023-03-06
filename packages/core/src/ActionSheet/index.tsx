import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, TextStyle, StyleProp, ViewStyle } from 'react-native';
import Modal, { ModalProps } from '../Modal';
import ActionSheetItem from './item';
export { default as ActionSheetItem } from './item';

let MainWidth = Dimensions.get('window').width;

export interface DividerStyle {
  itemDivider?: StyleProp<ViewStyle>;
  actionDivider?: StyleProp<ViewStyle>;
}

export interface ActionSheetProps extends ModalProps {
  /** 点击蒙层是否关闭 */
  isCancel?: Boolean;
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
  /** 蒙层关闭回调 */
  onCancel?: () => void;
}

interface ActionSheetState {
  stateVisible: boolean;
  control: 'props' | 'state';
}

export default function ActionSheet(props: ActionSheetProps) {
  const {
    children,
    visible: props_visible,
    activeOpacity,
    underlayColor,
    cancelText = '取消',
    dividerStyle,
    isCancel = true,
    containerStyle,
    textStyle,
    onCancel,
    ...other
  } = props;

  const visible = !!props_visible;

  const [state, setState] = useState({
    stateVisible: !!visible,
    control: 'props',
  });

  useEffect(() => {
    if (props.visible === state.stateVisible && state.control === 'state') {
      setState({
        control: 'props',
        stateVisible: props.visible,
      });
    }
    if (props.visible !== state.stateVisible) {
      if (state.control === 'state') {
        setState({ ...state, control: 'props' });
      }
      setState({
        control: 'props',
        stateVisible: !!props.visible,
      });
    }
  }, [state.stateVisible, props.visible]);

  const onModalClose = () => {
    if (isCancel) {
      setState({ stateVisible: false, control: 'state' });
      onCancel?.();
    }
  };

  const onClose = () => onCancel?.();

  return (
    <Modal
      placement="bottom"
      animationType="fade" // slide  none  fade
      transparent={true}
      {...other}
      visible={state.stateVisible}
      onClosed={onModalClose}
    >
      <View>
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
          onPress={onClose}
          children={cancelText}
          containerStyle={containerStyle}
          textStyle={textStyle}
        />
      </View>
    </Modal>
  );
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
