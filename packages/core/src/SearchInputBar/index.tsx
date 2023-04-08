import React, { useState } from 'react';
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
  TextStyle,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import Icon, { IconsProps } from '../Icon';
import Loader from '../Loader';
import { colors } from '../utils';
import Text from '../Typography/Text';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

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
  searchRender?: React.ReactNode;
  /** 输入框TextInput样式 */
  inputStyle?: TextStyle;
  /** loading加载 */
  loading?: any;
}

interface SearchInputBarState {
  // isShow close icon
  showIcon: boolean;
}

const SearchInputBar = (props: SearchInputBarProps) => {
  const inputRef = React.createRef<TextInput>();
  const theme = useTheme<Theme>();
  const [state, setState] = useState<SearchInputBarState>({
    showIcon: false,
  });

  const needFocus = (type: 'search' | 'close' | 'actived') => {
    if (type === 'close') {
      props.onClear?.();
    } else if (type === 'search') {
      props.onSearch?.();
      return;
    }
    if (type === 'actived') {
      setState({ showIcon: true });
    }
    inputRef.current && inputRef.current.focus();
  };

  // 右侧搜索
  const renderSearch = () => {
    const { showActionButton, searchRender, touchProps, actionName = '搜索' } = props;
    const { showIcon } = state;
    if (showActionButton || showIcon) {
      return searchRender ? (
        searchRender
      ) : (
        <TouchableOpacity {...touchProps} style={[styles.search, { paddingHorizontal: 10 }]}>
          <Text color="primary_background">{actionName}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const {
    value,
    onChangeText,
    showActionButton,
    inputStyle,
    containerStyle,
    searchIcon,
    closeIcon,
    loading = false,
    ...other
  } = props;

  return (
    <Loader loading={loading} rounded={5} maskColor="transparent">
      <View style={[styles.centerFlex]}>
        <View
          style={StyleSheet.flatten([
            { backgroundColor: theme.colors.mask || '#fff' },
            styles.searchContainer,
            styles.centerFlex,
            containerStyle,
          ])}
        >
          <TouchableOpacity onPress={() => needFocus('search')}>
            <Icon name="search" size={14} color={theme.colors.text} height={'100%'} {...searchIcon} />
          </TouchableOpacity>
          <TextInput
            {...other}
            value={value}
            onChangeText={onChangeText}
            ref={inputRef}
            style={[{ color: theme.colors.primary_text || '#A6ACB1' }, styles.textInput, inputStyle]}
            onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
              if (showActionButton !== null) {
                setState({ showIcon: true });
              }
              other?.onFocus?.(e);
            }}
            onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
              if (showActionButton !== null && !value && !loading) {
                setState({ showIcon: false });
              }
              other?.onBlur?.(e);
            }}
          />
          {Boolean(value) && (
            <TouchableOpacity style={{}} onPress={() => needFocus('close')}>
              <Icon
                name="close"
                size={14}
                color={theme.colors.primary_text || '#A6ACB1'}
                height={'100%'}
                {...closeIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        {renderSearch()}
      </View>
    </Loader>
  );
};

export default SearchInputBar;

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
  },
  textInput: {
    paddingVertical: 0,
    height: '100%',
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
  },
  search: {
    justifyContent: 'center',
    borderWidth: 0,
  },
});
