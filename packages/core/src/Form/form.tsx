import React, { useEffect, useRef } from 'react';
import FormItems from './formItems';
import { Provider } from './hooks/context';
import { FormProps, KeyType } from './types';
import { cloneDeep } from './utils';

const Form = <
  FormData extends unknown = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(
  baseProps: FormProps,
) => {
  const { schema, form, initialValues = {}, mode = 'default' } = baseProps;

  const isMount = useRef<boolean>();

  const innerMethods = form.getInnerMethods(true);

  useEffect(() => {
    if (!isMount.current) innerMethods.updateStore({ initialValues: cloneDeep(initialValues), store: initialValues });
  }, []);

  useEffect(() => {
    isMount.current = true;
  }, []);

  const contextProps = {
    innerMethods: innerMethods,
    mode: mode,
  };

  return (
    <Provider contextProps={contextProps}>
      <FormItems schema={schema} />
    </Provider>
  );
};

export default Form;
