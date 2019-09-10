import React from 'react';
import { View, TouchableWithoutFeedbackProps, TouchableHighlight, TouchableHighlightProps, TouchableOpacity, StyleSheet } from 'react-native';
import getIconType, {IconType} from './getIconType';

const styles = StyleSheet.create({
  button: { }
});

export interface IconProps extends TouchableHighlightProps {
  name: string;
  color?: string;
  type?: IconType;
  size?: number;
}

export default function Icon(props: IconProps) {
  const { type, name, size, color, ...otherProps } = props;
  const Component: keyof JSX.IntrinsicElements | any = props.onPress ? TouchableHighlight : View;
  const VecIcon = getIconType(type);
  return (
    <Component
      style={[styles.button]}
      {...otherProps}
    >
      <VecIcon color={color} name={name} size={size || 24} />
    </Component>
  )
}
