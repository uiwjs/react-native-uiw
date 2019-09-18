import React, { Component } from 'react';
import { View, ViewProps, StyleSheet, TouchableHighlight, TouchableWithoutFeedbackProps, Text } from 'react-native';

export interface ListItemProps extends ViewProps, TouchableWithoutFeedbackProps {
  paddingLeft?: number;
  underlayColor?: string;
}

export default class ListItem extends Component<ListItemProps> {
  static defaultProps: ListItemProps = {
    underlayColor: '#DADADA',
    paddingLeft: 16,
  }
  render() {
    const { children, style, onPress, paddingLeft, underlayColor, ...otherProps } = this.props;
    if (onPress) {
      return (
        <TouchableHighlight underlayColor={underlayColor} style={[styles.warpper]} onPress={onPress} {...otherProps}>
          <View style={{ paddingLeft }}>
            <View style={[styles.border, style]} {...otherProps}>{typeof children === 'string' ? <Text>{children}</Text> : children}</View>
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <View style={[{ paddingLeft }, styles.warpper]}>
        <View style={[styles.border, style]} {...otherProps}>{typeof children === 'string' ? <Text>{children}</Text> : children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  warpper: {
    backgroundColor: '#fff',
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  }
});
