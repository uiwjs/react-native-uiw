import React, { useEffect, useRef } from 'react';
import FormItems from './formItems';
import { Provider } from './hooks/context';
import { FormProps, KeyType } from './types';
import useForm from './hooks/useForm';

const Form = <
  FormData extends unknown = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(
  baseProps: FormProps,
) => {
  const { formDatas, form, initialValues = {} } = baseProps;

  const isMount = useRef<boolean>();

  const innerMethods = form.getInnerMethods(true);

  if (!isMount.current) {
    innerMethods.updateStore({ initialValues: initialValues, store: initialValues });
  }

  useEffect(() => {
    isMount.current = true;
  }, []);

  const contextProps = {
    innerMethods: innerMethods,
  };

  return (
    <Provider contextProps={contextProps}>
      <FormItems formDatas={formDatas} initialValues={initialValues} />
    </Provider>
  );
};

export default Form;
