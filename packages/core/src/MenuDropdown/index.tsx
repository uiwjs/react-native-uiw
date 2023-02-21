import React, { useState } from 'react';
import { View, StyleSheet, Text, Animated, LayoutChangeEvent } from 'react-native';
import Item from './item';
import Button, { ButtonProps } from '../Button';
import Icon, { IconsName } from '../Icon';

export interface MenuDropdownProps extends ButtonProps {
  title: string;
}

interface IState {
  btnIcon: IconsName;
  visibleMenu: Boolean;
  listHeightValue: Animated.Value;
  listHeight: number;
}

export default function MenuDropdown(props: MenuDropdownProps) {
  const [state, setState] = useState<IState>({
    btnIcon: 'down',
    visibleMenu: false,
    listHeightValue: new Animated.Value(0),
    listHeight: 0,
  });

  const { title = '菜单', children, size, ...btnProps } = props;
  const { btnIcon, listHeightValue, listHeight, visibleMenu } = state;

  const handleonPress = () => {
    setState({
      ...state,
      visibleMenu: !visibleMenu,
      btnIcon: visibleMenu ? 'down' : 'up',
    });
    if (visibleMenu) {
      animateClose();
    } else {
      animateStart();
    }
  };
  const animateStart = () => {
    Animated.timing(listHeightValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false, // 动画值在不同的驱动方式之间是不能兼容的。因此如果你在某个动画中启用了原生驱动，那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动。
    }).start();
  };
  const animateClose = () => {
    Animated.timing(listHeightValue, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false, // 动画值在不同的驱动方式之间是不能兼容的。因此如果你在某个动画中启用了原生驱动，那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动。
    }).start();
  };
  const menuContainer = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setState({
      ...state,
      listHeight: height,
    });
  };
  return (
    <View style={[styles.menuBox, { height: listHeight + 50 }]}>
      <Button {...btnProps} onPress={handleonPress} size={size}>
        <Text>{title}</Text>
        <Icon name={btnIcon} size={17} />
      </Button>
      <Animated.View
        style={[
          styles.list,
          // eslint-disable-next-line
          {
            opacity: listHeightValue,
            height: listHeightValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, listHeight || 5],
            }),
            top: size === 'large' ? 35 : size === 'small' ? 21 : 30,
          },
        ]}
      >
        <View onLayout={menuContainer}>{children}</View>
      </Animated.View>
    </View>
  );
}

MenuDropdown.Item = Item;

const styles = StyleSheet.create({
  menuBox: {},
  list: {
    position: 'absolute',
    zIndex: 1000,
    left: 0,
    right: 0,
    top: 0,
    height: 100,
    marginTop: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
});
