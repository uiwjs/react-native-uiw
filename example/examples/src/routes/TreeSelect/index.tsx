import React from 'react';
import {TreeSelect} from '@uiw/react-native';
import {View} from 'react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Footer} = Layout;

export interface TreeSelectViewProps extends ComProps {}

export default class TreeSelectDemo extends React.Component<TreeSelectViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const option = [
      {
        label: '北京',
        value: '01',
        children: [
          {
            label: '东城区',
            value: '01-1',
          },
          {
            label: '西城区',
            value: '01-2',
          },
          {
            label: '崇文区',
            value: '01-3',
          },
          {
            label: '宣武区',
            value: '01-4',
          },
        ],
      },
      {
        label: '浙江',
        value: '02',
        children: [
          {
            label: '杭州',
            value: '02-1',
            children: [
              {
                label: '西湖区',
                value: '02-1-1',
              },
              {
                label: '上城区',
                value: '02-1-2',
              },
              {
                label: '江干区',
                value: '02-1-3',
              },
              {
                label: '下城区',
                value: '02-1-4',
              },
            ],
          },
          {
            label: '宁波',
            value: '02-2',
            children: [
              {
                label: 'xx区',
                value: '02-2-1',
              },
              {
                label: 'yy区',
                value: '02-2-2',
              },
            ],
          },
          {
            label: '温州',
            value: '02-3',
          },
          {
            label: '嘉兴',
            value: '02-4',
          },
          {
            label: '湖州',
            value: '02-5',
          },
          {
            label: '绍兴',
            value: '02-6',
          },
        ],
      },
    ];
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <TreeSelect
              defaultValue={['01', '01-1']}
              // activeColor="#fd8a00"
              options={option}
              onChange={(value: any, nodes: any) => {
                console.log(value, nodes);
              }}
            />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
