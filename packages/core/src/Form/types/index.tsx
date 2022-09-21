import { RulesOption } from '@validator.tool/hook';
import Validator from 'validator.tool';

type KeyType = string | number | symbol;

export type InnerMethodsReturnType<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
> = {
  store: Partial<FormData>;
  initialValues: Partial<FormData>;
  updateStore: (value: any) => void;
  validator: Validator;
  forceUpdate: () => void;
};

type FormInstance<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> = {
  getStore: () => FormData;
  getFieldValue: (field: FieldKey) => FieldValue;
  setFieldValue: (field: FieldKey, value: FieldValue) => void;
  resetFieldValue: () => void;
  getInnerMethods: (inner?: boolean) => InnerMethodsReturnType<FormData, FieldValue, FieldKey>;
};

interface FormProps<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
  formDatas?: FormItemsProps[];
  form: FormInstance<FormData, FieldValue, FieldKey>;
  initialValues?: Partial<FormData>;
}

interface FormItemsProps {
  field: string;
  type: string;
  validate?: RulesOption['validate'];
}

export type { FormProps, FormItemsProps, KeyType, FormInstance };
