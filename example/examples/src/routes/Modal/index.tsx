import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Modal, Button, Radio} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface ModalViewProps extends ComProps {}

export default class ModalView extends Component<ModalViewProps> {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible: boolean) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <Modal
                placement="right"
                // maskClosable={false}
                visible={this.state.modalVisible}
                onClosed={() => this.setState({modalVisible: false})}
                onRequestClose={() => {
                  // this.setState({modalVisible: false});
                  // Alert.alert('Modal has been closed.');
                }}>
                <SafeAreaView>
                  <View>
                    <Text>Hello World!</Text>
                    <Button
                      onPress={() =>
                        this.setModalVisible(!this.state.modalVisible)
                      }>
                      隐藏模态框
                    </Button>
                    <Text>Hello World!</Text>
                    <Button
                      onPress={() =>
                        this.setModalVisible(!this.state.modalVisible)
                      }>
                      隐藏模态框
                    </Button>
                    <Text>Hello World!</Text>
                    <Button
                      onPress={() =>
                        this.setModalVisible(!this.state.modalVisible)
                      }>
                      隐藏模态框
                    </Button>
                  </View>
                </SafeAreaView>
              </Modal>
              <Button onPress={() => this.setModalVisible(true)}>
                显示模态框
              </Button>
              <Radio>所有人可见</Radio>
              <Radio>超级管理员</Radio>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
