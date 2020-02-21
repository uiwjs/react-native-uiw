import React from 'react';
import { TextInput, TextInputProperties, GestureResponderEvent, KeyboardTypeOptions, View, StyleSheet, Platform, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { Icon } from '..';
import { InputItemPropsType } from './PropsType';

const noop = () => { };

function normalizeValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}


export interface InputProps extends Omit<TextInputProperties, 'onChange' | 'onFocus' | 'onBlur'>, InputItemPropsType {
  last?: boolean;
  onExtraClick?: (event: GestureResponderEvent) => void;
  onErrorClick?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export default class Input extends React.Component<InputProps, any> {
  static defaultProps = {
    type: 'text',
    editable: true,
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    last: false,
  };

  inputRef: TextInput | null | undefined;

  onChange = (text: string) => {
    const { onChange, type } = this.props;
    const maxLength = this.props.maxLength as number;
    switch (type) {
      case 'bankCard':
        text = text.replace(/\D/g, '');
        if (maxLength > 0) {
          text = text.substring(0, maxLength);
        }
        text = text.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        text = text.replace(/\D/g, '').substring(0, 11);
        const valueLen = text.length;
        if (valueLen > 3 && valueLen < 8) {
          text = `${text.substr(0, 3)} ${text.substr(3)}`;
        } else if (valueLen >= 8) {
          text = `${text.substr(0, 3)} ${text.substr(3, 4)} ${text.substr(7)}`;
        }
        break;
      case 'password':
        break;
      default:
        break;
    }
    if (onChange) {
      onChange(text);
    }
  };
  onInputClear = () => {
    if (this.inputRef) {
      this.inputRef.clear();
    }
    this.onChange('');
  }
  render() {
    const android = Platform.OS === 'android';
    const {
      type,
      editable,
      clear,
      children,
      error,
      extra,
      last,
      onExtraClick,
      onErrorClick,
      disabled,
      ...restProps
    } = this.props;
    const { value, defaultValue, style } = restProps;
    let valueProps: any;
    if ('value' in this.props) {
      valueProps = {
        value: normalizeValue(value),
      };
    } else {
      valueProps = {
        defaultValue,
      };
    }
    const keyboardTypeArray = [
      'default',
      'email-address',
      'numeric',
      'phone-pad',
      'ascii-capable',
      'numbers-and-punctuation',
      'url',
      'number-pad',
      'name-phone-pad',
      'decimal-pad',
      'twitter',
      'web-search',
    ];

    let keyboardType: any = 'default';

    if (type === 'number') {
      keyboardType = 'numeric';
    } else if (type === 'bankCard') {
      keyboardType = 'number-pad'; // 不带小数点
    } else if (type === 'phone') {
      keyboardType = 'phone-pad';
    } else if (type && keyboardTypeArray.indexOf(type) > -1) {
      keyboardType = type;
    }
    const disabledStyle = disabled ? inputStyles.disabledStyle : {};
    const extraStyle = {
      width:
        typeof extra === 'string' && (extra as string).length > 0
          ? (extra as string).length * 17
          : 0,
    };
    return <View style={inputStyles.container}>
      <TextInput
        editable={!disabled && editable}
        clearButtonMode={clear ? 'while-editing' : 'never'}
        underlineColorAndroid="transparent"
        ref={el => (this.inputRef = el)}
        {...restProps}
        {...valueProps}
        style={[
          inputStyles.input,
          error ? inputStyles.inputErrorColor : null,
          disabledStyle,
          // 支持自定义样式
          style,
        ]}
        keyboardType={keyboardType}
        onChange={event => this.onChange(event.nativeEvent.text)}
        secureTextEntry={type === 'password'}
      />
       {editable && clear && value && android ? (
                <TouchableOpacity
                  style={[inputStyles.clear]}
                  onPress={this.onInputClear}
                  hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
                >
                  <Icon name="circle-close" color="#fff" />
                </TouchableOpacity>
              ) : null}
      {extra ? (
        <TouchableWithoutFeedback onPress={onExtraClick}>
          <View>
            {typeof extra === 'string' ? (
              <Text style={[inputStyles.extra, extraStyle]}>{extra}</Text>
            ) : (
                extra
              )}
          </View>
        </TouchableWithoutFeedback>
      ) : null}
      {error && (
        <TouchableWithoutFeedback onPress={onErrorClick}>
          <View style={[inputStyles.errorIcon]}>
            <Icon
              name="circle-close"
              color="#dc3545"
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  }
}


const inputStyles = StyleSheet.create({
  container: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 17,
  },
  inputErrorColor: {
    color: '#f50',
  },
  disabledStyle: {
    color: '#ccc'
  },
  errorIcon: {
    marginLeft: 5,
    width: 20,
    height: 20
  },
  extra: {
    color: '#888888',
    marginLeft: 5,
    fontSize: 15,
  },
  clear: {
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 2,
  }

})