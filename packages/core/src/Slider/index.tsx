import React, { Component } from 'react';
import {
  View,
  ViewProps,
  TransformsStyle,
  ViewStyle,
  Easing,
  LayoutChangeEvent,
  Animated,
  PanResponder,
  PanResponderInstance,
  PanResponderGestureState,
  StyleSheet,
} from 'react-native';

const TRACK_SIZE = 4;
const THUMB_SIZE = 20;

const DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100,
  },
  timing: {
    duration: 150,
    easing: Easing.inOut(Easing.ease),
    delay: 0,
  },
};

type BoundedValue = {
  value?: number;
  maxValue?: number;
  minValue?: number;
};

const getBoundedValue = ({ value, maxValue, minValue }: BoundedValue) =>
  value! > maxValue! ? maxValue : value! < minValue! ? minValue : value;

export interface RectProps {
  width: number;
  height: number;
}

export interface SliderProps extends ViewProps {
  value?: number;
  step?: number;
  maxValue?: number;
  minValue?: number;
  /**
   * 值为 `true` 时，Slider 为垂直方向
   */
  vertical?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  shownThumb?: boolean;
  thumbSize?: RectProps;
  animationType?: keyof typeof DEFAULT_ANIMATION_CONFIGS;
  maximumTrackTintColor?: string;
  minimumTrackTintColor?: string;
  thumbTintColor?: string;
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
  animateTransitions?: boolean;
  animationConfig?: Animated.SpringAnimationConfig;
  onChange?: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  onSlidingStart?: (value: number) => void;
}
export interface SliderState {
  containerSize: RectProps;
  trackSize: RectProps;
  thumbSize: RectProps;
  value: Animated.Value;
}

