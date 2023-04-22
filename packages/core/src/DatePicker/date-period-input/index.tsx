import React, { FC } from 'react';
import { TouchableOpacity, Animated, View } from 'react-native';
import { useTheme } from '@shopify/restyle';
import Flex from '../../Flex';
import Icon from '../../Icon';
import Text from '../../Typography/Text';
import dayjs from 'dayjs';
import { DatePickerPropsBase, ModalPickerProps } from '../components/basic-date-picker/type';
import DatePicker from '../date-picker';
import useDatePeriodInput from './useDatePeriodInput';
import { Theme } from '../../theme';

export interface DatePeriodInputProps
  extends Omit<DatePickerPropsBase, 'value' | 'onChange' | 'minDate' | 'maxDate'>,
    Omit<ModalPickerProps, 'visible' | 'displayType'> {
  /** 默认提示语 */
  placeholder?: string[];
  value?: [Date | undefined, Date | undefined];
  onChange?: (value: [Date | undefined, Date | undefined]) => void;
  /** 是否允许清除 */
  allowClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
}

const AnimatedTouchableIcon = Animated.createAnimatedComponent(TouchableOpacity);

/** 适用于筛选条件下的日期区间选择 */
const DatePeriodInput: FC<DatePeriodInputProps> = ({
  placeholder = ['请选择', '请选择'],
  format = 'YYYY-MM-DD',
  value,
  onChange,
  allowClear = true,
  disabled = false,
  ...restProps
}) => {
  const theme = useTheme<Theme>();
  const {
    currentIndex,
    dates,
    visible,
    minDate,
    maxDate,
    clearIconStyle1,
    clearIconStyle2,
    setFalse,
    handleStartPress,
    handleEndPress,
    handleChange,
    handleInputClear1,
    handleInputClear2,
  } = useDatePeriodInput({ value, onChange, format });

  const p1 = {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'PingFang SC',
  };
  return (
    <View>
      <Flex
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.mask || '#ccc',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (!disabled) {
              handleStartPress();
            }
          }}
          activeOpacity={disabled ? 1 : 0.5}
          style={{
            flex: 1,
            height: 40,
            paddingHorizontal: theme.spacing.x1 || 4,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Flex style={{ alignItems: 'center' }}>
            <Icon name="date" size={16} color={theme.colors.primary_text || '#ccc'} />
            <Text
              color={disabled ? 'disabled' : 'text'}
              style={[p1, { marginLeft: 8 }]} //...theme.textVariants.p1
            >
              {dates[0] ? dayjs(dates[0]).format(format) : placeholder[0]}
            </Text>
          </Flex>
          {!disabled && allowClear && (
            <AnimatedTouchableIcon
              activeOpacity={0.5}
              onPress={handleInputClear1}
              style={[{ width: 0, overflow: 'hidden', alignItems: 'flex-end' }, clearIconStyle1]}
            >
              <Icon size={16} name="circle-close-o" color={theme.colors.primary_text || '#ccc'} />
            </AnimatedTouchableIcon>
          )}
        </TouchableOpacity>
        <View style={{ marginHorizontal: 8 }}>
          <Text color="text" style={p1}>
            ~
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (!disabled) {
              handleEndPress();
            }
          }}
          activeOpacity={disabled ? 1 : 0.5}
          style={{
            flex: 1,
            height: 40,
            paddingHorizontal: theme.spacing.x1 || 4,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Flex style={{ alignItems: 'center' }}>
            <Icon size={16} name="date" color={theme.colors.primary_text || '#ccc'} />
            <Text color={disabled ? 'disabled' : 'text'} style={[p1, { marginLeft: 8 }]}>
              {dates[1] ? dayjs(dates[1]).format(format) : placeholder[1]}
            </Text>
          </Flex>
          {!disabled && allowClear && (
            <AnimatedTouchableIcon
              activeOpacity={0.5}
              onPress={handleInputClear2}
              style={[{ width: 0, overflow: 'hidden', alignItems: 'flex-end' }, clearIconStyle2]}
            >
              <Icon size={16} name="circle-close-o" color={theme.colors.primary_text || '#ccc'} />
            </AnimatedTouchableIcon>
          )}
        </TouchableOpacity>
      </Flex>
      <DatePicker
        {...restProps}
        {...{
          visible,
          format,
          onChange: handleChange,
          onClosed: setFalse,
          minDate,
          maxDate,
          value: dates[currentIndex],
        }}
      />
    </View>
  );
};

export default DatePeriodInput;
