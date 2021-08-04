import React from 'react';
import {Text, View} from 'react-native';
import {Divider} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

export interface DividerViewProps extends ComProps {}

export default class DividerView extends React.Component<DividerViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="横向分割线">
              <Text>分割线</Text>
              <Divider label="OR" />
              <Text>分割线</Text>
              <Divider label="暂无数据" />
              <Text>分割线</Text>
              <Divider />
              <Text>分割线</Text>
            </Card>
            <Card title="纵向分割线">
              <View style={{height: 200}}>
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
