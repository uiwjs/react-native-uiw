import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

interface ProgressProps {
  type: 'line' | 'circle';
  color?: string | [string, string];
  bgColor?: string;
  strokeWidth?: number;
  value?: number;
  showLabel?: boolean;
  labelPosition?: 'right' | 'top';
  label?: React.ReactNode;
  showUnit?: boolean;
  innerWidth?: number;
  width?: number;
}

const Progress: React.FC<ProgressProps> = ({
  type,
  color = '#3578e5',
  bgColor = '#e5e5e5',
  strokeWidth = 20,
  value = 50,
  showLabel = true,
  labelPosition = 'right',
  label,
  showUnit = true,
  innerWidth = 15,
  width = 100,
}) => {
  const progressValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    try {
      Animated.timing(progressValue, {
        toValue: value,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } catch (error) {
      console.log(error);
    }
  }, [value]);

  if (type === 'line') {
    const progressLabel = showLabel && (
      <Text
        style={{
          position: 'absolute', [labelPosition]: 0,
          paddingHorizontal: 5,
          top: '50%',
          transform: [{ translateY: -7.5 }]
        }}>
        {label ?? `${value}${showUnit ? '%' : ''}`}
      </Text>
    );
    return (
      <View style={{ height: strokeWidth, width: width, backgroundColor: bgColor, borderRadius: 15 }}>
        <Animated.View
          style={{
            backgroundColor: color,
            height: strokeWidth,
            borderRadius: 15,
            width: `${value}%`,
            transform: [{
              translateX: progressValue.interpolate({
                inputRange: [0, 100],
                outputRange: [-strokeWidth / 2, strokeWidth / 2]
              })
            }]
          }}>
          <View style={{ height: strokeWidth, borderRadius: 15 }} />
        </Animated.View>
        {progressLabel}
      </View>
    );
  } else if (type === 'circle') {
    const radius = (width - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = progressValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });
    const progressDashoffset = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [circumference, 0],
    });
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

    const progressLabel = showLabel && (
      <Text
        style={{
          position: 'absolute',
          top: '50%',
          left: width / 2,
          transform: [{ translateX: -15 }, { translateY: -10 }],
          fontSize: 18,
          fontWeight: 'bold',
          color: typeof color === 'string' ? color : color[1],
        }}>
        {label ?? `${value}${showUnit ? '%' : ''}`}
      </Text>
    );

    return (
      <View>
        {progressLabel}
        <Svg width={width} height={width}>
          <G rotation="-90" origin={`${width / 2}, ${width / 2}`}>
            <Circle
              cx={width / 2}
              cy={width / 2}
              r={radius}
              stroke={bgColor}
              strokeWidth={innerWidth > strokeWidth ? strokeWidth : innerWidth}
              strokeOpacity={1}
              fill="none"
            />
            <AnimatedCircle
              cx={width / 2}
              cy={width / 2}
              r={radius}
              stroke={typeof color === 'string' ? color : color[1]}
              strokeWidth={innerWidth}
              strokeDasharray={`${circumference}, ${circumference}`}
              strokeDashoffset={progressDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </G>
        </Svg>
      </View>
    );
  } else {
    return null;
  }
};

export default Progress;



