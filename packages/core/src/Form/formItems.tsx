import React, { FC, useContext } from 'react';
import { FormProps } from './types';
import { Context } from './hooks/context';
import Input from '../Input';

const FormItems: FC<FormProps & any> = ({ formDatas = [], initialValues = {} }) => {
  const { formInstance } = useContext(Context);

  const formValues = formInstance.innerGetStore();

  const change = (field: string, value: any) => formInstance?.innerUpdateStore(field, value);

  const _render = () => {
    return formDatas.map((v: any, i: number) => {
      if (v.type === 'input') {
        return <Input key={i} value={formValues[v.label]} onChangeText={(value) => change(v.label, value)} />;
      }
    });
  };

  return <React.Fragment>{_render()}</React.Fragment>;
};

export default FormItems;
