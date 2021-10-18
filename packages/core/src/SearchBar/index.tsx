import React, { useState, useEffect, memo, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import MaskLayer from '../MaskLayer';
import SearchInputBar from '../SearchInputBar';
import List from '../List';
import { down } from './svg';
import Icon from '../Icon';

interface SearchBarProps {
  onChangeText?: (value: string) => void;
  options?: Array<OptionsState>;
  onChange?: (value: string | null) => void;
  onFocus?: (e: any | string) => void;
  onBlur?: (e: any | string) => void;
  labelInValue?: Boolean;
  disabled?: Boolean;
  value?: String;
  loading?: Boolean;
  placeholder?: String;
  extra?: JSX.Element;
  showClear?: boolean;
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
}: SearchBarProps) {
  const [curValue, setCurValue] = useState<any>(value);
  const [visible, setVisivble] = useState(false);
  const textValue = labelInValue ? curValue && curValue.label : curValue;

  useEffect(() => {
    setCurValue(value);
  }, [value]);

  useEffect(() => {
    visible && onFocus;
  }, [visible]);

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
      <View style={[styles.content]}>
        <Text style={styles.contentTitle}>{textValue ? textValue : placeholder}</Text>
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
            <Icon name="circle-close-o" size={18} color="#ccc" />
          </Pressable>
        ) : (
          <Icon xml={down} size={18} color="#A19EA0" />
        )}
      </View>
    </Pressable>
  ) : (
    <MaskLayer visible={visible}>
      <SafeAreaView style={styles.container}>
        <SearchInputBar
          loading={loading}
          containerStyle={{ backgroundColor: '#fff', marginHorizontal: 10 }}
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
        />
        {loading ? (
          <ActivityIndicator color="#0A0258" size="large" style={styles.loading} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentTitle: {
    fontSize: 16,
    color: 'black',
  },
  icon: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  cancel: {
    color: '#7C7D7E',
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
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  disabled: {
    backgroundColor: '#f5f5f5',
  },
});
