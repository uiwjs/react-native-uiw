import React, { Component } from 'react';
import { View, ViewProps } from 'react-native';

export interface SpacingProps extends ViewProps {
  size?: 'small' | 'default' | 'large' | number;
  type?: 'horizontal' | 'vertical';
}

export default function Spacing(props: SpacingProps) {
  const { size = 'default', style, type = 'vertical', ...otherProps } = props;
  const sty: SpacingProps['style'] = {};
  const keyName = type === 'vertical' ? 'height' : 'width';
  sty[keyName] = 10;
  if (size === 'small') {
    sty[keyName] = 5;
  } else if (size === 'large') {
    sty[keyName] = 15;
  } else if (typeof size === 'number') {
    sty[keyName] = size;
  }
  return <View style={[sty, style]} {...otherProps} />;
}
