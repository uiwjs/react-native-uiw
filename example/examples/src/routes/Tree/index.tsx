import React from 'react';
import {Tree, DragDrawer, Icon} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body} = Layout;

export interface TreeViewProps extends ComProps {}

export default class TreeDemo extends React.Component<TreeViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    const option: any = [
      {
        title: '一栋',
        key: '01',
        children: [
          {
            title: '一单元',
            key: '01-1',
            children: [{title: '一层', key: '01-1-1', children: [{title: '101', key: '01-1-1-1'}]}],
          },
          {
            title: '一单元1',
            key: '01-2',
          },
          {
            title: '一单元2',
            key: '01-3',
          },
        ],
      },
      {
        title: '二栋',
        key: '02',
        children: [
          {
            title: '二单元',
            key: '02-1',
          },
          {
            title: '二单元1',
            key: '02-2',
          },
          {
            title: '二单元2',
            key: '02-3',
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
              {/* <Tree
                defaultValue={['01', '01-1', '01-1-1', '01-1-1-1']}
                // activeColor="red"
                options={option}
                onChange={(key: any, nodes: any) => {
                  // console.log(key, nodes);
                }}
              /> */}
              <Tree
                treeData={option}
                defaultExpandAll
                onCheck={e => {
                  console.log(e);
                }}
              />
            </Body>
          </React.Fragment>
        </Layout>
      </Container>
    );
  }
}
