import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout, { Container } from '../../Layout';
import { Toast, Button } from '../../../components';
import { ComProps } from '../../typings';

const { Header, Body, Card, Footer } = Layout;

export interface ToastProps extends ComProps { }

export default class ToastView extends Component<ToastProps> {

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
              <Button onPress={() => { Toast.info('信息') }}>点击显示</Button>
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