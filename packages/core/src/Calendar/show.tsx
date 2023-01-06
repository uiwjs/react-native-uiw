import React from 'react';
import { View, Text, ViewProps, StyleSheet } from 'react-native';
// import Icon from '../Icon';

export interface ShowProps extends ViewProps {
  iconColor?: string;
  lunar?: string;
}
const Show = (props: ShowProps) => {
  const { lunar = '' } = props;
  return (
    <View style={styles.show}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{lunar}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  show: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default Show;
