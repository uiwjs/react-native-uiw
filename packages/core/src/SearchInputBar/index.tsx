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
  Text,
  TextStyle,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import Icon, { IconsProps } from '../Icon';
import Loader from '../Loader';
import { colors } from '../utils';

export interface SearchInputBarProps extends TextInputProps {
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 右侧按钮 */
  touchProps?: TouchableWithoutFeedbackProps;
  /** 右侧按钮文案 */
  actionName?: string;
  /** 是否一直显示右侧按钮 null = 永不显示 */
  showActionButton?: boolean | null;
  /** 搜索图标Icon参数 参考Icon组件 */
  searchIcon?: IconsProps;
  /** 点击搜索图标时触发事件 */
  onSearch?: Function;
  /** 清除图标Icon参数 参考Icon组件 */
  closeIcon?: IconsProps;
  /** 点击清除图标时触发事件 */
  onClear?: Function;
  /** 自定义搜索 */
  searchRender?: JSX.Element;
  /** 输入框TextInput样式 */
  inputStyle?: TextStyle;
  /** loading加载 */
  loading?: any;
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

  // 右侧搜索
  renderSearch = () => {
    const { showActionButton, searchRender, touchProps, actionName = '搜索', loading } = this.props;
    const { showIcon } = this.state;
    if (showActionButton || showIcon) {
      return searchRender ? (
        searchRender
      ) : (
        <TouchableOpacity {...touchProps} style={[styles.search, { paddingHorizontal: 10 }]}>
          <Text>{actionName}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  render() {
    const {
      value,
      onChangeText,
      showActionButton,
      inputStyle,
      containerStyle,
      searchIcon,
      closeIcon,
      loading,
      ...other
    } = this.props;
    return (
      <Loader loading={loading ? loading : false} rounded={5} maskColor="transparent">
        <View style={[styles.centerFlex]}>
          <View style={StyleSheet.flatten([styles.searchContainer, styles.centerFlex, containerStyle])}>
            <TouchableOpacity style={{}} onPress={() => this.needFocus('search')}>
              <Icon name="search" size={14} color={colors.colorsPalette.grey40} height={'100%'} {...searchIcon} />
            </TouchableOpacity>
            <TextInput
              {...other}
              value={value}
              onChangeText={onChangeText}
              ref={this.inputRef}
              style={[styles.textInput, inputStyle]}
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
                <Icon name="close" size={14} color={colors.colorsPalette.grey40} height={'100%'} {...closeIcon} />
              </TouchableOpacity>
            )}
          </View>
          {this.renderSearch()}
        </View>
      </Loader>
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
    borderRadius: 5,
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.colorsPalette.grey70,
  },
  textInput: {
    paddingVertical: 0,
    height: '100%',
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
    color: colors.colorsPalette.grey40,
  },
  search: {
    justifyContent: 'center',
    borderWidth: 0,
  },
});
