import React, { useRef, useState, useEffect } from 'react';
import { Animated, View, StyleSheet, ViewProps, LayoutChangeEvent } from 'react-native';

type PositionType = 'fixed' | 'relative';

// 组件的属性定义
export interface ProgressProps extends ViewProps {
  /** 当前进度百分比， 0 - 100, 默认0 */
  progress?: number;
  /** 颜色 */
  progressColor?: string;
  /** 位置 */
  position?: PositionType;
  /** 动画持续的时间 */
  animation?: { duration?: number } | boolean;
}

export default (props: ProgressProps) => {
  const { style, progress = 0, progressColor = '#108ee9', position, animation = { duration: 500 } } = props;

  const progWidth = useRef<any>(new Animated.Value(0)).current;
  const [wrapWidth, setWrapWidth] = useState<number>(0);

  useEffect(() => {
    startAnimation();
  }, [wrapWidth, progress]);

  const startAnimation = () => {
    Animated.timing(progWidth, {
      toValue: getWidth(),
      duration: typeof animation !== 'boolean' ? animation.duration : 1000,
      useNativeDriver: false,
    }).start();
  };

  const onLayout = (e: LayoutChangeEvent) => {
    setWrapWidth(e.nativeEvent.layout.width);
  };

  const getWidth = (percent: number = progress) => {
    return wrapWidth * (normalPercent(percent) / 100);
  };

  const normalPercent = (percent?: number) => {
    let widthPercent: any = 0;
    if (percent !== undefined && percent > 0) {
      widthPercent = percent > 100 ? 100 : percent;
    }
    return widthPercent;
  };

  return (
    <View style={[styles.container, style]}>
      <View
        onLayout={onLayout}
        style={[
          styles.pre,
          position === 'fixed' ? { position: 'absolute', top: 0 } : {},
          { borderColor: progressColor },
        ]}
      >
        <Animated.View
          style={[
            styles.preOisn,
            {
              width: progWidth,
              backgroundColor: progressColor,
            },
          ]}
        ></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  pre: {
    borderWidth: 1,
    height: 4,
    width: '100%',
    borderRadius: 20,
    marginBottom: 0,
    marginTop: 0,
    overflow: 'hidden',
  },
  preOisn: {
    position: 'absolute',
    height: 4,
    left: 0,
    top: 0,
  },
});
