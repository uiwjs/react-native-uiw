import React from 'react';
import {View} from 'react-native';
import {List, Stepper, Pagination, Button} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';

import {ComProps} from '../../routes';

const {Header, Body, Card, Footer} = Layout;

function onChange(value: any) {
  // console.log('changed', value);
}
export interface IndexProps extends ComProps {}
export interface IndexState {
  value: number;
  value1: number;
  value2: number;
}
export default class StepperExample extends React.Component<IndexProps, IndexState> {
  state = {
    value: 0,
    value1: 2,
    value2: 0,
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    // const { value, value1, value2} = this.state
    const size = 'small';
    // 'small' | 'default' | 'large';

    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <View style={{marginLeft: 15}}>
                <Stepper
                  value={this.state.value}
                  onChange={value => {
                    this.setState({value});
                  }}
                />
              </View>
            </Card>

            <Card title="尺寸控制(size: small | default | large)：">
              <View style={{marginLeft: 15}}>
                <Stepper
                  size="small"
                  value={this.state.value}
                  onChange={value => {
                    this.setState({value});
                  }}
                />
              </View>
            </Card>

            <Card title="按钮开启长按(disabledLongPress: boolean)：">
              <View style={{marginLeft: 15}}>
                <Stepper
                  disabledLongPress={true}
                  value={this.state.value2}
                  onChange={value2 => {
                    this.setState({value2});
                  }}
                />
              </View>
            </Card>

            <Card title="自定义宽度(width: number)：">
              <View style={{marginLeft: 15}}>
                <Stepper
                  width={120}
                  value={this.state.value2}
                  onChange={value2 => {
                    this.setState({value2});
                  }}
                />
              </View>
            </Card>

            <Card title="自定义颜色(color: Color)：">
              <View style={{marginLeft: 15}}>
                <Stepper
                  value={this.state.value}
                  color={{
                    color: '#ccc',
                    borderColor: '#999',
                    controlColor: 'red',
                    valueColor: '#000',
                  }}
                  onChange={value => {
                    this.setState({value});
                  }}
                />
              </View>
            </Card>

            <Card title="不禁止输入(disabledInput: boolean)：">
              <View style={{marginLeft: 15}}>
                <Stepper
                  disabledInput={false}
                  value={this.state.value1}
                  onChange={value1 => {
                    this.setState({value1});
                  }}
                />
              </View>
            </Card>

            <Card title="禁止点击(disabled: boolean)：">
              <View style={{marginLeft: 15}}>
                <Stepper
                  disabled={true}
                  disabledInput={false}
                  value={this.state.value1}
                  onChange={value1 => {
                    this.setState({value1});
                  }}
                />
              </View>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
