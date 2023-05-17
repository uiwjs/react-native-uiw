import React from 'react';
import { Platform, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

const Input = ({ value, onChange, ...others }: TextInputProps & { onChange?: (value: string) => void }) => {
  const theme = useTheme<Theme>();
  const isIOS = Platform.OS === 'ios';
  return (
    <TextInput
      value={value}
      onChangeText={(value) => {
        onChange?.(value);
      }}
      style={{ paddingVertical: isIOS ? 5 : -5, color: theme.colors.text }}
      {...others}
    />
  );
};

export default Input;
