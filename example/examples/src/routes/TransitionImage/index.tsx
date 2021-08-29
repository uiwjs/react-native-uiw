import React from 'react';
import {SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';
import {TransitionImage} from '@uiw/react-native';
import Layout from '../../Layout';
const TransitionImageDemo = (props: any) => {
  const {Header} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <TransitionImage
        source={{
          uri: 'https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg',
        }}
        style={{width: 200, height: 200}}
        PlaceholderContent={<ActivityIndicator />}
        placeholderStyle={{backgroundColor: 'red'}}
        containerStyle={{backgroundColor: '#eee'}}
        transition={true}
        transitionDuration={1000}
        onPress={() => console.log('点击图片回调事件')}
        onLongPress={() => console.log('长按组件回调事件')}
      />
    </SafeAreaView>
  );
};
export default TransitionImageDemo;
