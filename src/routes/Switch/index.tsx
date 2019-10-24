import React, { Fragment } from 'react';
import { Text, View, Switch as SwitchDefault } from 'react-native';
import { Spacing, WingBlank, Switch, List, Flex } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';

const { Header, Body, Card, Footer } = Layout;

interface SwitchViewProps extends ComProps { }
interface SwitchViewState {
  checked: boolean;
}

export default class SwitchView extends React.Component<SwitchViewProps, SwitchViewState> {
  constructor(props: SwitchViewProps) {
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
                  <Switch checked={this.state.checked} onValueChange={this.handleChange} />
                  <Spacing type="horizontal" />
                  <Switch checked={this.state.checked} onValueChange={this.handleChange} />
                </Flex>
              </WingBlank>
            </Card>
            <Card title={`禁用无法切换，disabled={true}`} bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}>
              <WingBlank>
                <Flex direction="row">
                  <Switch checked={this.state.checked} onValueChange={this.handleChange} disabled />
                  <Spacing type="horizontal" />
                  <Switch checked={this.state.checked} onValueChange={this.handleChange} disabled />
                </Flex>
              </WingBlank>
            </Card>
            <Card title={`列表中展示，不受控组件`} bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            </Card>

            <List flat={false} extra="test">
              <List.Item extra={<Switch />}>Git 版本控制的核心概念</List.Item>
            </List>
            <List flat={false} extra="test">
              <List.Item>Git 版本控制的核心概念</List.Item>
            </List>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
