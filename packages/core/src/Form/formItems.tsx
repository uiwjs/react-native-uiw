import React, { useContext } from 'react';
import { KeyType, FormItemsProps, FormProps } from './types';
import { isObjectEmpty } from './utils/is';
import { Context } from './hooks/context';
import Label from './comps/label';
import Tip from './comps/tip';
import FormList from './formList';
import Container from './comps/container';
import { View } from 'react-native';
import styles from './styles';
import Flex from '../Flex';

const FormItems = ({ schema = [] }: Pick<FormProps, 'schema'>) => {
  const {
    mode,
    innerMethods: { store = {}, updateStore, innerValidate },
    watch,
    customComponentList,
    changeValidate,
    cardProps,
    containerStyle,
    displayType,
    labelStyle,
  } = useContext(Context);
  const change = (field: KeyType, value: unknown) => {
    updateStore?.({ store: { ...store, [field]: value } });
    watch && watch[field]?.(value);
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
              if (changeValidate) innerValidate();
            },
          })
        : null;
    }
    return null;
  };

  const _render = () => {
    return schema.map((v: FormItemsProps, i: number) => {
      if (v.hide) {
        return null;
      }
      let child = (
        <View style={[styles.form_items]}>
          <Label v={v} />
          {_renderComponent(v)}
          <Tip v={v} />
        </View>
      );
      if (displayType === 'row') {
        child = (
          <View style={[styles.form_items]}>
            <Flex justify="between" align="center">
              <Label v={v} labelStyle={labelStyle} />
              <View style={{ flex: 1 }}>{_renderComponent(v)}</View>
            </Flex>
            <Tip v={v} />
          </View>
        );
      }
      return (
        <View key={i} style={styles.form_items_container}>
          {child}
        </View>
      );
    });
  };

  return (
    <Container containerStyle={containerStyle} cardProps={cardProps} mode={mode}>
      {_render()}
    </Container>
  );
};

export default FormItems;
