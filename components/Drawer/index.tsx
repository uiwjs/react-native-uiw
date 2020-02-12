
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

export interface DrawerProps extends ViewProps {
  isOpen?: boolean;
  maskClosable?: boolean;
  placement?: 'right' | 'left';
  drawerWidth?: number;
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
}

export default class Drawer extends Component<DrawerProps, DrawerState> {
  static defaultProps = {
    placement: 'left',
    drawerBackgroundColor: '#fff',
    drawerWidth: 300,
    maskClosable: true,
    isOpen: false,
    onChange: () => null,
    openDrawer: () => null,
    closeDrawer: () => null,
  }
  constructor(props: DrawerProps) {
    super(props);
    this.state = {
      zIndexValue: 0,
      overlayValue: new Animated.Value(0),
      drawerValue: new Animated.ValueXY({ ...(this.getInitPosition()) }),
    };
  }
  componentDidMount() {
    if (this.props.isOpen) {
      this.openDrawer();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: DrawerProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      
      this.handleDrawer(!!nextProps.isOpen);
    }
  }
  onOverlayClick = (e: GestureResponderEvent) => {
    const { maskClosable } = this.props;
    if (!maskClosable) return false;
    e.stopPropagation();
    this.closeDrawer()
  };
  render() {
    const { isOpen, style, drawerWidth, drawerBackgroundColor, maskProps, placement } = this.props;
    const { drawerValue, overlayValue, zIndexValue } = this.state;
    const dynamicDrawerStyles = {
      backgroundColor: drawerBackgroundColor,
      width: drawerWidth,
      left: placement === 'left' ? 0 : null,
      right: placement === 'right' ? 0 : null,
    };

    const overlayOpacity = overlayValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.3],
      extrapolate: 'clamp',
    });
    return (
      <Fragment>
        <Animated.View
          style={[styles.drawer, dynamicDrawerStyles, style, {
            width: isOpen ? drawerWidth : 0,
            transform: [
              { translateX: drawerValue.x }, // x轴移动
              { translateY: drawerValue.y }, // y轴移动
            ],
          }]}>
          {this.props.children}
        </Animated.View>
        <Animated.View
          pointerEvents={isOpen ? 'auto' : 'none'}
          style={[styles.overlay, styles.positionFull, maskProps, {
            // opacity: overlayValue,
            opacity: overlayOpacity,
            zIndex: zIndexValue,
          }]}
        >
          <TouchableOpacity
            style={[styles.positionFull, {
              zIndex: 3003,
              position: 'absolute',
            }]}
            onPress={this.onOverlayClick.bind(this)}
          >
          </TouchableOpacity>
        </Animated.View>
      </Fragment>
    );
  }
  handleDrawer(isOpen: boolean) {
    isOpen ? this.openDrawer() : this.closeDrawer();
  }
  getInitPosition() {
    const { drawerWidth, placement } = this.props;
    const xy = { x: 0, y: 0 };
    if (placement === 'left') {
      xy.x = -(drawerWidth || 0);
    }
    if (placement === 'right') {
      xy.x = (DEVICE_WIDTH || 0);
    }
    return xy;
  }
  openDrawer() {
    this.setState({ zIndexValue: 3002 });
    Animated.parallel([
      Animated.spring(this.state.drawerValue,
        {
          toValue: { x: 0, y: 0 },
          overshootClamping: true,
        }
      ),
      Animated.spring(this.state.overlayValue,
        { toValue: .7, overshootClamping: true }
      ),
    ]).start(() => {
      this.props.openDrawer!(true);
      this.props.onChange!(true);
    });
  }
  closeDrawer() {
    const { drawerValue, overlayValue } = this.state;
    Animated.parallel([
      Animated.spring(drawerValue,
        {
          toValue: { ...(this.getInitPosition()) },
          overshootClamping: true,
        }
      ),
      Animated.spring(overlayValue,
        {
          toValue: 0,
          overshootClamping: true,
        }
      ),
    ]).start(() => {
      this.props.closeDrawer!(false);
      this.props.onChange!(false);
      this.setState({ zIndexValue: 0 });
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