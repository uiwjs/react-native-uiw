import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import Svg, { Circle, G, Line, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

interface ProgressProps {
  /**设置是进度条还是进度圈*/
  type: 'line' | 'circle';
  /**设置进度圈大小，进度条长度*/
  width?: number;
  /**颜色 支持渐变色*/
  color?: string | [string, string];
  /**背景色 */
  bgColor?: string;
  /**设置进度圈外环宽度，进度条的高*/
  strokeWidth?: number;
  /**值*/
  value?: number;
  /**是否显示值文本 */
  showLabel?: boolean;
  /**自定义标签 */
  label?: React.ReactNode;
  /**是否显示单位 */
  showUnit?: boolean;
  /**自定义文本位置 */
  top?: string;
  /**自定义文本位置 */
  left?: string;
}

const Progress: React.FC<ProgressProps> = ({
  type = 'circle',
  width = 100,
  color = ['#3578e5', '#00c6ff'],
  bgColor = '#e5e5e5',
  strokeWidth = 10,
  value = 0,
  showLabel = true,
  label,
  showUnit = true,
  top = '50%',
  left = '11%',
}) => {
  const progressValue = useRef(new Animated.Value(0)).current;

  const [fontSize, setFontSize] = useState(18);
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

  useEffect(() => {
    setFontSize(width / 5);
  }, [width]);

  if (type === 'line') {
    const progress = progressValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    });
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
    const progressLabel = showLabel && (
      <Text
        style={{
          position: 'absolute',
          top: top,
          left: left,
          transform: [{ translateX: 0 }, { translateY: 0 }],
          fontSize: fontSize,
          fontWeight: 'bold',
          color: typeof color === 'string' ? color : color[1],
        }}
      >
        {label ?? `${value}${showUnit ? '%' : ''}`}
      </Text>
    );

    return (
      <View>
        <View>
          <Svg width={width} height={showLabel ? width / 3 : strokeWidth}>
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor={typeof color === 'string' ? color : color[0]} stopOpacity="1" />
                <Stop offset="1" stopColor={typeof color === 'string' ? color : color[1]} stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <G origin={`${width / 2}, ${width / 2}`}>
              <Rect x={0} y={0} width={width} height={strokeWidth} rx={strokeWidth / 2} fill={bgColor} />
              <AnimatedRect x={0} y={0} width={progress} height={strokeWidth} rx={strokeWidth / 2} fill="url(#grad)" />
            </G>
          </Svg>
        </View>
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
          top: top,
          left: left,
          transform: [{ translateX: -fontSize / 2 }, { translateY: -fontSize / 2 }],
          fontSize: fontSize,
          fontWeight: 'bold',
          color: typeof color === 'string' ? color : color[1],
        }}
      >
        {label ?? `${value}${showUnit ? '%' : ''}`}
      </Text>
    );

    return (
      <View>
        <Svg width={width} height={width}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor={typeof color === 'string' ? color : color[0]} stopOpacity="1" />
              <Stop offset="1" stopColor={typeof color === 'string' ? color : color[1]} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <G rotation="-90" origin={`${width / 2}, ${width / 2}`}>
            <Circle cx={width / 2} cy={width / 2} r={radius} stroke={bgColor} strokeWidth={strokeWidth} fill="none" />
            <AnimatedCircle
              cx={width / 2}
              cy={width / 2}
              r={radius}
              stroke="url(#grad)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={progressDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </G>
        </Svg>
        {progressLabel}
      </View>
    );
  } else {
    return null;
  }
};

export default Progress;
