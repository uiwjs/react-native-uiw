import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Layout, {Container} from '../../Layout';
import {Tooltip, Icon, Text} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Footer} = Layout;

export interface IndexProps extends ComProps {}
export interface IndexState {}

export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState;
  constructor(props: IndexProps) {
    super(props);
    this.state = {};
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
            <Header description={'基本使用'} />
            <View style={{paddingHorizontal: 16}}>
              <Tooltip title="@uiw/react-native">
                <Text numberOfLines={4} style={styles.textStyle}>
                  @uiw/react-native
                </Text>
              </Tooltip>
            </View>

            <Header description={'自定义背景色文本'} />
            <View style={{paddingHorizontal: 16}}>
              <Tooltip
                backgroundColor="black"
                width={30}
                height={30}
                title={
                  <View>
                    <Text style={{color: '#fff'}}>我是一个苹果</Text>
                    <Icon name="apple" color="#fff" />
                  </View>
                }>
                <Icon name="apple" color="red" />
              </Tooltip>
            </View>

            <Header description={'自定义文本'} />
            <View style={{paddingHorizontal: 16}}>
              <Tooltip
                width={'auto'}
                height={'auto'}
                backgroundColor="#222"
                title={<Text style={{fontSize: 16, color: '#eee'}}>Welcome to @uiw/react-native!</Text>}>
                <Text style={styles.textStyle}>A UI component library based on React Native (Android and iOS).</Text>
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
  textStyle: {
    fontSize: 14,
  },
});
