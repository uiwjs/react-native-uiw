import React from 'react';
import { FlatList, FlatListProps, Text, StyleProp, ViewStyle, View } from 'react-native';
import Item, { ListItemProps } from './Item';

const noop = () => null;

/**
 * @see https://facebook.github.io/react-native/docs/flatlist.html#props
 */
export interface ListRenderItemInfoCustom<ItemT> {
  item: ItemT;
  index: number;
  separators?: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
}

export interface ListProps extends Omit<FlatListProps<{}>, 'renderItem'> {
  children?: React.ReactNode;
  renderItem?: (info: ListRenderItemInfoCustom<{}>) => React.ReactElement | null;
  /**
   * flat default: `true`
   * - flat = `true` => `FlatList`
   * - flat = `false` => `<View>` 上拉下拉刷新失效，是一个简单的 `List`
   */
  flat?: boolean;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 额外内容，展示右侧内容;
   */
  extra?: React.ReactNode;
  titleStyle?: StyleProp<ViewStyle>;
  paddingLeft?: ListItemProps['paddingLeft'];
  size?: ListItemProps['size'];
}

export interface ListState {
  data: ListProps['data'];
}

export default class List extends React.PureComponent<ListProps, ListState> {
  static Item = Item;
  static defaultProps: ListProps = {
    data: [],
    paddingLeft: 16,
    flat: true,
    size: 'default',
  };
  constructor(props: ListProps) {
    super(props);
    this.state = {
      data: [],
    };
  }
  static getDerivedStateFromProps(props: ListProps) {
    const getData = () => {
      const { size, extra, paddingLeft, children } = props;
      const dataSource = React.Children.toArray(children)
        .map((child: React.ReactNode) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          const props = { size, ...child.props };
          return React.cloneElement(<Item paddingLeft={paddingLeft} extra={extra} {...props} />);
        })
        .filter(Boolean);
      return dataSource;
    };
    if (!props.renderItem) {
      const result = getData();
      return {
        data: result,
      };
    }
    return null;
  }
  renderItemChild(props: ListRenderItemInfoCustom<{}>): React.ReactElement {
    return props.item as React.ReactElement;
  }
  render() {
    const {
      renderItem,
      data,
      children,
      titleStyle,
      paddingLeft,
      flat,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      size,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extra,
      ListHeaderComponent,
      title,
      ...otherProps
    } = this.props;
    const props = {} as ListProps & FlatListProps<{}>;
    if (!renderItem) {
      props.data = this.state.data;
      props.renderItem = this.renderItemChild.bind(this);
    } else if (typeof renderItem === 'function') {
      props.data = data;
      props.renderItem = (itemProps: ListRenderItemInfoCustom<{}>) => renderItem({ ...itemProps });
    }
    let header = ListHeaderComponent;
    if (title) {
      header = (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={[{ paddingLeft, paddingVertical: 12 }, titleStyle]}>
          {typeof title === 'string' ? (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{ color: '#808080' }}>{title}</Text>
          ) : (
            <View>{title}</View>
          )}
        </View>
      );
    }
    if (!props.renderItem) {
      props.renderItem = noop;
    }
    if (!flat) {
      return (
        <View {...otherProps}>
          {header}
          {((renderItem && (!data || data.length === 0)) ||
            (!renderItem && (!children || React.Children.toArray(children).length === 0))) &&
            otherProps.ListEmptyComponent}
          {(props.data || []).map((item, idx) =>
            React.cloneElement((props.renderItem && props.renderItem({ item, index: idx })) || <View />, { key: idx }),
          )}
        </View>
      );
    }
    return (
      <FlatList
        ListHeaderComponent={header}
        keyExtractor={(__, index) => index.toString()}
        {...otherProps}
        {...props}
      />
    );
  }
}
