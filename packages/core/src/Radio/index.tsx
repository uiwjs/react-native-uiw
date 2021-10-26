import React, { Component } from 'react';
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
  },
});

export interface RadioProps extends ViewProps {
  checked?: boolean;
  disabled?: boolean;
  circleSize?: number;
  color?: string;
  thumbSize?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface RadioState {
  sizeValue: Animated.Value;
  checked?: boolean;
  control: 'state' | 'props';
}

export default class Radio extends Component<RadioProps, RadioState> {
  static defaultProps: RadioProps = {
    checked: false,
    circleSize: 20,
    color: '#c3c5c7',
    thumbSize: 12,
  };
  constructor(props: RadioProps) {
    super(props);
    this.state = {
      checked: props.checked,
      sizeValue: new Animated.Value(0),
      control: 'state',
    };
  }
  componentDidMount() {
    this.animatedStart(this.props.checked);
  }
  static getDerivedStateFromProps(props: RadioProps, state: RadioState) {
    if (state.control === 'state' && props.checked === state.checked) {
      return {
        control: 'props',
      };
    }
    if (props.checked !== state.checked) {
      Animated.spring(state.sizeValue, {
        toValue: !!props.checked ? props.thumbSize! : 0,
        overshootClamping: true,
        useNativeDriver: false,
      }).start();
      return {
        checked: props.checked,
        control: 'props',
      };
    }
    return null;
  }
  animatedStart(checked?: boolean) {
    Animated.spring(this.state.sizeValue, {
      toValue: !!checked ? this.props.thumbSize! : 0,
      overshootClamping: true,
      useNativeDriver: false,
    }).start();
  }
  handlePress = (event: GestureResponderEvent) => {
    const { onPress } = this.props;
    this.setState({ checked: true, control: 'state' }, () => {
      this.animatedStart(true);
      onPress && onPress(event);
    });
  };
  render() {
    const { style, color, circleSize, thumbSize, disabled, ...otherProps } = this.props;
    const sizeValue = this.state.sizeValue.interpolate({
      inputRange: [0, thumbSize!],
      outputRange: [0, thumbSize!],
      // extrapolate: 'clamp',
    });
    const backgroundColor = disabled ? color : '#008EF0';
    const borderColor = disabled ? color : '#bdc1cc';
    return (
      <View style={[styles.defalut, style]} {...otherProps}>
        <TouchableOpacity disabled={disabled} style={[styles.touch]} onPress={this.handlePress}>
          <Animated.View style={[styles.checkBg, { width: circleSize, height: circleSize, borderColor }]}>
            <Animated.View style={[styles.check, { width: sizeValue, height: sizeValue, backgroundColor }]} />
          </Animated.View>
          {this.props.children && (
            <MaybeTextOrView
              // eslint-disable-next-line react-native/no-inline-styles
              style={[styles.label, { opacity: disabled ? 0.3 : 1 }]}
            >
              {this.props.children}
            </MaybeTextOrView>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
