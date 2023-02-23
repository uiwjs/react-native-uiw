import React, { Component } from 'react';
import { View, ViewProps, Text, TextProps, StyleSheet } from 'react-native';

interface MaybeTextOrViewProps {
  children?: React.ReactNode;
}

function MaybeTextOrView({ children, ...otherProps }: MaybeTextOrViewProps & TextProps & ViewProps) {
  if (typeof children === 'string' || (children && (children as any).type.displayName === 'Text')) {
    return <Text {...otherProps}>{children}</Text>;
  }
  return <View {...otherProps}>{children}</View>;
}

const styles = StyleSheet.create({
  defalut: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 21,
  },
  title: {
    fontSize: 21,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  message: {
    fontSize: 16,
    marginTop: 9,
    paddingHorizontal: 15,
    lineHeight: 18,
    color: '#888',
  },
});

export interface ResultProps extends ViewProps {
  /**
   * 插图元素 (可以为<img src="" />/<Icon type="" />等)
   */
  img?: React.ReactNode;
  /**
   * title 文案
   */
  title?: React.ReactNode;
  /**
   * message 文案
   */
  message?: React.ReactNode;
}

export default function Result(props: ResultProps) {
  const { style, title, message, img, ...otherProps } = props;
  return (
    <View style={[styles.defalut, style]} {...otherProps}>
      {img}
      {title && <MaybeTextOrView style={styles.title}>{title}</MaybeTextOrView>}
      {message && <MaybeTextOrView style={styles.message}>{message}</MaybeTextOrView>}
    </View>
  );
}

Result.defaultProps = {} as ResultProps;
