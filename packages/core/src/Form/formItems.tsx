import React, { FC } from 'react';
import { FormProps } from './types';
import { useFormContext } from './store';
import Input from '../Input';

const FormItems: FC<FormProps> = ({ formDatas = [] }) => {
  const {
    state: { formValues },
    dispatch,
  } = useFormContext();

  const change = (label: string, value: any) => {
    dispatch({
      formValues: { ...formValues, [label]: value },
    });
  };

  const _render = () => {
    return formDatas.map((v: any) => {
      if (v.type === 'input') {
        return <Input onChangeText={(value) => change(v.label, value)} />;
      }
    });
  };
  return <React.Fragment>{_render()}</React.Fragment>;
};

export default FormItems;
