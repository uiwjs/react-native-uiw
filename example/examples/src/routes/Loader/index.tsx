import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Layout, {Container} from '../../Layout';
import {ButtonGroup, Button, Loader, Spacing} from '@uiw/react-native';
import {ComProps} from '../../routes';
const {Header, Body, Card, Footer} = Layout;

export interface LoaderViewProps extends ComProps {}

export default class LoaderView extends Component<LoaderViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例" bodyStyle={{minHeight: 60}}>
              <Loader rounded={5} tip="加载中..." />
            </Card>
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
                <View style={{height: 100}}>
                  <Text>测试</Text>
                </View>
              </Loader>
              <Spacing />
              <Loader vertical rounded={5} tip="加载中...">
                <View style={{height: 100}}>
                  <Text>测试</Text>
                </View>
              </Loader>
            </Card>
            <Card title="设置颜色 color?: string">
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                }}>
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
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                }}>
                <Loader color="red" loading={false}>
                  <Button>默认按钮 loading=false</Button>
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
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                }}>
                <Loader
                  maskColor="#00000082"
                  rounded={5}
                  color="#fff"
                  loading={true}>
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
