import React from 'react';
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

export default class Switch extends React.Component<SwitchProps, SwitchState> {
  translateXValue: number = 2;
  height: number = 16;
  static defaultProps: SwitchProps = {
    checked: false,
    size: 'default',
    thumbColor: '#fff',
    color: '#4DD964',
    onValueChange: () => {},
  };
  private animatedStart: (checked: boolean) => void;
  constructor(props: SwitchProps) {
    super(props);
    this.animatedStart = (checked: boolean) => {
      const obj = {
        height: this.height,
        number: 1,
        translateXValue: this.translateXValue,
      };
      if (!checked) {
        obj.height = 2;
        obj.number = 0;
        obj.translateXValue = 2;
      }
      Animated.parallel([
        Animated.sequence([
          Animated.spring(this.state.borderValue, {
            toValue: obj.height,
            overshootClamping: true,
            useNativeDriver: false,
          }),
          Animated.spring(this.state.bgOpacity, {
            toValue: obj.number,
            overshootClamping: true,
            useNativeDriver: false,
          }),
        ]),
        Animated.spring(this.state.translateXValue, {
          toValue: obj.translateXValue,
          overshootClamping: true,
          useNativeDriver: false,
        }),
      ]).start();
    };
    this.state = {
      checked: !!this.props.checked,
      containerSize: { width: 0, height: 0 },
      borderValue: new Animated.Value(0),
      translateXValue: new Animated.Value(2),
      bgOpacity: new Animated.Value(props.value ? 1 : 0),
      control: 'state',
      animatedStart: this.animatedStart,
    };
    this.animatedStart(!!this.props.checked);
  }
  static getDerivedStateFromProps(props: SwitchProps, state: SwitchState) {
    if (state.control === 'state') {
      return {
        control: 'props',
      };
    }
    if (props.checked !== state.checked) {
      state.animatedStart(!!props.checked);
      return {
        checked: !!props.checked,
        control: 'props',
      };
    }
    return null;
  }
  onPress = () => {
    const checked = !this.state.checked;
    this.setState({ checked, control: 'state' }, () => {
      this.animatedStart(checked);
      this.props.onValueChange!(checked);
    });
  };
  measureContainer = (event: LayoutChangeEvent) => {
    const { checked } = this.state;
    const { translateXValue } = this.state;
    const { height: layoutHeight, width: layoutWidth } = event.nativeEvent.layout;
    const height = layoutHeight - 4;
    const width = height;
    const size = { width, height };
    this.height = height / 2;
    const state = { containerSize: size };
    this.translateXValue = layoutWidth - 2 - width;
    translateXValue.setValue(checked ? layoutWidth - 2 - width : 2);
    this.setState({ ...state, control: 'state' }, () => {
      this.animatedStart(!!this.props.checked);
    });
  };
  render() {
    const {
      style,
      size,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      checked,
      color,
      disabled,
      thumbColor,
      trackStyle,
      thumbStyle,
      ...otherProps
    } = this.props;
    const { containerSize } = this.state;
    const bgBorder = this.state.borderValue.interpolate({
      inputRange: [2, this.height],
      outputRange: [2, this.height],
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
      <View {...otherProps} onLayout={this.measureContainer} style={[styles.warpper, sizeStyl, style]}>
        {disabled && <View style={[styles.position, styles.disabled]} />}
        <Animated.View style={[styles.bg, styles.position, trackStyle, { borderWidth: bgBorder }]} />
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.position, { zIndex: 1 }]}
          onPress={this.onPress}
        />
        <Animated.View
          style={[
            styles.position,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: this.state.checked ? color : '',
              borderRadius: 16,
              opacity: this.state.bgOpacity,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.grip,
            thumbStyle,
            disabled ? styles.shadowDisable : styles.shadow,
            {
              backgroundColor: thumbColor,
              width: containerSize.width,
              height: containerSize.height,
            },
            {
              transform: [{ translateX: this.state.translateXValue }],
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  warpper: {
    position: 'relative',
    borderRadius: 16,
    backgroundColor: '#E6E6E6',
  },
  disabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
    shadowOffset: {
      width: 10,
      height: 10,
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
