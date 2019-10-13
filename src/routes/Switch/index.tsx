import React, { Fragment } from 'react';
import { Text, View, Switch as SwitchDefault } from 'react-native';
import { Spacing, WingBlank, Switch } from '../../../components';
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
      checked: true,
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
            <Card title={`自带Swith(已过时，将很快删除。)展示，value=${this.state.checked}`} bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}>
              <WingBlank>
                <SwitchDefault value={this.state.checked} onValueChange={this.handleChange} />
                <SwitchDefault value={this.state.checked} onValueChange={this.handleChange} />
                <SwitchDefault disabled value={this.state.checked} onValueChange={this.handleChange} />
              </WingBlank>
            </Card>
            <Card title={`uiw Switch 实例展示，value=${this.state.checked}`} bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}>
              <WingBlank>
                <Switch value={this.state.checked} onValueChange={this.handleChange} />
              </WingBlank>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
