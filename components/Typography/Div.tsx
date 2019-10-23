import React from 'react';
import { Text, TextProps, View, ViewProps } from 'react-native';

interface DivProps {
  children?: React.ReactNode;
}

export default function Div({ children, ...otherProps }: DivProps & TextProps & ViewProps): JSX.Element {
  const someStr = React.Children.toArray(children).every(item => typeof item === 'string');
  const Child = React.Children.toArray(children).map((item, idx) => {
    if (!item) return null;
    if (!React.isValidElement(item)) return <Text key={idx}>{item}</Text>;
    return <View key={idx}>{item}</View>;
  });
  return someStr ? <Text {...otherProps}>{Child}</Text> : <View {...otherProps}>{Child}</View>;
}
