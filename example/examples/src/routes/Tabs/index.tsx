import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Layout, {Container} from '../../Layout';
import {Tabs, Icon, IconsName} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface listItem {
  title: string | React.ReactElement | React.ReactNode;
  icon: IconsName | React.ReactElement | React.ReactNode;
}
export interface IndexProps extends ComProps {}
export interface IndexState {
  flag1: string;
  flag: string;
  color1: string;
}

export default class Index extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      flag: '喜欢',
      flag1: '喜欢',
      color1: '#f18700',
    };
  }
  onPress1 = (val: string) => {
    this.setState({flag: val});
  };
  onPress = (val: string) => {
    this.setState({flag1: val});
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const {Item} = Tabs;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Tabs>
              <Item
                title={'喜欢'}
                icon="heart-on"
                style={{
                  iconColor:
                    this.state.flag === '喜欢' ? this.state.color1 : undefined,
                  titleColor:
                    this.state.flag === '喜欢' ? this.state.color1 : undefined,
                }}
                border={this.state.flag === '喜欢'}
                onPress={this.onPress1}
              />
              <Tabs.Item
                title={'关注'}
                style={{
                  titleColor:
                    this.state.flag === '关注' ? this.state.color1 : undefined,
                }}
                icon={
                  <Icon
                    name="star-on"
                    color={
                      this.state.flag === '关注' ? this.state.color1 : '#fff'
                    }
                    size={24}
                  />
                }
                border={this.state.flag === '关注'}
                onPress={this.onPress1}
              />
              <Tabs.Item
                title={'信息'}
                icon="mail"
                style={{
                  iconColor:
                    this.state.flag === '信息' ? this.state.color1 : undefined,
                  titleColor:
                    this.state.flag === '信息' ? this.state.color1 : undefined,
                }}
                border={this.state.flag === '信息'}
                onPress={this.onPress1}
              />
            </Tabs>

            <View style={styles.divider} />

            <Tabs>
              <Tabs.Item
                title={'喜欢'}
                border={this.state.flag1 === '喜欢'}
                onPress={this.onPress}
                style={{
                  titleColor:
                    this.state.flag1 === '喜欢' ? this.state.color1 : undefined,
                  borderColor:
                    this.state.flag1 === '喜欢' ? this.state.color1 : undefined,
                }}
              />
              <Tabs.Item
                title={'关注'}
                border={this.state.flag1 === '关注'}
                onPress={this.onPress}
                style={{
                  titleColor:
                    this.state.flag1 === '关注' ? this.state.color1 : undefined,
                  borderColor:
                    this.state.flag1 === '关注' ? this.state.color1 : undefined,
                }}
              />
              <Tabs.Item
                title={'信息'}
                border={this.state.flag1 === '信息'}
                onPress={this.onPress}
                style={{
                  titleColor:
                    this.state.flag1 === '信息' ? this.state.color1 : undefined,
                  borderColor:
                    this.state.flag1 === '信息' ? this.state.color1 : undefined,
                }}
              />
              <Tabs.Item
                title={'我的'}
                border={this.state.flag1 === '我的'}
                onPress={this.onPress}
                style={{
                  titleColor:
                    this.state.flag1 === '我的' ? this.state.color1 : undefined,
                  borderColor:
                    this.state.flag1 === '我的' ? this.state.color1 : undefined,
                }}
              />
              <Tabs.Item
                title={'偏好'}
                border={this.state.flag1 === '偏好'}
                onPress={this.onPress}
                style={{
                  titleColor:
                    this.state.flag1 === '偏好' ? this.state.color1 : undefined,
                  borderColor:
                    this.state.flag1 === '偏好' ? this.state.color1 : undefined,
                }}
              />
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
