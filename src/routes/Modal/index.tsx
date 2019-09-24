import React, { Component } from 'react';
import { View, Text, Alert, SafeAreaView } from 'react-native';
import Layout, { Container } from '../../Layout';
import { Modal, Button, Loader, List, Icon, Spacing } from '../../../components';
import { ComProps } from '../../typings';
const { Header, Body, Card, Footer } = Layout;

export interface ModalViewProps extends ComProps { }

export default class ModalView extends Component<ModalViewProps> {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                presentationStyle="pageSheet"
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <SafeAreaView>
                  <View>
                    <Text>Hello World!</Text>
                    <Button onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                      隐藏模态框
                    </Button>
                    <Icon name="apple" />
                  </View>
                </SafeAreaView>
              </Modal>
              <Button onPress={() => this.setModalVisible(true)}>
                显示模态框
              </Button>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}