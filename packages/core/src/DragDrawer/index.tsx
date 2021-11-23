import { number } from 'prop-types';
import React, { useState, useRef, useEffect, useMemo, Fragment } from 'react';
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
} from 'react-native';
import Icon, { IconsName } from '../Icon';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export interface DragDrawerProps extends ViewProps {
  drawerHeight?: number;
  drawerBackgroundColor?: string;
  children?: React.ReactNode;
}
export interface DragDrawerProps extends ViewProps {}
function DragDrawer(props: DragDrawerProps) {
  const { drawerBackgroundColor = '#fff', drawerHeight = 300, children } = props;

  const [zIndexValue, setZIndexValue] = useState(0);
  const [animatedViewHeight, setAnimatedViewHeight] = useState(new Animated.Value(drawerHeight));
  const [viewHeight, setViewHeight] = useState(drawerHeight);
  const [showAnimate, setShowAnimate] = useState(false);

  const openDrawer = () => {
    setZIndexValue(3002);
  };
  const closeDrawer = () => {
    setZIndexValue(0);
  };
  const dynamicDrawerStyles: any = {
    backgroundColor: drawerBackgroundColor,
    top: null,
    bottom: 0,
    height: drawerHeight,
    width: '100%',
  };

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
              animatedViewHeight.setValue(values);
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
              toValue: 30,
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

  return (
    <Fragment>
      <Animated.View
        style={[
          styles.drawer,
          dynamicDrawerStyles,
          {
            height: animatedViewHeight,
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Animated.View style={[styles.viewPosition]}>
          <View style={{}}>
            <TouchableOpacity activeOpacity={1}>
              <View style={[styles.homeContainer]}>
                <Icon name="minus" size={25} fill="#8F8F8F" />
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        {children}
      </Animated.View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  viewPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  positionFull: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  overlay: {
    backgroundColor: '#000',
    zIndex: 3002,
  },
});

export default DragDrawer;
