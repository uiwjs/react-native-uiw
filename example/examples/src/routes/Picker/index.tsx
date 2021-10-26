import React from 'react';
import {Text, View} from 'react-native';
import {Picker, Button} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Footer} = Layout;

export interface BadgeViewProps extends ComProps {}

export default class BadgeView extends React.Component<BadgeViewProps> {
  state = {
    value: 1,
  };
  render() {
    const {route, navigation} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({label: i});
    }
    return (
      <Container scrollEnabled={false}>
        <Layout>
          <Header title={title} description={description} />
          <Body scrollEnabled={false}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#fff',
                marginTop: 20,
              }}>
              <View style={{width: '50%'}}>
                <Picker data={arr as any} value={17} />
              </View>
              <View style={{width: '50%'}}>
                <Picker
                  onChange={val => {
                    console.log('val: ', val);
                  }}
                  data={arr as any}
                  value={this.state.value}
                />
              </View>
            </View>
            <Button
              onPress={() => {
                this.setState({value: this.state.value + 1});
              }}>
              控制第二列value
            </Button>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
