import { KeyType, InnerMethodsReturnType } from '../types';
import { useState } from 'react';
import { useValidator } from '@validator.tool/hook';

type State<FormData = any> = {
  store: Partial<FormData>;
  initialValues: Partial<FormData>;
};

export default function useForm<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(): any {
  const [state, setState] = useState<State>({
    initialValues: {},
    store: {},
  });

  const { validator, forceUpdate } = useValidator({
    initValues: { initialValues: state.initialValues },
  });

  const updateStore = (datas: Partial<any>) => {
    setState({
      ...state,
      ...datas,
    });
  };

  // 获取表单字段的值
  const getFieldValue = (field: FieldKey): FieldValue => {
    const { store } = state;
    return store[field];
  };

  // 设置表单字段的值
  const setFieldValue = (field: FieldKey, value: FieldValue) => {
    updateStore({
      store: {
        ...state.store,
        [field]: value,
      },
    });
  };

  // 重置表单
  const resetFieldValue = () => {
    updateStore({
      store: { ...state.initialValues },
    });
  };

  const getStore = (): Partial<FormData> => {
    const { store } = state;
    return store;
  };

  const getFormInstance = () => {
    return {
      forceUpdate,
      validator,
      getStore: getStore,
      getFieldValue: getFieldValue,
      setFieldValue: setFieldValue,
      resetFieldValue,
      getInnerMethods: (inner?: boolean): InnerMethodsReturnType<FormData, FieldValue, FieldKey> => {
        let methods = {} as any;
        if (inner) {
          methods = {
            store: state.store,
            initialValues: state.initialValues,
            updateStore: updateStore,
            validator,
            forceUpdate,
          };
        }
        return methods;
      },
    };
  };

  return getFormInstance();
}
