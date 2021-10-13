import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SwipeAction} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface SwipeActionProps extends ComProps {}

export default class SwipeActionView extends Component<SwipeActionProps> {
  newRef: any;
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const right = [
      {
        text: '查看备注',
        color: 'orange',
        x: 250,
        onPress: () => {
          this.newRef?.swipeable?.close();
        },
      },
      {
        text: '删除',
        color: 'red',
        x: 400,
        onPress: () => {
          this.newRef?.swipeable?.close();
        },
      },
      {
        text: '不显示',
        color: 'green',
        x: 400,
        onPress: () => {
          this.newRef?.swipeable?.close();
        },
      },
    ];
    const left = [
      {
        text: '左侧查看',
        color: 'pink',
        onPress: () => {
          this.newRef?.swipeable?.close();
        },
      },
    ];
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="左右滑动，显示按钮" style={styles.card}>
              <SwipeAction
                ref={ref => (this.newRef = ref)}
                right={right}
                left={left}
                onSwipeableRightOpen={() => console.log('right')}
                onSwipeableLeftOpen={() => () => console.log('left')}>
                <View style={[styles.view]}>
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
