import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from "@shopify/restyle"
import { Theme } from '../../theme'

const Input = ({ value, onChange, ...others }: TextInputProps & { onChange?: (value: string) => void }) => {
  const theme = useTheme<Theme>()
  return (
    <TextInput
      value={value}
      onChangeText={(value) => {
        onChange?.(value);
      }}
      style={{ color: theme.colors.text }}
      {...others}
    />
  );
};

export default Input;
