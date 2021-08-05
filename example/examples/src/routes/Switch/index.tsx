import React from 'react';
import {Spacing, WingBlank, Switch, List, Flex} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

interface SwitchViewProps extends ComProps {}
interface SwitchViewState {
  checked: boolean;
}

export default class SwitchView extends React.Component<
  SwitchViewProps,
  SwitchViewState
> {
  constructor(props: SwitchViewProps) {
    super(props);
    this.state = {
      checked: true,
    };
  }
  handleChange = (checked: boolean) => {
    this.setState({checked});
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
            <Card
              title={`实例展示，value=${this.state.checked}`}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Flex direction="row">
                  <Switch
                    checked={this.state.checked}
                    onValueChange={this.handleChange}
                  />
                  <Spacing type="horizontal" />
                  <Switch
                    checked={this.state.checked}
                    onValueChange={this.handleChange}
                  />
                </Flex>
              </WingBlank>
            </Card>
            <Card
              title={'禁用无法切换，disabled={true}'}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Flex direction="row">
                  <Switch
                    checked={this.state.checked}
                    onValueChange={this.handleChange}
                    disabled
                  />
                  <Spacing type="horizontal" />
                  <Switch
                    checked={this.state.checked}
                    onValueChange={this.handleChange}
                    disabled
                  />
                </Flex>
              </WingBlank>
            </Card>
            <Card
              title={'列表中展示，不受控组件'}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}
            />
            <List
              flat={false}
              extra={<Switch style={{position: 'absolute', right: 0}} />}>
              <List.Item
                extra={
                  <Switch
                    color="red"
                    checked
                    style={{position: 'absolute', right: 0}}
                  />
                }>
                自动设置
              </List.Item>
              <List.Item
                extra={
                  <Switch
                    color="#2EA3F4"
                    checked
                    style={{position: 'absolute', right: 0}}
                  />
                }>
                24小时制
              </List.Item>
              <List.Item>12小时制</List.Item>
            </List>
            <Spacing />
            <Card
              title={'设置颜色，color|trackStyle|thumbColor'}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Flex direction="row">
                  <Switch thumbColor="#ffe9a6" />
                  <Spacing type="horizontal" />
                  <Switch
                    trackStyle={{backgroundColor: 'red', borderColor: 'red'}}
                  />
                  <Spacing type="horizontal" />
                  <Switch checked={true} color="#393E48" />
                </Flex>
              </WingBlank>
            </Card>
            <Card
              title={"尺寸大小，size?: 'small' | 'default' | 'large';"}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Flex direction="row">
                  <Switch size="small" />
                  <Spacing type="horizontal" />
                  <Switch />
                  <Spacing type="horizontal" />
                  <Switch size="large" />
                </Flex>
              </WingBlank>
            </Card>
            <Card
              title={'尺寸大小，通过设置高宽来定制尺寸'}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Flex direction="row">
                  <Switch style={{height: 23, width: 34}} />
                  <Spacing type="horizontal" />
                  <Switch style={{height: 28, width: 42}} />
                  <Spacing type="horizontal" />
                  <Switch />
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
