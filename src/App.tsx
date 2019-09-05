import React, { Component, Fragment } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { Button, Spacing } from '../components';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{ paddingHorizontal: 16 }}>
            <Button>default</Button>
            <Spacing />
            <Button disabled>default disabled</Button>
            <Spacing />
            <Button type="primary">primary</Button>
            <Spacing />
            <Button type="primary" disabled>primary disabled</Button>
            <Spacing />
            <Button type="warning">warning</Button>
            <Spacing />
            <Button type="warning" disabled>warning disabled</Button>
            <Spacing />
            <Button type="warning" loading>warning</Button>
            <Spacing />
            <Button type="warning" loading disabled>警告按钮</Button>
            <Spacing />
            <Button loading>默认按钮</Button>
            <Spacing />
            <Button loading disabled>默认按钮 禁用</Button>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}