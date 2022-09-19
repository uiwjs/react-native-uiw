import { KeyType } from '../types';
import get from 'lodash/get';
import { cloneDeep, set } from '../utils';

class Store<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
  private store: Partial<FormData> = {};

  private initialValues: Partial<FormData> = {};

  public innerSetInitialValues = (values: any) => {
    if (!values) return;
    this.initialValues = cloneDeep(values);
    Object.keys(values).forEach((field) => {
      set(this.store, field, values[field]);
    });
  };

  public innerUpdateStore = (field: FieldKey, value?: FieldValue) => {
    set(this.store, field, value);
  };

  public innerGetStore = () => {
    return this.store;
  };

  public getFieldValue = (field: FieldKey): FieldValue => {
    return cloneDeep(get(this.store, field));
  };

  public getStore = (): Partial<FormData> => {
    return this.store;
  };
}

export default Store;
