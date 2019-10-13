import React from 'react';
import { TouchableOpacity, Animated, SwitchProps as SwitchPropsDefault, View, ViewStyle, LayoutChangeEvent, StyleSheet } from 'react-native';

export interface SwitchProps extends SwitchPropsDefault {
  trackStyle?: ViewStyle,
  thumbStyle?: ViewStyle,
}

export interface SwitchState {
  borderValue: Animated.Value;
  translateXValue: Animated.Value;
  bgOpacity: Animated.Value;
  containerSize: {
    width: number;
    height: number;
  },
}

export default class Switch extends React.Component<SwitchProps, SwitchState> {
  translateXValue: number = 2;
  static defaultProps: SwitchProps = {
    value: false,
    thumbColor: '#fff',
    onValueChange: () => {},
  }
  constructor(props: SwitchProps) {
    super(props);
    this.state = {
      containerSize: { width: 0, height: 0 },
      borderValue: new Animated.Value(0),
      translateXValue: new Animated.Value(2),
      bgOpacity: new Animated.Value(props.value ? 1 : 0),
    }
  }
  componentDidMount() {
    this.animatedStart(!!this.props.value);
  }
  UNSAFE_componentWillReceiveProps(nextProps: SwitchProps) {
    if(this.props.value !== nextProps.value) {
      this.animatedStart(!!nextProps.value);
    }
  }
  animatedStart(value: boolean) {
    if (value) {
      Animated.parallel([
        Animated.sequence([
          Animated.spring(this.state.borderValue,
            { toValue: 16, overshootClamping: true }
          ),
          Animated.spring(this.state.bgOpacity,
            { toValue: 1, overshootClamping: true }
          ),
        ]),
        Animated.spring(this.state.translateXValue,
          { toValue: this.translateXValue, overshootClamping: true }
        ),
      ]).start();
    } else {
      Animated.parallel([
        Animated.sequence([
          Animated.spring(this.state.bgOpacity,
            { toValue: 0, overshootClamping: true }
          ),
          Animated.spring(this.state.borderValue,
            { toValue: 2, overshootClamping: true }
          ),
        ]),
        Animated.spring(this.state.translateXValue,
          { toValue: 2, overshootClamping: true }
        ),
      ]).start();
    }
  }
  onPress = () => this.props.onValueChange!(!this.props.value);
  measureContainer = (event: LayoutChangeEvent) => {
    const { value } = this.props;
    const { translateXValue } = this.state;
    const { height: layoutHeight, width: layoutWidth } = event.nativeEvent.layout;
    const height = layoutHeight - 4;
    const width = height;
    const size = { width, height };
    const state = { containerSize: size };
    this.translateXValue = layoutWidth - 2 - width;
    translateXValue.setValue(value ? layoutWidth - 2 - width : 2);
    this.setState({ ...state });
  }
  render() {
    const { style, value, disabled, thumbColor, trackStyle, thumbStyle } = this.props;
    const { containerSize } = this.state;
    const bgBorder = this.state.borderValue.interpolate({
      inputRange: [2, 16],
      outputRange: [2, 16],
      // extrapolate: 'clamp',
    });
    return (
      <View onLayout={this.measureContainer} style={[styles.warpper, style]}>
        {disabled && <View style={[styles.position, styles.disabled]} />}
        <Animated.View
          style={[
            styles.bg,
            styles.position,
            trackStyle,
            { borderWidth: bgBorder },
          ]}
        >
        </Animated.View>
        <TouchableOpacity
          style={[styles.position, { zIndex: 1 }]}
          onPress={this.onPress}
        >
        </TouchableOpacity>
        <Animated.View style={[
          styles.position,
          { backgroundColor: value ? '#4DD964' : '', borderRadius: 16, opacity: this.state.bgOpacity }
        ]} />
        <Animated.View style={[
          styles.grip, thumbStyle, disabled ? styles.shadowDisable : styles.shadow,
          { backgroundColor: thumbColor, width: containerSize.width, height: containerSize.height },
          {
            transform: [ { translateX: this.state.translateXValue } ]
          }
        ]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  warpper: {
    height: 32,
    borderRadius: 16,
    width: 52,
  },
  disabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 22,
    borderRadius: 16,
  },
  bg: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    backgroundColor: '#EDEDED',
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
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
});
