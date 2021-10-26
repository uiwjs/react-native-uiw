import React from 'react';
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
export default class Input extends React.Component<InputProps, InputState> {
  state: InputState = {
    value: this.props.value,
    control: 'state',
  };
  static getDerivedStateFromProps(props: InputProps, state: InputState) {
    if (state.control === 'state' && props.value === state.value) {
      return {
        control: 'props',
      };
    }
    if (props.value !== state.value) {
      if (state.control === 'state') {
        return {
          control: 'props',
        };
      }
      return {
        value: props.value,
        control: 'props',
      };
    }
    return null;
  }
  onChangeText = (value: string) => {
    let flag = true;
    if (this.props.rule instanceof RegExp) {
      flag = this.props.rule.test(value);
    }
    if (typeof this.props.rule === 'function') {
      flag = this.props.rule(value);
    }
    if (flag) {
      this.setState({ value, control: 'state' });
      this.props.onChangeText?.(value);
      return false;
    }
    this.setState({ value: this.state.value || '', control: 'state' });
    this.props.onChangeText?.(this.state.value || '');
    this.props.wrongfulHandle?.();
  };
  onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (this.props.clearText) {
      this.setState({ value: '', control: 'state' });
      this.props.onChangeText?.('');
    }
    this.props.onFocus?.(e);
  };
  render() {
    const {
      wrongfulHandle,
      rule,
      value,
      onChangeText,
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
    } = this.props;
    const fontSize = StyleSheet.flatten(style).fontSize || 14;
    const minHeight = StyleSheet.flatten(containerStyle)?.height || 30;
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
      >
        <View style={[inputStyles.container, { flex: 1, borderColor: borderColor }, border ? inputStyles[border] : {}]}>
          {typeof extraStart === 'string' ? (
            <Text style={{ color: '#888888', fontSize }}>{extraStart}</Text>
          ) : (
            extraStart
          )}
          <TextInput
            {...others}
            ref={inputRef}
            editable={!disabled}
            value={this.state.value}
            onChangeText={this.onChangeText}
            onFocus={this.onFocus}
            style={[{ fontSize }, inputStyles.input, style]}
          />
          {typeof extraEnd === 'string' ? <Text style={{ color: '#888888', fontSize }}>{extraEnd}</Text> : extraEnd}
          {error && (renderError || <Icon name="circle-close" color="#dc3545" />)}
        </View>
        {clear && (
          <TouchableOpacity
            onPress={() => {
              this.setState({ value: '', control: 'state' });
              this.props.onChangeText?.('');
            }}
          >
            {renderClear || <Text style={[{ color: '#888888', fontSize }, clearStyle]}>清除</Text>}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const inputStyles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    color: '#000',
    backgroundColor: 'transparent',
    paddingVertical: 0,
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
