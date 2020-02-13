import React from 'react'
import { View, StyleSheet } from 'react-native'

export interface ItemProps {
  children?: React.ReactNode;

}

export default class Item extends React.Component<ItemProps> {
  render() {
    return <View style={styles.item}>
      {this.props.children}
    </View>
  }
}

const styles = StyleSheet.create({
  item: {
    minHeight: 30,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  }
});