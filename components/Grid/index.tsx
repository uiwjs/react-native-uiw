import React, { Component } from 'react';
import { View, ViewProps, Text, Image, ImageProps, TextProps, StyleSheet } from 'react-native';
import Flex from '../Flex';

interface MaybeTextOrViewProps {
  children?: React.ReactNode;
}

function MaybeTextOrView({ children, ...otherProps }: MaybeTextOrViewProps & TextProps & ViewProps) {
  if (typeof children === 'string' || (children && (children as any).type.displayName === 'Text')) {
    return <Text {...otherProps}>{children}</Text>
  }
  return <View {...otherProps}>{children}</View>
}

const styles = StyleSheet.create({
  defalut: {
    backgroundColor: '#fff',
  },
});

interface ItemData {
  icon?: React.ReactNode;
  text?: React.ReactNode;
}

export interface GridProps extends ViewProps {
  data?: ItemData[],
  columns?: number;
  itemStyle?: ViewProps['style']
  iconStyle?: ImageProps['style']
  renderItem?: (data: ItemData, index: number, row: number) => React.ReactNode;
  onPress?: (data: ItemData, index: number, row: number) => void;
}

export default class Grid extends Component<GridProps> {
  static defaultProps: GridProps = {
    data: [],
  }
  render() {
    const { style, data, iconStyle, itemStyle, renderItem, columns = 4, ...otherProps } = this.props;
    if (!Array.isArray(data)) return null;
    const childs: React.ReactNode[][] = []
    let childItem: React.ReactNode[] = [];
    data.forEach((item, idx) => {
      if (idx !== 0 && (idx % (columns)) === 0) {
        childs.push(childItem);
        childItem = [];
      }
      let icon = null;
      if (React.isValidElement(item.icon)) {
        icon = item.icon;
      } else if (item.icon) {
        icon = (
          <Image
            style={[{ width: 36, height: 36 }, StyleSheet.flatten(iconStyle)]}
            source={{ uri: item.icon as string }}
          />
        );
      }
      if (renderItem && typeof renderItem === 'function') {
        childItem!.push(renderItem(item, idx, parseInt((idx / columns).toString(), 10) + 1));
      } else {
        childItem!.push(
          <Flex
            direction="column"
            align="center"
            justify="center"
            style={[{ height: 120 }, StyleSheet.flatten(itemStyle), { width: `${100 / columns}%` }]}
          >
            {icon && <MaybeTextOrView>{icon}</MaybeTextOrView>}
            <MaybeTextOrView style={{ marginTop: 9, fontSize: 12 }}>{item.text}</MaybeTextOrView>
          </Flex>
        );
      }
      if (idx === data.length - 1) {
        childs.push(childItem);
      }
    });
    return (
      <View style={[styles.defalut, style]} {...otherProps}>
        {childs.map((rowitem, rowidx) => (
          <Flex justify="between" key={rowidx}>
            {rowitem.map((item, idx) => {
              if (!React.isValidElement(item)) return null;
              return React.cloneElement(item as React.ReactElement, { key: idx });
            })}
          </Flex>
        ))}
      </View>
    );
  }
}
