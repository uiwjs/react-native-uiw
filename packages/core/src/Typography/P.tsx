import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

const styles = StyleSheet.create({
  default: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export interface PProps extends TextProps {
  children?: React.ReactNode;
}

export default function P(props: PProps) {
  const theme = useTheme<Theme>();
  const textColor = theme.colors.primary_text || '#ccc';
  return (
    <Text {...props} style={[styles.default, props.style, { color: textColor }]}>
      {props.children}
    </Text>
  );
}

P.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any,
};
P.defaultProps = {};
