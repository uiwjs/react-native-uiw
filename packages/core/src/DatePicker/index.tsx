import React, { forwardRef, useImperativeHandle } from 'react';
import { TouchableOpacity, SafeAreaView, View } from 'react-native';
import Flex from '../Flex';
import Modal from '../Modal';
import Text from '../Typography/Text';
import dayjs from 'dayjs';
import DatePickerRN from './components/date-picker';
import { DatePickerPropsBase, ModalPickerProps } from './components/date-picker/type';
import useDatePicker from './useDatePicker';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

export type DatePickerRef = {
  getValue: () => { date?: Date; formatDate: string };
};
export type DatePickerProps = DatePickerPropsBase & ModalPickerProps;

const DatePicker = forwardRef<DatePickerRef, DatePickerProps>((props, ref) => {
  const {
    title,
    displayType = 'modal',
    visible = false,
    onClosed,
    format = 'YYYY-MM-DD HH:mm:ss',
    labelUnit = { year: '年', month: '月', day: '日', hour: '时', minute: '分' },
    mode = 'date',
    minDate,
    maxDate,
    value,
    onChange,
    cancelText = '取消',
    okText = '确定',
    ...restProps
  } = props;

  const theme = useTheme<Theme>();

  const { date, handleChange, handleOk, handleClose } = useDatePicker({
    onClosed,
    onChange,
    value,
    displayType,
    visible,
    format,
  });

  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return {
          date,
          formatDate: dayjs(date).format(format),
        };
      },
    };
  });

  const DatePickerComp = (
    <DatePickerRN
      {...restProps}
      {...{ mode, value: date, minDate, maxDate, labelUnit, format }}
      onChange={handleChange}
    />
  );

  if (displayType === 'modal') {
    return (
      <Modal visible={visible} onClosed={handleClose}>
        <SafeAreaView>
          <View style={{ padding: theme.spacing.x2 }}>
            <Flex justify="between">
              <Flex.Item>
                <TouchableOpacity activeOpacity={0.5} onPress={handleClose}>
                  <Text color="primary_background" style={{ fontSize: 16 }}>
                    {cancelText}
                  </Text>
                </TouchableOpacity>
              </Flex.Item>
              <Flex.Item>
                <Text color="primary_background" style={{ fontSize: 16 }}>
                  {title}
                </Text>
              </Flex.Item>
              <Flex.Item>
                <TouchableOpacity activeOpacity={0.5} onPress={handleOk}>
                  <Text color="primary_background" style={{ fontSize: 16 }}>
                    {okText}
                  </Text>
                </TouchableOpacity>
              </Flex.Item>
            </Flex>
            {DatePickerComp}
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
  return DatePickerComp;
});

export default DatePicker;
