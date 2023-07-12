import React, { useRef } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Size, Color } from './index';

export interface ControlValueProps {
  size: Size;
  action: 'increase' | 'decrease';
  color: Color;
  disabled: boolean;
  disabledLongPress: boolean;
  delayLong: number;
  control: (type: 'increase' | 'decrease') => void;
}

function ControlValue(props: ControlValueProps) {
  const { size, control, action, color, disabled, disabledLongPress, delayLong } = props;
  const timer = useRef<NodeJS.Timeout>();

  const onLongPress = () => {
    if (!disabledLongPress) return;
    timer.current = setInterval(() => {
      control(action);
    }, delayLong);
  };
  const onPressOut = () => {
    if (typeof timer.current === 'undefined') {
      control(action);
    } else {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  };
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      delayLongPress={delayLong}
      style={[
        styles[size],
        styles.elementCenter,
        styles.borderRadius,
        styles[`border-${action}`],
        { borderColor: color.borderColor || color.color },
      ]}
      disabled={disabled}
    >
      <Text
        style={[
          styles[`${size}Text`],
          styles.textWeight,
          { color: color.controlColor || color.color, opacity: disabled ? 0.3 : 1 },
        ]}
      >
        {action === 'increase' ? '+' : '-'}
      </Text>
    </TouchableOpacity>
  );
}
export const styles = StyleSheet.create({
  elementCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWeight: {
    fontWeight: '300',
  },
  borderRadius: {
    borderWidth: 1,
    borderRadius: 6,
  },
  'border-decrease': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  'border-increase': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  small: {
    height: 24,
    width: 24,
  },
  default: {
    height: 30,
    width: 30,
  },
  large: {
    height: 38,
    width: 38,
  },
  smallText: {
    fontSize: 20,
    lineHeight: 24,
  },
  defaultText: {
    fontSize: 24,
    lineHeight: 30,
  },
  largeText: {
    fontSize: 28,
    lineHeight: 42,
  },
});

export default ControlValue;
