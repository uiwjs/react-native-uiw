import React, { useContext } from 'react';
import { KeyType, FormItemsProps } from './types';
import { isObjectEmpty } from './utils/is';
import { Context } from './hooks/context';
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
    innerMethods: { store = {}, updateStore, customComponentList },
  } = useContext(Context);

  const { field, items = [], renderAdd, renderHeader } = formListValue;

  const handleOperate = (type = '', index: number) => {
    let list = store[field] || [];
    if (type === 'add') list.push({});
    if (type === 'delete') list.splice(index, 1);
    // 下移
    if (type === 'moveDown') {
      if (index !== list.length - 1) {
        list[index] = list.splice(index + 1, 1, list[index])[0];
      } else {
        list.unshift(list.splice(index, 1)[0]);
      }
    }
    // 上移
    if (type === 'moveUp') {
      if (index !== 0) {
        list[index] = list.splice(index - 1, 1, list[index])[0];
      } else {
        list.push(list.shift());
      }
    }
    // 置顶
    if (type === 'moveToTop') {
      if (index !== 0) {
        list.unshift(list.splice(index, 1)[0]);
      }
    }
    // 置底
    if (type === 'moveToBottom') {
      if (index !== list.length - 1) {
        list.push(list.splice(index, 1)[0]);
      }
    }
    updateStore?.({ store: { ...store, [field]: list } });
  };

  const change = (fields: KeyType, value: unknown, index: number) => {
    const list = store[field] || [];
    const obj = {
      ...store[field][index],
      [fields]: value,
    };
    list.splice(index, 1, obj);
    updateStore?.({ store: { ...store, [field]: list } });
  };

  // 组件渲染
  const _renderComponent = (v: Omit<FormItemsProps, 'validate' | 'required'>, index: number) => {
    const values = { ...store[field][index] };
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
    return items.map((v: Omit<FormItemsProps, 'validate' | 'required'>, i: number) => {
      const last = items.length - 1 === i;
      if (v.hide) {
        return null;
      }
      if (v.type === 'cardList') {
        return;
      }
      return (
        <View key={i} style={styles.form_items_container}>
          <View style={[styles.form_items, last && styles.border_none]}>
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
      {(store[field] || []).map((item: Record<string, unknown>, index: number) => (
        <React.Fragment key={index}>
          {renderHeader?.(index, {
            remove: () => handleOperate('delete', index),
            moveUp: () => handleOperate('moveUp', index),
            moveDown: () => handleOperate('moveDown', index),
            moveToTop: () => handleOperate('moveToTop', index),
            moveToBottom: () => handleOperate('moveToBottom', index),
          })}
          <Card>{_render(index)}</Card>
        </React.Fragment>
      ))}
      {renderAdd?.({ add: () => handleOperate('add', 0) })}
    </SafeAreaView>
  );
};

export default FormList;
