import React from 'react';
import { View, StyleSheet, Text, Animated, LayoutChangeEvent, Easing } from 'react-native';
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

export default class MenuDropdown extends React.Component<MenuDropdownProps> {
  static defaultProps: MenuDropdownProps = {
    title: '菜单',
  };

  static Item: typeof Item;

  state: IState = {
    btnIcon: 'down',
    visibleMenu: false,
    listHeightValue: new Animated.Value(0),
    listHeight: 0,
  };

  handleonPress = () => {
    const { visibleMenu } = this.state;
    this.setState({
      visibleMenu: !visibleMenu,
      btnIcon: visibleMenu ? 'down' : 'up',
    });
    if (visibleMenu) {
      this.animateClose();
    } else {
      this.animateStart();
    }
  };

  animateStart = () => {
    Animated.timing(this.state.listHeightValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false, // 动画值在不同的驱动方式之间是不能兼容的。因此如果你在某个动画中启用了原生驱动，那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动。
    }).start();
  };

  animateClose = () => {
    this.setState({
      listHeightValue: new Animated.Value(0),
    });
  };

  menuContainer = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    this.setState({
      listHeight: height,
    });
  };

  render() {
    const { title, children, size, ...btnProps } = this.props;

    const { btnIcon, listHeightValue, listHeight } = this.state;
    return (
      <View style={[styles.menuBox, { height: this.state.listHeight + 50 }]}>
        <Button {...btnProps} onPress={this.handleonPress} size={size}>
          <Text>{title}</Text>
          <Icon name={btnIcon} size={17} />
        </Button>
        {/* {
        visibleMenu && */}
        <Animated.View
          style={[
            styles.list,
            // eslint-disable-next-line react-native/no-inline-styles
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
          <View onLayout={this.menuContainer}>{children}</View>
        </Animated.View>
        {/* } */}
      </View>
    );
  }
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
