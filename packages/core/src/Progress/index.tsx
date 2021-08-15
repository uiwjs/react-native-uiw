import React, {useState, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  Text,
  ViewProps
} from 'react-native'

type PositionType = 'fixed' | 'relative'

// 组件的属性定义
export interface PropsDefineProps  extends ViewProps {
  /** 当前进度百分比， 0 - 100, 默认0 */
  progress?: number;
  /** 颜色， 默认10 */
  progressColor? : string
  /** 位置 */
  position?: PositionType;
}

export default (props: PropsDefineProps) => {
  const {
    style,
    progress = 0,
    progressColor = '#108ee9',
    position = 'fixed'
  } = props;

  const [val, setVal] = useState<number>(0);

  useEffect(() => {
    let num: number;
    if (progress >= 100) {
      num = 100;
    } else if (progress <= 0) {
      num = 0;
    } else {
      num = progress;
    }
    setVal(num);
  }, [progress])

  return (
    <View style={[styles.container, style]}>
      <View style={[
        styles.pre, 
        position === 'fixed' ? { position: 'absolute', top: 0 } : {},
        { borderColor: progressColor }]}>
        <Animated.View style={[styles.preOisn, { width: `${val}%`, backgroundColor: progressColor }]}></Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    height: 4,
    borderRadius: 20,
    marginBottom: 0,
    marginTop: 0,
    overflow: 'hidden',
  },
  preOisn: {
    position: 'absolute',
    height: 4,
    borderBottomLeftRadius: 2000,
    borderTopLeftRadius: 2000,
    zIndex: 8
  },
});