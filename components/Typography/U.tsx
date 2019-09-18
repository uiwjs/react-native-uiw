import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';

const styles = StyleSheet.create({
  default: {
    textDecorationLine: 'underline',
  },
});

export interface UProps extends TextProps {
  children?: React.ReactNode;
}

export default function U(props: UProps) {
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
    </Text>
  );
}

U.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
U.defaultProps = {};
