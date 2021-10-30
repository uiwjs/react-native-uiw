import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export interface ControlProps {
  /** 确认时触发	 */
  onConfirm?: () => void;
  /** 关闭模态框 */
  onClosed?: () => void;
  /** 确定按钮的文字 */
  okText?: string | React.ReactNode;
  /** 取消按钮的文字 */
  cancelText?: string | React.ReactNode;
  /** 确定取消按钮 当触摸处于活动状态时将显示的底层颜色 */
  underlayColor?: string;
}

const Control = (props: ControlProps) => {
  const { onConfirm, onClosed, okText, cancelText, underlayColor } = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.touchStyle} onPress={onClosed} underlayColor={underlayColor}>
        <Text style={styles.textStyle}>{cancelText}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.touchStyle} onPress={onConfirm} underlayColor={underlayColor}>
        <Text style={styles.textStyle}>{okText}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  touchStyle: {
    paddingHorizontal: 25,
    borderRadius: 5,
    paddingVertical: 0,
    height: 50,
  },
  textStyle: {
    color: '#1677ff',
    fontSize: 18,
    lineHeight: 50,
  },
});

export default Control;
