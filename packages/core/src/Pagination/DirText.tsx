import React, { useRef, useState, useEffect } from 'react';
import { View, ViewStyle, StyleSheet, Text, TouchableOpacity, Modal, ModalProps, Animated } from 'react-native';
import Icon from '../Icon'
import Button from '../Button'
import { size } from './index'

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
  size: size,
  direction: 'left' | 'right',
  disabled: boolean,
  icon: boolean,
  onPageChange: (type: 'prev' | 'next')=>void
}

const DirText = (props: DirTextProps) => {
  const { size, direction, disabled, icon,onPageChange } = props;
  const dirText: '上一页' | '下一页' = useRef<'上一页' | '下一页'>(direction === 'left' ? '上一页' : '下一页').current
  const [disabledStyle, setDisabledStyle] = useState<'#d9d9d9' | '#3d3d3d'>('#3d3d3d')
  useEffect(() => {
    setDisabledStyle(disabled ? '#d9d9d9' : '#3d3d3d')
  }, [disabled])


  return (
    <View style={[styles.containerStyle, { minWidth: containerSize[size], height: containerSize[size], paddingHorizontal: icon ? 0 : 5 }]}>
      <Button bordered={false} disabled={disabled} onPress={()=>{
        onPageChange(direction==='left'?'prev':'next')
      }}>
        {icon ? <Icon name={direction} size={contentSize[size]} color={disabledStyle} /> : <Text style={{ fontSize: contentSize[size], color: disabledStyle }}>
          {dirText}
        </Text>}
      </Button>
    </View>
  );
}

export const containerStyle: ViewStyle = {
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#d9d9d9',
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
const styles = StyleSheet.create({
  containerStyle,
});
export default DirText