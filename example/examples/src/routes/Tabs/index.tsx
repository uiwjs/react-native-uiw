import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Layout, {Container} from '../../Layout';
import {Tabs, IconsName, Text} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Footer} = Layout;

export interface listItem {
  title: string | React.ReactElement | React.ReactNode;
  icon: IconsName | React.ReactElement | React.ReactNode;
}
export interface IndexProps extends ComProps {}
export interface IndexState {
  flag1: number;
  flag: number;
  color1: string;
}

export default class Index extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      flag: 2,
      flag1: 1,
      color1: '#f18700',
    };
  }
  onPress1 = (val: number) => {
    this.setState({flag: val});
  };
  onPress = (val: number) => {
    this.setState({flag1: val});
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;

    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body style={{paddingLeft: 16, paddingRight: 16}}>
            <Tabs value={this.state.flag} onChange={value => this.setState({flag: value})}>
              <Tabs.Item title="喜欢">
                <View>
                  <Text color="text">喜欢</Text>
                </View>
              </Tabs.Item>
              <Tabs.Item title="关注">
                <View>
                  <Text color="text">关注</Text>
                </View>
              </Tabs.Item>
              <Tabs.Item title="兴趣">
                <View>
                  <Text color="text">兴趣</Text>
                </View>
              </Tabs.Item>
              <Tabs.Item title="爱好">
                <View>
                  <Text color="text">爱好</Text>
                </View>
              </Tabs.Item>
              <Tabs.Item title="gitlabl">
                <View>
                  <Text color="text">gitlabl</Text>
                </View>
              </Tabs.Item>
              <Tabs.Item title="github">
                <View>
                  <Text color="text">github</Text>
                </View>
              </Tabs.Item>
            </Tabs>

            <View style={styles.divider} />

            <Tabs value={this.state.flag1} onChange={value => this.setState({flag1: value})} activeColor={this.state.color1}>
              <Tabs.Item title={'喜欢'} icon="heart-on" />
              <Tabs.Item title={'关注'} icon="heart-on" />
              <Tabs.Item title={'信息'} icon="mail" />
            </Tabs>
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
