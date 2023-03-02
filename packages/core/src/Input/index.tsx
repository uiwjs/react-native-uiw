import React, { useEffect, useState } from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Icon from '../Icon';

// StyleProp<ViewStyle>
export interface InputProps extends TextInputProps {
  /** 限制输入条件 */
  rule?: RegExp | ((value: string) => boolean);
  /** 输入不合法时触发方法 */
  wrongfulHandle?: Function;
  /** 如果为 true，文本框是不可编辑的。默认值为 false */
  disabled?: boolean;
  /** 如果为 true，每次开始输入的时候都会清除文本框的内容。 */
  clearText?: boolean;
  /** 显示错误 */
  error?: boolean;
  /** 自定义错误提示 */
  renderError?: React.ReactNode;
  /** 边框 */
  border?: 'bottom' | 'top' | 'left' | 'right' | null | 'always';
  /** 边框颜色 */
  borderColor?: string;
  /** 是否显示清除按钮 */
  clear?: boolean;
  /** 清除按钮样式 */
  clearStyle?: StyleProp<TextStyle>;
  /** 自定义清除元素 */
  renderClear?: React.ReactNode;
  /** 输入框前缀的额外的信息 */
  extraStart?: string | React.ReactNode;
  /** 输入框末尾额外的信息 */
  extraEnd?: string | React.ReactNode;
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 输入框 ref */
  inputRef?: React.RefObject<TextInput>;
}

interface InputState {
  value?: string;
  control: 'props' | 'state';
}

const Input = (props: InputProps) => {
  const {
    wrongfulHandle,
    rule,
    value,
    onChangeText,
    onFocus,
    clearText,
    disabled = false,
    clear,
    clearStyle,
    renderClear,
    extraStart,
    extraEnd,
    style = [],
    containerStyle,
    border = 'bottom',
    borderColor = '#ccc',
    error = false,
    renderError,
    inputRef,
    ...others
  } = props;

  const [defaultValue, setDefaultValue] = useState<string | undefined>(value);
  const [control, setControl] = useState<string>('state');

  useEffect(() => {
    if (control === 'state' && value === defaultValue) {
      setControl('props');
    }
    if (value !== defaultValue) {
      if (control === 'state') {
        setControl('props');
      } else {
        setDefaultValue(value);
        setControl('props');
      }
    }
  }, [value, control]);

  const fontSize = StyleSheet.flatten(style).fontSize || 14;
  const minHeight = StyleSheet.flatten(containerStyle)?.height || 30;

  const onInputChange = (value: string) => {
    let flag = true;
    if (rule instanceof RegExp) {
      flag = rule.test(value);
    }
    if (typeof rule === 'function') {
      flag = rule(value);
    }
    if (flag) {
      setDefaultValue(value);
      setControl('state');
      onChangeText?.(value);
      return false;
    }
    setDefaultValue(defaultValue || '');
    setControl('state');
    onChangeText?.(defaultValue || '');
    wrongfulHandle?.();
  };

  const onInputFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (clearText) {
      setDefaultValue('');
      setControl('state');
      onChangeText?.('');
    }
    onFocus && onFocus(e);
  };

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingVertical: 0,
          height: minHeight,
        },
        containerStyle,
      ]}
      testID="RNE__Input__wrap"
    >
      <View
        style={[inputStyles.container, { flex: 1, borderColor: borderColor }, border ? inputStyles[border] : {}]}
        testID="RNE__Input__view"
      >
        {typeof extraStart === 'string' ? <Text style={{ color: '#888888', fontSize }}>{extraStart}</Text> : extraStart}
        <TextInput
          testID="RNE__Input__input"
          {...others}
          ref={inputRef}
          editable={!disabled}
          value={defaultValue}
          onChangeText={onInputChange}
          onFocus={onInputFocus}
          style={[{ fontSize }, inputStyles.input, style]}
        />
        {typeof extraEnd === 'string' ? <Text style={{ color: '#888888', fontSize }}>{extraEnd}</Text> : extraEnd}
        {error && (renderError || <Icon name="circle-close" color="#dc3545" />)}
      </View>
      {clear && (
        <TouchableOpacity
          onPress={() => {
            setDefaultValue('');
            setControl('state');
            onInputChange?.('');
          }}
        >
          {renderClear || <Text style={[{ color: '#888888', fontSize }, clearStyle]}>清除</Text>}
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Input;

const inputStyles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '1px solid',
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    color: '#000',
    backgroundColor: 'transparent',
    paddingVertical: 0,
    paddingTop: 0,
  },
  always: {
    borderWidth: 1,
  },
  bottom: {
    borderBottomWidth: 1,
  },
  top: {
    borderTopWidth: 1,
  },
  left: {
    borderLeftWidth: 1,
  },
  right: {
    borderRightWidth: 1,
  },
  inputErrorColor: {
    color: '#f50',
  },
});
