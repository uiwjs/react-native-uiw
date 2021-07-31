import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';

const styles = StyleSheet.create({
  default: {
    fontWeight: 'bold',
  },
});

export interface StrongProps extends TextProps {
  children?: React.ReactNode;
}

export default function Strong(props: StrongProps) {
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
    </Text>
  );
}

Strong.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any,
};
Strong.defaultProps = {};
