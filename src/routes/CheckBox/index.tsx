import React from 'react';
import { Text, View } from 'react-native';
import { Badge, List, CheckBox } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface BadgeViewProps extends ComProps { }

export default class BadgeView extends React.Component<BadgeViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <List size="large" flat={false}>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox checked={true} style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认点击选中</CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认未选中</CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox disabled style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认禁用未选中</CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox checked={true} disabled style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认禁用选中</CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认未选中</CheckBox>
              </List.Item>
              <List.Item style={{ paddingVertical: 0 }}>
                <CheckBox style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认未选中</CheckBox>
              </List.Item>
            </List>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
