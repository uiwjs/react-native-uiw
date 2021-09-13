import React from 'react';
import { Platform, StyleProp, ViewStyle, View } from 'react-native';
import InputNumber from './InputNumber';

export type StepProps = {
  min?: number;
  max?: number;
  step?: number | string;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: (value: any) => void;
  upStyle?: StyleProp<ViewStyle>;
  downStyle?: StyleProp<ViewStyle>;
  // inputStyle?: StyleProp<TextStyle>
  name?: string;
  inputStyle?: any;
  style?: StyleProp<ViewStyle>;
};

export default (props: StepProps) => {
  const { inputStyle, style, ...restProps } = props;
  const keyboardType = Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation';
  return (
    <View>
      <InputNumber {...restProps} style={style} keyboardType={keyboardType} inputStyle={inputStyle} />
    </View>
  );
};
