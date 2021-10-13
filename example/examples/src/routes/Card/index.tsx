import React, {useState, Fragment} from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import {Card, Divider, Loader, Icon} from '@uiw/react-native';
import Layout from '../../Layout';
const CardDemo = (props: any) => {
  const {Header} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;
  const TITLE = 'Welcome to @uiw';
  const [selected, setSelected] = useState(false);
  const [loading, setLoad] = useState(true);
  const basicRender = (
    <Fragment>
      <View
        style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://c-ssl.duitang.com/uploads/item/202004/13/20200413013923_25wds.jpeg',
          }}
          style={{height: 40, width: 40, borderRadius: 40}}
        />
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 16,
              fontWeight: 'bold',
              color: '#20303C',
            }}>
            @uiw/react-native Card
          </Text>
          <Text style={{color: '#808080'}}>3 days ago</Text>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{color: '#20303C'}}>
          Welcome to @uiw/react-native! Title two is a long title that will not
          get cut by default, but can be limited, Title number three, Title
          number four, Title number five!
        </Text>
      </View>
      <Loader loading={loading}>
        <Image
          onLoad={() => setLoad(false)}
          source={{
            uri: 'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d',
          }}
          style={{height: 200, marginTop: 10}}
        />
      </Loader>
    </Fragment>
  );
  return (
    <ScrollView style={{flex: 1}}>
      <Header title={title} description={description} />
      <Header description={'基本使用'} />
      <Card>
        {basicRender}
        <Card.Actions
          actions={[
            {
              text: '点赞',
              icon: <Icon name="like-o" size={16} color="#5847FF" />,
              onPress: (e: any, index: number) => {
                console.log('e', e, 'index', index);
              },
            },
            {
              text: '分享',
              icon: <Icon name="share" size={16} color="#5847FF" />,
              onPress: (e: any, index: number) => {
                console.log('e', e, 'index', index);
              },
            },
          ]}
        />
      </Card>
      <Divider />
      <Header description={'带标题下划线圆角卡片'} />
      <Card borderRadius={12}>
        <Card.Title title="@uiw/react-native" />
        {basicRender}
      </Card>
      <Divider />
      <Header description={'可点击选中卡片'} />
      <Card
        selected={selected}
        borderRadius={12}
        onPress={() => {
          setSelected(!selected);
        }}>
        {basicRender}
      </Card>
    </ScrollView>
  );
};
export default CardDemo;
