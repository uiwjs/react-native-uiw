import React from 'react';
import { StyleSheet, TextProps, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { color } from '../utils';
import Div from '../Typography/Div';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

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
  const theme = useTheme<Theme>();
  let backgroundColor, textColor, borderColor, borderWidth, borderRadius;

  switch (type) {
    case 'warning':
      backgroundColor = theme.colors.func200 || '#FFD21D';
      break;
    case 'primary':
      backgroundColor = theme.colors.func400 || '#1890FF';
      break;
    case 'success':
      backgroundColor = theme.colors.func300 || '#52C41A';
      break;
    case 'danger':
      backgroundColor = theme.colors.func600 || '#F4333C';
      break;
    case 'light':
      backgroundColor = theme.colors.white || '#FFFFFF';
      break;
    case 'dark':
      backgroundColor = theme.colors.black || '#000000';
      break;
    default:
      break;
  }
  if (backgroundColor) {
    backgroundColor = color(backgroundColor).rgb().string();
  }
  // if (!type) {
  //   borderColor = color(theme.colors.black).alpha(0.32).rgb().string();
  //   borderWidth = 1;
  // }
  if (disabled) {
    textColor = color(theme.colors.disabled || '#CCCCCC')
      .alpha(0.1)
      .rgb()
      .string();
    backgroundColor = color(theme.colors.disabled || '#CCCCCC')
      .rgb()
      .string();
  }
  if (buttonColor) {
    backgroundColor = color(buttonColor).rgb().string();
  }
  if (rounded && (typeof rounded === 'number' || typeof rounded === 'boolean')) {
    borderRadius = rounded;
  }
  if (bordered) {
    borderColor = color(theme.colors.gray200 || backgroundColor)
      .alpha(1)
      .rgb()
      .string();
    borderWidth = 1;
  }
  // if (!bordered || buttonColor) {
  //   borderWidth = 0;
  // }
  const buttonStyle = {
    backgroundColor: backgroundColor || '#3578e5',
    borderColor,
    borderWidth,
    borderRadius,
  };
  if ((type || backgroundColor || buttonColor || buttonStyle.backgroundColor) && type !== 'light') {
    textColor = color(theme.colors.white || '#FFFFFF')
      .rgb()
      .string();
  } else {
    textColor = color(theme.colors.black || '#000000')
      .rgb()
      .string();
  }
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
  bordered: false,
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
