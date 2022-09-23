import React, { useContext } from 'react';
import { KeyType, FormItemsProps } from './types';
import { isObjectEmpty } from './utils/is';
import { Context } from './hooks/context';
import Radio from '../Radio';
import CheckBox from '../CheckBox';
import Switch from '../Switch';
import SearchBar from '../SearchBar';
import Stepper from '../Stepper';
import Button from '../Button';
import Card from '../Card';
import Label from './comps/label';
import Tip from './comps/tip';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';

interface FormListProps {
  formListValue: FormItemsProps;
}

const FormList = ({
  formListValue = {
    field: '',
    type: '',
    name: '',
  },
}: FormListProps) => {
  const {
    innerMethods: { store = {}, updateStore, customComponentList, innerValidate },
  } = useContext(Context);

  const handleOperate = (type = '', index?: number) => {
    let list = store[formListValue.field] || [];
    if (type === 'add') list.push({});
    if (type === 'delete') list.splice(index, 1);
    updateStore?.({ store: { ...store, [formListValue.field]: list } });
  };

  const change = (field: KeyType, value: unknown, index: number) => {
    const list = store[formListValue.field] || [];
    const obj = {
      ...store[formListValue.field][index],
      [field]: value,
    };
    list.splice(index, 1, obj);
    updateStore?.({ store: { ...store, [formListValue.field]: list } });
  };

  const _renderComponent = (v: Omit<FormItemsProps, 'validate' | 'required'>, index: number) => {
    const values = { ...store[formListValue.field][index] };
    // 自定义组件
    if (!isObjectEmpty(customComponentList) && Object.keys(customComponentList).includes(v.type)) {
      return React.isValidElement(customComponentList[v.type])
        ? React.cloneElement(customComponentList[v.type], {
            ...v,
            ...v.attr,
            value: values[v.field],
            onChange: (value: unknown) => change(v.field, value, index),
          })
        : null;
    }
    return null;
  };

  const _render = (index: number) => {
    return (formListValue.items || []).map((v: Omit<FormItemsProps, 'validate' | 'required'>, i: number) => {
      if (v.hide) {
        return null;
      }
      if (v.type === 'cardList') {
        return;
      }
      return (
        <View key={i} style={styles.form_items_container}>
          <View style={styles.form_items}>
            <Label v={v} />
            {_renderComponent(v, index)}
            <Tip v={v} />
          </View>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.warpper}>
      {(store[formListValue.field] || []).map((item: Record<string, unknown>, index: number) => (
        <Card key={index}>
          {_render(index)}
          <Card.Actions
            driver={false}
            actions={[
              {
                text: '删除',
                actionsTextStyle: { color: '#333' },
                onPress: () => handleOperate('delete', index),
              },
            ]}
          />
        </Card>
      ))}
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
        <Button onPress={() => handleOperate('add')} type="primary" size="default">
          新增数据
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default FormList;
