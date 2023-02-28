import React from 'react';
import { StyleSheet, TextProps, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { color, colors } from '../utils';
import Div from '../Typography/Div';

export interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  /**
   * 如果子节点是文本，修改文本样式
   */
  textStyle?: TextProps['style'];
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

export default function ButtonView<T>(props: ButtonProps) {
  const {
    children,
    style,
    textStyle: childStyle,
    rounded,
    bordered,
    color: buttonColor,
    type,
    size,
    disabled,
    loading,
    ...restProps
  } = props;
  let backgroundColor, textColor, borderColor, borderWidth, borderRadius;

  switch (type) {
    case 'warning':
      backgroundColor = colors.yellow;
      break;
    case 'primary':
      backgroundColor = colors.blue;
      break;
    case 'success':
      backgroundColor = colors.green;
      break;
    case 'danger':
      backgroundColor = colors.red;
      break;
    case 'light':
      backgroundColor = colors.white;
      break;
    case 'dark':
      backgroundColor = colors.black;
      break;
    default:
      break;
  }
  if (backgroundColor) {
    backgroundColor = color(backgroundColor).rgb().string();
  }
  if (type) {
    textColor = color(backgroundColor).isLight()
      ? color(colors.black).rgb().string()
      : color(colors.white).rgb().string();
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
    textColor = color(buttonColor).isLight()
      ? color(buttonColor).darken(0.9).string()
      : color(buttonColor).lighten(0.9).string();
  }
  if (rounded && (typeof rounded === 'number' || typeof rounded === 'boolean')) {
    borderRadius = rounded;
  }
  if (backgroundColor) {
    borderColor = color(backgroundColor).darken(0.2).string();
    borderWidth = 1;
  }
  if (!bordered) {
    borderWidth = 0;
  }
  const buttonStyle = {
    backgroundColor: backgroundColor || '#fff5',
    borderColor,
    borderWidth,
    borderRadius,
  };
  const textStyle = { color: textColor };
  let sizeStyle = {};
  if (size && styles[size]) {
    sizeStyle = styles[size];
  }
  let boxStyle = {};
  const styleKey = `${size}Box` as keyof typeof styles;
  if (size && styles[styleKey]) {
    boxStyle = styles[styleKey];
  }
  if (!children) {
    return null;
  }
  return (
    <TouchableOpacity
      testID="RNE__Button__wrap"
      style={[styles.button, styles.content, buttonStyle, boxStyle, style]}
      disabled={disabled}
      {...restProps}
    >
      {loading && <ActivityIndicator size={16} color={textColor} style={styles.icon} />}
      {React.Children.toArray(children).map((child: any, idx) => {
        return (
          <Div testID="RNE__Button__div" key={idx} style={[sizeStyle, styles.label, textStyle, childStyle]}>
            {child}
          </Div>
        );
      })}
    </TouchableOpacity>
  );
}

ButtonView.defaultProps = {
  activeOpacity: 0.5,
  rounded: 5,
  bordered: true,
  size: 'default',
} as ButtonProps;

const styles = StyleSheet.create({
  button: {
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
    marginRight: 4,
  },
  label: {
    // textAlign: 'center',
  },
  smallBox: {
    paddingHorizontal: 3,
  },
  defaultBox: {
    paddingHorizontal: 8,
  },
  largeBox: {
    paddingHorizontal: 10,
  },
  small: {
    marginVertical: 4,
    fontSize: 14,
  },
  default: {
    marginVertical: 8,
    fontSize: 16,
  },
  large: {
    marginVertical: 10,
    fontSize: 18,
  },
});
