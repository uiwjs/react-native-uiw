import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Toast} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface InputProps extends ComProps {}

export default class InputView extends Component<InputProps> {
  state = {
    value: '',
    value2: '',
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例" style={styles.card}>
              <Input
                style={styles.input}
                placeholder="请输入"
                disabled={true}
                onChangeText={(value: string) => {
                  this.setState({value});
                }}
                value={this.state.value}
              />
            </Card>
            <Card title="默认聚焦" style={styles.card}>
              <Input style={styles.input} autoFocus />
            </Card>
            <Card title="额外的内容" style={styles.card}>
              <Input
                style={styles.input}
                extraStart="https://"
                extraEnd=".com"
              />
            </Card>
            <Card title="报错" style={styles.card}>
              <Input style={styles.input} error />
            </Card>
            <Card title="数字键盘" style={styles.card}>
              <Input style={styles.input} keyboardType="numeric" />
            </Card>
            <Card title="校验" style={styles.card}>
              <Input
                style={styles.input}
                rule={/\d/}
                wrongfulHandle={() => Toast.info('内容不合法', 2, 'info')}
              />
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
  input: {
    // backgroundColor: '#ccc'
  },
});
