import React from 'react';
import {SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';
import {TransitionImage} from '@uiw/react-native';
import Layout from '../../Layout';
const TransitionImageDemo = (props: any) => {
  const [state, setState] = React.useState<any>({
    url1: 'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d',
    url3: undefined,
  });
  const {Header, Body, Card} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <Body style={{paddingLeft: 16, paddingRight: 16}}>
        <Card title="基础用法">
          <TransitionImage
            source={{uri: state.url1}}
            style={{width: 100, height: 100}}
            PlaceholderContent={<ActivityIndicator />}
            transition={true}
            transitionDuration={1000}
            onPress={() => console.log('点击图片回调事件')}
            onLongPress={() => console.log('长按组件回调事件')}
          />
        </Card>
        <Card title="加载失败">
          <TransitionImage
            source={{uri: state.url3}}
            style={{width: 100, height: 100}}
            PlaceholderContent={<ActivityIndicator />}
            transition={true}
            transitionDuration={1000}
          />
        </Card>
      </Body>
    </SafeAreaView>
  );
};
export default TransitionImageDemo;
