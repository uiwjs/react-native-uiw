import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

const styles = StyleSheet.create({
  default: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '500',
  },
});

export interface H4Props extends TextProps {
  children?: React.ReactNode;
}

export default function H4(props: H4Props) {
  const theme = useTheme<Theme>();
  const textColor = theme.colors.primary_text || '#ccc';

  return (
    <Text {...props} style={[styles.default, props.style, { color: textColor }]}>
      {props.children}
    </Text>
  );
}

H4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any,
};
H4.defaultProps = {};
