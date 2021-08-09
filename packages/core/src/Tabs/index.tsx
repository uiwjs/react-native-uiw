import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ViewStyle,
  View,
  Dimensions
} from 'react-native';
import Item from './TabsItem';
let MainWidth = Dimensions.get('window').width;

export interface TabsProps {
  /** 子元素 */
  children?: JSX.Element | Array<JSX.Element>,
  /** 容器样式 */
  style?: ViewStyle
}

function Tabs(props: TabsProps) {
  const { children } = props
  if (!children) {
    return null;
  }
  if (Array.isArray(children) && children.find((item) => !item.type.prototype.isclxItem)) {
    console.error('Tags component child element must be TagsItem');
    throw new Error('Child elements of tabs components must be Tabs.Item')
  }
  if (!Array.isArray(children) && typeof children.type !== 'function') {
    console.error('Tags component child element must be TagsItem');
    throw new Error('Child elements of tabs components must be Tabs.Item')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={[styles.TabsContainer, { ...props.style, }]}>
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  TabsContainer: {
    backgroundColor: '#3e8ad5',
    minWidth: 1 * MainWidth,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
});


Tabs.Item = Item
export default Tabs