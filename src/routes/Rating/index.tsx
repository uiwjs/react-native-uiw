import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Layout, { Container } from '../../Layout';
import { Rating, Icon } from '../../../components';
import { ComProps } from '../../typings';
import { Text } from 'react-native-svg';

const { Header, Body, Card, Footer } = Layout;

export interface IndexProps extends ComProps { }
export interface IndexState {
  visible: boolean
}

export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState
  constructor(props: IndexProps) {
    super(props)
    this.state = {
      visible: false
    }
  }
  onCancel = () => {
    this.setState({ visible: false })
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
            <Rating
              defaultRating={5}
              // count={10}
              icon={[<Icon name="star-off" />, <Icon name="star-on" />]}
              // icon={["star-off", "star-on"]}
            />
            <View style={styles.divider} />
            <Rating />

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
  }
});
