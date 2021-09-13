import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {CardCollapse} from '@uiw/react-native';
import Layout from '../../Layout';
import map from 'lodash/map';

const contents = [
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d',
];

const CardCollapseDemo = (props: any) => {
  const {Header} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  const renderItem = (_: string, index: number) => {
    return (
      <View key={index} style={{padding: 12}}>
        <Image source={{uri: contents[index]}} style={{height: 180}} />
      </View>
    );
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Header title={title} description={description} />
      <Header description={'基本使用'} />
      <CardCollapse isCollapsed={false} disablePresses={false}>
        {map(contents, (item, index) => {
          return renderItem(item, index);
        })}
      </CardCollapse>
    </ScrollView>
  );
};
export default CardCollapseDemo;
