import Store from '../hooks/store';

type KeyType = string | number | symbol;

type FormInstance<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
> = Pick<
  Store<FormData, FieldValue, FieldKey>,
  'innerSetInitialValues' | 'innerGetStore' | 'innerUpdateStore' | 'getStore' | 'getFieldValue'
> & {};

interface FormProps<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
  formDatas?: FormItemsProps[];
  form?: FormInstance<FormData, FieldValue, FieldKey>;
  initialValues?: any;
}

interface FormItemsProps {
  label: string;
  type: string;
}

export type { FormProps, FormItemsProps, KeyType, FormInstance };
