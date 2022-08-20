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
            <Card title="横向分割线" style={{backgroundColor: '#ffffff'}}>
              <Text>分割线</Text>
              <Divider label="OR" />
              <Text>分割线</Text>
              <Divider label="暂无数据" />
              <Text>分割线</Text>
              <Divider label="调整间隔" gutter={30} />
              <Text>分割线</Text>
            </Card>

            <Card title="分割线标题位置" style={{backgroundColor: '#ffffff'}}>
              <Text>分割线</Text>
              <Divider label="left" orientation="left" labelStyle={{fontWeight: 'bold'}} />
              <Text>分割线</Text>
              <Divider label="center" labelStyle={{fontWeight: 'bold'}} />
              <Text>分割线</Text>
              <Divider label="right" orientation="right" labelStyle={{fontWeight: 'bold'}} />
            </Card>

            <Card title="纵向分割线" style={{backgroundColor: '#ffffff'}}>
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
