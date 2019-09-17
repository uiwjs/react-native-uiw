import React, { Component } from 'react';
import { View, ViewProps } from 'react-native';

export interface DividerProps extends ViewProps {
  gutter?: number;
  size?: 'small' | 'default' | 'large';
}

export default class Divider extends Component<DividerProps> {
  static defaultProps:DividerProps = {
    gutter: 10,
    size: 'default',
  }
  render() {
    const { gutter, size, style, ...otherProps } = this.props;
    let height = gutter;
    if(size === 'small') {
      height = 5;
    }
    if (size === 'large') {
      height = 15;
    }
    return (
      <View style={[{ height }, style]} {...otherProps}/>
    );
  }
}