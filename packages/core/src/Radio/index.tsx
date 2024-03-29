import React, { Component, useEffect, useState } from 'react';
import {
  View,
  ViewProps,
  Animated,
  Text,
  TextProps,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

interface MaybeTextOrViewProps {
  children?: React.ReactNode;
}

function MaybeTextOrView({ children, ...otherProps }: MaybeTextOrViewProps & TextProps & ViewProps) {
  if (typeof children === 'string' || (children && (children as any).type.displayName === 'Text')) {
    return <Text {...otherProps}>{children}</Text>;
  }
  return <View {...otherProps}>{children}</View>;
}

type CreStyle = {
  textColor: string;
};

function createStyles({ textColor }: CreStyle) {
  return StyleSheet.create({
    defalut: {},
    checkBg: {
      borderRadius: 999,
      borderColor: 'rgb(189, 193, 204)',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    check: {
      borderRadius: 999,
      backgroundColor: '#4DD964',
    },
    touch: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      marginLeft: 6,
      color: textColor,
    },
  });
}

export interface RadioProps extends ViewProps {
  checked?: boolean;
  disabled?: boolean;
  circleSize?: number;
  color?: string;
  checkedColor?: string;
  borderColor?: string;
  thumbSize?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface RadioState {
  sizeValue: Animated.Value;
  checked?: boolean;
  control: 'state' | 'props';
}

export default function Radio(props: RadioProps) {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    textColor: theme.colors.primary_text || '#ccc',
  });
  const [state, setState] = useState({
    checked: props.checked,
    sizeValue: new Animated.Value(0),
    control: 'state',
  });

  useEffect(() => {
    animatedStart(props.checked);
  }, []);

  useEffect(() => {
    if (state.control === 'state' && props.checked === state.checked) {
      return setState({ ...state, control: 'props' });
    }
    if (props.checked !== state.checked) {
      Animated.spring(state.sizeValue, {
        toValue: !!props.checked ? props.thumbSize! : 0,
        overshootClamping: true,
        useNativeDriver: false,
      }).start();
      return setState({ ...state, checked: props.checked, control: 'props' });
    }
  }, [props.checked]);

  function animatedStart(checked?: boolean) {
    Animated.spring(state.sizeValue, {
      toValue: !!checked ? props.thumbSize! : 0,
      overshootClamping: true,
      useNativeDriver: false,
    }).start();
  }

  const handlePress = (event: GestureResponderEvent) => {
    const { onPress } = props;
    setState({ ...state, checked: true, control: 'state' });

    animatedStart(true);
    onPress && onPress(event);
  };

  const {
    style,
    color,
    circleSize,
    thumbSize,
    disabled,
    checkedColor = theme.colors.primary_background || '#3578e5',
    borderColor: bdColor,
    ...otherProps
  } = props;
  const sizeValue = state.sizeValue.interpolate({
    inputRange: [0, thumbSize!],
    outputRange: [0, thumbSize!],
    // extrapolate: 'clamp',
  });
  const backgroundColor = disabled ? color : checkedColor;
  const borderColor = disabled ? color : bdColor;

  return (
    <View testID="RNE__Radio__wrap" style={[styles.defalut, style]} {...otherProps}>
      <TouchableOpacity disabled={disabled} style={[styles.touch]} onPress={handlePress} testID="RNE__Radio__view">
        <Animated.View
          style={[styles.checkBg, { width: circleSize, height: circleSize, borderColor }]}
          testID="RNE__Radio__border"
        >
          <Animated.View
            style={[styles.check, { width: sizeValue, height: sizeValue, backgroundColor }]}
            testID="RNE__Radio__box"
          />
        </Animated.View>
        {props.children && (
          <MaybeTextOrView
            // eslint-disable-next-line
            style={[styles.label, { opacity: disabled ? 0.3 : 1 }]}
          >
            {props.children}
          </MaybeTextOrView>
        )}
      </TouchableOpacity>
    </View>
  );
}

Radio.defaultProps = {
  checked: false,
  circleSize: 20,
  borderColor: '#bdc1cc',
  color: '#c3c5c7',
  thumbSize: 12,
} as RadioProps;
