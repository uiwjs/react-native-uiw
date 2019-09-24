import React from 'react';
import { Text, View } from 'react-native';
import { Badge, List, Divider } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';

const { Header, Body, Card, Footer } = Layout;

export interface DividerViewProps extends ComProps { }

export default class DividerView extends React.Component<DividerViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="横向分割线">
              <Text>分割线</Text>
              <Divider label="OR" />
              <Text>分割线</Text>
              <Divider />
              <Text>分割线</Text>
            </Card>
            <Card title="纵向分割线">
              <View style={{ height: 200 }}>
                <Divider type="vertical" label="OR" />
              </View>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
