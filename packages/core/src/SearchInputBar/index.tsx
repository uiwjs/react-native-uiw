import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';
import Icon, { IconsProps } from '../Icon';
import Button, { ButtonProps } from '../Button';

export interface SearchInputBarProps extends TextInputProps {
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 右侧按钮 */
  button?: ButtonProps;
  /** 右侧按钮文案 */
  actionName?: string;
  /** 是否一直显示右侧按钮 null = 永不显示 */
  showActionButton?: boolean | null;
  /** 搜索图标 */
  searchIcon?: IconsProps;
  /** 点击搜索图标时触发事件 */
  onSearch?: Function;
  /** 清除图标 */
  closeIcon?: IconsProps;
  /** 点击清除图标时触发事件 */
  onClear?: Function;
}

interface SearchInputBarState {
  // isShow close icon
  showIcon: boolean;
}

export default class SearchInputBar extends React.Component<SearchInputBarProps, SearchInputBarState> {
  public inputRef = React.createRef<TextInput>();
  constructor(props: SearchInputBarProps) {
    super(props);
    this.state = {
      showIcon: false,
    };
  }

  needFocus = (type: 'search' | 'close' | 'actived') => {
    if (type === 'close') {
      this.props.onClear?.();
    } else if (type === 'search' && this.props.value) {
      this.props.onSearch?.();
      return;
    }
    if (type === 'actived') {
      this.setState({ showIcon: true });
    }
    this.inputRef.current && this.inputRef.current.focus();
  };
  render() {
    const {
      value,
      onChangeText,
      showActionButton,
      actionName = '搜索',
      button,
      style,
      containerStyle,
      searchIcon,
      closeIcon,
      ...other
    } = this.props;
    return (
      <View style={[styles.centerFlex]}>
        <View style={StyleSheet.flatten([styles.searchContainer, styles.centerFlex, containerStyle])}>
          <TouchableOpacity style={{}} onPress={() => this.needFocus('search')}>
            <Icon name="search" size={18} color="#999" height={'100%'} {...searchIcon} />
          </TouchableOpacity>
          <TextInput
            {...other}
            value={value}
            onChangeText={onChangeText}
            ref={this.inputRef}
            style={[styles.textInput, style]}
            onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
              if (showActionButton !== null) {
                this.setState({ showIcon: true });
              }
              other?.onFocus?.(e);
            }}
            onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
              if (showActionButton !== null && !value) {
                this.setState({ showIcon: false });
              }
              other?.onBlur?.(e);
            }}
          />
          {Boolean(value) && (
            <TouchableOpacity style={{}} onPress={() => this.needFocus('close')}>
              <Icon name="close" size={18} color="#999" height={'100%'} {...closeIcon} />
            </TouchableOpacity>
          )}
        </View>
        {(showActionButton || this.state.showIcon) && (
          <Button type="primary" {...button}>
            {actionName}
          </Button>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  searchContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  textInput: {
    height: '100%',
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
  },
});
