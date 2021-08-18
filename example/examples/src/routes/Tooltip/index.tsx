import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout, { Container } from '../../Layout';
import { Tooltip, Icon } from '@uiw/react-native';
import { ComProps } from '../../routes';


const { Header, Body, Card, Footer } = Layout;

export interface IndexProps extends ComProps { }
export interface IndexState {

}

export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState
  constructor(props: IndexProps) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <View style={styles.divider} />
            <View style={{ paddingHorizontal: 20, }}>
              <Tooltip
                backgroundColor="pink"
                width={30}
                height={30}
                title={<View>
                  <Text>我是一个苹果</Text>
                  <Icon name='apple' color="#fff" />
                </View>}
              >
                <Icon name='apple' color="red" />
              </Tooltip>
            </View>
            <View style={{ left: 200 }}>

              <Tooltip title='我是一个文本'>
                <Text style={styles.textStyle}>我是一个文本</Text>
              </Tooltip>
            </View>

            <View style={{ top: 200, paddingHorizontal: 20, }}>

              <Tooltip
                width={'auto'}
                height={'auto'}
                backgroundColor="#222"
                title={<Text style={{ fontSize: 16, color: '#eee' }}>猩猩偷猴子的香蕉时被发现了，猴子们在后面穷追不舍。兔子问猩猩：“他们是谁？为什么追你？”猩猩头也没回喊道：“追猩族。”</Text>}>
                <Text style={styles.textStyle}>法海与白素贞斗法，趁白素贞不备，一口咬住白素贞，却七窍流血而死。白素贞冷冷的说：现在知道什么叫咬蛇自尽了吧。</Text>
              </Tooltip>
            </View>


            <View style={{ marginTop: 1000 }}>

              <Tooltip title='我是一个文本'>
                <Text style={styles.textStyle}>我是一个文本</Text>
              </Tooltip>
            </View>

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
    marginVertical: 10
  },
  textStyle: {
    color: "#000",
    fontSize: 16,
  },

});

