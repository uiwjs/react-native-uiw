import React, { Fragment } from 'react';
import { Text, View, Switch as SwitchDefault } from 'react-native';
import { Spacing, WingBlank, Switch, Flex } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';

const { Header, Body, Card, Footer } = Layout;

interface ExampleProps extends ComProps { }
interface ExampleState {
  checked: boolean;
}

export default class Example extends React.Component<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props)
    this.state = {
      checked: false,
    }
  }
  handleChange = (checked: boolean) =>{
    this.setState({ checked });
  }
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title={`实例展示，value=${this.state.checked}`} bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}>
              <WingBlank>
                <Flex direction="row">
                  <Switch value={this.state.checked} onValueChange={this.handleChange} />
                  <Spacing type="horizontal" />
                  <Switch value={this.state.checked} onValueChange={this.handleChange} />
                </Flex>
              </WingBlank>
            </Card>
            <Card title={`禁用无法切换，disabled={true}`} bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}>
              <WingBlank>
                <Flex direction="row">
                  <Switch value={this.state.checked} onValueChange={this.handleChange} disabled />
                  <Spacing type="horizontal" />
                  <Switch value={this.state.checked} onValueChange={this.handleChange} disabled />
                </Flex>
              </WingBlank>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
