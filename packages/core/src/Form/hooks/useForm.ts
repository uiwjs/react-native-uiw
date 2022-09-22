import React from 'react';
import { KeyType, InnerMethodsReturnType, FormInstance } from '../types';
import { useState } from 'react';
import { useValidator } from '@validator.tool/hook';
import { isObjectEmpty } from '../utils/is';
import { cloneDeep } from '../utils';

type State<FormData = any> = {
  store: Partial<FormData>;
  initialValues: Partial<FormData>;
};

export default function useForm<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>({
  changeValidate = false,
  watch = {},
  customComponentList,
}: {
  changeValidate?: boolean;
  watch?: Partial<Record<string, (value: unknown) => void>>;
  customComponentList?: Partial<Record<string, unknown>>;
}): FormInstance<FormData, FieldValue, FieldKey> {
  const [state, setState] = useState<State>({
    initialValues: {},
    store: {},
  });

  const { validator, forceUpdate } = useValidator({
    initValues: { initialValues: state.initialValues },
  });

  const updateStore = (datas: Partial<State>) => {
    setState({
      ...state,
      ...datas,
    });
  };

  const innerValidate = () => {
    const { showMessages, errorMessages } = validator;
    console.log('errorMessages', errorMessages);
    if (changeValidate) {
      showMessages?.();
      forceUpdate?.();
    }
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

  // 触发验证
  const validate = () => {
    const { showMessages, errorMessages } = validator;
    showMessages?.();
    forceUpdate?.();
    if (Object.keys(errorMessages).length > 0) {
      return errorMessages;
    }
    return {};
  };

  // 验证并获取表单值
  const validateFields = () => {
    return new Promise(async function (resolve, reject) {
      const errors = validate();
      if (isObjectEmpty(errors)) {
        const value = cloneDeep(state.store);
        resolve(value);
      } else {
        reject(errors);
      }
    });
  };

  const getFormInstance = () => {
    return {
      getFieldValue,
      setFieldValue,
      resetFieldValue,
      validate,
      validateFields,
      getInnerMethods: (inner?: boolean): InnerMethodsReturnType<FormData> => {
        let methods = {} as any;
        if (inner) {
          methods = {
            store: state.store,
            initialValues: state.initialValues,
            updateStore: updateStore,
            validator,
            forceUpdate,
            innerValidate,
            watch,
            customComponentList,
          };
        }
        return methods;
      },
    };
  };

  return getFormInstance();
}
