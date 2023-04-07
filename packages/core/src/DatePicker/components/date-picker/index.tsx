import React, { FC } from 'react';
import Flex from '../../../Flex';
import WheelPicker from '../../../Picker/components/WheelPicker';
import { DatePickerPropsBase } from './type';
import useDatePicker from './useDatePicker';

const DatePickerAndroid: FC<
  Omit<DatePickerPropsBase, 'mode' | 'labelUnit' | 'format'> &
    Required<Pick<DatePickerPropsBase, 'mode' | 'labelUnit' | 'format'>>
> = ({ value = new Date(), minDate, maxDate, mode, labelUnit, format, onChange, ...restProps }) => {
  const { onValueChange, getValueCols } = useDatePicker({
    minDate,
    maxDate,
    mode,
    labelUnit,
    format,
    value,
    onChange,
  });

  const { values, cols } = getValueCols();

  /** 生成日期picker */
  const renderDateTimePicker = () => {
    return cols.map((col, level: number) => {
      return (
        <WheelPicker
          key={level}
          {...restProps}
          data={col}
          value={values[level]}
          onChange={(itemValue) => onValueChange(itemValue, level)}
          containerStyle={{ marginRight: level !== cols.length - 1 ? 5 : 0 }}
        />
      );
    });
  };

  return <Flex>{renderDateTimePicker()}</Flex>;
};

export default DatePickerAndroid;
