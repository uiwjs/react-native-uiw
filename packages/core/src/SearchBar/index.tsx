import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import MaskLayer from '../MaskLayer';
import List from '../List';
import { down } from './svg';
import Icon from '../Icon';

interface SearchBarProps {
  onChangeText?: (value: string) => void;
  options?: Array<OptionsState>;
  onChange?: (value: string | null) => void;
  onFocus?: (e: any | string) => void;
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
export default function SearchBar({
  onChangeText,
  options = [],
  onChange,
  labelInValue,
  disabled,
  value,
  onFocus,
  loading,
  placeholder,
  extra,
  showClear = true
}: SearchBarProps) {
  const onHandleChangeText = (val: string) => {
    onChangeText && onChangeText(val);
  };
  const [curValue, setCurValue] = useState<any>(value);
  const [visible, setVisivble] = useState(false);
  useEffect(() => {
    setCurValue(value);
  }, [value]);

  useEffect(() => {
    visible && onFocus;
  }, [visible]);

  const showSearchBar = () => {
    if (disabled) {
      return;
    }
    setVisivble(true);
  };
  const textValue = labelInValue ? curValue && curValue.label : curValue;
  return !visible ? (
    <Pressable onPress={showSearchBar}>
      <View style={[styles.content]}>
        <Text style={styles.contentTitle}>{textValue ? textValue : placeholder}</Text>
        {React.isValidElement(extra) ? (
          extra
        ) :
          curValue && showClear ?
            <Pressable onPress={() => {
              onChange && onChange(null)
              setCurValue(null)
            }} style={{ paddingRight: 3 }}>
              <Icon name="circle-close-o" size={18} color="#ccc" />
            </Pressable> :
            <Icon xml={down} size={18} color="#A19EA0" />
        }
      </View>
    </Pressable>
  ) : (
    <MaskLayer visible={visible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputBox}>
          <View style={styles.leftBox}>
            <View style={styles.icon}>
              <Icon name="search" color="#ccc" size={20} />
            </View>
            <TextInput
              placeholderTextColor="#000"
              onFocus={onFocus && onFocus}
              style={styles.input}
              placeholder="输入搜索..."
              onChangeText={onHandleChangeText}
            />
          </View>

          <TouchableWithoutFeedback
            onPress={() => {
              setVisivble(false);
            }}
          >
            <View style={styles.cancel}>
              <Text>取消</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentTitle: {
    fontSize: 16,
    color: 'black',
  },
  inputBox: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  leftBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  icon: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    flex: 1,
    paddingLeft: 10,
    color: '#7C7D7E',
    paddingBottom: 0,
    paddingTop: 0,
  },
  cancel: {
    color: '#7C7D7E',
    paddingLeft: 10,
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
