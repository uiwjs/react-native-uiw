import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Toast, Button} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface ToastProps extends ComProps {}

export default class ToastView extends Component<ToastProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="说明提示" style={styles.card}>
              <Button
                onPress={() => {
                  Toast.info('说明提示');
                }}>
                点击显示
              </Button>
            </Card>
            <Card title="成功提示" style={styles.card}>
              <Button
                onPress={() => {
                  Toast.success('成功提示');
                }}>
                点击显示
              </Button>
            </Card>
            <Card title="错误提示" style={styles.card}>
              <Button
                onPress={() => {
                  Toast.error('错误提示');
                }}>
                点击显示
              </Button>
            </Card>
            <Card title="警告提示" style={styles.card}>
              <Button
                onPress={() => {
                  Toast.warning('警告提示');
                }}>
                点击显示
              </Button>
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
  },
});
