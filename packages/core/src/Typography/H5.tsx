import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';

const styles = StyleSheet.create({
  default: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '500',
  },
});

export interface H5Props extends TextProps {
  children?: React.ReactNode;
}

export default function H5(props: H5Props) {
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
    </Text>
  );
}

H5.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any,
};
H5.defaultProps = {};
