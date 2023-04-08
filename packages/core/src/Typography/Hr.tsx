import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

type CreStyle = {
  textColor: string;
};

function createStyles({ textColor }: CreStyle) {
  return StyleSheet.create({
    default: {
      height: 1,
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: '#CDCDCD',
      marginVertical: 10,
      color: textColor,
    },
  });
}

export interface HrProps extends ViewProps {}

export default function Hr(props: HrProps) {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    textColor: theme.colors.primary_text || '#ccc',
  });
  const textColor = theme.colors.primary_text || '#ccc';
  return <View {...props} style={[styles.default, props.style]} />;
}
