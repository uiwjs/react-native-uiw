import React, {useState, Fragment} from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import {DragDrawer, Card, Icon, List} from '@uiw/react-native';
import Layout, {Container} from '../../Layout';
import {ComProps} from '../../routes';
const {Header, Body, Footer} = Layout;
const data: Array<number> = [];
for (let i = 1; i < 21; i++) {
  data.push(i);
}
export interface DragDrawerViewProps extends ComProps {}
export default function DragDrawerView({route}: DragDrawerViewProps) {
  const description = route.params.description;
  const title = route.params.title;

  const renderItem = ({item}: ListRenderItemInfo<Number>) => (
    <View
      style={{borderWidth: 0.5, padding: 10, borderColor: '#D9D9D9'}}
      key={item + ''}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>{item}</Text>
    </View>
  );
  return (
    <Fragment>
      <DragDrawer
        drawerHeight={350}
        // drawerBackgroundColor='lightblue' //抽屉背景
        // icon={<Icon name="smile" fill="red" size={30} />} //自定义拖曳图标
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item + ''}
        />
      </DragDrawer>
      <Container>
        <Layout>
          <Header title={title} description={description} />
        </Layout>
      </Container>
    </Fragment>
  );
}
