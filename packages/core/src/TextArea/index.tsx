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
  TextStyle,
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
  /** 是否展示字数 */
  showWords?: boolean;
  /** 输入框文字样式 */
  fontStyle?: StyleProp<TextStyle>;
}

function TextArea(props: TextAreaProps) {
  const {
    textAlignVertical = 'top',
    placeholder = '',
    placeholderTextColor = '#989FB2',
    numberOfLines = 30,
    onChange = () => {},
    maxLength = 50,
    value = '',
    editable = true,
    showWords = false,
    style,
    fontStyle,
    ...other
  } = props;

  return (
    <View style={StyleSheet.flatten([styles.viewBody, style])}>
      <View style={styles.bodyLayout}>
        <TextInput
          style={[styles.TextInput, fontStyle]}
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
        {showWords === true && <Text style={[styles.textWords, fontStyle]}>{value.length + '/' + maxLength}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    height: 100,
    marginHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 2,
    color: 'black',
    backgroundColor: '#fff',
  },
  bodyLayout: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  TextInput: {
    height: '80%',
  },
  textWords: {
    padding: 0,
    color: 'gray',
    textAlign: 'right',
  },
});

export default TextArea;
