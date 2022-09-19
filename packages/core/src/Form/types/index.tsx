import Store from '../hooks/store';
import { RulesOption } from '@validator.tool/hook';

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
  field: string;
  type: string;
  validate?: RulesOption['validate'];
}

export type { FormProps, FormItemsProps, KeyType, FormInstance };
