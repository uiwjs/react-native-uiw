import React, { Component, Fragment } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  Dimensions,
  GestureResponderEvent,
} from 'react-native';

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
  handleDrawer: (isOpen: boolean) => void;
  control: 'props' | 'state';
  isOpen: boolean;
}

export default class Drawer extends Component<DrawerProps, DrawerState> {
  static defaultProps = {
    placement: 'left',
    drawerBackgroundColor: '#fff',
    drawerWidth: 300,
    drawerHeight: 500,
    maskClosable: true,
    isOpen: false,
    onChange: () => null,
    openDrawer: () => null,
    closeDrawer: () => null,
  };
  private handleDrawer: (isOpen: boolean) => void;
  constructor(props: DrawerProps) {
    super(props);
    this.handleDrawer = (isOpen: boolean) => {
      isOpen ? this.openDrawer() : this.closeDrawer();
    };
    this.state = {
      zIndexValue: 0,
      overlayValue: new Animated.Value(0),
      drawerValue: new Animated.ValueXY({ ...this.getInitPosition() }),
      handleDrawer: this.handleDrawer,
      control: 'state',
      isOpen: !!props.isOpen,
    };
  }
  static getDerivedStateFromProps(props: DrawerProps, state: DrawerState) {
    if (state.control === 'state') {
      return {
        control: 'props',
      };
    }
    if (props.isOpen !== state.isOpen) {
      state.handleDrawer(!!props.isOpen);
      return {
        isOpen: props.isOpen,
        control: 'props',
      };
    }
    return null;
  }
  componentDidMount() {
    if (this.props.isOpen) {
      this.openDrawer();
    }
  }

  onOverlayClick = (e: GestureResponderEvent) => {
    const { maskClosable } = this.props;
    if (!maskClosable) {
      return false;
    }
    e.stopPropagation();
    this.closeDrawer();
  };
  render() {
    const { isOpen, style, drawerWidth, drawerBackgroundColor, maskProps, placement, drawerHeight } = this.props;
    const { drawerValue, overlayValue, zIndexValue } = this.state;
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
            // eslint-disable-next-line react-native/no-inline-styles
            {
              [changeStyle]: isOpen ? (isTopOrBottom ? drawerHeight : drawerWidth) : 0,
              transform: [
                { translateX: drawerValue.x }, // x轴移动
                { translateY: drawerValue.y }, // y轴移动
              ],
            },
          ]}
        >
          {this.props.children}
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
              // eslint-disable-next-line react-native/no-inline-styles
              {
                zIndex: 3003,
                position: 'absolute',
              },
            ]}
            onPress={this.onOverlayClick.bind(this)}
          />
        </Animated.View>
      </Fragment>
    );
  }

  getInitPosition() {
    const { drawerWidth, placement, drawerHeight } = this.props;
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
  }
  openDrawer() {
    this.setState({ zIndexValue: 3002, control: 'state' });
    Animated.parallel([
      Animated.spring(this.state.drawerValue, {
        toValue: { x: 0, y: 0 },
        overshootClamping: true,
        useNativeDriver: true,
      }),
      Animated.spring(this.state.overlayValue, {
        toValue: 0.7,
        overshootClamping: true,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.props.openDrawer!(true);
      this.props.onChange!(true);
    });
  }
  closeDrawer() {
    const { drawerValue, overlayValue } = this.state;
    Animated.parallel([
      Animated.spring(drawerValue, {
        toValue: { ...this.getInitPosition() },
        overshootClamping: true,
        useNativeDriver: true,
      }),
      Animated.spring(overlayValue, {
        toValue: 0,
        overshootClamping: true,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.props.closeDrawer!(false);
      this.props.onChange!(false);
      this.setState({ zIndexValue: 0, control: 'state' });
    });
  }
}

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
