import React, {useState, Fragment} from 'react';
import {View, Text} from 'react-native';
import {Button, Drawer, Spacing, WingBlank} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';
const {Header, Body, Footer} = Layout;

export interface DrawerViewProps extends ComProps {}

export default function DrawerView({route}: DrawerViewProps) {
  const description = route.params.description;
  const title = route.params.title;
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  return (
    <Fragment>
      <Drawer isOpen={visible2} placement="right" onChange={(isOpen: boolean) => setVisible2(isOpen)} drawerBackgroundColor="red">
        <View>
          <Text style={{color: '#ccc'}}>右边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Drawer
        isOpen={visible}
        onChange={(isOpen: boolean) => {
          setVisible(isOpen);
        }}>
        <View>
          <Text style={{color: '#ccc'}}>左边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Drawer
        isOpen={visible3}
        placement="top"
        onChange={(isOpen: boolean) => {
          setVisible3(isOpen);
        }}>
        <View>
          <Text style={{color: '#ccc'}}>上边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Drawer
        isOpen={visible4}
        placement="bottom"
        onChange={isOpen => {
          setVisible4(isOpen);
        }}>
        <View>
          <Text style={{color: '#ccc'}}>下边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body style={{paddingLeft: 16, paddingRight: 16}}>
            <WingBlank>
              <Button onPress={() => setVisible(!visible)}>左边打开抽屉</Button>
              <Spacing />
              <Button onPress={() => setVisible2(!visible2)}>右边打开抽屉(自定义颜色)</Button>
              <Spacing />
              <Button onPress={() => setVisible3(!visible3)}>上边打开抽屉</Button>
              <Spacing />
              <Button onPress={() => setVisible4(!visible4)}>下边打开抽屉</Button>
            </WingBlank>
          </Body>
          <Footer />
        </Layout>
      </Container>
    </Fragment>
  );
}
