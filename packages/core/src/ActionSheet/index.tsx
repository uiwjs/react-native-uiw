import React from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Modal, ModalProps, Animated } from 'react-native';
export { default as ActionSheetItem } from './item';

let MainWidth = Dimensions.get('window').width;
let MainHeight = Dimensions.get('window').height;
export interface ActionSheetProps extends ModalProps {
  /** 点击蒙层是否关闭 */
  onCancel?: Boolean,
  /** 取消的文本 */
  cancelText?: React.ReactNode
}

interface ActionSheetState {
  animatedHeight: number,
  stateVisible: boolean
}

export default class ActionSheet extends React.Component<ActionSheetProps, ActionSheetState> {
  private fadeAnim: Animated.Value = new Animated.Value(0);
  private animatedRef: React.RefObject<View> = React.createRef()
  constructor(props: ActionSheetProps) {
    super(props)
    this.state = {
      animatedHeight: 0,
      stateVisible: false
    }
  }

  onClose = () => {
    Animated.timing(this.fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(({ finished }) => {
      this.setState({ stateVisible: false })
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps: ActionSheetProps) {
    if (nextProps.visible) {
      this.setState({ stateVisible: true })
      Animated.timing(this.fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start(({ finished }) => {
        this.animatedRef.current &&
          this.animatedRef.current.measure((_frameOffsetX, _frameOffsetY, _width, _height, pageOffsetX, pageOffsetY) => {
            this.setState({ animatedHeight: _height }, () => {
              Animated.timing(this.fadeAnim, {
                toValue: -_height,
                duration: 150,
                useNativeDriver: true,
              }).start();
            })
          })
      });
    } else {
      this.onClose()
    }
  }
  render() {
    const { children, visible, cancelText = '取消', onCancel, ...other } = this.props
    const { stateVisible } = this.state
    return (
      <Modal
        animationType="fade" // slide  none  fade
        transparent={true}
        visible={stateVisible}
        onRequestClose={this.onClose}
        {...other}
      >

        <TouchableOpacity activeOpacity={1} style={[styles.position, styles.spread]} onPress={() => onCancel && this.onClose()}>
          <Animated.View style={[styles.spread, styles.backdrop]}>
          </Animated.View>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.actionSheet,
            { bottom: -this.state.animatedHeight, transform: [{ translateY: this.fadeAnim }] }
          ]}
          ref={this.animatedRef}
        >
          {
            React.Children.toArray(children).map((item, index) => (<View key={index}>
              {index !== 0 && <View style={styles.actionSheetItemDivider} />}{item}
            </View>))
          }
          <View style={styles.divider} />
          {typeof cancelText !== 'object' ? <TouchableOpacity activeOpacity={1} onPress={this.onClose}>
            <View style={styles.actionSheetItem}>
              <Text style={styles.actionSheetItemText}>{cancelText}</Text>
            </View>
          </TouchableOpacity> : <View>{cancelText}</View>
          }
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
    zIndex: 9998,
  },
  backdrop: {
    backgroundColor: '#000',
    opacity: .2
  },
  spread: {
    width: MainWidth,
    height: MainHeight
  },
  actionSheet: {
    width: MainWidth,
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 9999
  },
  divider: {
    backgroundColor: 'rgba(197,217,232,.3)',
    width: MainWidth,
    height: 6
  },
  actionSheetItemDivider: {
    borderBottomColor: 'rgba(197,217,232,.3)',
    borderBottomWidth: 2,
    width: MainWidth,
  },
  actionSheetItem: {
    width: MainWidth,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionSheetItemText: {
    fontSize: 20,
    fontWeight: '400',
  }
});
