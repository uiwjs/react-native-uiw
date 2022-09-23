import React from 'react';
import Card from '../../Card';
import { SafeAreaView } from 'react-native';
import styles from '../styles';

const Container = ({ mode, children }: { mode: 'card' | 'default'; children?: JSX.Element }) => {
  return mode === 'card' ? <Card>{children}</Card> : <SafeAreaView style={styles.warpper}>{children}</SafeAreaView>;
};

export default Container;
