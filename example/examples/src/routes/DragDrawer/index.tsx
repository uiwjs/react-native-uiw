import React, {useState, Fragment} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {DragDrawer, Card, Button} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';
const {Header, Body, Footer} = Layout;

export interface DragDrawerViewProps extends ComProps {}
export default function DragDrawerView({route}: DragDrawerViewProps) {
  const description = route.params.description;
  const title = route.params.title;
  return (
    <Fragment>
      <DragDrawer>
        <View>
          <Text>按住图标可上下拖曳抽屉</Text>
        </View>
      </DragDrawer>
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="下边抽屉可上下拖曳">
              <Text>下边抽屉可上下拖曳</Text>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    </Fragment>
  );
}
