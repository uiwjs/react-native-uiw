import { useRef } from 'react';
import { KeyType } from '../types';
import Store from './store';

export function getFormInstance<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>() {
  const store = new Store<FormData, FieldValue, FieldKey>();
  return {
    innerSetInitialValues: store.innerSetInitialValues,
    innerGetStore: store.innerGetStore,
    innerUpdateStore: store.innerUpdateStore,
    getStore: store.getStore,
    getFieldValue: store.getFieldValue,
  };
}

export default function useForm<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(form?: any) {
  const formRef = useRef(form);

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      formRef.current = getFormInstance();
    }
  }
  return [formRef.current];
}
