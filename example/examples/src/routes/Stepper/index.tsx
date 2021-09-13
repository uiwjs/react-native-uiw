/* tslint:disable:no-console */
import React from 'react';
import {View} from 'react-native';
import {List, Stepper} from '@uiw/react-native';
import Layout from '../../Layout';
const {Header} = Layout;

function onChange(value: any) {
  console.log('changed', value);
}

export default class StepperExample extends React.Component<any, any> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;

    const readOnly = (
      <Stepper
        key="1"
        max={999}
        min={1}
        readOnly={false}
        defaultValue={888}
        onChange={onChange}
      />
    );
    return (
      <View style={{flex: 1}}>
        <Header title={title} description={description} />
        <List>
          <List.Item
            extra={
              <Stepper
                key="0"
                max={9999}
                min={0}
                defaultValue={3}
                onChange={onChange}
              />
            }>
            请选择您要购买iPhone 12 的数量：
          </List.Item>
          <List.Item extra={readOnly}>您当前选择的数量为: </List.Item>
          <List.Item
            extra={
              <Stepper
                key="2"
                disabled
                max={100}
                min={0}
                defaultValue={0}
                onChange={onChange}
              />
            }>
            暂无库存：
          </List.Item>
        </List>
      </View>
    );
  }
}
