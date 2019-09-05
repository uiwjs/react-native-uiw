import React, { Component } from 'react';
import { View } from 'react-native';

export interface DividerProps {
  gutter?: number;
  size?: 'small' | 'default' | 'large';
}

export default class Divider extends Component<DividerProps> {
  static defaultProps:DividerProps = {
    gutter: 10,
    size: 'default',
  }
  render() {
    const { gutter, size } = this.props;
    let height = gutter;
    if(size === 'small') {
      height = 5;
    }
    if (size === 'large') {
      height = 15;
    }
    return (
      <View style={{ height }} />
    );
  }
}