import React, { useContext } from 'react';
import { Context } from '../hooks/context';
import { FormItemsProps } from '../types';
import { View, Text } from 'react-native';

const Tip = ({ v }: { v: Partial<FormItemsProps> & { field: string } }) => {
  const {
    innerMethods: { store = {}, validator },
  } = useContext(Context);

  const content = validator.message(v.field, store[v.field], {
    validate: v?.validate,
  });
  return (
    <View style={{ marginTop: 5 }}>
      {content && <Text style={{ color: 'red', marginBottom: content && 5 }}>{content}</Text>}
    </View>
  );
};

export default Tip;
