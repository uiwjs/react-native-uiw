import React, { Component } from 'react';
import { View } from 'react-native';
import Layout, { Container } from '../../Layout';
import { ButtonGroup, Button, Loader, List, Icon, Spacing } from '../../../components';
import { ComProps } from '../../typings';
const { Header, Body, Card, Footer } = Layout;

export interface ButtonGroupViewProps extends ComProps { }

export default class ButtonGroupView extends Component<ButtonGroupViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <Loader rounded={5}>
                <ButtonGroup>
                  <Button type="warning">警告</Button>
                  <Button type="warning">警告</Button>
                  <Button type="warning">主要</Button>
                  <Button type="warning">警告</Button>
                </ButtonGroup>
              </Loader>
              <Spacing />
              <Loader rounded={5} tip="加载中...">
                <List extra={<Icon name="left" fill="#abb0b5" size={14} />} title="新闻列表">
                  <List.Item onPress={() => navigation.goBack()}>这6种编码方法，你掌握了几个？</List.Item>
                  <List.Item>Git 版本控制的核心概念</List.Item>
                  <List.Item>HTTP Referer 和 Referrer Policy</List.Item>
                </List>
              </Loader>
              <Spacing />
              <Loader vertical rounded={5} tip="加载中...">
                <List extra={<Icon name="left" fill="#abb0b5" size={14} />}>
                  <List.Item onPress={() => navigation.goBack()}>这6种编码方法，你掌握了几个？</List.Item>
                  <List.Item>Protobuf 生成 Go代码指南</List.Item>
                  <List.Item>何解？浪费一年时间，我学了假人工智能</List.Item>
                </List>
              </Loader>
            </Card>
            <Card title="设置颜色 color?: string">
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Loader color="blue">
                  <Button>默认按钮</Button>
                </Loader>
                <Loader color="red">
                  <Button>默认按钮</Button>
                </Loader>
                <Loader color="red">
                  <Button>默认按钮</Button>
                </Loader>
              </View>
            </Card>
            <Card title="设置颜色 loading?: boolean">
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Loader color="red" loading={false}>
                  <Button>默认按钮</Button>
                </Loader>
              </View>
            </Card>
            <Card title="设置遮罩层颜色 maskColor?: string">
              <Loader maskColor="#00000082" color="#fff" tip="加载中...">
                <ButtonGroup>
                  <Button type="warning">默认按钮</Button>
                  <Button type="warning">默认按钮</Button>
                </ButtonGroup>
              </Loader>
            </Card>
            <Card title="设置颜色 loading?: boolean">
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Loader maskColor="#00000082" rounded={5} color="#fff" loading={true}>
                  <Button>默认按钮</Button>
                </Loader>
              </View>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}