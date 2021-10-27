import { has } from 'lodash';
import React, { useRef, useState, useEffect } from 'react';
import { Animated, View, StyleSheet, ViewProps, LayoutChangeEvent } from 'react-native';
import { Flex } from 'src';
import { run } from './svg';
import Icon from '../Icon';

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
  /** 图标源 */
  xml?: string;
  /** 是否展示图标 */
  iconShow?: boolean | false;
  /** 图标尺寸 */
  size?: number;
}

export default (props: ProgressProps) => {
  const {
    iconShow,
    size = 25,
    xml = run,
    style,
    progress = 0,
    progressColor = '#108ee9',
    position,
    animation = { duration: 500 },
  } = props;
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
      {iconShow && iconShow === true && (
        <View onLayout={onLayout} style={[styles.preIcon, { height: size }]}>
          <Animated.View
            style={{
              marginLeft: progress === 0 ? -50 : -35,
              width: progWidth,
            }}
          ></Animated.View>
          <Icon xml={xml} size={size} />
        </View>
      )}
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
  preIcon: {
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  preOisn: {
    position: 'absolute',
    height: 4,
    left: 0,
    top: 0,
  },
});
