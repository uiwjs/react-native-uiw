import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, MaskLayer} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface MenuDropdownProps extends ComProps {}

export default function MenuDropdownView(props: MenuDropdownProps) {
  const {route} = props || {};
  const description = route.params.description;
  const title = route.params.title;
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      <Layout>
        <Header title={title} description={description} />
        <Body>
          <Card title="基础实例" style={styles.card}>
            <MaskLayer
              visible={visible}
              onDismiss={() => {
                setVisible(false);
              }}>
              <View style={styles.top}>
                <Button
                  type="danger"
                  onPress={() => {
                    setVisible(false);
                  }}>
                  <Text style={styles.color}>隐藏</Text>
                </Button>
                <Text style={styles.color}>内容</Text>
              </View>
            </MaskLayer>
            <Button
              onPress={() => {
                setVisible(true);
              }}>
              {String(true)}
              显示模态框
            </Button>
            <Button
              onPress={() => {
                setVisible(false);
              }}>
              {String(false)}
              隐藏模态框
            </Button>
          </Card>
        </Body>
        <Footer />
      </Layout>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  color: {
    color: '#fff',
  },
  top: {
    top: 100,
  },
});
