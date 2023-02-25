import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native';
import Icon, { IconsName } from '../Icon';

export interface ToastProps {
  type: 'info' | 'success' | 'warning' | 'error';
  content: string;
  duration?: number;
  showIcon?: boolean;
  icon?: IconsName;
  onClose?: () => void;
  onAnimationEnd?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function ToastContainer(props: ToastProps) {
  const [anim, setAnim] = useState<Animated.CompositeAnimation | null | undefined>();

  const [state, setState] = useState({
    fadeAnim: new Animated.Value(1),
  });

  useEffect(() => {
    const { onClose, onAnimationEnd } = props;
    const duration = props.duration as number;
    const timing = Animated.timing;
    if (anim) {
      setAnim(null);
    }
    const animArr = [
      timing(state.fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration * 1000),
    ];
    if (duration > 0) {
      animArr.push(
        timing(state.fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      );
    }
    setAnim(Animated.sequence(animArr));
    anim?.start(() => {
      if (duration > 0) {
        setAnim(null);
        if (onClose) {
          onClose();
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });

    return () => {
      if (anim) {
        anim.stop();
        setAnim(null);
      }
    };
  }, []);

  const renderIcon = () => {
    const { type } = props;
    let icon = props.icon;
    let color = '';
    if (!icon) {
      switch (type) {
        case 'success':
          icon = 'circle-check';
          color = '#28a745';
          break;
        case 'warning':
          icon = 'warning';
          color = '#ffc107';
          break;
        case 'info':
          icon = 'information';
          color = '#008ef0';
          break;
        case 'error':
          icon = 'circle-close';
          color = '#dc3545';
          break;
        default:
          break;
      }
    }
    return { icon, color };
  };

  const { content, type, style } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.innerContainer]}>
        <Animated.View style={{ opacity: state.fadeAnim }}>
          <View style={[styles.content, styles[type]]}>
            <Icon name={renderIcon().icon} size={16} style={[styles.icon]} color={renderIcon().color} />
            <Text>{content}</Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

ToastContainer.defaultProps = {
  duration: 3,
  type: 'info',
} as ToastProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 100,
    right: 0,
  },
  innerContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
  content: {
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  info: {
    backgroundColor: '#bde4ff',
    color: '#008ef0',
  },
  success: {
    backgroundColor: '#afecbd',
    color: '#28a745',
  },
  error: {
    backgroundColor: '#fae3e5',
  },
  warning: {
    backgroundColor: '#fff4d3',
  },
});
