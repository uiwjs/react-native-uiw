import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Layout, {Container} from '../../Layout';
import {Rating, Icon} from '@uiw/react-native';
import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

export interface IndexProps extends ComProps {}
export interface IndexState {
  visible: boolean;
}

export default class Index extends Component<IndexProps, IndexState> {
  static state: IndexState;
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  onCancel = () => {
    this.setState({visible: false});
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <View style={styles.divider} />
            <Rating
              defaultRating={2}
              resultRating={10}
              icon={{
                unactived: <Icon name="star-off" />,
                actived: <Icon name="star-on" />,
              }}
              onPress={console.log}
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
    marginVertical: 10,
  },
});
