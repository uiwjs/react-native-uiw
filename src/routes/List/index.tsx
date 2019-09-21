import React from 'react';
import { View, Text } from 'react-native';
import { List, Icon } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface ListViewProps extends ComProps { }

export default class ListView extends React.Component<ListViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <List extra="test">
              <List.Item extra={<Icon name="left" fill="#abb0b5" size={14} />} onPress={() => navigation.goBack()}>这6种编码方法，你掌握了几个？</List.Item>
              <List.Item extra={<Icon name="apple" size={14} />}>Protobuf 生成 Go代码指南</List.Item>
              <List.Item extra="说明">Git 版本控制的核心概念</List.Item>
              <List.Item extra={<Icon name="left" fill="#abb0b5" size={14} />}>HTTP Referer 和 Referrer Policy</List.Item>
              <List.Item>何解？浪费一年时间，我学了假人工智能</List.Item>
              <List.Item>超燃！高效 MacBook 工作环境配置，超实用</List.Item>
              <List.Item>一文带你搞懂 API 网关</List.Item>
              <List.Item>
                <Icon name="apple" size={14} />
                <View>
                  <Text>因为爱过，所以慈悲；因为懂得，所以宽容。</Text>
                </View>
              </List.Item>
            </List>
            <List extra={<Icon name="left" fill="#abb0b5" size={14} />} title="新闻列表">
              <List.Item onPress={() => navigation.goBack()}>这6种编码方法，你掌握了几个？</List.Item>
              <List.Item>Protobuf 生成 Go代码指南</List.Item>
              <List.Item>Git 版本控制的核心概念</List.Item>
              <List.Item>HTTP Referer 和 Referrer Policy</List.Item>
              <List.Item>何解？浪费一年时间，我学了假人工智能</List.Item>
              <List.Item>超燃！高效 MacBook 工作环境配置，超实用</List.Item>
              <List.Item>一文带你搞懂 API 网关</List.Item>
              <List.Item>深入理解计算机系统：进程</List.Item>
              <List.Item>用 JS 写游戏自动脚本是什么体验？</List.Item>
              <List.Item>[译] 那些程序员小白还没掌握的 30 件事</List.Item>
              <List.Item>破除职场迷茫，做好这件事就够了</List.Item>
              <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
              <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>
              <List.Item>
                <View>
                  <Text>因为爱过，所以慈悲；因为懂得，所以宽容。</Text>
                </View>
              </List.Item>
            </List>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
