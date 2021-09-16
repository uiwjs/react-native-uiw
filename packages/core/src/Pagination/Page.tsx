import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { containerStyle, containerSize, contentSize } from './DirText';
import { size } from './index';
import Button from '../Button';

export interface PageProps {
  size: size;
  current: number;
  currentColor?: string;
  totalPage: number;
}

const Page = (props: PageProps) => {
  const { size, currentColor, current, totalPage } = props;
  const textSize = size === 'small' ? 1 : 2;

  return (
    <View
      style={[
        styles.containerStyle,
        { minWidth: containerSize[size], height: containerSize[size], borderWidth: 0, flexShrink: 0 },
      ]}
    >
      <Button bordered={false}>
        <Text
          style={{
            color: currentColor ?? '#46a6ff',
            fontSize: contentSize[size],
            lineHeight: contentSize[size] + textSize,
          }}
        >
          {current}
        </Text>
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
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle,
});
export default Page;
