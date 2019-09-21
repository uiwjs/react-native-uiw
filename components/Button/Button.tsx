import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { color, colors } from '../utils';

export interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  /**
   * 设置禁用
   */
  disabled?: boolean;
  /**
   * 加载状态
   */
  loading?: boolean;
  /**
   * 按钮类型，可选值为
   */
  type?: 'primary' | 'warning';
  /**
   * 是否有圆角
   */
  rounded?: boolean | number;
}

export default class ButtonView extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    activeOpacity: .5,
    rounded: 5,
  };
  render() {
    const { children, style, rounded, color: buttonColor, type, disabled, loading, ...restProps } = this.props;
    let backgroundColor, textColor, borderColor, borderWidth, borderRadius;
    if (type === 'warning') {
      backgroundColor = color(colors.red).rgb().string();
      textColor = color(colors.white).rgb().string();
    }
    if (type === 'primary') {
      backgroundColor = color(colors.green).rgb().string();
      textColor = color(colors.white).rgb().string();
    }
    if(!type) {
      borderColor = color(colors.black).alpha(0.32).rgb().string();
      borderWidth = 1;
    }
    if (disabled) {
      textColor = color(textColor).alpha(0.3).rgb().string();
    }
    if (buttonColor) {
      backgroundColor = color(buttonColor).rgb().string();
      textColor = color(buttonColor).isLight() ? color(buttonColor).darken(0.9).string() : color(buttonColor).lighten(0.9).string();
    }
    if (rounded) {
      borderRadius = typeof rounded === 'number' ? rounded : 0;
    }
    const buttonStyle = { backgroundColor, borderColor, borderWidth, borderRadius };
    const textStyle = { color: textColor };
    return (
      <TouchableOpacity
        style={[styles.button, styles.content, buttonStyle, style]}
        disabled={disabled}
        {...restProps}
      >
        {loading && (
          <ActivityIndicator
            size={16}
            color={textColor}
            style={styles.icon}
          />
        )}
        {React.isValidElement(children) ? children : (
          <Text style={[textStyle, styles.label]}>{children}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 3,
    borderRadius: 5,
    borderStyle: 'solid',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 16,
    marginLeft: 12,
    marginRight: -4,
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 9,
    marginHorizontal: 16,
    fontSize: 17,
  },
});