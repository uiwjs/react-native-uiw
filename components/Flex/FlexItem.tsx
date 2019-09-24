import React, { Component } from 'react';
import { View, ViewProps } from 'react-native';

export interface FlexItemProps extends ViewProps {}

export default class FlexItem extends Component<FlexItemProps> {
  render() {
    return (
      <View {...this.props} />
    );
  }
}