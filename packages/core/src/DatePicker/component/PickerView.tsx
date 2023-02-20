import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import Picker, { PickerProps } from '../../Picker';

// export interface PickerDate {
//   label?: string;
//   render?: (key: string, record: PickerData, index: number) => React.ReactNode;
//   [key: string]: any;
// }

enum DateObject {
  year = '年',
  month = '月',
  day = '日',
  hour = '时',
  minute = '分',
  second = '秒',
}
export type DateKey = keyof typeof DateObject;

export interface PickerViewProps extends PickerProps {
  title: DateKey;
  showTitle?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  getTypeDate: (index: number, label: string, title: DateKey) => unknown;
  renderTitle?: (text: '年' | '月' | '日' | '时' | '分' | '秒') => React.ReactNode;
}

const PickerView = (props: PickerViewProps) => {
  const { title, showTitle, titleStyle, renderTitle, getTypeDate, value, onScrollEnd, ...other } = props;
  const textStyle = StyleSheet.flatten([styles.textStyle, titleStyle]);
  const [state, setState] = useState<number>(0);
  useEffect(() => {
    setState(value || 0);
  }, [value]);
  useEffect(() => {
    getTypeDate(state, other.data?.[state]?.label!, title);
  }, [state]);
  return (
    <View style={{ flex: 1 }}>
      {showTitle &&
        (renderTitle ? (
          renderTitle(DateObject[title as DateKey])
        ) : (
          <View style={styles.viewStyle}>
            <Text style={textStyle}>{DateObject[title as DateKey]}</Text>
          </View>
        ))}
      <Picker {...other} value={state} onChange={(val) => setState(val)} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  textStyle: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

export default PickerView;
