import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Layout, {Container} from '../../Layout';
import {ImageViewer} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface IndexProps extends ComProps {}

export default class Index extends Component<IndexProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body style={{backgroundColor: '#fff'}}>
            <Card title="基础使用">
              <ImageViewer />
            </Card>
            <Card title="自定义图片">
              <ImageViewer
                height={100}
                width={100}
                src="https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg"
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
