import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextProps} from 'react-native';

const styles = StyleSheet.create({
  default: {
    marginBottom: 10,
    fontSize: 40,
    fontWeight: '500',
  },
});

export interface H1Props extends TextProps {
  children?: React.ReactNode;
}

export default function H1(props: H1Props) {
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
    </Text>
  );
}

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
H1.defaultProps = {};
