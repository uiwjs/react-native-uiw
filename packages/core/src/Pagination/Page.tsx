import React, { useState, useEffect } from 'react';
import { View, ViewStyle, TextStyle, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';
import { containerStyle, containerSize, contentSize } from './DirText';
import { size } from './index';
import Button from '../Button';

export interface PageProps {
  size: size;
  current: number;
  currentColor?: string;
  totalPage: number;
  renderPages?: (current: number, totalPage: number) => React.ReactNode;
  onCurrent?: (current: number, totalPage?: number) => unknown;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  simple?: boolean;
}

const Page = (props: PageProps) => {
  const { size, currentColor, current, totalPage, renderPages, onCurrent, setCurrent, simple } = props;

  useEffect(() => {
    setJumpCurrent(String(current));
  }, [current]);
  const [jumpCurrent, setJumpCurrent] = useState('1');
  const [currentType, setJumpCurrentType] = useState(true);

  const textSize = size === 'small' ? 1 : 2;
  if (renderPages) {
    return (
      <TouchableHighlight activeOpacity={1} underlayColor="#f1f1f1" onPress={() => onCurrent?.(current)}>
        {renderPages(current, totalPage)}
      </TouchableHighlight>
    );
  }
  return (
    <View
      style={[
        styles.containerStyle,
        { minWidth: containerSize[size], height: containerSize[size], borderWidth: 0, flexShrink: 0 },
      ]}
    >
      {simple === true ? (
        <TextInput
          keyboardType="number-pad"
          onBlur={() => {
            let newJumpCurrent = Number(jumpCurrent);
            if (newJumpCurrent >= totalPage) {
              setCurrent(totalPage);
            } else {
              setCurrent(newJumpCurrent);
            }
          }}
          onFocus={() => {
            setJumpCurrent('');
          }}
          blurOnSubmit={true}
          onChangeText={(text) => {
            setJumpCurrent(text);
          }}
          value={jumpCurrent}
          style={[
            styles.inputStyle,
            {
              color: currentColor ?? '#46a6ff',
              fontSize: contentSize[size],
              lineHeight: contentSize[size] + textSize,
            },
          ]}
        />
      ) : (
        <Text
          style={{
            color: currentColor ?? '#46a6ff',
            fontSize: contentSize[size],
            lineHeight: contentSize[size] + textSize,
          }}
        >
          {current}
        </Text>
      )}
      <Text
        style={{
          color: currentColor ?? '#46a6ff',
          fontSize: contentSize[size] - 1,
          lineHeight: contentSize[size] - textSize,
        }}
      >
        /
      </Text>
      <Text style={{ color: '#3d3d3d', fontSize: contentSize[size], lineHeight: contentSize[size] + textSize }}>
        {totalPage}
      </Text>
    </View>
  );
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
export default Page;
