import React, { FC, useContext, useEffect } from 'react';
import { FormProps, KeyType, FormItemsProps } from './types';
import { Context } from './hooks/context';
import Input from '../Input';
import { View, Text } from 'react-native';

const FormItems: FC<any> = ({ formDatas = [] }) => {
  const {
    innerMethods: { store = {}, updateStore },
  } = useContext(Context);

  const change = (field: KeyType, value: any) => updateStore?.({ store: { ...store, [field]: value } });

  const validate = async () => {
    // showMessages();
    // forceUpdate();
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
          {/* <Text style={{ color: 'red' }}>
            {message(v.field, formValues[v.field], {
              validate: v?.validate,
            })}
          </Text> */}
        </View>
      );
    });
  };

  return <React.Fragment>{_render()}</React.Fragment>;
};

export default FormItems;
