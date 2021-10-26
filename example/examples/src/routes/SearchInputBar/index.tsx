import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Layout, {Container} from '../../Layout';
import {SearchInputBar, Toast} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Footer} = Layout;

export interface IndexProps extends ComProps {}
export interface IndexState {
  value?: string;
  value2?: string;
  loading?: boolean;
}

export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState;
  ref = React.createRef<SearchInputBar>();
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      loading: false,
    };
  }
  onChangeText = (val: string, key: 'value' | 'value2') => {
    this.setState({[key]: val});
  };
  onClear = (key: 'value' | 'value2') => {
    this.setState({[key]: ''});
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container keyboardShouldPersistTaps="always">
        <Layout>
          <Header title={title} description={description} />
          <Body
            keyboardShouldPersistTaps="always"
            style={{paddingHorizontal: 10}}>
            <View style={styles.divider} />
            <SearchInputBar
              ref={this.ref}
              onChangeText={val => this.onChangeText(val, 'value')}
              onClear={() => this.onClear('value')}
              placeholder="请输入搜索关键字..."
              actionName="搜一下"
              value={this.state.value}
              touchProps={{
                onPress: () => {
                  console.log('object', this.ref);
                  this.setState({loading: true}, () => {
                    setTimeout(() => {
                      this.setState({loading: false});
                    }, 3000);
                  });
                },
              }}
              loading={this.state.loading}
            />
            <View style={{height: 100}} />
            <SearchInputBar
              onChangeText={val => this.onChangeText(val, 'value2')}
              onClear={() => this.onClear('value2')}
              value={this.state.value2}
              placeholder="请输入搜索关键字"
              searchRender={
                <View style={styles.search}>
                  <Text>搜索</Text>
                </View>
              }
              showActionButton
              touchProps={{
                onPress() {
                  Toast.info('你点击了搜一下', 2, 'info');
                },
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
  search: {
    justifyContent: 'center',
    borderWidth: 0,
    paddingLeft: 10,
  },
});
