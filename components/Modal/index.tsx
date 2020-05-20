import React from 'react';
import {
  Modal,
  ModalProps as RNModalProps,
  Animated,
  ViewProps,
  TouchableOpacity,
  LayoutChangeEvent,
  StyleSheet,
} from 'react-native';

export interface ModalProps extends RNModalProps {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  bgOpacity?: number;
  visible?: boolean;
  maskClosable?: boolean;
  onClosed?: () => void;
}

export interface ModalState {
  bgOpacity: Animated.Value;
  translateValue: Animated.Value;
  visible?: boolean;
}

export default class NativeModal extends React.Component<
  ModalProps,
  ModalState
> {
  translateValue?: number;
  timer?: number;
  public content = React.createRef<ViewProps>();
  static defaultProps: ModalProps = {
    animationType: 'none',
    placement: 'bottom',
    maskClosable: true,
    bgOpacity: 0.6,
  };
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      bgOpacity: new Animated.Value(props.visible ? props.bgOpacity || 0.6 : 0),
      translateValue: new Animated.Value(0),
      visible: !!props.visible,
    };
  }
  componentDidMount() {
    if (this.props.visible) {
      // this.open();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: ModalProps) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        this.setState({visible: nextProps.visible}, () => {
          this.open();
        });
      } else {
        this.close();
      }
    }
  }
  open() {
    Animated.parallel([
      Animated.spring(this.state.bgOpacity, {
        toValue: this.props.bgOpacity || 0.6,
        overshootClamping: true,
        useNativeDriver: true,
      }),
      Animated.spring(this.state.translateValue, {
        toValue: 0,
        overshootClamping: true,
        useNativeDriver: true,
      }),
    ]).start();
  }
  close() {
    const {onClosed} = this.props;
    // const {translateValue} = this.state;
    if (this.translateValue) {
      // translateValue.setValue(this.translateValue);
    }
    Animated.parallel([
      Animated.spring(this.state.bgOpacity, {
        toValue: 0,
        overshootClamping: true,
        useNativeDriver: true,
      }),
      Animated.spring(this.state.translateValue, {
        toValue: this.translateValue!,
        overshootClamping: true,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.setState({visible: false}, () => {
        onClosed && onClosed();
      });
    });
  }
  measureContainer = (event: LayoutChangeEvent) => {
    const {placement, visible} = this.props;
    const {height: layoutHeight, width: layoutWidth} = event.nativeEvent.layout;
    this.translateValue = layoutHeight;
    if (placement === 'bottom') {
      this.translateValue = layoutHeight;
    }
    if (placement === 'top') {
      this.translateValue = layoutHeight;
    }
    if (placement === 'left') {
      this.translateValue = layoutWidth;
    }
    if (placement === 'right') {
      this.translateValue = layoutWidth;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      if (!visible) {
        this.setState(
          {translateValue: (this.translateValue as unknown) as Animated.Value},
          () => {
            this.open();
          },
        );
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
    });
  };
  getTransformStyle() {
    const {placement} = this.props;
    const style: {
      translateX?: Animated.Value;
      translateY?: Animated.Value;
    } = {};
    if (placement && /^(bottom|top)$/.test(placement)) {
      style.translateY = this.state.translateValue;
    } else if (placement && /^(left|right)$/.test(placement)) {
      style.translateX = this.state.translateValue;
    } else {
      return {};
    }
    return {transform: [style]};
  }
  render() {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      visible,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      transparent,
      maskClosable,
      animationType,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      presentationStyle,
      placement,
      children,
      ...otherProps
    } = this.props;

    const backdropContent = (
      <Animated.View
        style={[
          styles.position,
          styles.backdrop,
          {opacity: this.state.bgOpacity},
        ]}
      />
    );
    let backdrop = (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.position]}
        onPress={() => this.close()}>
        {backdropContent}
      </TouchableOpacity>
    );
    return (
      <Modal
        transparent={true}
        animationType={animationType}
        visible={this.state.visible}
        {...otherProps}>
        {maskClosable ? backdrop : backdropContent}
        <Animated.View
          ref={this.content as any}
          onLayout={this.measureContainer}
          style={[
            styles.content,
            placement && styles[placement],
            this.getTransformStyle(),
          ]}>
          {children}
        </Animated.View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backdrop: {
    backgroundColor: '#000',
  },
  content: {
    backgroundColor: '#fff',
    position: 'absolute',
  },
  top: {
    top: 0,
    left: 0,
    right: 0,
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  left: {
    bottom: 0,
    top: 0,
    left: 0,
  },
  right: {
    bottom: 0,
    top: 0,
    right: 0,
  },
});
