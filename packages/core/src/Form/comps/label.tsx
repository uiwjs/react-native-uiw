import React from 'react';
import Flex from '../../Flex';
import { FormItemsProps } from '../types';
import { StyleSheet, ViewStyle } from 'react-native';
import Text from '../../Typography/Text';

const Label = ({ v, labelStyle }: { v: Partial<FormItemsProps>; labelStyle?: ViewStyle }) => {
  return (
    <Flex align="center" justify="start" style={{ ...labelStyle }}>
      {v.required && <Text style={{ color: 'red', marginRight: 5 }}>*</Text>}
      <Text color="primary_text" numberOfLines={1} ellipsizeMode="tail" style={[styles.label]} {...v.attr}>
        {v.name}
      </Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  label: {
    width: 'auto',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
});

export default Label;
