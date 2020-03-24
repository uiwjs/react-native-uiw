import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout, { Container } from '../../Layout';
import { MenuDropdown } from '../../../components';
import { ComProps } from '../../typings';

const { Header, Body, Card, Footer } = Layout;

export interface MenuDropdownProps extends ComProps { }

export default class MenuDropdownView extends Component<MenuDropdownProps> {

  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例" style={styles.card} >
              <MenuDropdown title="菜单">
                <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
                <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
                <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
              </MenuDropdown>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  }
})