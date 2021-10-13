import React from 'react';
import {
  View,
  Dimensions,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

let MainWidth = Dimensions.get('window').width;
export interface ActionSheetItemProps {
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 文本样式 */
  textStyle?: StyleProp<TextStyle>;
  /** 指定封装的视图在被触摸操作激活时以多少不透明度显示 默认 1 */
  activeOpacity?: number;
  /** 有触摸操作时显示出来的底层的颜色 */
  underlayColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface ActionSheetItemState {}

export default class ActionSheetItem extends React.Component<ActionSheetItemProps, ActionSheetItemState> {
  render() {
    const {
      onPress = () => {},
      activeOpacity = 1,
      underlayColor = '#f1f1f1',
      containerStyle,
      textStyle,
      children,
    } = this.props;
    return (
      <TouchableHighlight activeOpacity={activeOpacity} underlayColor={underlayColor} onPress={onPress}>
        <View style={StyleSheet.flatten([styles.actionSheetItem, containerStyle])}>
          <Text style={StyleSheet.flatten([styles.actionSheetItemText, textStyle])}>{children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  actionSheetItem: {
    width: MainWidth,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionSheetItemText: {
    fontSize: 20,
    fontWeight: '400',
  },
});
