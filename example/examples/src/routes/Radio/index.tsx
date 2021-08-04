import React from 'react';
import {Spacing, Radio} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

export interface RadioViewProps extends ComProps {}
export interface RadioViewState {
  checked: boolean;
  value: number | null;
}

export default class RadioView extends React.Component<
  RadioViewProps,
  RadioViewState
> {
  constructor(props: RadioViewProps) {
    super(props);
    this.state = {
      checked: true,
      value: null,
    };
  }
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const radioData = [
      {label: '四川菜', value: 1},
      {label: '湖北菜', value: 2},
      {label: '西北菜', value: 3},
      {label: '新疆菜', value: 4},
      {label: '东北菜', value: 5},
    ];
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例">
              <Radio>所有人可见</Radio>
              <Spacing />
              <Radio>超级管理员</Radio>
            </Card>
            <Card title={`受控组件 checked: ${this.state.checked}`}>
              <Radio
                checked={this.state.checked}
                onPress={() => {
                  this.setState({checked: !this.state.checked});
                }}>
                所有人可见
              </Radio>
            </Card>
            <Card title={`单选 value: ${this.state.value}`}>
              {radioData.map((item, idx) => {
                return (
                  <Radio
                    key={idx}
                    checked={this.state.value === item.value}
                    onPress={() => {
                      this.setState({value: item.value});
                    }}>
                    {item.label}
                  </Radio>
                );
              })}
            </Card>
            <Card title="禁用 checked?: boolean;">
              <Radio disabled>所有人可见</Radio>
              <Spacing />
              <Radio disabled checked={true}>
                超级管理员
              </Radio>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
