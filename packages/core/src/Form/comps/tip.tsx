import React, { useContext } from 'react';
import { Context } from '../hooks/context';
import { FormItemsProps } from '../types';
import { Text } from 'react-native';

const Tip = ({ v }: { v: FormItemsProps }) => {
  const {
    innerMethods: { store = {}, validator },
  } = useContext(Context);

  const content = validator.message(v.field, store[v.field], {
    validate: v?.validate,
  });
  return <Text style={{ color: 'red', marginBottom: content && 10, marginTop: content && 10 }}>{content}</Text>;
};

export default Tip;
