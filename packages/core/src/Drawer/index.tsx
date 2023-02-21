import React, { Fragment, useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  Dimensions,
  GestureResponderEvent,
} from 'react-native';
import { debounce } from 'lodash';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export interface DrawerProps extends ViewProps {
  isOpen?: boolean;
  maskClosable?: boolean;
  placement?: 'right' | 'left' | 'top' | 'bottom';
  drawerWidth?: number;
  drawerHeight?: number;
  maskProps?: ViewStyle;
  drawerBackgroundColor?: string;
  onChange?: (isOpen: boolean) => void;
  openDrawer?: (isOpen: boolean) => void;
  closeDrawer?: (isOpen: boolean) => void;
}
export interface DrawerState {
  drawerValue: Animated.ValueXY;
  overlayValue: Animated.Value;
  zIndexValue: number;
  isOpen: boolean;
}

export default function Drawer(props: DrawerProps) {
  console.log(333);
  const getInitPosition = () => {
    const { drawerWidth, placement, drawerHeight } = props;
    const xy = { x: 0, y: 0 };
    if (placement === 'left') {
      xy.x = -(drawerWidth || 0);
    }
    if (placement === 'right') {
      xy.x = DEVICE_WIDTH || 0;
    }
    if (placement === 'top') {
      xy.y = -(drawerHeight || 0);
    }
    if (placement === 'bottom') {
      xy.y = DEVICE_HEIGHT || 0;
    }
    return xy;
  };

  const [state, setState] = useState({
    zIndexValue: 0,
    overlayValue: new Animated.Value(0),
    drawerValue: new Animated.ValueXY({ ...getInitPosition() }),
    isOpen: !!props.isOpen,
  });

  const openDrawer = () => {
    setState({ ...state, zIndexValue: 3002, isOpen: true });
    Animated.parallel([
      Animated.spring(state.drawerValue, {
        toValue: { x: 0, y: 0 },
        overshootClamping: true,
        useNativeDriver: true,
      }),
      Animated.spring(state.overlayValue, {
        toValue: 0.7,
        overshootClamping: true,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.openDrawer!(true);
      props.onChange!(true);
    });
  };
  const closeDrawer = () => {
    const { drawerValue, overlayValue } = state;
    Animated.parallel([
      Animated.spring(drawerValue, {
        toValue: { ...getInitPosition() },
        overshootClamping: true,
        useNativeDriver: true,
      }),
      Animated.spring(overlayValue, {
        toValue: 0,
        overshootClamping: true,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.closeDrawer!(false);
      props.onChange!(false);
      setState({ ...state, zIndexValue: 0, isOpen: false });
    });
  };

  const handleDrawer = debounce((isOpen: boolean) => {
    isOpen ? openDrawer() : closeDrawer();
  }, 100);

  useEffect(() => {
    handleDrawer(state.isOpen);
  }, [state.isOpen]);

  useEffect(() => {
    handleDrawer(!!props.isOpen);
  }, [props.isOpen]);

  useEffect(() => {
    if (props.isOpen) {
      openDrawer();
    }
  }, []);

  const onOverlayClick = (e: GestureResponderEvent) => {
    const { maskClosable } = props;
    if (!maskClosable) {
      return false;
    }
    e.stopPropagation();
    closeDrawer();
  };

  const { style, drawerWidth, drawerBackgroundColor, maskProps, placement, drawerHeight } = props;
  const { isOpen, drawerValue, overlayValue, zIndexValue } = state;
  const isTopOrBottom = placement === 'top' || placement === 'bottom';
  const changeStyle = isTopOrBottom ? 'height' : 'width';
  const dynamicDrawerStyles: any = {
    backgroundColor: drawerBackgroundColor,
  };

  if (isTopOrBottom) {
    dynamicDrawerStyles.top = placement === 'top' ? 0 : null;
    dynamicDrawerStyles.bottom = placement === 'bottom' ? 0 : null;
    dynamicDrawerStyles.height = drawerWidth;
    dynamicDrawerStyles.width = '100%';
  } else {
    dynamicDrawerStyles.left = placement === 'left' ? 0 : null;
    dynamicDrawerStyles.right = placement === 'right' ? 0 : null;
    dynamicDrawerStyles.width = drawerWidth;
  }

  const overlayOpacity = overlayValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: 'clamp',
  });

  return (
    <Fragment>
      <Animated.View
        style={[
          styles.drawer,
          dynamicDrawerStyles,
          style,
          // eslint-disable-next-line
          {
            [changeStyle]: isOpen ? (isTopOrBottom ? drawerHeight : drawerWidth) : 0,
            transform: [
              { translateX: drawerValue.x }, // x轴移动
              { translateY: drawerValue.y }, // y轴移动
            ],
          },
        ]}
      >
        {props.children}
      </Animated.View>
      <Animated.View
        pointerEvents={isOpen ? 'auto' : 'none'}
        style={[
          styles.overlay,
          styles.positionFull,
          maskProps,
          {
            // opacity: overlayValue,
            opacity: overlayOpacity,
            zIndex: zIndexValue,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.positionFull,
            // eslint-disable-next-line
            {
              zIndex: 3003,
              position: 'absolute',
            },
          ]}
          onPress={onOverlayClick}
        />
      </Animated.View>
    </Fragment>
  );
}

Drawer.defaultProps = {
  placement: 'left',
  drawerBackgroundColor: '#fff',
  drawerWidth: 300,
  drawerHeight: 500,
  maskClosable: true,
  isOpen: false,
  onChange: () => null,
  openDrawer: () => null,
  closeDrawer: () => null,
} as DrawerProps;

const styles = StyleSheet.create({
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
