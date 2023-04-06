import { number } from 'prop-types';
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  Dimensions,
  View,
  Platform, // 动画
  UIManager, // 动画
  Animated, // 动画
  PanResponder, // 手指拖拽
  StyleProp,
} from 'react-native';
import Icon, { IconsName } from '../Icon';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export interface DragDrawerProps extends ViewProps {
  /** 抽屉高度 */
  drawerHeight?: number;
  /** 抽屉颜色 */
  drawerBackgroundColor?: string;
  /** 自定义图标 */
  icon?: IconsName | React.ReactElement | React.ReactNode;
  children?: React.ReactNode;
}

function DragDrawer(props: DragDrawerProps) {
  const theme = useTheme<Theme>();
  const { drawerBackgroundColor = theme.colors.white || '#fff', drawerHeight = 300, children, icon, style } = props;

  const [animatedViewHeight, setAnimatedViewHeight] = useState(new Animated.Value(drawerHeight));
  const [viewHeight, setViewHeight] = useState(drawerHeight);
  const [showAnimate, setShowAnimate] = useState(false);

  const dynamicDrawerStyles: any = {
    backgroundColor: drawerBackgroundColor,
    top: null,
    bottom: 0,
    height: drawerHeight,
    width: '100%',
  };

  /**
   * 拖曳效果动画
   *  */
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (evt, gestureState) => {
        return Animated.event(
          [null, { dy: animatedViewHeight }],
          {
            listener: () => {
              let values = DEVICE_HEIGHT - 30 - gestureState.moveY;
              setViewHeight(values);
              animatedViewHeight.setValue(values > 50 ? values : 50);
            },
            useNativeDriver: false,
          }, // 可选的异步监听函数
        )(evt, gestureState);
      },
      onPanResponderRelease: (e, gestureState) => {
        let values = DEVICE_HEIGHT + 30 - gestureState.moveY;
        if (gestureState.dy >= 0) {
          //向下滑动
          if (DEVICE_HEIGHT - e.nativeEvent.pageY < 100) {
            //结束位置在折叠线一下 则关闭
            setViewHeight(30);
            Animated.timing(animatedViewHeight, {
              toValue: 50,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            //结束位置在折叠线一上 则折叠
            setShowAnimate(false);
            animatedViewHeight.flattenOffset();
          }
        } else {
          //向上滑动
          if (values > drawerHeight) {
            //结束位置在折叠线一下 则折叠
            setShowAnimate(false);
            setViewHeight(drawerHeight);
            Animated.timing(animatedViewHeight, {
              toValue: drawerHeight,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            //结束位置在折叠线一上 则打开
            setShowAnimate(true);
            animatedViewHeight.flattenOffset();
          }
        }
      },
    }),
  ).current;

  /**
   * 自定义图标
   *  */
  const IconCustom = (icon?: IconsName | React.ReactElement | React.ReactNode) => {
    if (icon) {
      return (
        <>
          {typeof icon === 'string' ? (
            <Icon name={icon as IconsName} size={25} color={theme.colors.primary_background || '#3578e5'} />
          ) : (
            icon
          )}
        </>
      );
    } else {
      return <Icon name="minus" size={25} color={theme.colors.primary_background || '#3578e5'} />;
    }
  };

  return (
    <Animated.View
      style={StyleSheet.flatten([styles.drawer, dynamicDrawerStyles, style, { height: animatedViewHeight }])}
    >
      <Animated.View style={[styles.viewPosition]} {...panResponder.panHandlers}>
        <TouchableOpacity activeOpacity={1}>
          <View style={[styles.homeContainer]}>{IconCustom(icon)}</View>
        </TouchableOpacity>
      </Animated.View>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  viewPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //抽屉样式
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    flex: 1,
    zIndex: 3004,
  },
});

export default DragDrawer;
