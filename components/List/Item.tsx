import React, { Component } from 'react';
import { View, ViewProps, StyleSheet, Text } from 'react-native';

export interface ListItemProps extends ViewProps {}

export default class ListItem extends Component<ListItemProps> {
  render() {
    const { children, style, ...otherProps } = this.props;
    return <View style={[styles.border, style]} {...otherProps}>{typeof children === 'string' ? <Text>{children}</Text> : children}</View>;
  }
}

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  }
});