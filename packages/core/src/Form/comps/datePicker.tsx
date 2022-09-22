import React, { useState } from 'react';
import { SafeAreaView, Pressable, View, Text, StyleSheet } from 'react-native';
import DatePicker, { DatePickerProps } from '../../DatePicker';
import Icon from '../../Icon';

const FormDatePicker = ({ value, ok, ...attr }: DatePickerProps & { ok?: (value: string) => void }) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <Pressable onPress={() => setVisible(true)}>
        <View style={[styles.content]}>
          <Text style={styles.contentTitle}>{value ? value : ''}</Text>
          <Icon name="right" size={18} color="#A19EA0" />
        </View>
      </Pressable>
      <DatePicker
        value={value}
        visible={visible}
        onClosed={() => setVisible(false)}
        onOk={(value) => {
          setVisible(false);
          ok?.(value);
        }}
        {...attr}
      />
    </SafeAreaView>
  );
};

export default FormDatePicker;

const styles = StyleSheet.create({
  contentTitle: {
    fontSize: 16,
    color: 'black',
  },
  content: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
    backgroundColor: '#fff',
  },
});
