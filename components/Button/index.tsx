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
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
  /**
   * 按钮尺寸
   */
  size?: 'small' | 'default' | 'large';
  /**
   * 设置按钮圆角
   */
  rounded?: boolean | number;
  /**
   * 设置是否显示边框
   */
  bordered?: boolean;
}

export default class ButtonView extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    activeOpacity: .5,
    rounded: 5,
    bordered: true,
    size: 'default',
  };
  render() {
    const { children, style, rounded, bordered, color: buttonColor, type, size, disabled, loading, ...restProps } = this.props;
    let backgroundColor, textColor, borderColor, borderWidth, borderRadius;

    switch (type) {
      case 'warning': backgroundColor = colors.yellow; break;
      case 'primary': backgroundColor = colors.blue; break;
      case 'success': backgroundColor = colors.green; break;
      case 'danger': backgroundColor = colors.red; break;
      case 'light': backgroundColor = colors.white; break;
      case 'dark': backgroundColor = colors.black; break;
      default: break;
    }
    if (backgroundColor) {
      backgroundColor = color(backgroundColor).rgb().string();
    }
    if (type) {
      textColor = color(backgroundColor).isLight() ? color(colors.black).rgb().string() : color(colors.white).rgb().string();
    }
    if (!type) {
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
    if (rounded && typeof rounded === 'number') {
      borderRadius = rounded;
    }
    if (backgroundColor) {
      borderColor = color(backgroundColor).darken(0.2).string();
      borderWidth = 1;
    }
    if (!bordered) {
      borderWidth = 0;
    }
    const buttonStyle = { backgroundColor, borderColor, borderWidth, borderRadius };
    const textStyle = { color: textColor };
    let sizeStyle = {};
    if (size && styles[size]) {
      sizeStyle = styles[size];
    }
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
        {React.isValidElement(children) ? React.cloneElement(children, {
          style: [textStyle, styles.label]
        }) : (
          <Text style={[sizeStyle, textStyle, styles.label]}>{children}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 3,
    borderStyle: 'solid',
    display: 'flex',
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
  },
  small: {
    marginVertical: 6,
    marginHorizontal: 12,
    fontSize: 14,
  },
  default: {
    marginVertical: 8,
    marginHorizontal: 14,
    fontSize: 16,
  },
  large: {
    marginVertical: 10,
    marginHorizontal: 16,
    fontSize: 18,
  }
});