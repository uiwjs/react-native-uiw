import React, { useEffect, useState, PropsWithoutRef } from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Icon from '../Icon';
import Text from '../Typography/Text';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

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
  inputRef?: React.ForwardedRef<TextInput>;
}

interface InputState {
  value?: string;
  control: 'props' | 'state';
}

const Input = React.forwardRef<TextInput, PropsWithoutRef<InputProps>>((props, ref) => {
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
  const theme = useTheme<Theme>();
  const styles = createStyles({
    bgColor: theme.colors.mask,
  });
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
          alignItems: 'center',
          paddingVertical: 0,
          height: minHeight,
        },
        containerStyle,
      ]}
      testID="RNE__Input__wrap"
    >
      <View
        style={[styles.container, { flex: 1, borderColor: borderColor }, border ? styles[border] : {}]}
        testID="RNE__Input__view"
      >
        {typeof extraStart === 'string' ? (
          <Text color="primary_text" style={{ fontSize }}>
            {extraStart}
          </Text>
        ) : (
          extraStart
        )}
        <TextInput
          testID="RNE__Input__input"
          {...others}
          ref={ref || inputRef}
          editable={!disabled}
          value={defaultValue}
          onChangeText={onInputChange}
          onFocus={onInputFocus}
          style={[{ fontSize, color: theme.colors.text || '#000' }, styles.input, style]}
        />
        {typeof extraEnd === 'string' ? (
          <Text color="primary_text" style={{ fontSize }}>
            {extraEnd}
          </Text>
        ) : (
          extraEnd
        )}
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
          {renderClear || (
            <Text color="primary_text" style={[{ fontSize }, clearStyle]}>
              清除
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
});
export default Input;
type CreStyle = {
  bgColor: string;
};
function createStyles({ bgColor }: CreStyle) {
  return StyleSheet.create({
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
      // color: 'red',
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
}
