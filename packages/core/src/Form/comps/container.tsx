import React from 'react';
import Card from '../../Card';
import { SafeAreaView } from 'react-native';
import styles from '../styles';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

const Container = ({ mode, children }: { mode: 'card' | 'default'; children?: React.ReactNode }) => {
  const theme = useTheme<Theme>();
  return mode === 'card' ? (
    <Card>{children}</Card>
  ) : (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>{children}</SafeAreaView>
  );
};

export default Container;
