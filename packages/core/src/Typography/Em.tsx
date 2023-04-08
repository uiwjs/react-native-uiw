import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

type CreStyle = {
  textColor: string;
};

function createStyles({ textColor }: CreStyle) {
  return StyleSheet.create({
    default: {
      fontStyle: 'italic',
      color: textColor,
    },
  });
}

export interface EmProps extends TextProps {
  children?: React.ReactNode;
}

export default function Em(props: EmProps) {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    textColor: theme.colors.primary_text || '#ccc',
  });
  return React.cloneElement(<Text />, {
    ...props,
    style: [styles.default, props.style],
  });
  // return (
  //   <Text {...props} style={[styles.default, props.style]}>
  //     {props.children}
  //   </Text>
  // );
}

Em.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any,
};
Em.defaultProps = {};
