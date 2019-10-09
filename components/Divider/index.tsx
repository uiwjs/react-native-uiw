import React, { Component } from 'react';
import { View, Text, ViewProps, TextProps, StyleSheet } from 'react-native';

export interface DividerProps extends ViewProps {
  label?: string;
  gutter?: number;
  style?: ViewProps['style'];
  lineStyle?: ViewProps['style'];
  labelStyle?: TextProps['style'];
  type?: 'horizontal' | 'vertical';
}

export default class Divider extends Component<DividerProps> {
  static defaultProps: DividerProps = {
    type: 'horizontal',
    gutter: 8,
  }
  render() {
    let { children, style, gutter, label, lineStyle, labelStyle, type, ...restProps } =  this.props;
    if (typeof children === 'string') {
      label = children;
      children = null;
    }
    const lineStyleArr = [];
    const warpperStyles = [];
    if (type === 'horizontal') {
      warpperStyles.unshift(styles.horizontal);
      lineStyleArr.unshift(styles.lineHorizontal);
      lineStyleArr.unshift({ marginHorizontal: gutter });
    }
    if (type === 'vertical') {
      warpperStyles.unshift(styles.vertical);
      lineStyleArr.unshift(styles.lineVertical);
      lineStyleArr.unshift({ marginVertical: gutter });
    }
    if (!children && label) {
      if (labelStyle && typeof labelStyle === 'number') {
        labelStyle = StyleSheet.flatten(labelStyle);
      }
      children = <Text style={[styles.label, labelStyle]}> {label} </Text>;
    }
    if (lineStyle && typeof lineStyle === 'number') {
      lineStyle = StyleSheet.flatten(lineStyle);
    }
    const line = <View style={[styles.line, ...lineStyleArr, lineStyle]} />
    return (
      <View style={[styles.warpper, ...warpperStyles, style]} {...restProps}>
        {line}
        {children}
        {children && line}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  warpper: {
    alignItems: 'center',
  },
  horizontal: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
  },
  vertical: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
  },
  line: {
    backgroundColor: 'rgb(229, 229, 229)',
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow: 1,
  },
  lineHorizontal: {
    height: 1,
    minHeight: 1,
    minWidth: 16,
    marginHorizontal: 8,
  },
  lineVertical: {
    width: 1,
    minHeight: 16,
    minWidth: 1,
    marginVertical: 8,
  },
  label: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 12,
  },
});
