import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewProps, StyleProp, TextStyle,ViewStyle } from 'react-native';
import { color, colors } from '../utils';

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 50,
  },
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
});


export interface BadgeProps extends ViewProps{
  children?: React.ReactNode;
  color?: colors.Colors | string;
  text?: string;
  textStyles?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

export default function Badge(props: BadgeProps) {
  const { children, color: $color, style, textStyles, ...passProps } = props;
  const colorObj = color(colors[$color as colors.Colors] || $color);
  const luminosTextColor = colorObj.luminosity() < 0.5 ? '#fff' : '#000';
  const content = children || (
    <Text style={[styles.text, { color: luminosTextColor }, textStyles]}>
      {props.text}
    </Text>
  );
  const bgStyl: StyleProp<ViewStyle> = {};
  if (color) {
    bgStyl.backgroundColor = $color;
  }
  return (
    <View
      style={[styles.base, { backgroundColor: colorObj.rgb().string()}, style]}
      {...passProps}
    >
      {content}
    </View>
  );
}

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  style: PropTypes.any,
  text: PropTypes.string,
};
Badge.defaultProps = {
  color: 'primary',
};
