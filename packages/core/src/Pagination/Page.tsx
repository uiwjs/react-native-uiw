import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
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
}

const Page = (props: PageProps) => {
  const { size, currentColor, current, totalPage, renderPages, onCurrent } = props;
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