export default class Slider extends Component<SliderProps, SliderState> {
  panResponder: PanResponderInstance;
  _previousLeft: number = 0;
  static defaultProps = {
    value: 0,
    step: 0,
    maxValue: 1,
    minValue: 0,
    height: 6,
    vertical: false,
    shownThumb: true,
    thumbSize: { width: 20, height: 20 },
    maximumTrackTintColor: '#cacaca',
    minimumTrackTintColor: '#008EF0',
    thumbTintColor: '#fff',
    animationType: 'timing',
    onChange: () => {},
    onSlidingComplete: () => {},
    onSlidingStart: () => {},
  };
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      containerSize: { width: 0, height: 0 },
      trackSize: { width: 0, height: 0 },
      thumbSize: props.thumbSize || { width: 0, height: 0 },
      value: new Animated.Value(getBoundedValue(props) as number),
    };
    this.panResponder = PanResponder.create({
      onPanResponderTerminationRequest: () => false,
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    });
  }
  componentDidUpdate(prevProps: SliderProps) {
    const newValue = getBoundedValue(this.props);

    if (prevProps.value !== newValue) {
      if (this.props.animateTransitions) {
        this.setCurrentValueAnimated(newValue!);
      } else {
        this.setCurrentValue(newValue!);
      }
    }
  }

  setCurrentValue(value: number) {
    this.state.value.setValue(value);
  }

  setCurrentValueAnimated(value: number) {
    const { animationType } = this.props;
    if (!animationType) {
      return;
    }
    const animationConfig: Animated.SpringAnimationConfig = Object.assign(
      {},
      DEFAULT_ANIMATION_CONFIGS[animationType],
      this.props.animationConfig,
      {
        toValue: value,
      },
    );

    Animated[animationType](this.state.value, animationConfig).start();
  }
  getThumbLeft(value: number) {
    const ratio = (value - this.props.minValue!) / (this.props.maxValue! - this.props.minValue!);
    if (this.props.shownThumb) {
      return ratio * (this.state.containerSize.width - this.state.thumbSize.width);
    }
    return ratio * this.state.containerSize.width;
  }
  getCurrentValue = () => (this.state.value as any).__getValue();
  handlePanResponderGrant = () => {
    if (this.props.disabled) {
      return;
    }
    this._previousLeft = this.getThumbLeft(this.getCurrentValue());
    this.props.onSlidingStart!(this.getCurrentValue());
  };
  handlePanResponderEnd = () => {
    if (this.props.disabled) {
      return;
    }
    this.props.onSlidingComplete!(this.getCurrentValue());
  };
  handlePanResponderMove = (_: any, gestureState: PanResponderGestureState) => {
    if (this.props.disabled) {
      return;
    }
    const value = this.getValue(gestureState);
    this.state.value.setValue(value);
    this.props.onChange!(this.getCurrentValue());
  };
  getValue(gestureState: PanResponderGestureState) {
    const { vertical, minValue, maxValue, shownThumb } = this.props;
    let length = this.state.containerSize.width - this.state.thumbSize.width;
    if (!shownThumb) {
      length = this.state.containerSize.width;
    }
    const thumbLeft = this._previousLeft + (vertical ? gestureState.dy : gestureState.dx);
    const ratio = thumbLeft / length;
    if (this.props.step) {
      return Math.max(
        minValue!,
        Math.min(
          maxValue!,
          minValue! + Math.round((ratio * (maxValue! - minValue!)) / this.props.step) * this.props.step,
        ),
      );
    }
    return Math.max(minValue!, Math.min(maxValue!, ratio * (maxValue! - minValue!) + minValue!));
  }

  handleMeasure(name: string, event: LayoutChangeEvent) {
    const { width: layoutWidth, height: layoutHeight } = event.nativeEvent.layout;
    const { vertical } = this.props;
    const { containerSize, trackSize, thumbSize } = this.state;
    const width = vertical ? layoutHeight : layoutWidth;
    const height = vertical ? layoutWidth : layoutHeight;
    const size = { width, height };
    const state = { containerSize, trackSize, thumbSize };
    if (state[name as keyof typeof state]) {
      state[name as keyof typeof state] = size;
    }
    this.setState({ ...state });
  }
  measureContainer = (event: LayoutChangeEvent) => this.handleMeasure('containerSize', event);
  measureThumb = (event: LayoutChangeEvent) => this.handleMeasure('thumbSize', event);
  getMinimumTrackStyles(thumbStart: Animated.AnimatedInterpolation) {
    const { thumbSize, trackSize } = this.state;
    const minimumTrackStyle: {
      position: ViewStyle['position'];
      height?: Animated.AnimatedAddition;
      width?: Animated.AnimatedAddition;
      marginLeft?: ViewStyle['marginLeft'];
      marginTop?: ViewStyle['marginTop'];
    } = { position: 'absolute' };

    if (this.props.vertical) {
      minimumTrackStyle.height = Animated.add(thumbStart, 0);
      // minimumTrackStyle.height = Animated.add(thumbStart, thumbSize.height / 2);
      minimumTrackStyle.marginLeft = -trackSize.width;
    } else {
      minimumTrackStyle.width = Animated.add(thumbStart, 0);
      // minimumTrackStyle.width = Animated.add(thumbStart, thumbSize.width / 2);
      minimumTrackStyle.marginTop = -trackSize.height;
    }
    return minimumTrackStyle;
  }
  getThumbPositionStyles(thumbStart: Animated.AnimatedInterpolation) {
    if (this.props.vertical) {
      return [
        {
          translateX: -(this.state.trackSize.height + this.state.thumbSize.height) / 2,
        },
        { translateY: thumbStart },
      ];
    }
    return [
      { translateX: thumbStart },
      {
        translateY: -(this.state.trackSize.height + this.state.thumbSize.height) / 2,
      },
    ];
  }
  render() {
    const {
      style,
      vertical,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      step,
      maxValue,
      minValue,
      disabled,
      shownThumb,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      animationType,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      animateTransitions,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      animationConfig,
      trackStyle,
      thumbStyle,
      minimumTrackTintColor,
      maximumTrackTintColor,
      thumbTintColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSlidingComplete,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSlidingStart,
      ...otherProps
    } = this.props;
    const { value, thumbSize, containerSize } = this.state;
    const touchOverflowStyle = {} as ViewStyle;
    let outputRange = containerSize.width;
    if (shownThumb) {
      outputRange = containerSize.width - thumbSize.width;
    }
    const thumbStart = value.interpolate({
      inputRange: [minValue!, maxValue!],
      outputRange: [0, outputRange],
      // extrapolate: 'clamp',
    });
    const minimumTrackStyle = {
      ...this.getMinimumTrackStyles(thumbStart),
      backgroundColor: disabled ? '#a0a5b1' : minimumTrackTintColor,
    };
    const valueVisibleStyle = {};
    const thumbStyleTransform = (thumbStyle && (thumbStyle as TransformsStyle).transform) || [];
    const thumbTrackStyle = {} as ViewStyle;
    if (vertical) {
      thumbTrackStyle.left = 16 + (trackStyle && trackStyle.width ? ((trackStyle.width as number) - 4) / 2 : 0);
      touchOverflowStyle.height = '100%';
      touchOverflowStyle.width = 30;
    } else {
      thumbTrackStyle.top = 16 + (trackStyle && trackStyle.height ? ((trackStyle.height as number) - 4) / 2 : 0);
      touchOverflowStyle.height = 30;
    }
    return (
      <View
        onLayout={this.measureContainer}
        {...otherProps}
        style={StyleSheet.flatten([vertical ? styles.containerVertical : styles.containerHorizontal, style])}
      >
        <View
          style={StyleSheet.flatten([
            styles.track,
            vertical ? { ...styles.trackVertical, height: '100%' } : { ...styles.trackHorizontal, width: '100%' },
            trackStyle,
            { backgroundColor: maximumTrackTintColor, position: 'absolute' },
          ])}
        />
        <Animated.View
          style={StyleSheet.flatten([
            styles.track,
            vertical ? styles.trackVertical : styles.trackHorizontal,
            trackStyle,
            minimumTrackStyle,
          ])}
        />
        {shownThumb && (
          <Animated.View
            onLayout={this.measureThumb}
            style={StyleSheet.flatten([
              { backgroundColor: thumbTintColor },
              styles.thumb,
              thumbTrackStyle,
              thumbStyle,
              {
                transform: [...this.getThumbPositionStyles(thumbStart), ...thumbStyleTransform],
                ...valueVisibleStyle,
              },
              {
                width: vertical ? thumbSize.height : thumbSize.width,
                height: vertical ? thumbSize.width : thumbSize.height,
                borderRadius: thumbSize.width / 2,
              },
            ])}
          />
        )}
        <View style={StyleSheet.flatten([styles.touchArea, touchOverflowStyle])} {...this.panResponder.panHandlers} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHorizontal: {
    height: 30,
    justifyContent: 'center',
  },
  containerVertical: {
    width: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  track: {
    borderRadius: TRACK_SIZE / 2,
  },
  trackHorizontal: {
    height: TRACK_SIZE,
  },
  trackVertical: {
    flex: 1,
    width: TRACK_SIZE,
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
  },
  touchArea: {
    backgroundColor: 'transparent',
  },
});
