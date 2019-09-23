import React, { Component } from 'react';
import { View, ViewProps, StyleSheet, TouchableHighlight, TouchableWithoutFeedbackProps, Text } from 'react-native';

export interface ListItemProps extends ViewProps, TouchableWithoutFeedbackProps {
  underlayColor?: string;
  paddingLeft?: number;
  extra?: React.ReactNode;
  /**
   * 单元格大小
   */
  size?: 'small' | 'default' | 'large';
}

export default class ListItem extends Component<ListItemProps> {
  static defaultProps: ListItemProps = {
    underlayColor: '#DADADA',
    paddingLeft: 16,
  }
  render() {
    const { children, style, onPress, paddingLeft, underlayColor, extra, size, ...otherProps } = this.props;
    const cell = (
      <>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          {typeof children === 'string' ? <Text>{children}</Text> : children}
        </View>
        <View style={{ paddingRight: 10 }}>
          {typeof extra === 'string' ? <Text>{extra}</Text> : <View style={{ flexDirection: 'row', alignItems: 'center' }}>{extra}</View>}
        </View>
      </>
    );

    let sizeStyle = {};
    if (size && styles[size]) {
      sizeStyle = styles[size];
    }
    if (onPress) {
      return (
        <TouchableHighlight underlayColor={underlayColor} style={[styles.warpper, { paddingLeft }]} onPress={onPress} {...otherProps}>
          <View style={[styles.border, { flex: 1 }, sizeStyle, style]} {...otherProps}>
            {cell}
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <View style={[{ paddingLeft }, styles.warpper]}>
        <View style={[styles.border, sizeStyle, style]} {...otherProps}>
          {cell}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  warpper: {
    backgroundColor: '#fff'
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  default: {
    paddingVertical: 12
  },
  small: {
    paddingVertical: 6
  },
  large: {
    paddingVertical: 16
  },
});
