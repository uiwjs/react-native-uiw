import React, { useState, useEffect } from 'react';
import { View, ViewStyle, TextStyle, StyleSheet, Text, TouchableHighlight, TextInput } from 'react-native';
import { containerStyle, containerSize, contentSize } from './DirText';
import { size } from './index';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

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
  const theme = useTheme<Theme>();
  const styles = createStyles({
    boxColor: theme.colors.primary_background,
  });
  const { size, currentColor, current, totalPage, renderPages, onCurrent, setCurrent, simple } = props;

  useEffect(() => {
    setJumpCurrent(String(current));
  }, [current]);
  const [jumpCurrent, setJumpCurrent] = useState('1');

  const textSize = size === 'small' ? 1 : 2;
  if (renderPages) {
    return (
      <TouchableHighlight activeOpacity={1} underlayColor={theme.colors.gray50} onPress={() => onCurrent?.(current)}>
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
              color: currentColor ?? theme.colors.primary_background,
              fontSize: contentSize[size],
              lineHeight: contentSize[size] + textSize,
            },
          ]}
        />
      ) : (
        <Text
          style={{
            color: currentColor ?? theme.colors.primary_background,
            fontSize: contentSize[size],
            lineHeight: contentSize[size] + textSize,
          }}
        >
          {current}
        </Text>
      )}
      <Text
        style={{
          color: currentColor ?? theme.colors.primary_background,
          fontSize: contentSize[size] - 1,
          lineHeight: contentSize[size] - textSize,
        }}
      >
        /
      </Text>
      <Text
        style={{ color: theme.colors.gray500, fontSize: contentSize[size], lineHeight: contentSize[size] + textSize }}
      >
        {totalPage}
      </Text>
    </View>
  );
};

type CreStyle = {
  boxColor: string;
};

function createStyles({ boxColor }: CreStyle) {
  return StyleSheet.create({
    containerStyle: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputStyle: {
      height: 27,
      width: 33,
      borderColor: boxColor,
      borderWidth: 0.5,
      textAlign: 'center',
      padding: 2,
      marginHorizontal: 3,
    },
  });
}
export default Page;
