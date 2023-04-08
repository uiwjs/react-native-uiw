import React from 'react';
import { View, StyleSheet, Platform, TextStyle, StyleProp } from 'react-native';
import Divider from '../Divider';
import Text from '../Typography/Text';

export type CardTitleProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

const CardTitle = ({ title, titleStyle, children }: CardTitleProps) => {
  return (
    <View>
      {title && (
        <Text
          color="primary_text"
          testID="cardTitle"
          style={StyleSheet.flatten([styles.title, titleStyle]) as TextStyle}
        >
          {title}
        </Text>
      )}
      {React.isValidElement(children) ? React.cloneElement(children) : null}
      <Divider style={StyleSheet.flatten([styles.divider])} lineStyle={{ backgroundColor: '#e6e6e6' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
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
