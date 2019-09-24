import React, { Component } from 'react';
import { View, ViewProps } from 'react-native';

export interface SpacingProps extends ViewProps {
  gutter?: number;
  size?: 'small' | 'default' | 'large';
  type?: 'horizontal' | 'vertical';
}

export default class Spacing extends Component<SpacingProps> {
  static defaultProps:SpacingProps = {
    gutter: 10,
    size: 'default',
    type: 'vertical',
  }
  render() {
    const { gutter, size, style, type, ...otherProps } = this.props;
    const sty: SpacingProps['style'] = {}
    const keyName = type === 'vertical' ? 'height' : 'width';
    sty[keyName] = gutter;
    if(size === 'small') {
      sty[keyName] = 5;
    }
    if (size === 'large') {
      sty[keyName] = 15;
    }
    return (
      <View style={[sty, style]} {...otherProps}/>
    );
  }
}