import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ImagePicker = () => {
  return <View style={styles.tree}>
      <Text>ImagePicker</Text>
    </View>;
};
const styles = StyleSheet.create({
  tree: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff'
  }
});
export default ImagePicker;