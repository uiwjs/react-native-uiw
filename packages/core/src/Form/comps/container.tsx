import React from 'react';
import Card, { CardProps } from '../../Card';
import { SafeAreaView, ViewStyle } from 'react-native';
import styles from '../styles';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

const Container = ({
  containerStyle,
  cardProps,
  mode,
  children,
}: {
  containerStyle?: ViewStyle;
  cardProps?: CardProps;
  mode: 'card' | 'default';
  children?: React.ReactNode;
}) => {
  const theme = useTheme<Theme>();
  return mode === 'card' ? (
    <Card {...cardProps}>{children}</Card>
  ) : (
    <SafeAreaView style={{ backgroundColor: theme.colors.background, ...containerStyle }}>{children}</SafeAreaView>
  );
};

export default Container;
