import React from 'react';
import { View, Text, StyleSheet, Platform, TextStyle, StyleProp } from 'react-native';
import { colors } from '../utils';
import Divider from '../Divider';

export type CardTitleProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

const CardTitle = ({ title, titleStyle, children }: CardTitleProps) => {
  return (
    <View>
      {title && (
        <Text testID="cardTitle" style={StyleSheet.flatten([styles.title, titleStyle]) as TextStyle}>
          {title}
        </Text>
      )}
      {React.isValidElement(children) ? React.cloneElement(children) : null}
      <Divider style={StyleSheet.flatten([styles.divider])} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: colors.colorsPalette.grey10,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
      default: {
        fontWeight: 'bold',
      },
    }),
    textAlign: 'center',
    marginBottom: 15,
  },
  divider: {
    marginBottom: 15,
  },
});

export default CardTitle;
