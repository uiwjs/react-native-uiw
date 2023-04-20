import React from 'react';
import {View, ScrollView} from 'react-native';
import {Tree, Button, Text, Modal} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Card} = Layout;

export interface TreeViewProps extends ComProps {}

export default class TreeDemo extends React.Component<TreeViewProps> {
  state = {
    visible: false,
    value: undefined,
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const option: any = [
      {
        label: '一栋',
        value: '01',
        children: [
          {
            label: '一单元',
            value: '01-1',
            children: [{label: '一层', value: '01-1-1', children: [{label: '101', value: '01-1-1-1'}]}],
          },
          {
            label: '一单元1',
            value: '01-2',
          },
          {
            label: '一单元2',
            value: '01-3',
          },
        ],
      },
      {
        label: '二栋',
        value: '02',
        children: [
          {
            label: '二单元',
            value: '02-1',
          },
          {
            label: '二单元1',
            value: '02-2',
          },
          {
            label: '二单元2',
            value: '02-3',
          },
        ],
      },
    ];

    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <React.Fragment>
            <Body style={{paddingLeft: 16, paddingRight: 16}}>
              <Card title="基本使用">
                <Button onPress={() => this.setState({visible: true})}>打开</Button>
                <Modal visible={this.state.visible} placement="bottom" onClosed={() => this.setState({visible: false})}>
                  <ScrollView style={{height: 500}}>
                    <Tree
                      treeData={option}
                      defaultExpandAll
                      onCheck={(value: any) => {
                        console.log('onCheck', value);
                      }}
                    />
                  </ScrollView>
                </Modal>
              </Card>
              <Card title="树形选择">
                <Tree
                  treeData={option}
                  defaultExpandAll
                  onCheck={(value: any) => {
                    console.log('onCheck', value);
                  }}
                />
              </Card>
            </Body>
          </React.Fragment>
        </Layout>
      </Container>
    );
  }
}
