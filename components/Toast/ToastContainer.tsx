import React, { Component } from 'react'
import { View, Text, DeviceEventEmitter, NativeEventEmitter, StyleSheet, Animated } from 'react-native'

export interface ToastProps {
  type?: string;
  content: string;
  duration?: number;
  onClose?: () => void;
  onAnimationEnd?: () => void;
}

const TopViewEventEmitter = DeviceEventEmitter || new NativeEventEmitter();


export default class Toast extends Component<ToastProps, any> {
  static defaultProps = {
    duration: 3,
  };

  anim: Animated.CompositeAnimation | null | undefined;

  constructor(props: ToastProps) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    const { onClose, onAnimationEnd } = this.props;
    const duration = this.props.duration as number;
    const timing = Animated.timing;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration * 1000),
    ];
    if (duration > 0) {
      animArr.push(
        timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      );
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onClose) {
          onClose();
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }

  render() {
    const { content } = this.props;
    return (
      <View
        style={[styles.container]}
      >
        <View style={[styles.innerContainer]}>
          <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <View
              style={[
              ]}
            >
              <Text style={styles.content}>{content}</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  innerContainer: {

  },
  content: {

  }
})