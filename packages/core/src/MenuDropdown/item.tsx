import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface ItemProps {
  children?: React.ReactNode;
}

export default function Item(props: ItemProps) {
  return <View style={styles.item}>{props.children}</View>;
}

const styles = StyleSheet.create({
  item: {
    minHeight: 30,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
    zIndex: 1000,
  },
});
