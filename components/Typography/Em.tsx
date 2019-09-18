import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';

const styles = StyleSheet.create({
  default: {
    fontStyle: 'italic',
  },
});

export interface EmProps extends TextProps {
  children?: React.ReactNode;
}

export default function Em(props: EmProps) {
  return React.cloneElement(<Text />, {
    ...props,
    style: [styles.default, props.style],
  })
  // return (
  //   <Text {...props} style={[styles.default, props.style]}>
  //     {props.children}
  //   </Text>
  // );
}

Em.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
Em.defaultProps = {};
