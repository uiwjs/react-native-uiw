import { number } from 'prop-types';
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  Dimensions,
  View,
  StyleProp,
  Text,
  TextInput,
} from 'react-native';
import Icon, { IconsName } from '../Icon';

export interface TextAreaProps extends ViewProps {
  /** 文本位置 */
  textAlignVertical?: 'top' | 'center' | 'auto' | 'bottom' | undefined;
  /** 默认提示语 */
  placeholder?: string;
  /** 提示语颜色 */
  placeholderTextColor?: string;
  /** 最大字符数 */
  maxLength?: number;
  /** 输入框的行数
   * Android平台
   */
  numberOfLines?: number;
  /** 是否禁用 */
  editable?: boolean;
  /** 文本域内容变化时触发 */
  onChange?: (val: string) => void;
  /** 文本框中的文字内容 */
  value?: string;
}

function TextArea(props: TextAreaProps) {
  const {
    textAlignVertical = 'top',
    placeholder = '',
    placeholderTextColor = '#989FB2',
    numberOfLines = 30,
    onChange = () => {},
    maxLength = 100,
    value = '',
    editable = true,
    style,
    ...other
  } = props;

  return (
    <View>
      <TextInput
        style={StyleSheet.flatten([styles.TextInput, style])}
        multiline={true}
        textAlignVertical={textAlignVertical}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        onChangeText={onChange}
        editable={editable}
        value={value}
        {...other}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    height: 100,
    padding: 10,
    marginHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 2,
    color: 'black',
    backgroundColor: '#fff',
  },
});

export default TextArea;
