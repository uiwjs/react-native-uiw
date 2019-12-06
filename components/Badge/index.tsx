import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewProps, StyleProp, TextStyle,ViewStyle } from 'react-native';
import { color, colors } from '../utils';

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 12,
  },
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 10,
  },
  dot: {
    height: 6,
    width: 6,
    marginHorizontal: 4,
    marginVertical: 6,
    borderRadius: 3,
  }
});

export interface BadgeProps extends ViewProps {
  children?: React.ReactNode;
  color?: colors.Colors | string;
  text?: string | Element;
  /**
   * 设置圆角，默认 `12`
   */
  rounded?: number;
  type?: 'dot' | 'text';
  textStyles?: StyleProp<TextStyle>
}

export default function Badge(props: BadgeProps) {
  const { children, rounded, color: $color, style, type, textStyles, ...restProps } = props;
  const colorObj = color(colors[$color as colors.Colors] || $color);
  const luminosTextColor = colorObj.luminosity() < 0.5 ? '#fff' : '#000';
  if (type === 'dot') {
    return (
      <View style={[styles.dot, { backgroundColor: $color }, style]} />
    )
  }
  const content = children || (
    <Text style={[styles.text, { color: luminosTextColor }, textStyles]}>
      {props.text}
    </Text>
  );
  const bgStyl: StyleProp<ViewStyle> = { borderRadius: rounded || 12 };
  if ($color) {
    bgStyl.backgroundColor = colorObj.rgb().string();
  }
  return (
    <View
      style={[styles.base, bgStyl, style]}
      {...restProps}
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
  text: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};
Badge.defaultProps = {
  color: 'primary',
  type: 'text',
};
