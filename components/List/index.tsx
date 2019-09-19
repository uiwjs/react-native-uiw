import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, ListRenderItemInfo } from 'react-native';
import Item from './Item';

const noop = () => null;

export interface ListProps extends FlatListProps<{}> {
  paddingLeft?: number;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 额外内容，展示右侧内容;
   */
  extra?: React.ReactNode;
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
    const { renderItem, data, children, paddingLeft, ListHeaderComponent, title, ...otherProps} = this.props;
    const props = {} as ListProps;
    if (renderItem !== noop) {
      props.data = data;
      props.renderItem = (props) => <Item paddingLeft={paddingLeft}>{renderItem(props)}</Item>;
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