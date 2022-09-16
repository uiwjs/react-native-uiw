import React from 'react';
import {Form} from '@uiw/react-native';
import {ComProps} from '../../routes';

export interface FormDemoProps extends ComProps {}

const FormDemo = () => {
  const items = [{type: 'input', label: 'name'}];
  return (
    <React.Fragment>
      <Form formDatas={items} />
    </React.Fragment>
  );
};

export default FormDemo;
