import React from 'react';
import {SafeAreaView,} from 'react-native';
import {Tile} from '@uiw/react-native';
import Layout from '../../Layout';
const TileDemo = (props: any) => {
  const {Header} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
        <Tile
          // imageSrc={require('../../image/tileBG.png')}
          imageSrc={{uri: 'https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg'}}
          title="ccccccccc"
          titleStyle={{color: '#fff', fontSize: 24, textAlign:'center'}}
          icon={{name: 'uiw', size: 26}}
        />
    </SafeAreaView>
  );
};
export default TileDemo;
