import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Size, Color } from './index';
import { styles as ControlStyle } from './ControlValue';

export interface ShowValueProps {
  size: Size;
  textInput: React.MutableRefObject<TextInput | undefined>;
  color: Color;
  value: string;
  disabled: boolean;
  width?: number;
  onChange: (val: number | 'min') => unknown;
}
enum Width {
  small = 50,
  default = 70,
  large = 100,
}
function ShowValue(props: ShowValueProps) {
  const { size, value, textInput, color, disabled, width, onChange } = props;

  const endCallback = () => {
    if (value === '' || isNaN(parseFloat(value))) {
      onChange('min');
      return;
    }
    onChange(parseFloat(value));
    textInput.current && textInput.current.blur();
  };
  return (
    <TextInput
      editable={disabled} // 禁用
      keyboardType="numeric"
      value={value}
      onChangeText={(text) => {
        let i = text.indexOf('.');
        i = text.indexOf('.', i + 1);
        if (i === -1) {
          onChange(text as any);
        }
      }}
      onSubmitEditing={endCallback}
      onEndEditing={endCallback}
      ref={textInput as React.LegacyRef<TextInput>}
      style={[
        ControlStyle.elementCenter,
        ControlStyle.textWeight,
        ControlStyle[size],
        styles.border,
        {
          paddingVertical: 0,
          fontSize: ControlStyle[`${size}Text`].fontSize - 8,
          textAlign: 'center',
          borderColor: color.borderColor || color.color,
          color: color.valueColor || color.color,
          width: width ?? Width[size],
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
export default ShowValue;
