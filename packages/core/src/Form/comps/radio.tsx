import React from 'react';
import { KeyType } from '../types';
import Radio, { RadioProps } from '../../Radio';

interface FormRadioProps extends RadioProps {
  value?: KeyType;
  onChange?: (value: KeyType) => void;
  options?: Array<{ label: string; value: KeyType }>;
}

const FormRadio = ({ value, onChange, options = [], ...others }: FormRadioProps) => {
  return (
    <React.Fragment>
      {options.map((item, idx) => (
        <Radio
          key={idx}
          checked={item.value === value}
          onPress={() => {
            onChange?.(item.value);
          }}
          {...others}
        >
          {item.label}
        </Radio>
      ))}
    </React.Fragment>
  );
};

export default FormRadio;
