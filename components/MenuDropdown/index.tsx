import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
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
}

export default class MenuDropdown extends React.Component<MenuDropdownProps> {
  static defaultProps: MenuDropdownProps = {
    title: '菜单'
  };

  static Item: typeof Item;

  state:IState = {
    btnIcon: 'down',
    visibleMenu: false,
  }

  handleonPress = () => {
    const { visibleMenu,  } = this.state;
    this.setState({
      visibleMenu: !visibleMenu,
      btnIcon: visibleMenu ? 'up' : 'down'
    })
  }
  render() {
    const { title, children } = this.props;
    const { btnIcon, visibleMenu } = this.state;
    return <View>
      <Button onPress={this.handleonPress}> 
        <Text>{title}</Text>
        <Icon name={btnIcon} size={17} />
      </Button>
      {
        visibleMenu && <View style={styles.list}>
        {children}
      </View>
      }
    </View>
  } 
}

MenuDropdown.Item = Item



const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    shadowColor: '#000',
  }
});