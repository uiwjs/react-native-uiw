import React from 'react';
import {SafeAreaView} from 'react-native';
import {Tile} from '@uiw/react-native';
import Layout from '../../Layout';
const TileDemo = (props: any) => {
  const {Header, Body} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <Body style={{marginLeft: 16, marginRight: 16}}>
        <Tile
          imageSrc={require('../../image/tileBG.png')}
          // imageSrc={{uri: 'https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg'}}
          imageProps={{resizeMode: 'contain'}}
          containerStyle={{marginTop: 10}}
          imageContainerStyle={{backgroundColor: '#ccc'}}
          title="这是一段标题！"
          titleStyle={{
            fontSize: 38,
            textAlign: 'center',
            paddingTop: 190,
          }}
          caption="这是一段文字说明！"
          captionStyle={{
            fontSize: 22,
            textAlign: 'center',
            paddingHorizontal: 20,
          }}
          iconContainerStyle={{marginTop: 0}}
          titleNumberOfLines={2}
          contentContainerStyle={{height: 320}}
          icon={{name: 'uiw', color: '#333333', size: 38}}
          activeOpacity={0.9}
          onPress={() => console.log('点击事件')}
        />
      </Body>
    </SafeAreaView>
  );
};
export default TileDemo;
