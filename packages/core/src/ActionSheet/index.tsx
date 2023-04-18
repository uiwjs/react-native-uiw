import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, TextStyle, StyleProp, ViewStyle, useColorScheme } from 'react-native';
import Modal, { ModalProps } from '../Modal';
import ActionSheetItem from './item';
export { default as ActionSheetItem } from './item';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

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
  containerStyle?: ViewStyle;
  /** 取消的文本样式 */
  textStyle?: StyleProp<TextStyle>;
  /** 动作在被触摸操作激活时以多少不透明度显示 默认 1 */
  activeOpacity?: number;
  /** 动作有触摸操作时显示出来的底层的颜色 */
  underlayColor?: string;
  /** 取消的文本 */
  cancelText?: React.ReactNode;
  /** 蒙层关闭回调 */
  onCancel: () => void;
}

interface ActionSheetState {
  stateVisible: boolean;
  control: 'props' | 'state';
}

export default function ActionSheet(props: ActionSheetProps) {
  const theme = useTheme<Theme>();
  const colorScheme = useColorScheme();
  const styles = createStyles({
    backgroundColor: colorScheme === 'dark' ? 'rgba(00,00,00,.3)' : 'rgba(95,95,95,.3)',
    primaryBackground: colorScheme === 'dark' ? theme.colors.black : 'rgba(00,00,00,.6)',
    mask: theme.colors.mask,
  });

  const {
    children,
    visible: props_visible,
    activeOpacity,
    underlayColor,
    cancelText = '取消',
    dividerStyle,
    isCancel = true,
    containerStyle = {},
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

  return (
    <Modal
      placement="bottom"
      animationType="slide" // slide  none  fade
      transparent={true}
      {...other}
      visible={state.stateVisible}
      onClosed={onModalClose}
    >
      <View style={styles.actionSheetModalView}>
        <View style={styles.actionSheetModalViewContent}>
          {React.Children.toArray(children).map((item, index) => (
            <View key={index}>
              {index !== 0 && <View style={StyleSheet.flatten([styles.itemDivider, dividerStyle?.itemDivider])} />}
              {React.cloneElement(item as React.DetailedReactHTMLElement<any, HTMLElement>, {
                activeOpacity: activeOpacity,
                underlayColor: underlayColor,
              })}
            </View>
          ))}
        </View>
        <View style={styles.actionSheetModalViewClose}>
          <ActionSheetItem
            activeOpacity={activeOpacity}
            underlayColor={underlayColor}
            onPress={() => onCancel?.()}
            children={cancelText}
            containerStyle={containerStyle}
            textStyle={textStyle}
          />
        </View>
      </View>
    </Modal>
  );
}

type CreStyle = {
  backgroundColor: string;
  primaryBackground: string;
  mask: string;
};

function createStyles({ backgroundColor, primaryBackground, mask }: CreStyle) {
  return StyleSheet.create({
    actionDivider: {
      backgroundColor: backgroundColor,
      width: MainWidth,
      height: 10,
    },
    itemDivider: {
      backgroundColor: backgroundColor,
      height: 1,
      width: MainWidth,
      marginRight: 15,
    },
    actionSheetModalView: {
      flex: 1,
      backgroundColor: primaryBackground,
    },
    // 取消
    actionSheetModalViewClose: {
      backgroundColor: mask,
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 16,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      outline: 'none',
      boxShadow: 'none',
    },
    // 内容
    actionSheetModalViewContent: {
      marginLeft: 8,
      marginRight: 8,
      backgroundColor: mask,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      outline: 'none',
      boxShadow: 'none',
    },
  });
}
