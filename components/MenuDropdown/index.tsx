import React, { RefObject } from 'react';
import { View, StyleSheet, Text, Animated, LayoutChangeEvent } from 'react-native'
import Item from './item'
import { ButtonProps } from '../Button'
import { IconsName, IconsProps } from '../Icon'
import { Button, Icon } from '..'

export interface MenuDropdownProps extends ButtonProps {
  title: string,

}

interface IState {
  btnIcon: IconsName,
  visibleMenu: Boolean,
  listHeightValue: Animated.Value,
  listHeight: number
}

export default class MenuDropdown extends React.Component<MenuDropdownProps> {
  static defaultProps: MenuDropdownProps = {
    title: '菜单'
  };

  static Item: typeof Item;

  state: IState = {
    btnIcon: 'down',
    visibleMenu: false,
    listHeightValue: new Animated.Value(0),
    listHeight: 0,
  }

  handleonPress = () => {
    const { visibleMenu, } = this.state;
    this.setState({
      visibleMenu: !visibleMenu,
      btnIcon: visibleMenu ? 'down' : 'up'
    })
    if (visibleMenu) {
      this.animateClose()
    } else {
      this.animateStart()
    }
  }


  animateStart = () => {
    Animated.timing(
      this.state.listHeightValue,
      {
        toValue: 1,
        duration: 150,
      }
    ).start();
  }

  animateClose = () => {
    this.setState({
      listHeightValue: new Animated.Value(0)
    })
  }

  menuContainer = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout
    this.setState({
      listHeight: height
    })
  }

  render() {
    const { title, children, size, ...btnProps } = this.props;

    const { btnIcon, visibleMenu, listHeightValue, listHeight } = this.state;
    return <View style={styles.menuBox}>
      <Button {...btnProps} onPress={this.handleonPress} size={size}  >
        <Text>{title}</Text>
        <Icon name={btnIcon} size={17} />
      </Button>
      {/* {
        visibleMenu && */}
        <Animated.View
          style={[styles.list, {
            // opacity: listHeightValue,
            height: listHeightValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, listHeight || 5]
            }),
            top: size === 'large' ? 35 : (size === 'small' ? 21 : 30)
          }]}

        >
          <View  onLayout={this.menuContainer}>
            {children}
          </View>
            

        </Animated.View>
      {/* } */}
    </View>
  }
}

MenuDropdown.Item = Item



const styles = StyleSheet.create({
  menuBox: {
  },
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
    overflow: "hidden"
  },
});