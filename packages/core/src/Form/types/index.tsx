import { RulesOption } from '@validator.tool/hook';
import Validator from 'validator.tool';

type KeyType = string | number | symbol;

export type InnerMethodsReturnType<FormData = any> = {
  store: Partial<FormData>;
  initialValues: Partial<FormData>;
  updateStore: (value: any) => void;
  validator: Validator;
  forceUpdate: () => void;
  innerValidate: () => void;
  watch: Partial<Record<string, (value: unknown) => void>>;
  customComponentList: Partial<Record<string, JSX.Element>>;
};

type FormInstance<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> = {
  getFieldValue: (field: FieldKey) => FieldValue;
  setFieldValue: (field: FieldKey, value: FieldValue) => void;
  resetFieldValue: () => void;
  validate: () => Partial<Record<string, string>>;
  validateFields: () => Promise<FormData> | any;
  getInnerMethods: (inner?: boolean) => InnerMethodsReturnType<FormData>;
};

interface FormProps<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
  formDatas?: FormItemsProps[];
  form: FormInstance<FormData, FieldValue, FieldKey>;
  initialValues?: Partial<FormData>;
}

interface FormItemsProps {
  field: string;
  type: string;
  name: string;
  validate?: RulesOption['validate'];
  options?: Array<{ label: string; value: KeyType | any }>;
  attr?: any;
  required?: boolean;
  render?: JSX.Element;
}

export type { FormProps, FormItemsProps, KeyType, FormInstance };
