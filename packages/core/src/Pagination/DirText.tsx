import React, { useRef, useState, useEffect } from 'react';
import { View, ViewStyle, StyleSheet, useColorScheme } from 'react-native';
import Icon from '../Icon';
import Button from '../Button';
import { size } from './index';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
import Text from '../Typography/Text';

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
export interface DirTextProps {
  size: size;
  direction: 'left' | 'right';
  disabled: boolean;
  icon: boolean;
  onPageChange: (type: 'prev' | 'next') => void;
  borderColor?: string;
  color?: string;
}

const DirText = (props: DirTextProps) => {
  const theme = useTheme<Theme>();
  const colorScheme = useColorScheme();
  const {
    size,
    direction,
    disabled,
    icon,
    onPageChange,
    // borderColor = theme.colors.gray300 || '#8d8d8d',
    color,
  } = props;
  const dirText: '上一页' | '下一页' = useRef<'上一页' | '下一页'>(direction === 'left' ? '上一页' : '下一页').current;
  const [disabledStyle, setDisabledStyle] = useState(1);
  useEffect(() => {
    setDisabledStyle(disabled ? 0.4 : 1);
  }, [disabled]);
  const textColor = colorScheme === 'dark' ? '#ccc' : '#3d3d3d';
  return (
    <View
      style={[
        styles.containerStyle,
        {
          minWidth: containerSize[size],
          // borderColor: borderColor,
          backgroundColor: theme.colors.white || '#fff',
          // paddingHorizontal: icon ? 0 : 5,
          opacity: disabled ? disabledStyle : disabledStyle - 0.2,
        },
      ]}
    >
      <Button
        bordered={false}
        disabled={disabled}
        size={props.size}
        onPress={() => {
          onPageChange(direction === 'left' ? 'prev' : 'next');
        }}
      >
        {icon ? (
          <Icon name={direction} size={contentSize[size]} color={color || textColor} />
        ) : (
          <Text style={{ color: color || textColor }}>{dirText}</Text>
        )}
      </Button>
    </View>
  );
};

export const containerStyle: ViewStyle = {
  borderStyle: 'dashed',
  // borderWidth: 1,
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
const styles = StyleSheet.create({
  containerStyle,
});
export default DirText;
