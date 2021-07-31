import React, { Component } from 'react';
import { View, ViewProps, Text, StyleSheet, ActivityIndicator, ActivityIndicatorProps } from 'react-native';

const styles = StyleSheet.create({
  defalut: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    marginRight: 5,
  },
  stopActivity: {
    display: 'none',
  },
});

export interface LoaderProps extends ViewProps {
  /**
   * 图标的大小 (default is `small`)
   */
  size?: 'small' | 'large';
  /**
   * The foreground color of the spinner (default is `gray`).
   */
  color?: string;
  /**
   * 遮罩层颜色 (default is `rgba(255, 255, 255, 0.85)`)
   */
  maskColor?: string;
  /**
   * 是显示`Indicator`（默认值是true）还是隐藏`Indicator`（false）。
   */
  loading?: boolean;
  /**
   * 动画图标与文字垂直显示
   */
  vertical?: boolean;
  /**
   * 设置按钮圆角，用于加载内容为圆角的情况
   */
  rounded?: number;
  /**
   * 当作为包裹元素时，可以自定义描述文案
   */
  tip?: React.ReactNode;
}

export default class Loader extends Component<LoaderProps> {
  static defaultProps: LoaderProps = {
    maskColor: 'rgba(255, 255, 255, 0.85)',
    loading: true,
    color: 'gray',
    size: 'small',
  };
  render() {
    const {
      children,
      color: loaderColor,
      maskColor,
      rounded,
      loading,
      tip,
      size,
      vertical,
      ...otherProps
    } = this.props;
    let styleProps: ActivityIndicatorProps['style'] = {};
    if (maskColor) {
      styleProps.backgroundColor = maskColor;
    }
    if (rounded) {
      styleProps.borderRadius = rounded;
    }
    if (vertical) {
      styleProps.flexDirection = 'column';
    }
    if (!children && !tip) {
      return <ActivityIndicator animating={loading} size={size} color={loaderColor} />;
    }
    const tips =
      tip || loading ? (
        <View style={[styles[loading ? 'defalut' : 'stopActivity'], styleProps]}>
          <ActivityIndicator animating={loading} size={size} color={loaderColor} />
          {tip && (typeof tip === 'string' ? <Text style={{ color: loaderColor }}>{tip}</Text> : <View>{tip}</View>)}
        </View>
      ) : null;
    if (!children && tip) {
      return tips;
    }
    return (
      <View {...otherProps}>
        {tips}
        {children}
      </View>
    );
  }
}
