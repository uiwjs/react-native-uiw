import React from 'react';
import Flex from '../../Flex';
import { FormItemsProps } from '../types';
import { Text, StyleSheet } from 'react-native';

const Label = ({ v }: { v: Partial<FormItemsProps> }) => {
  return (
    <Flex>
      {v.required && <Text style={{ color: 'red', marginRight: 5 }}>*</Text>}
      <Text style={styles.label} {...v.attr}>
        {v.name}
      </Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  label: {
    width: 'auto',
    fontSize: 16,
    color: '#434343',
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default Label;
