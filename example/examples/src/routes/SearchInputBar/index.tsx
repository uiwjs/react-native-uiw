import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import Layout, { Container } from '../../Layout';
import { SearchInputBar, Toast } from '@uiw/react-native';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;

export interface IndexProps extends ComProps { }
export interface IndexState {
  value?: string;
  value2?: string;
}


export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState;
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      value: '',
      value2: ''
    };
  }
  onChangeText = (val: string, key: 'value' | 'value2') => {
    this.setState({ [key]: val })
  }
  onClear = (key: 'value' | 'value2') => {
    this.setState({ [key]: '' })
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
            <SearchInputBar
              onChangeText={(val) => this.onChangeText(val, 'value')}
              onClear={()=>this.onClear('value')}
              value={this.state.value}
              button={{
                onPress() {
                  Toast.info('你点击了搜索', 2, 'info')
                }
              }}
            />
            <View style={{ height: 100 }} />
            <SearchInputBar
              onChangeText={(val)=>this.onChangeText(val,'value2')}
              onClear={()=>this.onClear('value2')}
              value={this.state.value2}
              placeholder="请输入搜索关键字"
              actionName=" 搜一下"
              showActionButton
              buttonWidth={120}
              button={{
                onPress() {
                  Toast.info('你点击了搜一下', 2, 'info')
                }
              }}
            />
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
