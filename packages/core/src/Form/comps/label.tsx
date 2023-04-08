import React from 'react';
import Flex from '../../Flex';
import { FormItemsProps } from '../types';
import { StyleSheet } from 'react-native';
import Text from '../../Typography/Text';

const Label = ({ v }: { v: Partial<FormItemsProps> }) => {
  return (
    <Flex>
      {v.required && <Text style={{ color: 'red', marginRight: 5 }}>*</Text>}
      <Text color="primary_text" style={styles.label} {...v.attr}>
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
    marginBottom: 10,
  },
});

export default Label;
