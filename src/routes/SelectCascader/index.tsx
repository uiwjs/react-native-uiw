import React, { Component } from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import Layout, { Container } from '../../Layout';
import { SelectCascader, Button } from '../../../components';
import { ComProps } from '../../typings';
import data from "./city";

const { Header, Body, Card, Footer } = Layout;

export interface SelectCascaderProps extends ComProps {
  
}

export interface IState  {
  
}

export default class SelectCascaderView extends Component<SelectCascaderProps, IState> {
  constructor(props: SelectCascaderProps) {
    super(props);
    this.state = {
    };
  }

  onChange(val: any, label: string) {
    console.log("val-------->", val);
    console.log("label-------->", label);
  }

  onDismiss(e: any) {

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
              <SelectCascader
                data={data}
                value={["02", "02-1", "02-1-1"]}
                onChange={this.onChange}
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