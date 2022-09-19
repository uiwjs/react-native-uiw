import React, { FC, useContext } from 'react';
import { FormProps, KeyType, FormItemsProps } from './types';
import { Context } from './hooks/context';
import Input from '../Input';
import { View, Text } from 'react-native';
import { useValidator } from '@validator.tool/hook';

const FormItems: FC<FormProps> = ({ formDatas = [] }) => {
  const { innerMethods } = useContext(Context);

  const formValues = innerMethods.innerGetStore();

  const { validator, forceUpdate } = useValidator({
    initValues: { ...formValues },
  });

  const change = (field: KeyType, value: any) => innerMethods?.innerUpdateStore(field, value);

  const _render = () => {
    return formDatas.map((v: FormItemsProps, i: number) => {
      let _render;
      if (v.type === 'input') {
        _render = (
          <Input
            value={formValues[v.field]}
            onChangeText={(value) => change(v.field, value)}
            onBlur={() => {
              validator.showMessages();
              forceUpdate();
              console.log('validator', validator);
            }}
          />
        );
      }
      return (
        <View key={i}>
          {_render}
          <Text style={{ color: 'red' }}>
            {validator.message(v.field, formValues[v.field], {
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
