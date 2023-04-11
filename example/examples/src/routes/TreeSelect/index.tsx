import React from 'react';
import {TreeSelect, DragDrawer, Icon} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body} = Layout;

export interface TreeSelectViewProps extends ComProps {}

export default class TreeSelectDemo extends React.Component<TreeSelectViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const option = [
      {
        label: '2月23日(今天)',
        value: '01',
        children: [
          {
            label: '9:00-10:00',
            value: '01-1',
            children: [{label: '00:00', value: '01-1-1'}],
          },
          {
            label: '10:00-11:00',
            value: '01-2',
          },
          {
            label: '11:00-12:00',
            value: '01-3',
          },
        ],
      },
      {
        label: '2月24日(明天)',
        value: '02',
        children: [
          {
            label: '9:00-10:00',
            value: '02-1',
          },
          {
            label: '10:00-11:00',
            value: '02-2',
          },
          {
            label: '11:00-12:00',
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
              <TreeSelect
                defaultValue={['01', '01-1', '01-1-1']}
                // activeColor="red"
                options={option}
                onChange={(value: any, nodes: any) => {
                  console.log(value, nodes);
                }}
              />
            </Body>
          </React.Fragment>
        </Layout>
      </Container>
    );
  }
}
