import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, ListRenderItemInfo } from 'react-native';
import Item, { ListItemProps } from './Item';

const noop = () => null;

export interface ListProps extends FlatListProps<{}> {
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 额外内容，展示右侧内容;
   */
  extra?: React.ReactNode;
  paddingLeft?: ListItemProps['paddingLeft'];
  size?: ListItemProps['size'],
}

export interface ListState {
  data: ListProps['data'];
}

export default class List extends Component<ListProps, ListState> {
  static Item = Item;
  static defaultProps: ListProps = {
    data: [],
    renderItem: noop,
    paddingLeft: 16,
    size: 'default',
  }
  constructor(props: ListProps) {
    super(props);
    this.state = {
      data: [],
    }
  }
  getData() {
    const { size, extra, paddingLeft, children } = this.props;
    const dataSource = React.Children.toArray(children).map((child: React.ReactNode, index: number) => {
      if (!React.isValidElement(child)) return null;
      const props = { size, ...child.props }
      return React.cloneElement(<Item paddingLeft={paddingLeft} extra={extra} {...props} />);
    }).filter(Boolean);
    this.setState({ data: dataSource as ListProps['data'] });
  }
  componentDidMount() {
    if (this.props.renderItem === noop) {
      this.getData();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: ListProps) {
    if (nextProps.data !== this.props.data && nextProps.renderItem === noop) {
      this.getData();
    }
  }
  renderItemChild(props: ListRenderItemInfo<{}>): React.ReactElement {
    return props.item as React.ReactElement;
  }
  render() {
    const { renderItem, data, children, paddingLeft, size, extra, ListHeaderComponent, title, ...otherProps} = this.props;
    const props = {} as ListProps;
    if (renderItem !== noop) {
      props.data = data;
      props.renderItem = (props) => <Item paddingLeft={paddingLeft} size={size} extra={extra}>{renderItem(props)}</Item>;
    } else {
      props.data = this.state.data;
      props.renderItem = this.renderItemChild.bind(this);
    }
    let header = ListHeaderComponent;
    if (title) {
      header = (
        <View style={[{ paddingLeft, paddingVertical: 12 }]}>
          {typeof title == 'string' ? <Text style={{ color: '#808080' }}>{title}</Text> : <View>{title}</View>}
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