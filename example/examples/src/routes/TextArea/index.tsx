import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {TextArea} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface TextAreaProps extends ComProps {}

export default class TextAreaView extends Component<TextAreaProps> {
  state = {
    value: '',
    value1: '只读状态不可输入',
    value3: '自定义输入框样式',
    value4: '',
    value5: '',
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
              <TextArea
                onChange={(value: string) => {
                  this.setState({value});
                }}
                value={this.state.value}
                placeholder="默认提示语"
              />
            </Card>
            <Card title="根据内容自动调整高度" style={styles.card}>
              <TextArea
                onChange={(value5: string) => {
                  this.setState({value5});
                }}
                value={this.state.value5}
                placeholder="默认提示语"
                autoSize
              />
            </Card>
            <Card title="展示字数" style={styles.card}>
              <TextArea
                onChange={(value4: string) => {
                  this.setState({value4});
                }}
                value={this.state.value4}
                showWords={true}
                placeholder="默认展示字数"
              />
            </Card>
            <Card title="只读状态" style={styles.card}>
              <TextArea
                editable={false}
                onChange={(value1: string) => {
                  this.setState({value1});
                }}
                value={this.state.value1}
              />
            </Card>
            <Card title="自定义输入框样式" style={styles.card}>
              <TextArea
                height={150}
                style={{
                  borderColor: 'blue',
                  borderWidth: 2,
                }}
                fontStyle={{
                  fontSize: 20,
                  color: 'blue',
                }}
                showWords={true}
                onChange={(value3: string) => {
                  this.setState({value3});
                }}
                value={this.state.value3}
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
  },
});
