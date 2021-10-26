import React, { useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ViewStyle, GestureResponderHandlers } from 'react-native';
import Icon, { IconsName } from '../Icon';
import { TabsItemIconTypes } from '../Tabs/TabsItem';

export interface SpeedDialItemProps {
  /** 右边 显示的图标 */
  icon: TabsItemIconTypes;
  /** 左边文字 */
  title: JSX.Element | string | number;
  /** 左边文字盒子样式 */
  titleStyle?: ViewStyle;
  /** 右边图标盒子样式 */
  iconStyle?: ViewStyle;
  /**
   * 点击右边时触发
   */
  onPress?: Function;
  move?: GestureResponderHandlers;
}

function SpeedDialItem(props: SpeedDialItemProps) {
  const { title, icon, titleStyle, iconStyle, onPress } = props;

  const ChildTitle = useMemo(() => {
    if (typeof title === 'string' || typeof title === 'number') {
      return <Text>{title}</Text>;
    } else if (title instanceof Object) {
      return <React.Fragment>{title}</React.Fragment>;
    }
  }, [title]);

  const ChildIcon = useMemo(() => {
    if (icon instanceof Object) {
      return <React.Fragment>{icon}</React.Fragment>;
    } else {
      return <Icon name={icon as IconsName} color="#fff" size={18} />;
    }
  }, [icon]);

  return (
    <View style={styles.speedDialItemContainer} {...props.move}>
      <View style={[styles.speedDialItemTitle, { ...titleStyle }]}>{ChildTitle}</View>
      <TouchableOpacity
        onPress={() => {
          onPress && onPress();
        }}
      >
        <View style={[styles.speedDialItemIcon, { ...iconStyle }]}>{ChildIcon}</View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  speedDialItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 10,
  },
  speedDialItemTitle: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 20,
  },
  speedDialItemIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#b779e2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SpeedDialItem;
