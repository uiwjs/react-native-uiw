import React from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Footer} = Layout;

export interface BadgeViewProps extends ComProps {}

export default class BadgeView extends React.Component<BadgeViewProps> {
  render() {
    const {route, navigation} = this.props;
    const description = route.params.description;
    const title = route.params.title;
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
                <Picker
                  date={[
                    {label: '1'},
                    {label: '2'},
                    {label: '3'},
                    {label: '4'},
                    {label: '5'},
                    {label: '6'},
                  ]}
                  value={17}
                />
              </View>
              <View style={{width: '50%'}}>
                <Picker
                  onChange={val => {
                    console.log('val: ', val);
                  }}
                  date={[
                    {label: '1'},
                    {label: '2'},
                    {label: '3'},
                    {label: '4'},
                    {label: '5'},
                    {label: '6'},
                  ]}
                  value={17}
                />
              </View>
            </View>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
