import React from 'react';
import { View } from 'react-native';
import { KeyType } from '../types';
import CheckBox, { CheckBoxProps } from '../../CheckBox';
import Flex from '../../Flex';

interface FormCheckBoxProps extends CheckBoxProps {
  value?: KeyType[];
  onChange?: (value: KeyType[] | boolean) => void;
  options?: Array<{ label: string; value: KeyType }>;
}

const FormCheckBox = ({ value = [], onChange, options = [], ...others }: FormCheckBoxProps) => {
  return (
    <Flex justify="start" wrap="wrap" style={{ paddingTop: 15 }}>
      {options.map((item, idx) => (
        <View key={idx} style={{ marginRight: 15, marginBottom: 15, height: 24 }}>
          <CheckBox
            key={idx}
            checked={value.includes(item.value)}
            onChange={() => {
              let data = value || [];
              if (!data.includes(item.value)) {
                data.push(item.value);
              } else {
                const idx = data.findIndex((v: KeyType) => v === item.value);
                data.splice(idx, 1);
              }
              onChange?.(data);
            }}
            {...others}
          >
            {item.label}
          </CheckBox>
        </View>
      ))}
    </Flex>
  );
};

export default FormCheckBox;
