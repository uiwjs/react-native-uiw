import React from 'react';
import {
  View,
  Dimensions,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  GestureResponderEvent,
  useColorScheme,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import Text from '../Typography/Text';

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
  children?: React.ReactNode;
  disabled?: boolean;
}

export interface ActionSheetItemState {}

export default function ActionSheetItem(props: ActionSheetItemProps) {
  const theme = useTheme<Theme>();
  const colorScheme = useColorScheme();
  const {
    onPress = () => {},
    activeOpacity = 1,
    underlayColor = colorScheme === 'light' ? theme.colors.background : '#1A1A22',
    containerStyle,
    textStyle,
    disabled = false,
    children,
  } = props;

  return (
    <TouchableHighlight
      style={styles.touchableHighlightItem}
      activeOpacity={activeOpacity}
      underlayColor={underlayColor}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={StyleSheet.flatten([styles.actionSheetItem, containerStyle])}>
        <Text style={StyleSheet.flatten([styles.actionSheetItemText, textStyle])}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  actionSheetItem: {
    width: MainWidth,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionSheetItemText: {
    fontSize: 20,
    fontWeight: '400',
  },
  touchableHighlightItem: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
