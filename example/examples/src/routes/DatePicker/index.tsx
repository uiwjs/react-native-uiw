import React from 'react';
import {View} from 'react-native';
import {DatePicker, Button, Text} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Footer, Card} = Layout;

export interface BadgeViewProps extends ComProps {}

export default class BadgeView extends React.Component<BadgeViewProps> {
  state = {
    visible: false,
    value: undefined,
    formatDate: undefined,
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
            <Card title="基本使用">
              <Button onPress={() => this.setState({visible: true})}>打开</Button>
              <View>
                <Text color="text">{this.state.formatDate}</Text>
              </View>
              <DatePicker
                title="请选择日期"
                mode="datetime"
                format="YYYY-MM-DD HH:mm:ss"
                visible={this.state.visible}
                onClosed={() => this.setState({visible: false})}
                value={this.state.value}
                onChange={(value, formatDate) => {
                  this.setState({value: value, formatDate: formatDate});
                }}
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
