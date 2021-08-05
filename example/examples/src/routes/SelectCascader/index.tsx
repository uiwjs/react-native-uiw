import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Layout, {Container} from '../../Layout';
import {SelectCascader, SelectCascaderValue, Button} from '@uiw/react-native';
import {ComProps} from '../../routes';
import data from './city';

const {Header, Body, Card, Footer} = Layout;

export interface SelectCascaderProps extends ComProps {}

export interface IState {
  visible: boolean;
}

export default class SelectCascaderView extends Component<
  SelectCascaderProps,
  IState
> {
  constructor(props: SelectCascaderProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onChange(val: SelectCascaderValue, label: string) {
    console.log('val-------->', val);
    console.log('label-------->', label);
  }

  onOk = (val: SelectCascaderValue, label: string) => {
    this.setState({visible: false});
    console.log('val-------->', val);
    console.log('label-------->', label);
  };

  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const {visible} = this.state;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="说明提示" style={styles.card}>
              <Button
                onPress={() => {
                  this.setState({visible: true});
                }}>
                显示选择器
              </Button>
              <SelectCascader
                data={data}
                value={['02', '02-2', '02-2-2']}
                onOk={this.onOk}
                onDismiss={() => {
                  this.setState({visible: false});
                }}
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
  },
});
