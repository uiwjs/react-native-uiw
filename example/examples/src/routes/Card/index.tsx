import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {Card} from '@uiw/react-native';
import Layout from '../../Layout';
const CardDemo = (props: any) => {
  const {Header} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <Card
        title="我是标题"
        showDriver={true}
        borderRadius={0}
        // onLongPress={() => {}}
      >
        <View>
          <Image
            source={{
              uri: 'https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg',
            }}
            style={{height: 150}}
          />
        </View>
      </Card>
    </SafeAreaView>
  );
};
export default CardDemo;
