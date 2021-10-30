import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, StyleProp, TextStyle } from 'react-native';
import Modal, { ModalProps } from '../Modal';
import { PickerProps } from '../Picker';
import PickerView, { DateKey } from './component/PickerView';
import Control from './component/Control';
import {
  precisionValue,
  setTimer,
  setTimerDiff,
  getPickerData,
  ResultDate,
  ChangeParams,
  minData,
  maxData,
  changeData,
} from './pure-function';

export interface DatePickerProps {
  /** 显示时间的精度 例: 显示年月日 ['year', 'month', 'day'] */
  precision?: DateKey;
  /** "2022-10-26 00:00:00" */
  value?: string;
  /** 确认时触发 */
  onOk?: (value: string) => void;
  /** Picker 值变化时触发 */
  onChange?: (value: string) => void;
  /** 关闭模态框 */
  onClosed?: () => void;
  /** 最小值 "2022-10-26 00:00:00" */
  min?: string;
  /** 最大值 "2022-10-26 00:00:00" */
  max?: string;
  /** 是否显示头部 年 月 日  */
  showTitle?: boolean;
  /** 头部样式 */
  titleStyle?: StyleProp<TextStyle>;
  /** 自定义头部 */
  renderTitle?: (text: '年' | '月' | '日' | '时' | '分' | '秒') => React.ReactNode;
  /** 确定按钮的文字 */
  okText?: string | React.ReactNode;
  /** 取消按钮的文字 */
  cancelText?: string | React.ReactNode;
  /** 确定取消按钮 当触摸处于活动状态时将显示的底层颜色 */
  underlayColor?: string;
  /** 是否显示选择器 */
  visible?: boolean;
  /** modal 属性 */
  modalProps?: ModalProps;
  /** picker 属性 */
  pickerProps?: PickerProps;
}
interface DateIndex {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
}
export interface DateLabel {
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
}

export const typeTimer: DateKey[] = ['year', 'month', 'day', 'hour', 'minute', 'second'];

const DatePicker = (props: DatePickerProps) => {
  const {
    precision,
    min,
    max,
    visible,
    onClosed,
    modalProps,
    value = '',
    onOk,
    onChange,
    okText = '确定',
    cancelText = '取消',
    underlayColor = '#E6E6E6',
    showTitle = false,
    titleStyle = {},
    renderTitle,
    pickerProps,
  } = props;
  /** 最终精度 */
  const result = useRef<DateKey>('day');
  /** 最小时间 */
  const MINTIMER = useRef<DateLabel>({});
  /** 最大时间 */
  const MAXTIMER = useRef<DateLabel>({});
  /** 下一次的 label */
  const nextLabel = useRef<DateLabel>({});
  /** 上一次的 label */
  const prevLabel = useRef<DateLabel>({});
  /** 下标 */
  const [dateIndex, setDateIndex] = useState<DateIndex>({});
  /** 数据 */
  const [datePicker, setDatePicker] = useState<ResultDate>({});
  /** 结果值 2020-10-10 10:59:59 */
  const [date, setDate] = useState('');

  useEffect(() => {
    result.current = precisionValue(precision || 'day');
    const star = setTimer(result.current, min);
    const end = setTimer(result.current, max);
    const prev = setTimer(result.current, value);
    const timerDiff = setTimerDiff(star, end, result.current);
    const getPickerDate = getPickerData(timerDiff, result.current);
    star.forEach((it, i) => {
      MINTIMER.current[typeTimer[i] as keyof typeof MINTIMER.current] = getPickerDate[typeTimer[i]]?.find(
        (item) => item.value === it,
      )?.label;
    });
    end.forEach((it, i) => {
      MAXTIMER.current[typeTimer[i] as keyof typeof MAXTIMER.current] = getPickerDate[typeTimer[i]]?.find(
        (item) => item.value === it,
      )?.label;
    });
    prev.forEach((it, i) => {
      prevLabel.current[typeTimer[i] as keyof typeof prevLabel.current] = getPickerDate[typeTimer[i]]?.find(
        (item) => item.value === it,
      )?.label;
    });
    setDatePicker(getPickerDate);
  }, [precision, min, max]);
  // useEffect(() => {
  //   if(!datePicker.year) return
  //   const index = handleIndex(value)
  //   if(JSON.stringify(index) === JSON.stringify(dateIndex)) return
  //   setDateIndex(index)
  // }, [value, datePicker])
  useEffect(() => {
    onChange?.(date);
  }, [date]);
  const handleIndex = (params: string = '', d: ResultDate = datePicker) => {
    const val = setTimer(result.current, params);
    const obj: DateIndex = {};
    for (let i = 0; i < val.length; i++) {
      const item = typeTimer[i];
      obj[item] = d[item]?.findIndex((it) => it.value === val[i]);
    }
    return obj;
  };
  const onConfirm = () => {
    onOk?.(date);
  };

  const datePickerUpdate = (key: DateKey, index: number, str: string) => {
    let newObj: ResultDate = {};
    let i = 0;
    const changeParams: ChangeParams = {
      MAXTIMER: MAXTIMER.current,
      MINTIMER: MINTIMER.current,
      nextLabel: nextLabel.current,
      prevLabel: prevLabel.current,
    };
    if (prevLabel.current.year === MINTIMER.current.year) {
      newObj = minData(key, changeParams, result.current);
      i++;
    }
    if (i === 0 && prevLabel.current.year === MAXTIMER.current.year) {
      newObj = maxData(key, changeParams, result.current);
      i++;
    }
    if (i === 0) {
      newObj = changeData(key, changeParams, result.current);
    }
    if (JSON.stringify(newObj) !== '{}') {
      setDatePicker({ ...datePicker, ...newObj });
    }
    setDateIndex(handleIndex(str, { ...datePicker, ...newObj }));
  };
  const getTypeDate = (index: number, val: string, key: DateKey) => {
    nextLabel.current = { ...nextLabel.current, [key]: val };
    const TIMER = ['hour', 'minute', 'second'];
    const DATETIMER = ['day', 'second'];
    let str = '';
    Object.keys(nextLabel.current).forEach((it) => {
      const val = nextLabel.current[it as keyof typeof nextLabel.current];
      let char = TIMER.includes(it) ? ':' : '-';
      char = DATETIMER.includes(it) ? '' : char;
      const space = it === 'hour' ? ' ' : '';
      if (val) {
        str = str + space + val + char;
      }
    });
    setDate(str);
    if (nextLabel.current[precision!] && JSON.stringify(nextLabel.current) !== JSON.stringify(prevLabel.current)) {
      datePickerUpdate(key, index, str);
      return;
    }
  };
  return (
    <Modal placement="bottom" visible={visible} onClosed={onClosed} {...modalProps}>
      <SafeAreaView>
        <Control
          onConfirm={onConfirm}
          onClosed={onClosed}
          okText={okText}
          cancelText={cancelText}
          underlayColor={underlayColor}
        />
        <View style={styles.container}>
          {Object.keys(datePicker).map((item) => (
            <PickerView
              {...pickerProps}
              getTypeDate={getTypeDate}
              showTitle={showTitle}
              titleStyle={titleStyle}
              renderTitle={renderTitle}
              key={item}
              title={item as DateKey}
              data={datePicker[item as DateKey]}
              value={dateIndex[item as DateKey]}
            />
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
});

export default DatePicker;
