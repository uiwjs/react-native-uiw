import Store from '../hooks/store';

type KeyType = string | number | symbol;

export type InnerMethodsReturnType<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
> = Pick<Store<FormData, FieldValue, FieldKey>, 'innerSetInitialValues' | 'innerGetStore' | 'innerUpdateStore'>;

type FormInstance<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
> = Pick<Store<FormData, FieldValue, FieldKey>, 'getStore' | 'getFieldValue'> & {
  getInnerMethods: (inner?: boolean) => InnerMethodsReturnType<FormData, FieldValue, FieldKey>;
};

interface FormProps<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
  formDatas?: FormItemsProps[];
  form?: FormInstance<FormData, FieldValue, FieldKey>;
  initialValues?: Partial<FormData>;
}

interface FormItemsProps {
  label: string;
  type: string;
}

export type { FormProps, FormItemsProps, KeyType, FormInstance };
