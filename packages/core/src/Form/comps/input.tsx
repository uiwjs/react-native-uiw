import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const Input = ({ value, onChange, ...others }: TextInputProps & { onChange?: (value: string) => void }) => {
  return (
    <TextInput
      value={value}
      onChangeText={(value) => {
        onChange?.(value);
      }}
      {...others}
    />
  );
};

export default Input;
