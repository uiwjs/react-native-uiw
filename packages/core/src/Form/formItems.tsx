import React, { FC, useContext, useEffect } from 'react';
import { KeyType, FormItemsProps } from './types';
import { Context } from './hooks/context';
import Input from '../Input';
import { View, Text, TextInput } from 'react-native';

const FormItems: FC<any> = ({ formDatas = [] }) => {
  const {
    innerMethods: { store = {}, updateStore, forceUpdate, validator },
  } = useContext(Context);

  const change = (field: KeyType, value: any) => updateStore?.({ store: { ...store, [field]: value } });

  const validate = () => {
    validator.showMessages();
    forceUpdate();
  };

  const _render = () => {
    return formDatas.map((v: FormItemsProps, i: number) => {
      let _render;
      if (v.type === 'input') {
        _render = (
          <Input value={store[v.field]} onChangeText={(value) => change(v.field, value)} onBlur={() => validate()} />
        );
      }
      return (
        <View key={i}>
          {_render}
          <Text style={{ color: 'red' }}>
            {validator.message(v.field, store[v.field], {
              validate: v?.validate,
            })}
          </Text>
        </View>
      );
    });
  };

  return <React.Fragment>{_render()}</React.Fragment>;
};

export default FormItems;
