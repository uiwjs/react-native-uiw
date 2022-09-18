import { useRef } from 'react';
import { KeyType, InnerMethodsReturnType, FormInstance } from '../types';
import Store from './store';

export function getFormInstance<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>() {
  const store = new Store<FormData, FieldValue, FieldKey>();
  return {
    getStore: store.getStore,
    getFieldValue: store.getFieldValue,
    getInnerMethods: (inner?: boolean): InnerMethodsReturnType<FormData, FieldValue, FieldKey> => {
      let methods = {} as InnerMethodsReturnType<FormData, FieldValue, FieldKey>;
      if (inner) {
        methods = {
          innerSetInitialValues: store.innerSetInitialValues,
          innerGetStore: store.innerGetStore,
          innerUpdateStore: store.innerUpdateStore,
        };
      }
      return methods;
    },
  };
}

export default function useForm<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(form?: FormInstance<FormData, FieldValue, FieldKey>): [FormInstance<FormData, FieldValue, FieldKey>] {
  const formRef = useRef(form);

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      formRef.current = getFormInstance<FormData, FieldValue, FieldKey>();
    }
  }
  return [formRef.current];
}
