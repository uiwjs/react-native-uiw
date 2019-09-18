import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, ListRenderItemInfo } from 'react-native';
import Item, { ListItemProps } from './Item';

const noop = () => null;

export interface ListState {
  data: ListProps['data'];
}

export interface ListProps extends FlatListProps<{}> {
  paddingLeft?: number;
}

export default class List extends Component<ListProps, ListState> {
  static Item = Item;
  static defaultProps: ListProps = {
    data: [],
    renderItem: noop,
  }
  constructor(props: ListProps) {
    super(props);
    this.state = {
      data: [],
    }
  }
  getData() {
    const dataSource = React.Children.map(this.props.children, (child: React.ReactNode, index: number) => {
      if (!React.isValidElement(child)) return null;
      return React.cloneElement(<Item paddingLeft={this.props.paddingLeft} {...child.props} />);
    }).filter(Boolean);
    this.setState({ data: dataSource as ListProps['data'] });
  }
  componentDidMount() {
    this.getData();
  }
  renderItemChild(props: ListRenderItemInfo<{}>): React.ReactElement {
    return props.item as React.ReactElement;
  }
  render() {
    const { renderItem, data, children, paddingLeft, ...otherProps} = this.props;
    const props = {} as ListProps;
    if (renderItem !== noop) {
      props.data = data;
      props.renderItem = (props) => <Item paddingLeft={paddingLeft}>{renderItem(props)}</Item>;
    } else {
      props.data = this.state.data;
      props.renderItem = this.renderItemChild.bind(this);
    }
    return (
      <FlatList
        keyExtractor={(__, index) => index.toString()}
        {...otherProps}
        {...props}
      />
    );
  }
}