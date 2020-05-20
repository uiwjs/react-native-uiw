import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const styles = StyleSheet.create({
  default: {
    height: 1,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    marginVertical: 10,
  },
});

export interface HrProps extends ViewProps {}

export default function Hr(props: HrProps) {
  return <View {...props} style={[styles.default, props.style]} />;
}
