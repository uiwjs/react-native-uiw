import React from 'react';
import { View, ViewProps } from 'react-native';

export interface FlexItemProps extends ViewProps {}

export default function FlexItem(props: FlexItemProps) {
  return <View {...props} />;
}
