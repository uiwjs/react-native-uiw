import React, { useState } from 'react';
import { Pressable, SafeAreaView, View, StyleSheet, ViewStyle } from 'react-native';
import DatePicker, { DatePickerProps } from '../../DatePicker/date-picker';
import Ellipsis from '../../Ellipsis';
import Icon from '../../Icon';
import { Theme } from '../../theme';
import { useTheme } from '@shopify/restyle';
import dayjs from 'dayjs';

export interface RnDatePickerProps extends DatePickerProps {
  disabled?: boolean;
  placeholder?: string;
  contentStyle?: ViewStyle;
  extra?: JSX.Element;
  showClear?: boolean;
}

const FormDatePicker = ({
  disabled,
  placeholder,
  contentStyle,
  extra,
  showClear,
  value,
  onChange,
  format = 'YYYY-MM-DD HH:mm:ss',
  ...attr
}: RnDatePickerProps) => {
  console.log('format', format);
  const [visible, setVisible] = useState(false);
  const theme = useTheme<Theme>();
  const style = createStyles({
    disabled: theme.colors.disabled,
    backgroundColor: theme.colors.mask,
    title: theme.colors.primary_text,
  });

  const extraContent = React.useMemo(() => {
    if (React.isValidElement(extra)) {
      return extra;
    }
    if (value && showClear) {
      return (
        <Pressable onPress={() => onChange?.(undefined)} style={{ paddingRight: 3 }} disabled={disabled}>
          <Icon name="circle-close-o" size={18} color={theme.colors.primary_text || '#ccc'} />
        </Pressable>
      );
    }
    return <Icon name="right" size={18} color={theme.colors.text || '#ccc'} />;
  }, [extra, value, showClear]);

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          if (disabled) return;
          setVisible(true);
        }}
      >
        <View style={[disabled ? style.disabled : style.content, contentStyle]}>
          <Ellipsis style={[style.contentTitle]} maxLen={30}>
            {(value && dayjs(value).format(format)) || placeholder}
          </Ellipsis>
          {extraContent}
        </View>
      </Pressable>
      <DatePicker
        title="请选择日期"
        mode="datetime"
        visible={visible}
        value={value}
        onClosed={() => setVisible(false)}
        onChange={(value) => {
          onChange?.(value);
        }}
        format={format}
        {...attr}
      />
    </SafeAreaView>
  );
};

export default FormDatePicker;

function createStyles({ backgroundColor = '#fff', disabled = '#f5f5f5', title = '#000' }) {
  return StyleSheet.create({
    content: {
      flexDirection: 'row',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 5,
      backgroundColor: backgroundColor,
      paddingHorizontal: 16,
    },
    disabled: {
      flexDirection: 'row',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 5,
      backgroundColor: disabled,
      paddingHorizontal: 16,
    },
    contentTitle: {
      fontSize: 16,
      color: title,
    },
  });
}
