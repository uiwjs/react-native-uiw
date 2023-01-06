import React, { useState } from 'react';
import { View, ViewStyle, TextStyle, StyleSheet, Text, TextInput } from 'react-native';
import { size } from './index';

export enum containerSize {
  small = 30,
  default = 36,
  large = 44,
}
export enum contentSize {
  small = 12,
  default = 18,
  large = 26,
}
export interface MoreDirProps {
  size: size;
  borderColor?: string;
  color?: string;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  current: number;
}

const MoreDir = (props: MoreDirProps) => {
  const { setCurrent, current } = props;
  const [jumpCurrent, setJumpCurrent] = useState(1);

  return (
    <View style={styles.containerStyle}>
      <Text>跳至</Text>
      <TextInput
        keyboardType="numeric"
        onSubmitEditing={() => {
          setCurrent(Number(jumpCurrent));
        }}
        onBlur={() => {
          setCurrent(Number(jumpCurrent));
        }}
        blurOnSubmit={true}
        onChangeText={(text) => {
          let textCurrent: number = Number(text);
          if (textCurrent >= current) {
            setJumpCurrent(current);
          } else if (textCurrent < current) {
            setJumpCurrent(textCurrent);
          }
        }}
        style={styles.inputStyle}
      />
      <Text>页</Text>
    </View>
  );
};

export const containerStyle: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 5,
};
export const inputStyle: ViewStyle | TextStyle = {
  height: 27,
  width: 33,
  borderColor: 'gray',
  borderWidth: 0.5,
  textAlign: 'center',
  padding: 2,
  marginHorizontal: 3,
};
const styles = StyleSheet.create({
  containerStyle,
  inputStyle,
});
export default MoreDir;
