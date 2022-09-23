import React, { FC, useContext } from 'react';
import { KeyType, FormItemsProps } from './types';
import { isObjectEmpty } from './utils/is';
import { Context } from './hooks/context';
import Label from './comps/label';
import Tip from './comps/tip';
import FormList from './formList';
import Container from './comps/container';
import { View } from 'react-native';
import styles from './styles';

const FormItems: FC<any> = ({ schema = [] }) => {
  const {
    mode,
    innerMethods: { store = {}, updateStore, innerValidate, watch, customComponentList, initialValues },
  } = useContext(Context);

  const change = (field: KeyType, value: unknown) => {
    updateStore?.({ store: { ...store, [field]: value } });
    watch[field]?.(value);
  };

  const _renderComponent = (v: FormItemsProps) => {
    if (v.type === 'cardList') {
      return <FormList formListValue={v} />;
    }
    // 自定义组件
    if (!isObjectEmpty(customComponentList) && Object.keys(customComponentList).includes(v.type)) {
      return React.isValidElement(customComponentList[v.type])
        ? React.cloneElement(customComponentList[v.type], {
            ...v,
            ...v.attr,
            value: store[v.field],
            onChange: (value: unknown) => {
              change(v.field, value);
              innerValidate();
            },
          })
        : null;
    }
    return null;
  };

  const _render = (): JSX.Element => {
    return schema.map((v: FormItemsProps, i: number) => {
      const last = schema.length - 1 === i;
      if (v.hide) {
        return null;
      }
      return (
        <View key={i} style={styles.form_items_container}>
          <View style={[styles.form_items, last && styles.border_none]}>
            <Label v={v} />
            {_renderComponent(v)}
            <Tip v={v} />
          </View>
        </View>
      );
    });
  };

  return <Container mode={mode}>{_render()}</Container>;
};

export default FormItems;
