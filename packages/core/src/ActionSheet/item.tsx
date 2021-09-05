import React from 'react';
import { View, Dimensions, StyleSheet, Text,TouchableOpacity, GestureResponderEvent } from 'react-native';

let MainWidth = Dimensions.get('window').width;
export interface ActionSheetItemProps {
  onPress?: ((event: GestureResponderEvent) => void),
}

export interface ActionSheetItemState {

}

export default class ActionSheetItem extends React.Component<ActionSheetItemProps, ActionSheetItemState> {

  render() {
    const { onPress=()=>{}, children } = this.props
    return (
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <View style={styles.actionSheetItem} >
          <Text style={styles.actionSheetItemText}>{children}</Text>
        </View>
      </TouchableOpacity>
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
  }
});
