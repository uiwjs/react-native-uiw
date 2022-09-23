import React from 'react';
import { View } from 'react-native';
import { KeyType } from '../types';
import Radio, { RadioProps } from '../../Radio';
import Flex from '../../Flex';

interface FormRadioProps extends RadioProps {
  value?: KeyType;
  onChange?: (value: KeyType) => void;
  options?: Array<{ label: string; value: KeyType }>;
}

const FormRadio = ({ value, onChange, options = [], ...others }: FormRadioProps) => {
  return (
    <React.Fragment>
      <Flex justify="start" wrap="wrap" style={{ paddingTop: 15 }}>
        {options.map((item, idx) => (
          <View key={idx} style={{ marginRight: 15, marginBottom: 15 }}>
            <Radio
              checked={item.value === value}
              onPress={() => {
                onChange?.(item.value);
              }}
              {...others}
            >
              {item.label}
            </Radio>
          </View>
        ))}
      </Flex>
    </React.Fragment>
  );
};

export default FormRadio;
