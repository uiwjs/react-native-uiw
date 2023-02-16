import { number } from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';
import {
  TouchableOpacity,
  Animated,
  SwitchProps as SwitchPropsDefault,
  View,
  ViewStyle,
  LayoutChangeEvent,
  StyleSheet,
} from 'react-native';

export interface SwitchProps extends SwitchPropsDefault {
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
  checked?: boolean;
  color?: string;
  /**
   * 设置大小
   */
  size?: 'small' | 'default' | 'large';
}

export interface SwitchState {
  checked: boolean;
  borderValue: Animated.Value;
  translateXValue: Animated.Value;
  bgOpacity: Animated.Value;
  containerSize: {
    width: number;
    height: number;
  };
  control: 'props' | 'state';
  animatedStart: (checked: boolean) => void;
}

function Switch(props: SwitchProps) {
  const {
    style,
    size,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    checked = false,
    color,
    disabled,
    thumbColor,
    trackStyle,
    thumbStyle,
    ...otherProps
  } = props;
  const [height, setHeight] = useState(16);
  const [translateXValue, setTranslateXValue] = useState(2);

  const animatedStart = (checked: boolean) => {
    const obj = {
      height: height,
      number: 1,
      translateXValue: translateXValue,
    };

    if (!checked) {
      obj.height = 2;
      obj.number = 0;
      obj.translateXValue = 2;
    }

    Animated.parallel([
      Animated.sequence([
        Animated.spring(state.borderValue, {
          toValue: obj.height,
          overshootClamping: true,
          useNativeDriver: false,
        }),
        Animated.spring(state.bgOpacity, {
          toValue: obj.number,
          overshootClamping: true,
          useNativeDriver: false,
        }),
      ]),
      Animated.spring(state.translateXValue, {
        toValue: obj.translateXValue,
        overshootClamping: true,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const [state, setState] = useState<SwitchState>({
    checked: checked,
    containerSize: { width: 0, height: 0 },
    borderValue: new Animated.Value(0),
    translateXValue: new Animated.Value(2),
    bgOpacity: new Animated.Value(props.value ? 1 : 0),
    control: 'state',
    animatedStart: animatedStart,
  });

  const { containerSize } = state;

  const onPress = () => {
    const checked = !state.checked;
    setState({ ...state, checked, control: 'state' });

    animatedStart(checked);
    props.onValueChange!(checked);
  };

  const measureContainer = (event: LayoutChangeEvent) => {
    animatedStart(!!props.checked);
    let { checked, translateXValue } = state;
    const {} = state;
    const { height: layoutHeight, width: layoutWidth } = event.nativeEvent.layout;
    let height = layoutHeight - 4;
    const width = height;
    const size = { width, height };
    setHeight(height / 2);
    setTranslateXValue(layoutWidth - 2 - width);
    translateXValue.setValue(checked ? layoutWidth - 2 - width : 2);
    setState({ ...state, containerSize: size, control: 'state' });
    animatedStart(!!props.checked);
  };

  // if (state.control === 'state') {
  //   setState({ ...state, control: 'props' });
  // }
  // if (props.checked !== state.checked) {
  //   state.animatedStart(!!props.checked);
  //   setState({
  //     ...state,
  //     checked: !!props.checked,
  //     control: 'props',
  //   });
  // }

  const bgBorder = state.borderValue.interpolate({
    inputRange: [2, height],
    outputRange: [2, height],
    // extrapolate: 'clamp',
  });

  const sizeStyl: ViewStyle = {};
  switch (size) {
    case 'small':
      sizeStyl.height = 20;
      sizeStyl.width = 30;
      break;
    case 'large':
      sizeStyl.height = 30;
      sizeStyl.width = 48;
      break;
    default:
      sizeStyl.height = 26;
      sizeStyl.width = 38;
      break;
  }

  return (
    <View {...otherProps} onLayout={measureContainer} style={[styles.warpper, sizeStyl, style]}>
      {disabled && <View style={[styles.position, styles.disabled]} />}
      <Animated.View style={[styles.bg, styles.position, trackStyle, { borderWidth: bgBorder }]} />
      <TouchableOpacity
        // eslint-disable-next-line
        style={[styles.position, { zIndex: 1 }]}
        onPress={onPress}
      />
      <Animated.View
        style={[
          styles.position,
          // eslint-disable-next-line
          {
            backgroundColor: state.checked ? color : '',
            borderRadius: 16,
            opacity: state.bgOpacity,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.grip,

          disabled ? styles.shadowDisable : styles.shadow,
          {
            backgroundColor: thumbColor,
            width: containerSize.width,
            height: containerSize.height,
          },
          thumbStyle,
          {
            transform: [{ translateX: state.translateXValue }],
          },
        ]}
      />
    </View>
  );
}

Switch.defaultProps = {
  checked: false,
  size: 'default',
  thumbColor: '#fff',
  color: '#4DD964',
  onValueChange: () => {},
};

export default Switch;

const styles = StyleSheet.create({
  warpper: {
    position: 'relative',
    borderRadius: 16,
    backgroundColor: '#E6E6E6',
  },
  disabled: {
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: '#0001',
    borderRadius: 16,
    zIndex: 22,
  },
  bg: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E6E6E6',
  },
  position: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  grip: {
    top: 2,
    borderRadius: 16,
  },
  shadowDisable: {
    shadowColor: '#000',
    background: '#0001',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
