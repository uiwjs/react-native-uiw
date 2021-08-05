import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {List, Icon, Badge} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Footer} = Layout;

export interface ListViewProps extends ComProps {}

export default class ListView extends React.Component<ListViewProps> {
  render() {
    const {route, navigation} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <List flat={false} extra="test">
              <List.Item
                extra={<Icon name="right" fill="#abb0b5" size={14} />}
                onPress={() => navigation.goBack()}>
                这6种编码方法，你掌握了几个？
              </List.Item>
              <List.Item extra={<Icon name="apple" size={14} />}>
                Protobuf 生成 Go代码指南
              </List.Item>
              <List.Item extra="说明">Git 版本控制的核心概念</List.Item>
              <List.Item extra={<Icon name="right" fill="#abb0b5" size={14} />}>
                HTTP Referer 和 Referrer Policy
              </List.Item>
              <List.Item>
                <Icon name="apple" size={14} />
                <View>
                  <Text>因为爱过，所以慈悲；因为懂得，所以宽容。</Text>
                </View>
              </List.Item>
            </List>
            <List
              flat={false}
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              title="展示箭头">
              <List.Item onPress={() => navigation.goBack()}>
                这6种编码方法，你掌握了几个？
              </List.Item>
              <List.Item onPress={() => navigation.goBack()}>
                Protobuf 生成 Go代码指南
              </List.Item>
            </List>
            <List
              flat={false}
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              title="单元格大小">
              <List.Item size="small" onPress={() => navigation.goBack()}>
                尺寸大小设置
              </List.Item>
              <List.Item size="default" onPress={() => navigation.goBack()}>
                Protobuf 生成 Go代码指南
              </List.Item>
              <List.Item size="large" onPress={() => navigation.goBack()}>
                Protobuf 生成 Go代码指南
              </List.Item>
            </List>
            <List
              flat={false}
              size="small"
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              title="单元格大小">
              <List.Item onPress={() => navigation.goBack()}>
                尺寸大小设置
              </List.Item>
              <List.Item onPress={() => navigation.goBack()}>
                Protobuf 生成 Go代码指南
              </List.Item>
              <List.Item size="large" onPress={() => navigation.goBack()}>
                Protobuf 生成 Go代码指南
              </List.Item>
            </List>
            <List flat={false} title="单元格大小">
              <List.Item
                extra={<Icon name="right" fill="#abb0b5" size={14} />}
                onPress={() => navigation.goBack()}>
                <Text>单元格</Text>
                <Badge text="450k" color="green" />
              </List.Item>
              <List.Item
                size="small"
                extra={
                  <Fragment>
                    <Badge text="450k" color="green" />
                    <Icon name="right" fill="#abb0b5" size={14} />
                  </Fragment>
                }
                onPress={() => navigation.goBack()}>
                <Icon
                  size={14}
                  name="shopping-cart"
                  fill="#008EF0"
                  style={{marginRight: 5}}
                />
                <Text>单元格</Text>
              </List.Item>
              <List.Item
                onPress={() => navigation.goBack()}
                extra={
                  <Fragment>
                    <Icon name="search" fill="#abb0b5" size={14} />
                  </Fragment>
                }>
                <Icon
                  size={14}
                  name="shopping-cart"
                  fill="#008EF0"
                  style={{marginRight: 5}}
                />
                <Text>单元格</Text>
              </List.Item>
            </List>
            <List
              flat={false}
              paddingLeft={100}
              title="设置左边补白"
              extra="test">
              <List.Item
                extra={<Icon name="right" fill="#abb0b5" size={14} />}
                onPress={() => navigation.goBack()}>
                这6种编码方法，你掌握了几个？
              </List.Item>
              <List.Item extra={<Icon name="apple" size={14} />}>
                Protobuf 生成 Go代码指南
              </List.Item>
              <List.Item extra="说明">Git 版本控制的核心概念</List.Item>
            </List>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
