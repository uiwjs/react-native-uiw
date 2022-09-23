import React from 'react';
import { KeyType } from '../types';
import CheckBox, { CheckBoxProps } from '../../CheckBox';

interface FormCheckBoxProps extends CheckBoxProps {
  value?: KeyType[];
  onChange?: (value: KeyType[] | boolean) => void;
  options?: Array<{ label: string; value: KeyType }>;
}

const FormCheckBox = ({ value = [], onChange, options = [], ...others }: FormCheckBoxProps) => {
  return (
    <React.Fragment>
      {options.map((item, idx) => {
        return (
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
        );
      })}
    </React.Fragment>
  );
};

export default FormCheckBox;
