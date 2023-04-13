import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, Animated } from 'react-native';

const Chevron: FC<
  PropsWithChildren<{
    progress: any;
  }>
> = ({ progress, children }) => {
  const value = 0 * (1 - progress.value) + Math.PI * progress.value;
  const style = {
    transform: [{ rotateZ: `${value}rad` }],
  };

  return <Animated.View style={[styles.container, style]}>{children}</Animated.View>;
};

export default Chevron;

const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
