import React from 'react';
import {DatePicker, Button} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Footer} = Layout;

export interface BadgeViewProps extends ComProps {}

export default class BadgeView extends React.Component<BadgeViewProps> {
  state = {
    visible: false,
  };
  render() {
    const {route, navigation} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container scrollEnabled={false}>
        <Layout>
          <Header title={title} description={description} />
          <Body scrollEnabled={false}>
            <Button
              onPress={() => {
                this.setState({visible: true});
              }}>
              年月日
            </Button>
            <DatePicker
              visible={this.state.visible}
              onOk={() => this.setState({visible: false})}
              onClosed={() => this.setState({visible: false})}
              precision="second"
            />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
