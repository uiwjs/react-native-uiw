import React, { useState, useEffect, memo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Pressable,
  StyleProp,
  ViewStyle,
  ColorValue,
} from 'react-native';
import MaskLayer from '../MaskLayer';
import SearchInputBar, { SearchInputBarProps } from '../SearchInputBar';
import List from '../List';
import Icon from '../Icon';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

interface SearchBarProps extends Omit<SearchInputBarProps, 'onChange' | 'value'> {
  onChangeText?: (value: string) => void;
  options?: Array<OptionsState>;
  onChange?: (value: string | null) => void;
  onFocus?: (e: any | string) => void;
  onBlur?: (e: any | string) => void;
  labelInValue?: Boolean;
  disabled?: Boolean;
  value?: string | OptionsState;
  loading?: Boolean;
  placeholder?: string;
  extra?: JSX.Element;
  showClear?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  placeholderColor?: ColorValue;
}

interface OptionsState {
  label: string;
  value: string | number;
}

// 搜索组件
function SearchBar({
  onChangeText,
  options = [],
  onChange,
  labelInValue,
  disabled,
  value,
  onFocus,
  onBlur,
  loading,
  placeholder,
  extra,
  showClear = true,
  contentStyle = {},
  placeholderColor,
  ...searchInputBarProps
}: SearchBarProps) {
  const theme = useTheme<Theme>();

  const styles = createStyles({
    bgColor: theme.colors.gray50 || '#F5F5F5',
    contentColor: theme.colors.black || '#000',
    iconColor: theme.colors.white || '#fff',
    cancelColor: theme.colors.gray400 || '#7C7D7E',
  });

  const [curValue, setCurValue] = useState<any>(value);
  const [visible, setVisivble] = useState(false);
  let textValue;
  if (labelInValue) {
    textValue = curValue?.label;
  } else {
    const { label }: any = options.find((item) => item.value === curValue);
    textValue = label;
  }

  useEffect(() => {
    setCurValue(value);
  }, [value]);

  // 搜索
  const onHandleChangeText = (val: string) => {
    onChangeText && onChangeText(val);
  };

  // 点击打开遮罩层
  const showSearchBar = () => {
    if (disabled) {
      return;
    }
    setVisivble(true);
  };

  return !visible ? (
    <Pressable onPress={showSearchBar}>
      <View style={[disabled ? styles.disabled : styles.content, contentStyle]}>
        <Text style={[styles.contentTitle, { color: placeholderColor }]}>{textValue ? textValue : placeholder}</Text>
        {React.isValidElement(extra) ? (
          extra
        ) : curValue && showClear ? (
          <Pressable
            onPress={() => {
              onChange && onChange(null);
              setCurValue(null);
            }}
            style={{ paddingRight: 3 }}
          >
            <Icon name="circle-close-o" size={18} color={theme.colors.gray200 || '#ccc'} />
          </Pressable>
        ) : (
          <Icon name="right" size={18} color={theme.colors.gray300 || '#A19EA0'} />
        )}
      </View>
    </Pressable>
  ) : (
    <MaskLayer visible={visible}>
      <SafeAreaView style={styles.container}>
        <SearchInputBar
          loading={loading}
          containerStyle={{ backgroundColor: theme.colors.white || '#fff', marginHorizontal: 10 }}
          autoFocus
          showActionButton
          placeholder="输入搜索..."
          onChangeText={onHandleChangeText}
          onFocus={onFocus && onFocus}
          onBlur={onBlur && onBlur}
          searchRender={
            <TouchableWithoutFeedback
              onPress={() => {
                setVisivble(false);
              }}
            >
              <View style={styles.cancel}>
                <Text>取消</Text>
              </View>
            </TouchableWithoutFeedback>
          }
          {...searchInputBarProps}
        />
        {loading ? (
          <ActivityIndicator color={theme.colors.gray500 || '#0A0258'} size="large" style={styles.loading} />
        ) : (
          <List style={styles.list}>
            {options.map((itm) => (
              <List.Item
                key={itm.value}
                onPress={() => {
                  const selectValue:
                    | any
                    | {
                        key: string;
                        label: string;
                      } = labelInValue ? { key: itm.value, label: itm.label } : itm.value;
                  onChange && onChange(selectValue);
                  setCurValue(selectValue);
                  setVisivble(false);
                }}
              >
                <Text style={{ fontSize: 16 }}>{itm.label}</Text>
              </List.Item>
            ))}
          </List>
        )}
      </SafeAreaView>
    </MaskLayer>
  );
}

export default memo(SearchBar);

type CreStyle = {
  bgColor: string;
  contentColor: string;
  iconColor: string;
  cancelColor: string;
};

function createStyles({ bgColor, contentColor, iconColor, cancelColor }: CreStyle) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor,
    },
    contentTitle: {
      fontSize: 16,
      color: contentColor,
    },
    icon: {
      backgroundColor: iconColor,
      paddingLeft: 10,
      justifyContent: 'center',
    },
    cancel: {
      color: cancelColor,
      paddingRight: 10,
      justifyContent: 'center',
    },
    list: {
      marginLeft: 10,
      marginTop: 10,
      marginRight: 10,
    },
    loading: {
      position: 'absolute',
      top: '20%',
      left: '45%',
    },
    content: {
      flexDirection: 'row',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 5,
      backgroundColor: iconColor,
      paddingHorizontal: 16,
    },
    disabled: {
      flexDirection: 'row',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 5,
      backgroundColor: bgColor,
      paddingHorizontal: 16,
    },
  });
}
