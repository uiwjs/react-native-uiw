import { RulesOption } from '@validator.tool/hook';
import Validator from 'validator.tool';

type KeyType = string | number | symbol;

type InnerMethodsReturnType<FormData = any> = {
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
  schema?: FormItemsProps[];
  form: FormInstance<FormData, FieldValue, FieldKey>;
  initialValues?: Partial<FormData>;
  /**
   * 支持默认和卡片两种模式
   */
  mode?: 'default' | 'card';
}

interface actionProps {
  remove: () => void;
  moveUp: () => void;
  moveDown: () => void;
  moveToTop: () => void;
  moveToBottom: () => void;
}

interface FormItemsProps {
  field: string;
  type: string;
  name: string;
  validate?: RulesOption['validate'];
  options?: Array<{ label: string; value: KeyType | any }>;
  attr?: any;
  required?: boolean;
  renderHeader?: (index: number, { remove, moveUp, moveDown }: actionProps) => React.ReactNode;
  renderAdd?: ({ add }: { add: () => void }) => React.ReactNode;
  items?: Omit<FormItemsProps, 'validate' | 'required'>[];
  hide?: boolean;
}

export type { FormProps, FormItemsProps, KeyType, FormInstance, InnerMethodsReturnType };
