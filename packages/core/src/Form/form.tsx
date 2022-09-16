import React, { FC } from 'react';
import FormItems from './formItems';
import { Provider } from './store';
import { FormProps } from './types';

const Form: FC<FormProps> = (props) => {
  const { formDatas } = props;

  return (
    <Provider>
      <FormItems formDatas={formDatas} />
    </Provider>
  );
};

export default Form;
