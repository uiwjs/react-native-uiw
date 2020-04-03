import React, { Component } from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import Layout, { Container } from '../../Layout';
import { SelectCascader, Button } from '../../../components';
import { CascaderValue } from '../../../components/SelectCascader';
import { ComProps } from '../../typings';
import data from "./city";

const { Header, Body, Card, Footer } = Layout;

export interface SelectCascaderProps extends ComProps {
  
}

export interface IState  {
  visible: boolean
}

export default class SelectCascaderView extends Component<SelectCascaderProps, IState> {
  constructor(props: SelectCascaderProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onChange(val: CascaderValue, label: string) {
    console.log("val-------->", val);
    console.log("label-------->", label);
  }

  onOk = (val: CascaderValue, label: string) => {
    this.setState({visible: false})
    console.log("val-------->", val);
    console.log("label-------->", label);
  }

  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    const { visible } = this.state;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="说明提示" style={styles.card} >
              <Button onPress={() => { this.setState({visible: true}) }}>显示选择器</Button>
              <SelectCascader
                data={data}
                value={["02", "02-2", "02-2-2"]}
                onOk={this.onOk}
                onDismiss={() => {this.setState({visible: false})}}
                onChange={this.onChange}
                visible={visible}
              />
            </Card>

          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  }
})