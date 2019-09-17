import React from 'react';
import { View, Text, ScrollView, RefreshControl, SectionList } from 'react-native';
import { List } from '../../../components';
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
      <Container isScroll={false}>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <List>
              <List.Item>"X战警新变种人"首曝海报特写诡异人脸</List.Item>
              <List.Item style={{ paddingTop: 12 }}>六大变五大？传迪士尼600亿收购福斯</List.Item>
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
