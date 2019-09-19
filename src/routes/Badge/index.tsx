import React from 'react';
import { Text, View } from 'react-native';
import { Badge, List } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface TypographyViewProps extends ComProps { }

export default class TypographyView extends React.Component<TypographyViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <List>
              <List.Item onPress={() => navigation.goBack()}>这6种编码方法，你掌握了几个？</List.Item>
              <List.Item extra={<Badge text="450k" color="green" />}>Protobuf 生成 Go代码指南</List.Item>
              <List.Item extra={<Badge text="10" color="green" />}>Git 版本控制的核心概念</List.Item>
              <List.Item extra={<Badge text="450k" color="green" />}>HTTP Referer 和 Referrer Policy</List.Item>
              <List.Item extra={<Badge text="450k" color="yellow" />}>何解？浪费一年时间，我学了假人工智能</List.Item>
              <List.Item extra={<Badge text="450k" color="green" />}>
                <Text>超燃！高效 MacBook 工作环境配置，超实用</Text>
              </List.Item>
              <List.Item extra={<Badge text="标记" color="red" />}>
                <Text>一文带你搞懂 API 网关</Text>
              </List.Item>
            </List>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
