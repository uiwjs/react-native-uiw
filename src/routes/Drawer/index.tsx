import React, { useState, Fragment } from 'react';
import { View, Text, Alert, SafeAreaView } from 'react-native';
import Layout, { Container } from '../../Layout';
import { Modal, Button, Loader, Drawer, Icon, Spacing, WingBlank } from '../../../components';
import { ComProps } from '../../typings';
const { Header, Body, Card, Footer } = Layout;

export interface DrawerViewProps extends ComProps { }

export default function DrawerView({ navigation }: DrawerViewProps) {
  const description = navigation.getParam('description');
  const title = navigation.getParam('title');
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <Fragment>
     <Drawer
        isOpen={visible2}
        placement="right"
        onChange={(isOpen) => setVisible2(isOpen)}
      >
        <View>
          <Text>右边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Drawer
        isOpen={visible}
        onChange={(isOpen) => {
          setVisible(isOpen)
        }}
      >
        <View>
          <Text>左边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <WingBlank>
              <Button onPress={() => setVisible(!visible)}>左边打开抽屉</Button>
              <Spacing />
              <Button onPress={() => setVisible2(!visible2)}>右边打开抽屉</Button>
            </WingBlank>
          </Body>
          <Footer />
        </Layout>
      </Container>
    </Fragment>
  )
}
