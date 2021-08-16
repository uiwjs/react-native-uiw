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
          imageSrc={require('../../image/tileBG.png')}
          title="ccccccccc"
          titleStyle={{color: '#fff', fontSize: 24, textAlign:'center'}}
        />
    </SafeAreaView>
  );
};
export default TileDemo;
