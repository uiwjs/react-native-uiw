import { KeyType, InnerMethodsReturnType } from '../types';
import { useState } from 'react';

type State<FormData = any> = {
  store: Partial<FormData>;
  initialValues: Partial<FormData>;
  errorMessages: Partial<Record<string, string>>;
};

export default function useForm<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(): any {
  const [state, setState] = useState<State>({
    initialValues: {},
    errorMessages: {},
    store: {},
  });

  const updateStore = (datas: any) => {
    setState({
      ...state,
      ...datas,
    });
  };

  const innerUseValidator = () => {};

  const getFieldValue = (field: FieldKey): FieldValue => {
    const { store } = state;
    return store[field];
  };

  const getStore = (): Partial<FormData> => {
    const { store } = state;
    return store;
  };

  const getFormInstance = () => {
    return {
      getStore: getStore,
      getFieldValue: getFieldValue,
      getInnerMethods: (inner?: boolean): InnerMethodsReturnType<FormData, FieldValue, FieldKey> => {
        let methods = {} as any;
        if (inner) {
          methods = {
            store: state.store,
            initialValues: state.initialValues,
            updateStore: updateStore,
          };
        }
        return methods;
      },
    };
  };

  return getFormInstance();
}
