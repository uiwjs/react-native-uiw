import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Button, Spacing } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface ButtonViewProps extends ComProps {}

export default class ButtonView extends React.Component<ButtonViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card showTitle={false}>
              <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
                <Button>默认按钮</Button>
                <Button>默认按钮</Button>
                <Button>按钮</Button>
              </View>
              <Spacing />
              <Button>默认按钮</Button>
              <Spacing />
              <Button disabled>默认禁用按钮</Button>
              <Spacing />
              <Button type="primary">主要按钮</Button>
              <Spacing />
              <Button type="primary" disabled>主要禁用</Button>
              <Spacing />
              <Button type="warning">警告按钮</Button>
              <Spacing />
              <Button type="warning" disabled>警告禁用按钮</Button>
              <Spacing />
              <Button type="warning" loading>警告</Button>
              <Spacing />
              <Button type="warning" loading disabled>警告按钮</Button>
              <Spacing />
              <Button loading>默认按钮</Button>
            </Card>
            <Card title="自定义颜色">
              <Button loading disabled>默认按钮 禁用</Button>
              <Spacing />
              <Button color="#333">自定义颜色按钮</Button>
              <Spacing />
              <Button color="#393E48">自定义颜色按钮</Button>
              <Spacing />
              <Button color="#f6f8fa">自定义颜色按钮</Button>
              <Spacing />
              <Button color="#ffc107">自定义颜色按钮</Button>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
