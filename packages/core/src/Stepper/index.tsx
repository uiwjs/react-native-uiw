import React, { useRef, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import ControlValue from './ControlValue';
import ShowValue from './ShowValue';
import { styles as ControlStyle } from './ControlValue';

export interface Color {
  /** 组件主色调 #108ee9 */
  color?: string;
  /** 组件边框颜色 #108ee9 */
  borderColor?: string;
  /** 组件按钮 + - 颜色 #108ee9 */
  controlColor?: string;
  /** 组件 value 值颜色 #108ee9 */
  valueColor?: string;
}
export type Size = 'small' | 'default' | 'large';
export interface StepProps {
  /** 尺寸 */
  size?: Size;
  /** 颜色 */
  color?: Color;
  /** input 宽度,不包括两侧按钮 */
  width?: number;
  /** 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 */
  value: number;
  /** 每次点击改变的间隔大小 */
  step?: number;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 按钮是否禁止点击 */
  disabled?: boolean;
  /** 输入框是否禁止输入 */
  disabledInput?: boolean;
  /** 按钮是否支持长按 */
  disabledLongPress?: boolean;
  /** 长按间隔 单位(ms) */
  delayLong?: number;
  /** 输入框值改变时触发的事件, 必填 */
  onChange: (value: number) => void;
  /** 输入框尝试输入错误数据触发的事件	 */
  onErrorInput?: (type: 'OVER' | 'LOW', errorValue: number) => void;
}

function Stepper(props: StepProps) {
  const {
    size = 'default',
    color = {
      color: '#108ee9',
      borderColor: '#108ee9',
      controlColor: '#108ee9',
      valueColor: '#108ee9',
    },
    value = 0,
    step = 1,
    min = 0,
    max = 100,
    onChange,
    onErrorInput,
    disabled = false,
    disabledInput = true,
    disabledLongPress = false,
    delayLong = 500,
    width,
  } = props;
  const textInput = useRef<TextInput>();
  const accuracy = useRef<number>(0);
  const valueRef = useRef<number>(0);

  useEffect(() => {
    const length = (step + '.').toString().split('.')[1].length;
    accuracy.current = Math.pow(10, length);
  }, [step]);
  useEffect(() => {
    valueRef.current = value ?? 0;
    const length = Math.pow(10, (valueRef.current + '.').toString().split('.')[1].length);
    if (length > accuracy.current) {
      accuracy.current = length;
    }
  }, [value]);
  const isErrorHandle = (result: number | 'min') => {
    if (result === 'min') {
      onChange(min);
      valueRef.current = min;
      return;
    }
    if (Number(result) > max) {
      onErrorInput?.('OVER', result);
      onChange(max);
      valueRef.current = max;
      return;
    }
    if (Number(result) < min) {
      onErrorInput?.('LOW', result);
      onChange(min);
      valueRef.current = min;
      return;
    }
    valueRef.current = result;
    onChange(result);
  };
  const control = (type: 'decrease' | 'increase') => {
    textInput.current && textInput.current.blur();
    let result = 0;
    if (type === 'decrease') {
      result = Number((valueRef.current * accuracy.current - step * accuracy.current).toFixed(0)) / accuracy.current;
      result = result <= min ? min : result;
    }
    if (type === 'increase') {
      result = Number((valueRef.current * accuracy.current + step * accuracy.current).toFixed(0)) / accuracy.current;
      // result = Number(valueRef.current) + Number(step)
      result = result >= max ? max : result;
    }
    // valueRef.current = Number(result.toFixed(accuracy.current))
    valueRef.current = result;
    onChange(valueRef.current);
  };
  return (
    <View style={[ControlStyle.elementCenter]}>
      <ControlValue
        size={size}
        delayLong={delayLong}
        disabledLongPress={disabledLongPress}
        action="decrease"
        color={color}
        disabled={disabled || value <= min}
        control={control}
      />
      <ShowValue
        size={size}
        width={width}
        textInput={textInput}
        color={color}
        value={value + ''}
        onChange={isErrorHandle}
        disabled={!disabledInput}
      />
      <ControlValue
        size={size}
        delayLong={delayLong}
        disabledLongPress={disabledLongPress}
        action="increase"
        color={color}
        disabled={disabled || value >= max}
        control={control}
      />
    </View>
  );
}

export default Stepper;
