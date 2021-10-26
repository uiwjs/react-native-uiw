import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Layout, {Container} from '../../Layout';
import {Pagination} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface IndexProps extends ComProps {}
export interface IndexState {
  current: number;
  current1: number;
}

export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState;
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      current: 1,
      current1: 1,
    };
  }

  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body style={{backgroundColor: '#fff'}}>
            <Card title="使用文字">
              <View style={{paddingHorizontal: 20}}>
                <Pagination
                  current={this.state.current}
                  total={60}
                  pageSize={8}
                  onPageChange={(type, current) => {
                    this.setState({current});
                  }}
                />
              </View>
            </Card>
            <Card title="使用icon">
              <View style={{paddingHorizontal: 20}}>
                <Pagination
                  icon
                  borderColor="red"
                  color="red"
                  current={this.state.current1}
                  total={50}
                  pageSize={20}
                  onPageChange={(type, current1) => {
                    this.setState({current1});
                  }}
                />
              </View>
            </Card>
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
