import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

const styles = StyleSheet.create({
  default: {
    marginBottom: 10,
    fontSize: 32,
    fontWeight: '500',
  },
});

export interface H2Props extends TextProps {
  children?: React.ReactNode;
}

export default function H2(props: H2Props) {
  const theme = useTheme<Theme>();
  const textColor = theme.colors.primary_text || '#ccc';

  return (
    <Text {...props} style={[styles.default, props.style, { color: textColor }]}>
      {props.children}
    </Text>
  );
}

H2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any,
};
H2.defaultProps = {};
