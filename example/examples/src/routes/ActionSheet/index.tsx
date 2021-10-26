import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Layout, {Container} from '../../Layout';
import {ActionSheet, Button, ActionSheetItem, Toast} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface IndexProps extends ComProps {}
export interface IndexState {
  visible: boolean;
}

export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState;
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  onOpen = () => {
    this.setState({visible: true});
  };
  onCancel = () => {
    this.setState({visible: false});
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
            <View style={styles.divider} />
            <Button onPress={this.onOpen}>打开 ActionSheet</Button>
            <ActionSheet
              visible={this.state.visible}
              maskClosable={true}
              dividerStyle={{
                itemDivider: {height: 2},
              }}>
              <ActionSheetItem
                onPress={() => {
                  Toast.info('你点击了按钮一', 2, 'info');
                }}>
                按钮一
              </ActionSheetItem>
              <ActionSheetItem
                onPress={() => Toast.info('你点击了按钮二', 2, 'info')}>
                按钮二
              </ActionSheetItem>
              <ActionSheetItem onPress={this.onCancel}>关闭</ActionSheetItem>
            </ActionSheet>
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
  divider: {
    marginVertical: 10,
  },
});
