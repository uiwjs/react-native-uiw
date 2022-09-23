import React from 'react';
import Switch, { SwitchProps } from '../../Switch';

const FormSwitch = ({
  value,
  onChange,
  ...others
}: SwitchProps & { onChange?: (value: boolean) => void; value?: boolean }) => {
  return (
    <Switch
      checked={value}
      onValueChange={() => {
        onChange?.(!value);
      }}
      {...others}
    />
  );
};

export default FormSwitch;
