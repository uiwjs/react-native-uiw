import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, ViewProps, View, ViewStyle, Dimensions } from 'react-native';

import Item from './TabsItem';

let MainWidth = Dimensions.get('window').width;

export interface TabsProps extends ViewProps {
  /** 子元素 */
  children?: JSX.Element | Array<JSX.Element>;
  /** 容器样式 */
  style?: ViewStyle;
  value?: number;
  onChange?: (value: number) => void;
  activeColor?: string;
}

function Tabs(props: TabsProps) {
  const { style, children, onChange, activeColor, value } = props;
  if (!children) {
    return null;
  }
  if (
    Array.isArray(children) &&
    children.find((item) => typeof item.type !== 'function' || !item.type.prototype.isclxItem)
  ) {
    console.error('Tags component child element must be TagsItem');
    throw new Error('Child elements of tabs components must be Tabs.Item');
  }
  if (
    (!Array.isArray(children) && typeof children.type !== 'function') ||
    ('type' in children && !children.type.prototype.isclxItem)
  ) {
    console.error('Tags component child element must be TagsItem');
    throw new Error('Child elements of tabs components must be Tabs.Item');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.TabsContainer, style]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {children &&
            React.Children.toArray(children).map((child, index) => {
              if (!React.isValidElement(child)) {
                return;
              }
              return React.cloneElement(child, {
                ...child.props,
                ...{ value: value, onChange: onChange, index: index, activeColor: activeColor },
              });
            })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  TabsContainer: {
    backgroundColor: '#fff',
    maxWidth: 1 * MainWidth,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
});

Tabs.Item = Item;
export default Tabs;
