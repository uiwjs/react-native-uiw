import React from 'react';
import { View, Animated, EasingFunction, Easing, ViewStyle, StyleProp } from 'react-native';
type AnimationType = 'none' | 'stripe' | 'pulse';

interface SkeletonProps {
  loading?: boolean;
  styles: ViewStyle[];
  duration?: number;
  easing?: EasingFunction;
  containerStyle?: StyleProp<ViewStyle>;
  animationType?: AnimationType;
  boneColor?: string;
  highlightColor?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  loading = true,
  styles,
  duration = 1200,
  easing = Easing.bezier(0.5, 0, 0.25, 1),
  containerStyle,
  animationType = 'stripe',
  boneColor = '#E1E9EE',
  highlightColor = '#F2F8FC',
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const getInterpolatedColor = () => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [boneColor, highlightColor],
    });
  };
  const getAnimationStyle = () => {
    switch (animationType) {
      case 'stripe':
        return {
          backgroundColor: getInterpolatedColor(),
        };
      case 'pulse':
        return {
          opacity: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.5, 1, 0.5],
          }),
        };
      default:
        return {};
    }
  };

  React.useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          easing: easing,
          useNativeDriver: false,
        }),
      ).start();
    } else {
      animatedValue.setValue(0);
    }
  }, [loading]);

  return (
    <View style={containerStyle}>
      {styles.map((style, index) => (
        <Animated.View key={index} style={[style, getAnimationStyle()]} />
      ))}
    </View>
  );
};

export default Skeleton;
