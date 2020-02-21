import React, { Component } from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import Layout, { Container } from '../../Layout';
import { SelectCascader, Button } from '../../../components';
import { ComProps } from '../../typings';
import city from "./city.json";

const { Header, Body, Card, Footer } = Layout;

export interface SelectCascaderProps extends ComProps {
  
}

export interface IState  {
  visible: boolean;
  value: number[]
  
}

export default class SelectCascaderView extends Component<SelectCascaderProps, IState> {
  constructor(props: SelectCascaderProps) {
    super(props);
    this.state = {
      visible: false,
      value: [0, 0, 0]
    };
  }

  onChange(val: any) {
    console.log("array-------->", val);
  }

  onSelectChange(row: any, column: any) {
    console.log("第几列-------->", row);
    console.log("第几行-------->", column);
  }

  onOk(e: any, value: any) {
    this.setState({ visible: false, value: value });
    console.log("ok-------->", e);
  }

  onDismiss(e: any) {
    this.setState({ visible: false });
    console.log("dismiss-------->", e);
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
            <Card title="说明提示" style={styles.card} >
              <Button onPress={() => {  this.setState({ visible: !this.state.visible })}}>点击显示</Button>
              <SelectCascader
               // @ts-ignore
                visible={this.state.visible}
                data={city}
                cols={3}
                okText="确认"
                dismissText="取消"
                title="选择地区"
                value={this.state.value}
                onChange={(val: any) => this.onChange(val)}
                onSelectChange={(row: any, column: any) => this.onSelectChange(row, column)}
                onOk={(e: GestureResponderEvent, value: any) => this.onOk(e, value)}
                onDismiss={(e: GestureResponderEvent) => this.onDismiss(e)}
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