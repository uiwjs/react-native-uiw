import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SwipeAction} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface SwipeActionProps extends ComProps {}

export default class SwipeActionView extends Component<SwipeActionProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const right = [
      {
        text: 'More',
        onPress: () => console.log('more'),
        style: {backgroundColor: 'orange', color: 'white'},
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: {backgroundColor: 'red', color: 'white'},
      },
    ];
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        style: {backgroundColor: 'blue', color: 'white'},
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        style: {backgroundColor: 'green', color: 'white'},
      },
    ];
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="左右滑动，显示按钮" style={styles.card}>
              <SwipeAction
                autoClose
                style={{backgroundColor: 'transparent'}}
                right={right}
                left={left}
                onOpen={() => console.log('open')}
                onClose={() => console.log('close')}>
                <View style={styles.view}>
                  <Text>滑动</Text>
                </View>
              </SwipeAction>
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
    paddingBottom: 30,
  },
  view: {
    height: 30,
  },
});
